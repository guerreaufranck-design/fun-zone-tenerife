'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, GripVertical, ChevronUp, ChevronDown, ExternalLink, Loader2 } from 'lucide-react';

interface TikTokEmbed {
  id: string;
  tiktok_url: string;
  is_active: boolean;
  sort_order: number;
}

export default function TikTokPage() {
  const [embeds, setEmbeds] = useState<TikTokEmbed[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUrl, setNewUrl] = useState('');

  useEffect(() => {
    fetchEmbeds();
  }, []);

  async function fetchEmbeds() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/tiktok');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setEmbeds(data || []);
    } catch (err) {
      console.error('Error fetching TikTok embeds:', err);
    } finally {
      setLoading(false);
    }
  }

  async function addEmbed() {
    if (!newUrl.trim()) return;
    try {
      const res = await fetch('/api/admin/tiktok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tiktok_url: newUrl.trim(), sort_order: embeds.length }),
      });
      if (!res.ok) throw new Error('Failed to add');
      const data = await res.json();
      setEmbeds((prev) => [...prev, data]);
      setNewUrl('');
    } catch (err) {
      console.error('Error adding embed:', err);
    }
  }

  async function toggleActive(id: string, current: boolean) {
    try {
      const res = await fetch('/api/admin/tiktok', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_active: !current }),
      });
      if (!res.ok) throw new Error('Failed to toggle');
      setEmbeds((prev) => prev.map((e) => (e.id === id ? { ...e, is_active: !current } : e)));
    } catch (err) {
      console.error('Error toggling embed:', err);
    }
  }

  async function deleteEmbed(id: string) {
    try {
      const res = await fetch(`/api/admin/tiktok?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      setEmbeds((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error('Error deleting embed:', err);
    }
  }

  async function moveUp(index: number) {
    if (index === 0) return;
    const next = [...embeds];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    const reordered = next.map((e, i) => ({ ...e, sort_order: i }));
    setEmbeds(reordered);

    try {
      await Promise.all([
        fetch('/api/admin/tiktok', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: reordered[index].id, sort_order: reordered[index].sort_order }),
        }),
        fetch('/api/admin/tiktok', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: reordered[index - 1].id, sort_order: reordered[index - 1].sort_order }),
        }),
      ]);
    } catch (err) {
      console.error('Error reordering embeds:', err);
    }
  }

  async function moveDown(index: number) {
    if (index === embeds.length - 1) return;
    const next = [...embeds];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    const reordered = next.map((e, i) => ({ ...e, sort_order: i }));
    setEmbeds(reordered);

    try {
      await Promise.all([
        fetch('/api/admin/tiktok', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: reordered[index].id, sort_order: reordered[index].sort_order }),
        }),
        fetch('/api/admin/tiktok', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: reordered[index + 1].id, sort_order: reordered[index + 1].sort_order }),
        }),
      ]);
    } catch (err) {
      console.error('Error reordering embeds:', err);
    }
  }

  function getVideoId(url: string) {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : null;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">TikTok Embeds</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage TikTok videos displayed on the website
        </p>
      </div>

      {/* Add new URL */}
      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Add TikTok Video</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-3">
            <div className="flex-1 space-y-2">
              <Label className="text-xs">TikTok URL</Label>
              <Input
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://www.tiktok.com/@username/video/1234567890"
              />
            </div>
            <Button onClick={addEmbed} disabled={!newUrl.trim()}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Embeds list */}
      <div className="space-y-3">
        {embeds.map((embed, index) => {
          const videoId = getVideoId(embed.tiktok_url);
          return (
            <Card
              key={embed.id}
              className={`bg-[#111118] border-border/30 ${!embed.is_active ? 'opacity-50' : ''}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  {/* Reorder controls */}
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                    <button
                      onClick={() => moveUp(index)}
                      className="text-muted-foreground hover:text-foreground"
                      disabled={index === 0}
                    >
                      <ChevronUp className="h-3 w-3" />
                    </button>
                    <button
                      onClick={() => moveDown(index)}
                      className="text-muted-foreground hover:text-foreground"
                      disabled={index === embeds.length - 1}
                    >
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Video preview placeholder */}
                  <div className="w-16 h-20 bg-secondary/50 rounded-md flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">
                      TikTok
                    </span>
                  </div>

                  {/* URL and info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{embed.tiktok_url}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {videoId && (
                        <span className="text-xs text-muted-foreground font-mono">
                          ID: {videoId}
                        </span>
                      )}
                      <a
                        href={embed.tiktok_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Open <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Switch checked={embed.is_active} onCheckedChange={() => toggleActive(embed.id, embed.is_active)} />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => deleteEmbed(embed.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {embeds.length === 0 && (
          <Card className="bg-[#111118] border-border/30">
            <CardContent className="py-12 text-center text-muted-foreground">
              No TikTok videos added yet. Paste a URL above to add one.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
