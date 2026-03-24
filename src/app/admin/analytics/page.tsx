'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Euro,
  CalendarDays,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Loader2,
  CreditCard,
  FileCheck,
} from 'lucide-react';

type Period = 'today' | 'week' | 'month' | 'year' | 'all';

interface Booking {
  id: string;
  offer_id: string;
  booking_date: string;
  total_cents: number;
  deposit_cents: number;
  players: number;
  created_at: string;
  payment_type: string;
  status: string;
}

interface Offer {
  id: string;
  slug: string;
  title: Record<string, string>;
}

function formatEur(cents: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

function getDateRange(period: Period): { from: string; to: string } {
  const now = new Date();
  const to = now.toISOString().slice(0, 10);

  switch (period) {
    case 'today':
      return { from: to, to };
    case 'week': {
      const d = new Date(now);
      d.setDate(d.getDate() - d.getDay() + 1);
      return { from: d.toISOString().slice(0, 10), to };
    }
    case 'month': {
      const d = new Date(now.getFullYear(), now.getMonth(), 1);
      return { from: d.toISOString().slice(0, 10), to };
    }
    case 'year':
      return { from: `${now.getFullYear()}-01-01`, to };
    case 'all':
      return { from: '2024-01-01', to };
  }
}

function shiftYearBack(dateStr: string): string {
  const d = new Date(dateStr);
  d.setFullYear(d.getFullYear() - 1);
  return d.toISOString().slice(0, 10);
}

function pctChange(current: number, previous: number): number | null {
  if (previous === 0) return current > 0 ? 100 : null;
  return Math.round(((current - previous) / previous) * 100);
}

const STATUS_META: Record<string, { label: string; color: string }> = {
  confirmed: { label: 'Confirmée', color: 'bg-emerald-500' },
  manual: { label: 'Manuelle', color: 'bg-blue-500' },
  modified: { label: 'Modifiée', color: 'bg-amber-500' },
  completed: { label: 'Terminée', color: 'bg-purple-500' },
  cancelled: { label: 'Annulée', color: 'bg-red-500' },
};

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<Period>('month');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [prevBookings, setPrevBookings] = useState<Booking[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [waiversCount, setWaiversCount] = useState(0);
  const [prevWaiversCount, setPrevWaiversCount] = useState(0);
  const [discoverySources, setDiscoverySources] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const range = getDateRange(period);
    const prevRange = {
      from: shiftYearBack(range.from),
      to: shiftYearBack(range.to),
    };

    const fields =
      'id, offer_id, booking_date, total_cents, deposit_cents, players, created_at, payment_type, status';

    const [bookingsRes, prevBookingsRes, offersRes, waiversRes, prevWaiversRes, discoveryRes] =
      await Promise.all([
        supabase
          .from('bookings')
          .select(fields)
          .gte('booking_date', range.from)
          .lte('booking_date', range.to),
        supabase
          .from('bookings')
          .select(fields)
          .gte('booking_date', prevRange.from)
          .lte('booking_date', prevRange.to),
        supabase.from('offers').select('id, slug, title'),
        supabase
          .from('waivers')
          .select('id', { count: 'exact', head: true })
          .gte('signed_at', range.from + 'T00:00:00')
          .lte('signed_at', range.to + 'T23:59:59'),
        supabase
          .from('waivers')
          .select('id', { count: 'exact', head: true })
          .gte('signed_at', prevRange.from + 'T00:00:00')
          .lte('signed_at', prevRange.to + 'T23:59:59'),
        supabase
          .from('waivers')
          .select('discovery_source')
          .not('discovery_source', 'is', null),
      ]);

    setBookings(bookingsRes.data || []);
    setPrevBookings(prevBookingsRes.data || []);
    setOffers(offersRes.data || []);
    setWaiversCount(waiversRes.count || 0);
    setPrevWaiversCount(prevWaiversRes.count || 0);

    // Count discovery sources
    const srcCounts: Record<string, number> = {};
    (discoveryRes.data || []).forEach((w: { discovery_source: string }) => {
      if (w.discovery_source) {
        srcCounts[w.discovery_source] = (srcCounts[w.discovery_source] || 0) + 1;
      }
    });
    setDiscoverySources(srcCounts);

    setLoading(false);
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /* ---------- derived data ---------- */

  const active = useMemo(
    () => bookings.filter((b) => b.status !== 'cancelled'),
    [bookings]
  );
  const prevActive = useMemo(
    () => prevBookings.filter((b) => b.status !== 'cancelled'),
    [prevBookings]
  );

  // KPIs
  const totalRevenue = useMemo(
    () => active.reduce((s, b) => s + b.total_cents, 0),
    [active]
  );
  const prevRevenue = useMemo(
    () => prevActive.reduce((s, b) => s + b.total_cents, 0),
    [prevActive]
  );
  const collectedOnline = useMemo(
    () => active.reduce((s, b) => s + (b.deposit_cents ?? 0), 0),
    [active]
  );
  const prevCollected = useMemo(
    () => prevActive.reduce((s, b) => s + (b.deposit_cents ?? 0), 0),
    [prevActive]
  );
  const remainingToCollect = totalRevenue - collectedOnline;

  const totalPlayers = useMemo(
    () => active.reduce((s, b) => s + b.players, 0),
    [active]
  );
  const prevPlayers = useMemo(
    () => prevActive.reduce((s, b) => s + b.players, 0),
    [prevActive]
  );

  const avgBookingValue =
    active.length > 0 ? totalRevenue / active.length : 0;
  const prevAvgValue =
    prevActive.length > 0 ? prevRevenue / prevActive.length : 0;

  // Payment breakdown
  const paymentStats = useMemo(() => {
    const full = active.filter((b) => b.payment_type === 'full');
    const deposit = active.filter((b) => b.payment_type === 'deposit');
    return {
      fullCount: full.length,
      fullRevenue: full.reduce((s, b) => s + b.total_cents, 0),
      depositCount: deposit.length,
      depositRevenue: deposit.reduce((s, b) => s + b.total_cents, 0),
      depositCollected: deposit.reduce((s, b) => s + (b.deposit_cents ?? 0), 0),
    };
  }, [active]);

  // Status breakdown (includes cancelled)
  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const b of bookings) counts[b.status] = (counts[b.status] || 0) + 1;
    return counts;
  }, [bookings]);

  // Top activities
  const topActivities = useMemo(() => {
    const map = new Map<
      string,
      { bookings: number; revenue: number; players: number }
    >();
    for (const b of active) {
      const curr = map.get(b.offer_id) || {
        bookings: 0,
        revenue: 0,
        players: 0,
      };
      curr.bookings++;
      curr.revenue += b.total_cents;
      curr.players += b.players;
      map.set(b.offer_id, curr);
    }
    return Array.from(map.entries())
      .map(([offerId, stats]) => {
        const offer = offers.find((o) => o.id === offerId);
        return {
          offerId,
          name: offer?.title?.en || offer?.slug || 'Unknown',
          ...stats,
          pct:
            totalRevenue > 0
              ? Math.round((stats.revenue / totalRevenue) * 100)
              : 0,
        };
      })
      .sort((a, b) => b.revenue - a.revenue);
  }, [active, offers, totalRevenue]);

  // Revenue by sub-period (chart)
  const revenueByPeriod = useMemo(() => {
    const groups = new Map<
      string,
      { revenue: number; bookings: number; players: number }
    >();

    for (const b of active) {
      let key: string;
      if (period === 'today' || period === 'week') {
        key = b.booking_date;
      } else if (period === 'month') {
        const d = new Date(b.booking_date);
        const day = d.getDay() || 7;
        d.setDate(d.getDate() - day + 1);
        key = `Sem. ${d.toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
        })}`;
      } else {
        const d = new Date(b.booking_date);
        key = d.toLocaleDateString('fr-FR', {
          month: 'short',
          year: '2-digit',
        });
      }

      const curr = groups.get(key) || { revenue: 0, bookings: 0, players: 0 };
      curr.revenue += b.total_cents;
      curr.bookings++;
      curr.players += b.players;
      groups.set(key, curr);
    }

    return Array.from(groups.entries()).map(([label, data]) => ({
      label,
      ...data,
    }));
  }, [active, period]);

  const maxRevenue = useMemo(
    () => Math.max(...revenueByPeriod.map((r) => r.revenue), 1),
    [revenueByPeriod]
  );

  /* ---------- UI ---------- */

  const periods: { key: Period; label: string }[] = [
    { key: 'today', label: "Aujourd'hui" },
    { key: 'week', label: 'Semaine' },
    { key: 'month', label: 'Mois' },
    { key: 'year', label: 'Annee' },
    { key: 'all', label: 'Tout' },
  ];

  function ChangeIndicator({
    current,
    previous,
  }: {
    current: number;
    previous: number;
  }) {
    const change = pctChange(current, previous);
    if (change === null)
      return <span className="text-xs text-muted-foreground">—</span>;
    const isPositive = change >= 0;
    return (
      <span
        className={`inline-flex items-center gap-0.5 text-xs font-medium ${
          isPositive ? 'text-emerald-400' : 'text-red-400'
        }`}
      >
        {isPositive ? (
          <ArrowUpRight className="h-3 w-3" />
        ) : (
          <ArrowDownRight className="h-3 w-3" />
        )}
        {Math.abs(change)}% vs N-1
      </span>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="flex items-center gap-1 rounded-lg border border-border/30 bg-[#111118] p-1">
          {periods.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                period === p.key
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <>
          {/* -------- KPI Cards -------- */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Card className="border-border/30 bg-[#111118]">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Euro className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-medium">CA Total</span>
                </div>
                <p className="text-2xl font-bold text-white">
                  {formatEur(totalRevenue)}
                </p>
                <ChangeIndicator
                  current={totalRevenue}
                  previous={prevRevenue}
                />
              </CardContent>
            </Card>

            <Card className="border-border/30 bg-[#111118]">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4 text-[#00b4d8]" />
                  <span className="text-xs font-medium">Reservations</span>
                </div>
                <p className="text-2xl font-bold text-white">
                  {active.length}
                </p>
                <ChangeIndicator
                  current={active.length}
                  previous={prevActive.length}
                />
              </CardContent>
            </Card>

            <Card className="border-border/30 bg-[#111118]">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <TrendingUp className="h-4 w-4 text-[#8b5cf6]" />
                  <span className="text-xs font-medium">Panier Moyen</span>
                </div>
                <p className="text-2xl font-bold text-white">
                  {formatEur(avgBookingValue)}
                </p>
                <ChangeIndicator
                  current={avgBookingValue}
                  previous={prevAvgValue}
                />
              </CardContent>
            </Card>

            <Card className="border-border/30 bg-[#111118]">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Users className="h-4 w-4 text-[#ff6b00]" />
                  <span className="text-xs font-medium">Joueurs</span>
                </div>
                <p className="text-2xl font-bold text-white">
                  {totalPlayers}
                </p>
                <ChangeIndicator
                  current={totalPlayers}
                  previous={prevPlayers}
                />
              </CardContent>
            </Card>
          </div>

          {/* -------- Encaissement + Statuts -------- */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Encaissement */}
            <Card className="border-border/30 bg-[#111118]">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="h-4 w-4 text-emerald-400" />
                  <h2 className="text-lg font-semibold text-white">
                    Encaissement
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Encaissé en ligne
                    </span>
                    <span className="text-sm font-semibold text-emerald-400">
                      {formatEur(collectedOnline)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Reste à encaisser sur place
                    </span>
                    <span className="text-sm font-semibold text-amber-400">
                      {formatEur(remainingToCollect)}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 rounded-full bg-border/30 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
                      style={{
                        width:
                          totalRevenue > 0
                            ? `${Math.round(
                                (collectedOnline / totalRevenue) * 100
                              )}%`
                            : '0%',
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                      {totalRevenue > 0
                        ? Math.round(
                            (collectedOnline / totalRevenue) * 100
                          )
                        : 0}
                      % encaissé
                    </span>
                    <span>Total : {formatEur(totalRevenue)}</span>
                  </div>

                  {/* Payment type breakdown */}
                  <div className="pt-3 border-t border-border/20 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">
                        Paiement complet
                      </span>
                      <span className="text-white">
                        {paymentStats.fullCount} resa ·{' '}
                        <span className="text-emerald-400">
                          {formatEur(paymentStats.fullRevenue)}
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Acompte</span>
                      <span className="text-white">
                        {paymentStats.depositCount} resa ·{' '}
                        <span className="text-emerald-400">
                          {formatEur(paymentStats.depositCollected)}
                        </span>{' '}
                        encaissé /{' '}
                        <span className="text-amber-400">
                          {formatEur(
                            paymentStats.depositRevenue -
                              paymentStats.depositCollected
                          )}
                        </span>{' '}
                        restant
                      </span>
                    </div>
                  </div>

                  <ChangeIndicator
                    current={collectedOnline}
                    previous={prevCollected}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Statuts & Waivers */}
            <Card className="border-border/30 bg-[#111118]">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileCheck className="h-4 w-4 text-[#00b4d8]" />
                  <h2 className="text-lg font-semibold text-white">
                    Statuts & Waivers
                  </h2>
                </div>

                <div className="space-y-3">
                  {Object.entries(statusCounts)
                    .sort(([, a], [, b]) => b - a)
                    .map(([status, count]) => {
                      const meta = STATUS_META[status] || {
                        label: status,
                        color: 'bg-gray-500',
                      };
                      const pct =
                        bookings.length > 0
                          ? Math.round((count / bookings.length) * 100)
                          : 0;
                      return (
                        <div key={status}>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-2 h-2 rounded-full ${meta.color}`}
                              />
                              <span className="text-sm text-muted-foreground">
                                {meta.label}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-white">
                              {count}{' '}
                              <span className="text-xs text-muted-foreground">
                                ({pct}%)
                              </span>
                            </span>
                          </div>
                          <div className="h-1 rounded-full bg-border/30 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${meta.color} transition-all duration-500`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  {Object.keys(statusCounts).length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      Aucune réservation
                    </p>
                  )}
                </div>

                {/* Waivers */}
                <div className="mt-4 pt-4 border-t border-border/20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <FileCheck className="h-4 w-4 text-[#8b5cf6]" />
                      <span className="text-sm text-muted-foreground">
                        Waivers signés
                      </span>
                    </div>
                    <span className="text-lg font-bold text-white">
                      {waiversCount}
                    </span>
                  </div>
                  <ChangeIndicator
                    current={waiversCount}
                    previous={prevWaiversCount}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* -------- Revenue Chart -------- */}
          {revenueByPeriod.length > 0 && (
            <Card className="border-border/30 bg-[#111118]">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4">
                  CA par période
                </h2>
                <div className={`flex items-end gap-2 ${revenueByPeriod.length <= 3 ? 'h-24' : 'h-32'}`}>
                  {revenueByPeriod.map((item, i) => {
                    const height = Math.max(
                      (item.revenue / maxRevenue) * 100,
                      8
                    );
                    return (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center gap-1"
                      >
                        <span className="text-xs font-medium text-white">
                          {formatEur(item.revenue)}
                        </span>
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-[#00b4d8] to-[#8b5cf6] transition-all duration-500"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-[10px] text-muted-foreground text-center leading-tight">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* -------- Top Activities -------- */}
          <Card className="border-border/30 bg-[#111118]">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                Top Activités
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">
                        Activité
                      </th>
                      <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                        Résa
                      </th>
                      <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                        Joueurs
                      </th>
                      <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                        CA
                      </th>
                      <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                        %
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topActivities.map((act) => (
                      <tr
                        key={act.offerId}
                        className="border-b border-border/10"
                      >
                        <td className="py-3 px-2 text-white">{act.name}</td>
                        <td className="py-3 px-2 text-right text-muted-foreground">
                          {act.bookings}
                        </td>
                        <td className="py-3 px-2 text-right text-muted-foreground">
                          {act.players}
                        </td>
                        <td className="py-3 px-2 text-right font-medium text-emerald-400">
                          {formatEur(act.revenue)}
                        </td>
                        <td className="py-3 px-2 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="w-16 h-1.5 rounded-full bg-border/30 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-[#00b4d8]"
                                style={{ width: `${act.pct}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground w-8 text-right">
                              {act.pct}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {topActivities.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-8 text-center text-muted-foreground"
                        >
                          Aucune donnée pour cette période
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* -------- Period Detail Table -------- */}
          {revenueByPeriod.length > 0 && (
            <Card className="border-border/30 bg-[#111118]">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4">
                  Détail par période
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/30">
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">
                          Période
                        </th>
                        <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                          Résa
                        </th>
                        <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                          Joueurs
                        </th>
                        <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                          CA
                        </th>
                        <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                          Panier Moy.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {revenueByPeriod.map((item, i) => (
                        <tr key={i} className="border-b border-border/10">
                          <td className="py-3 px-2 text-white">
                            {item.label}
                          </td>
                          <td className="py-3 px-2 text-right text-muted-foreground">
                            {item.bookings}
                          </td>
                          <td className="py-3 px-2 text-right text-muted-foreground">
                            {item.players}
                          </td>
                          <td className="py-3 px-2 text-right font-medium text-emerald-400">
                            {formatEur(item.revenue)}
                          </td>
                          <td className="py-3 px-2 text-right text-muted-foreground">
                            {item.bookings > 0
                              ? formatEur(item.revenue / item.bookings)
                              : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t border-border/30 font-semibold">
                        <td className="py-3 px-2 text-white">Total</td>
                        <td className="py-3 px-2 text-right text-white">
                          {active.length}
                        </td>
                        <td className="py-3 px-2 text-right text-white">
                          {totalPlayers}
                        </td>
                        <td className="py-3 px-2 text-right text-emerald-400">
                          {formatEur(totalRevenue)}
                        </td>
                        <td className="py-3 px-2 text-right text-muted-foreground">
                          {formatEur(avgBookingValue)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
          {/* Discovery Sources */}
          {Object.keys(discoverySources).length > 0 && (
            <Card className="bg-[#111118] border-border/30">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-white mb-4">Sources de decouverte</h3>
                <div className="space-y-3">
                  {(() => {
                    const sourceLabels: Record<string, string> = {
                      tiktok: 'TikTok',
                      instagram: 'Instagram',
                      walking_by: 'En passant devant',
                      get_your_guide: 'Get Your Guide / Revendeurs',
                      internet: 'Recherche internet',
                      other: 'Autre',
                    };
                    const sourceColors: Record<string, string> = {
                      tiktok: 'bg-pink-500',
                      instagram: 'bg-purple-500',
                      walking_by: 'bg-amber-500',
                      get_your_guide: 'bg-emerald-500',
                      internet: 'bg-blue-500',
                      other: 'bg-gray-500',
                    };
                    const totalSrc = Object.values(discoverySources).reduce((a, b) => a + b, 0);
                    const sorted = Object.entries(discoverySources).sort((a, b) => b[1] - a[1]);

                    return sorted.map(([key, count]) => {
                      const pct = totalSrc > 0 ? Math.round((count / totalSrc) * 100) : 0;
                      return (
                        <div key={key}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-muted-foreground">{sourceLabels[key] || key}</span>
                            <span className="text-sm font-semibold text-white">{count} ({pct}%)</span>
                          </div>
                          <div className="h-3 bg-[#1a1a25] rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${sourceColors[key] || 'bg-gray-500'}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
