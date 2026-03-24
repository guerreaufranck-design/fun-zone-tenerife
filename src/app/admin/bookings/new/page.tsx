'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { calculateLanesNeeded } from '@/lib/booking/lane-allocation';
import type { LaneType, MultilingualText, BusinessHours } from '@/lib/supabase/types';

interface OfferRow {
  id: string;
  title: MultilingualText;
  lane_type: LaneType;
  duration_minutes: number;
  max_players: number;
  slot_interval_minutes: number | null;
  backoffice_only: boolean;
  offer_pricing: { players: number; price_cents: number }[];
}

function calculateEndTime(startTime: string, durationMinutes: number): string {
  const [h, m] = startTime.split(':').map(Number);
  const totalMinutes = h * 60 + m + durationMinutes;
  const endH = Math.floor(totalMinutes / 60);
  const endM = totalMinutes % 60;
  return `${endH.toString().padStart(2, '0')}:${endM.toString().padStart(2, '0')}`;
}

function generateTimeSlots(
  openTime: string,
  closeTime: string,
  intervalMinutes: number,
  durationMinutes: number
): string[] {
  const [openH, openM] = openTime.split(':').map(Number);
  const [closeH, closeM] = closeTime.split(':').map(Number);
  const openTotal = openH * 60 + openM;
  const closeTotal = closeH * 60 + closeM;

  const slots: string[] = [];
  for (let t = openTotal; t + durationMinutes <= closeTotal; t += intervalMinutes) {
    const h = Math.floor(t / 60);
    const m = t % 60;
    slots.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
  }
  return slots;
}

