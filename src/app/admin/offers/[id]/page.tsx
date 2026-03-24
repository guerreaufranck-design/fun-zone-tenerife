'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, Save, Upload, Trash2, GripVertical, Loader2, CheckCircle, XCircle } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { createClient } from '@/lib/supabase/client';
import type { Offer, OfferPricing, OfferMedia } from '@/lib/supabase/types';

const locales = ['en', 'es', 'fr', 'de', 'nl', 'it'] as const;
const localeLabels: Record<string, string> = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  nl: 'Dutch',
  it: 'Italian',
};

type MultilingualState = Record<string, string>;

const emptyMultilingual = (): MultilingualState =>
  Object.fromEntries(locales.map((l) => [l, '']));

interface ApiOffer extends Offer {
  offer_pricing: OfferPricing[];
  slot_interval_minutes?: number;
}

function SortableMediaItem({
  item,
  onRemove,
}: {
  item: OfferMedia;
  onRemove: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 'auto' as const,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-border/20"
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        className="touch-none cursor-grab active:cursor-grabbing shrink-0 p-1 rounded hover:bg-secondary/50"
      >
        <GripVertical className="h-4 w-4 text-muted-foreground" />
      </button>
      <div className="w-16 h-16 bg-secondary/50 rounded-md flex items-center justify-center text-xs text-muted-foreground shrink-0 overflow-hidden">
        {item.type === 'image' ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.url}
            alt=""
            className="w-full h-full object-cover rounded-md"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.textContent = item.type;
            }}
          />
        ) : (
          item.type
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{item.url.split('/').pop()}</p>
        <p className="text-xs text-muted-foreground">Position: {(item.sort_order ?? 0) + 1}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-destructive hover:text-destructive shrink-0"
        onClick={() => onRemove(item.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function EditOfferPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [pageLoading, setPageLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [tab, setTab] = useState('details');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Details state
  const [name, setName] = useState<MultilingualState>(emptyMultilingual());
  const [description, setDescription] = useState<MultilingualState>(emptyMultilingual());
  const [shortDesc, setShortDesc] = useState<MultilingualState>(emptyMultilingual());
  const [duration, setDuration] = useState('60');
  const [minPlayers, setMinPlayers] = useState('1');
  const [maxPlayers, setMaxPlayers] = useState('20');
  const [laneType, setLaneType] = useState('axe');
  const [includes, setIncludes] = useState('');
  const [ageMin, setAgeMin] = useState('16');
  const [slotInterval, setSlotInterval] = useState('60');
  const [seoTitle, setSeoTitle] = useState<MultilingualState>(emptyMultilingual());
  const [seoDescription, setSeoDescription] = useState<MultilingualState>(emptyMultilingual());

  // Pricing state
  const [pricing, setPricing] = useState<{ players: number; price_cents: number }[]>([]);

  // Media state
  const [media, setMedia] = useState<OfferMedia[]>([]);

  // DnD sensors
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Clear message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const fetchMedia = useCallback(async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('offer_media')
      .select('*')
      .eq('offer_id', id)
      .order('sort_order');

    if (error) {
      console.error('Error fetching media:', error);
      return;
    }
    setMedia((data as OfferMedia[]) || []);
  }, [id]);

  // Fetch offer data on mount
  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        // Fetch offers from API (includes pricing)
        const res = await fetch('/api/admin/offers');
        if (!res.ok) throw new Error(`Failed to fetch offers (${res.status})`);
        const allOffers: ApiOffer[] = await res.json();

        const offer = allOffers.find((o) => o.id === id);
        if (!offer) {
          setMessage({ type: 'error', text: 'Offer not found' });
          setPageLoading(false);
          return;
        }

        // Populate form fields
        const toMultilingual = (val: Record<string, string> | null | undefined): MultilingualState => {
          const result = emptyMultilingual();
          if (val) {
            for (const locale of locales) {
              result[locale] = val[locale] || '';
            }
          }
          return result;
        };

        setName(toMultilingual(offer.title as Record<string, string>));
        setDescription(toMultilingual(offer.description as Record<string, string>));
        setShortDesc(toMultilingual(offer.short_desc as Record<string, string>));
        setDuration(String(offer.duration_minutes));
        setMinPlayers(String(offer.min_players));
        setMaxPlayers(String(offer.max_players));
        setLaneType(offer.lane_type);
        setIncludes(Array.isArray(offer.includes) ? offer.includes.join(', ') : '');
        setAgeMin(offer.age_min !== null ? String(offer.age_min) : '');
        setSlotInterval(String(offer.slot_interval_minutes ?? 60));
        setSeoTitle(toMultilingual(offer.seo_title as Record<string, string>));
        setSeoDescription(toMultilingual(offer.seo_description as Record<string, string>));

        // Populate pricing (sorted by players)
        const offerPricing = (offer.offer_pricing || [])
          .map((p) => ({ players: p.players, price_cents: p.price_cents }))
          .sort((a, b) => a.players - b.players);
        setPricing(offerPricing);

        // Fetch media separately via Supabase client
        await fetchMedia();
      } catch (err) {
        console.error('Error fetching offer data:', err);
        setMessage({
          type: 'error',
          text: err instanceof Error ? err.message : 'Failed to load offer data',
        });
      } finally {
        setPageLoading(false);
      }
    }

    fetchData();
  }, [id, fetchMedia]);

  // Sync pricing rows when minPlayers or maxPlayers change
  useEffect(() => {
    if (pageLoading) return; // Don't run during initial load

    const min = parseInt(minPlayers) || 1;
    const max = parseInt(maxPlayers) || 20;
    if (min > max || min < 1) return;

    setPricing((prev) => {
      // Build a map of existing prices by player count
      const priceMap = new Map<number, number>();
      for (const p of prev) {
        priceMap.set(p.players, p.price_cents);
      }

      // Generate new pricing array for the full min→max range
      const newPricing: { players: number; price_cents: number }[] = [];
      for (let i = min; i <= max; i++) {
        // Keep existing price if available, otherwise find nearest or default to 0
        let price = priceMap.get(i);
        if (price === undefined) {
          // Find closest existing price (prefer lower player count)
          const existing = prev.filter((p) => p.players <= i).sort((a, b) => b.players - a.players);
          price = existing.length > 0 ? existing[0].price_cents : (prev.length > 0 ? prev[prev.length - 1].price_cents : 0);
        }
        newPricing.push({ players: i, price_cents: price });
      }

      return newPricing;
    });
  }, [minPlayers, maxPlayers, pageLoading]);

  function updateMultilingual(
    setter: React.Dispatch<React.SetStateAction<MultilingualState>>,
    locale: string,
    value: string
  ) {
    setter((prev) => ({ ...prev, [locale]: value }));
  }

  function updatePrice(players: number, eurValue: string) {
    const cents = Math.round(parseFloat(eurValue || '0') * 100);
    setPricing((prev) =>
      prev.map((p) => (p.players === players ? { ...p, price_cents: cents } : p))
    );
  }

  async function removeMedia(mediaId: string) {
    try {
      const res = await fetch('/api/admin/upload', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mediaId }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Delete failed');
      }
      setMedia((prev) => prev.filter((m) => m.id !== mediaId));
      setMessage({ type: 'success', text: 'Media deleted' });
    } catch (err) {
      setMessage({ type: 'error', text: `Failed to delete media: ${err instanceof Error ? err.message : 'Unknown error'}` });
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const nextSortOrder = media.length > 0 ? Math.max(...media.map((m) => m.sort_order ?? 0)) + 1 : 0;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('offerId', id);
      formData.append('mediaType', file.type.startsWith('video/') ? 'video' : 'image');
      formData.append('sortOrder', String(nextSortOrder));

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Upload failed (${res.status})`);
      }

      // Refresh media list
      await fetchMedia();
      setMessage({ type: 'success', text: 'Media uploaded successfully' });
    } catch (err) {
      setMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Upload failed',
      });
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }

  async function handleSave() {
    setSaving(true);
    setMessage(null);

    try {
      // 1. Update offer fields via PUT API
      const includesArray = includes
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

      const offerPayload = {
        title: name,
        description,
        short_desc: shortDesc,
        duration_minutes: parseInt(duration, 10),
        min_players: parseInt(minPlayers, 10),
        max_players: parseInt(maxPlayers, 10),
        lane_type: laneType,
        includes: includesArray,
        age_min: ageMin ? parseInt(ageMin, 10) : null,
        seo_title: seoTitle,
        seo_description: seoDescription,
        slot_interval_minutes: parseInt(slotInterval, 10),
      };

      const res = await fetch(`/api/admin/offers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...offerPayload,
          pricing: pricing.map((p) => ({
            players: p.players,
            price_cents: p.price_cents,
          })),
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Failed to update offer (${res.status})`);
      }

      setMessage({ type: 'success', text: 'Offer saved successfully' });
    } catch (err) {
      setMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to save offer',
      });
    } finally {
      setSaving(false);
    }
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = media.findIndex((m) => m.id === active.id);
    const newIndex = media.findIndex((m) => m.id === over.id);

    const reordered = arrayMove(media, oldIndex, newIndex).map((item, idx) => ({
      ...item,
      sort_order: idx,
    }));

    // Optimistic update
    setMedia(reordered);

    // Persist to DB
    try {
      const res = await fetch('/api/admin/upload', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: reordered.map((m) => ({ id: m.id, sort_order: m.sort_order })),
        }),
      });
      if (!res.ok) throw new Error('Failed to save order');
      setMessage({ type: 'success', text: 'Media order updated' });
    } catch {
      // Revert on error
      await fetchMedia();
      setMessage({ type: 'error', text: 'Failed to update media order' });
    }
  }

  // Loading state
  if (pageLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <span className="ml-3 text-muted-foreground">Loading offer...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/admin/offers">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Edit Offer</h1>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Saving...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </span>
          )}
        </Button>
      </div>

      {/* Success / Error message */}
      {message && (
        <div
          className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${
            message.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
              : 'bg-destructive/10 border border-destructive/30 text-destructive'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle className="h-4 w-4 shrink-0" />
          ) : (
            <XCircle className="h-4 w-4 shrink-0" />
          )}
          {message.text}
        </div>
      )}

      {/* Hidden file input for media upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={handleUpload}
      />

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        {/* Details Tab */}
        <TabsContent value="details" className="space-y-6 mt-6">
          {/* Name (multilingual) */}
          <Card className="bg-[#111118] border-border/30">
            <CardHeader>
              <CardTitle className="text-base">Name</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {locales.map((locale) => (
                <div key={locale} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0">
                    {locale}
                  </span>
                  <Input
                    value={name[locale] || ''}
                    onChange={(e) => updateMultilingual(setName, locale, e.target.value)}
                    placeholder={`Name in ${localeLabels[locale]}`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Description (multilingual) */}
          <Card className="bg-[#111118] border-border/30">
            <CardHeader>
              <CardTitle className="text-base">Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {locales.map((locale) => (
                <div key={locale} className="flex gap-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0 pt-2">
                    {locale}
                  </span>
                  <Textarea
                    value={description[locale] || ''}
                    onChange={(e) => updateMultilingual(setDescription, locale, e.target.value)}
                    placeholder={`Description in ${localeLabels[locale]}`}
                    rows={3}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Short Description (multilingual) */}
          <Card className="bg-[#111118] border-border/30">
            <CardHeader>
              <CardTitle className="text-base">Short Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {locales.map((locale) => (
                <div key={locale} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0">
                    {locale}
                  </span>
                  <Input
                    value={shortDesc[locale] || ''}
                    onChange={(e) => updateMultilingual(setShortDesc, locale, e.target.value)}
                    placeholder={`Short description in ${localeLabels[locale]}`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Technical details */}
          <Card className="bg-[#111118] border-border/30">
            <CardHeader>
              <CardTitle className="text-base">Session Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Duration (min)</Label>
                  <Input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Min Players</Label>
                  <Input
                    type="number"
                    value={minPlayers}
                    onChange={(e) => setMinPlayers(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Max Players</Label>
                  <Input
                    type="number"
                    value={maxPlayers}
                    onChange={(e) => setMaxPlayers(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Lane Type</Label>
                  <Select value={laneType} onValueChange={setLaneType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="axe">Axe</SelectItem>
                      <SelectItem value="darts_pixels">Darts Pixels</SelectItem>
                      <SelectItem value="classic_darts">Classic Darts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Slot Interval</Label>
                  <Select value={slotInterval} onValueChange={setSlotInterval}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 min</SelectItem>
                      <SelectItem value="60">60 min</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Minimum Age</Label>
                  <Input
                    type="number"
                    value={ageMin}
                    onChange={(e) => setAgeMin(e.target.value)}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                  <Label>Includes</Label>
                  <Input
                    value={includes}
                    onChange={(e) => setIncludes(e.target.value)}
                    placeholder="Comma-separated list"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Fields */}
          <Card className="bg-[#111118] border-border/30">
            <CardHeader>
              <CardTitle className="text-base">SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label className="text-muted-foreground">SEO Title</Label>
                {locales.map((locale) => (
                  <div key={locale} className="flex items-center gap-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0">
                      {locale}
                    </span>
                    <Input
                      value={seoTitle[locale] || ''}
                      onChange={(e) => updateMultilingual(setSeoTitle, locale, e.target.value)}
                      placeholder={`SEO title in ${localeLabels[locale]}`}
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <Label className="text-muted-foreground">SEO Description</Label>
                {locales.map((locale) => (
                  <div key={locale} className="flex gap-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0 pt-2">
                      {locale}
                    </span>
                    <Textarea
                      value={seoDescription[locale] || ''}
                      onChange={(e) => updateMultilingual(setSeoDescription, locale, e.target.value)}
                      placeholder={`SEO description in ${localeLabels[locale]}`}
                      rows={2}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pricing Tab */}
        <TabsContent value="pricing" className="mt-6">
          <Card className="bg-[#111118] border-border/30">
            <CardHeader>
              <CardTitle className="text-base">Price per Player</CardTitle>
            </CardHeader>
            <CardContent>
              {pricing.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  No pricing data. Pricing will be loaded from the database.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/30">
                        <th className="text-left py-3 px-3 text-muted-foreground font-medium">Players</th>
                        <th className="text-left py-3 px-3 text-muted-foreground font-medium">Price (EUR)</th>
                        <th className="text-left py-3 px-3 text-muted-foreground font-medium">Price (cents)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricing.map((row) => (
                        <tr key={row.players} className={`border-b border-border/10 ${row.price_cents === 0 ? 'bg-yellow-500/5' : ''}`}>
                          <td className="py-3 px-3 font-medium">
                            {row.players} {row.players === 1 ? 'player' : 'players'}
                            {row.price_cents === 0 && (
                              <span className="ml-2 text-xs text-yellow-500">new</span>
                            )}
                          </td>
                          <td className="py-3 px-3">
                            <Input
                              type="number"
                              step="0.01"
                              min="0"
                              value={(row.price_cents / 100).toFixed(2)}
                              onChange={(e) => updatePrice(row.players, e.target.value)}
                              className="w-32"
                            />
                          </td>
                          <td className="py-3 px-3 text-muted-foreground">
                            {row.price_cents}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Media Tab */}
        <TabsContent value="media" className="mt-6">
          <Card className="bg-[#111118] border-border/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Images & Videos</CardTitle>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent>
              {media.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Upload className="h-8 w-8 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">No media uploaded yet</p>
                  <p className="text-xs mt-1">Upload images or videos for this offer</p>
                </div>
              ) : (
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={media.map((m) => m.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="space-y-2">
                      {media.map((item) => (
                        <SortableMediaItem
                          key={item.id}
                          item={item}
                          onRemove={removeMedia}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
