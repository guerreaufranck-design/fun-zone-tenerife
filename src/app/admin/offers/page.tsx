'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit, Plus, Loader2 } from 'lucide-react';

interface OfferPricing {
  price_cents: number;
  players: number;
}

interface ApiOffer {
  id: string;
  title: Record<string, string>;
  duration_minutes: number;
  min_players: number;
  max_players: number;
  lane_type: string;
  is_active: boolean;
  slug: string;
  offer_pricing: OfferPricing[];
}

interface Offer {
  id: string;
  name: string;
  duration: number;
  min_players: number;
  max_players: number;
  lane_type: string;
  active: boolean;
  slug: string;
  fromPrice: number | null;
}

const laneTypeColors: Record<string, string> = {
  axe: 'neonBlue',
  darts: 'neonViolet',
  darts_pixels: 'neonOrange',
  classic_darts: 'neonGreen',
};

type BadgeVariant = 'neonBlue' | 'neonViolet' | 'neonOrange' | 'neonGreen';

function computeFromPrice(pricing: OfferPricing[]): number | null {
  if (!pricing || pricing.length === 0) return null;
  const perPersonPrices = pricing.map((p) => p.price_cents / p.players / 100);
  return Math.min(...perPersonPrices);
}

function mapApiOffer(apiOffer: ApiOffer): Offer {
  return {
    id: apiOffer.id,
    name: apiOffer.title?.en ?? apiOffer.slug ?? '—',
    duration: apiOffer.duration_minutes,
    min_players: apiOffer.min_players,
    max_players: apiOffer.max_players,
    lane_type: apiOffer.lane_type,
    active: apiOffer.is_active,
    slug: apiOffer.slug,
    fromPrice: computeFromPrice(apiOffer.offer_pricing),
  };
}

export default function OffersPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const res = await fetch('/api/admin/offers');
        if (!res.ok) throw new Error(`Failed to fetch offers (${res.status})`);
        const data: ApiOffer[] = await res.json();
        setOffers(data.map(mapApiOffer));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchOffers();
  }, []);

  async function toggleActive(id: string) {
    const offer = offers.find((o) => o.id === id);
    if (!offer) return;

    const newActive = !offer.active;

    try {
      const res = await fetch(`/api/admin/offers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active: newActive }),
      });
      if (!res.ok) throw new Error(`Failed to update offer (${res.status})`);

      setOffers((prev) =>
        prev.map((o) => (o.id === id ? { ...o, active: newActive } : o))
      );
    } catch (err) {
      console.error('Failed to toggle offer active state:', err);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Offers</h1>
        <Button asChild>
          <Link href="/admin/offers/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Offer
          </Link>
        </Button>
      </div>

      <Card className="bg-[#111118] border-border/30">
        <CardContent className="pt-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Loading offers...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-destructive">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Name</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden sm:table-cell">Duration</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">Players</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">Lane Type</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden sm:table-cell">From Price</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Active</th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {offers.map((offer) => (
                    <tr
                      key={offer.id}
                      className="border-b border-border/10 hover:bg-secondary/20 transition-colors"
                    >
                      <td className="py-3 px-3 font-medium">{offer.name}</td>
                      <td className="py-3 px-3 hidden sm:table-cell text-muted-foreground">
                        {offer.duration} min
                      </td>
                      <td className="py-3 px-3 hidden md:table-cell text-muted-foreground">
                        {offer.min_players}-{offer.max_players}
                      </td>
                      <td className="py-3 px-3 hidden md:table-cell">
                        <Badge variant={(laneTypeColors[offer.lane_type] ?? 'default') as BadgeVariant}>
                          {offer.lane_type}
                        </Badge>
                      </td>
                      <td className="py-3 px-3 hidden sm:table-cell text-muted-foreground">
                        {offer.fromPrice !== null
                          ? `${offer.fromPrice.toFixed(2)} EUR`
                          : '—'}
                      </td>
                      <td className="py-3 px-3">
                        <Switch
                          checked={offer.active}
                          onCheckedChange={() => toggleActive(offer.id)}
                        />
                      </td>
                      <td className="py-3 px-3 text-right">
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                          <Link href={`/admin/offers/${offer.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