export default function NewBookingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [offersLoading, setOffersLoading] = useState(true);
  const [offers, setOffers] = useState<OfferRow[]>([]);
  const [businessHours, setBusinessHours] = useState<BusinessHours[]>([]);
  const [form, setForm] = useState({
    offer_id: '',
    players: '2',
    date: '',
    time: '',
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    notes: '',
    language: 'en',
    payment_status: 'pending' as string,
  });

  useEffect(() => {
    async function fetchData() {
      setOffersLoading(true);
      const supabase = createClient();

      const [offersRes, hoursRes] = await Promise.all([
        supabase
          .from('offers')
          .select('id, title, lane_type, duration_minutes, max_players, slot_interval_minutes, backoffice_only, offer_pricing(players, price_cents)')
          .eq('is_active', true)
          .order('sort_order'),
        supabase.from('business_hours').select('*'),
      ]);

      if (offersRes.data) {
        setOffers(offersRes.data as OfferRow[]);
      }

      if (hoursRes.data) {
        setBusinessHours(hoursRes.data as BusinessHours[]);
      }

      setOffersLoading(false);
    }

    fetchData();
  }, []);

  const selectedOffer = useMemo(
    () => offers.find((o) => o.id === form.offer_id),
    [offers, form.offer_id]
  );

  const calculatedPrice = useMemo(() => {
    if (!selectedOffer || !selectedOffer.offer_pricing?.length) return null;

    const playerCount = parseInt(form.players) || 1;

    // price_cents in offer_pricing is the TOTAL price for that player count
    // Find exact match first
    const exactMatch = selectedOffer.offer_pricing.find((p) => p.players === playerCount);

    let totalPrice: number;
    if (exactMatch) {
      totalPrice = exactMatch.price_cents;
    } else {
      // Find closest lower tier
      const sortedPricing = [...selectedOffer.offer_pricing].sort((a, b) => a.players - b.players);
      let closestTier = sortedPricing[0];
      for (const tier of sortedPricing) {
        if (tier.players <= playerCount) {
          closestTier = tier;
        } else {
          break;
        }
      }
      totalPrice = closestTier?.price_cents ?? 0;
    }

    return {
      perPerson: Math.round(totalPrice / playerCount),
      total: totalPrice,
    };
  }, [selectedOffer, form.players]);

  const lanesNeeded = useMemo(() => {
    if (!selectedOffer) return 1;
    return calculateLanesNeeded(selectedOffer.lane_type as LaneType, parseInt(form.players) || 1);
  }, [selectedOffer, form.players]);

  const timeSlots = useMemo(() => {
    if (!form.date || !selectedOffer) return [];

    const dateObj = new Date(form.date + 'T12:00:00');
    const dayOfWeek = dateObj.getDay(); // 0=Sunday, 1=Monday, ...

    const hours = businessHours.find((h) => h.day_of_week === dayOfWeek);
    if (!hours || hours.is_closed) return [];

    const interval = selectedOffer.slot_interval_minutes ?? 60;
    return generateTimeSlots(hours.open_time, hours.close_time, interval, selectedOffer.duration_minutes);
  }, [form.date, selectedOffer, businessHours]);

  function updateField(field: string, value: string) {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      // Reset time when date or offer changes since slots may differ
      if (field === 'date' || field === 'offer_id') {
        updated.time = '';
      }
      return updated;
    });
  }

  const isBackofficeOffer = selectedOffer?.backoffice_only ?? false;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedOffer) return;

    setLoading(true);

    try {
      const totalCents = isBackofficeOffer ? 0 : (calculatedPrice?.total ?? 0);

      const res = await fetch('/api/admin/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offer_id: form.offer_id,
          customer_name: form.customer_name,
          customer_email: form.customer_email,
          customer_phone: form.customer_phone || null,
          players: parseInt(form.players),
          booking_date: form.date,
          start_time: form.time,
          end_time: calculateEndTime(form.time, selectedOffer.duration_minutes),
          lanes_needed: calculateLanesNeeded(selectedOffer.lane_type, parseInt(form.players)),
          total_cents: totalCents,
          deposit_cents: 0,
          payment_type: 'full',
          payment_status: isBackofficeOffer ? 'paid' : form.payment_status,
          notes: form.notes || null,
          language: form.language,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert('Failed to create booking: ' + (data.error || 'Unknown error'));
      } else {
        router.push('/admin/bookings');
      }
    } catch {
      alert('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }

  if (offersLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/bookings">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Add Manual Booking</h1>
          <p className="text-sm text-muted-foreground">
            Create a booking for walk-in or cash customers
          </p>
        </div>
      </div>

      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-lg">Booking Details</CardTitle>
          <CardDescription>
            Status will be set to &quot;manual&quot; and payment to &quot;pending&quot;
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="offer">Experience</Label>
                <Select value={form.offer_id} onValueChange={(v) => updateField('offer_id', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {offers.map((offer) => (
                      <SelectItem key={offer.id} value={offer.id}>
                        {offer.title.en || offer.title.es || Object.values(offer.title)[0]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="players">Number of Players</Label>
                <Input
                  id="players"
                  type="number"
                  min="1"
                  max={selectedOffer?.max_players ?? 20}
                  value={form.players}
                  onChange={(e) => updateField('players', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={(e) => updateField('date', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Select
                  value={form.time}
                  onValueChange={(v) => updateField('time', v)}
                  disabled={timeSlots.length === 0}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        !form.date
                          ? 'Select a date first'
                          : !form.offer_id
                          ? 'Select an experience first'
                          : timeSlots.length === 0
                          ? 'Closed on this day'
                          : 'Select time'
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price summary */}
            {selectedOffer && isBackofficeOffer && (
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                  Third-Party Booking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Already paid via {(selectedOffer.title.en || '').replace(' - Axe Throwing', '')}. No price will be shown in the confirmation email.
                </p>
                {selectedOffer.lane_type === 'axe' && (
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-blue-500/20 pt-2 mt-2">
                    <span>
                      {lanesNeeded} {lanesNeeded === 1 ? 'lane' : 'lanes'} needed
                    </span>
                  </div>
                )}
              </div>
            )}
            {selectedOffer && !isBackofficeOffer && calculatedPrice && (
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  Price Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {parseInt(form.players)} {parseInt(form.players) === 1 ? 'player' : 'players'} × €{(calculatedPrice.perPerson / 100).toFixed(2)}/person
                    </span>
                    <span className="text-lg font-bold text-emerald-400">
                      €{(calculatedPrice.total / 100).toFixed(2)}
                    </span>
                  </div>
                  {selectedOffer.lane_type === 'axe' && (
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-emerald-500/20 pt-2">
                      <span>
                        {lanesNeeded} {lanesNeeded === 1 ? 'lane' : 'lanes'} needed (max 5 players/lane)
                      </span>
                      {lanesNeeded > 1 && (
                        <span className="text-neon-orange font-medium">
                          {lanesNeeded} lanes blocked
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Customer info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Customer Information
              </h3>

              <div className="space-y-2">
                <Label htmlFor="customer_name">Full Name</Label>
                <Input
                  id="customer_name"
                  value={form.customer_name}
                  onChange={(e) => updateField('customer_name', e.target.value)}
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customer_email">Email</Label>
                  <Input
                    id="customer_email"
                    type="email"
                    value={form.customer_email}
                    onChange={(e) => updateField('customer_email', e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customer_phone">Phone</Label>
                  <Input
                    id="customer_phone"
                    type="tel"
                    value={form.customer_phone}
                    onChange={(e) => updateField('customer_phone', e.target.value)}
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Email Language</Label>
                <Select value={form.language} onValueChange={(v) => updateField('language', v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="nl">Nederlands</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                  placeholder="Any special requests or notes..."
                  rows={3}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Creating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Create Booking
                  </span>
                )}
              </Button>
              <Button asChild variant="ghost">
                <Link href="/admin/bookings">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
