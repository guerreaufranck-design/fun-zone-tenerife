'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Euro,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Loader2,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

type Period = 'today' | 'week' | 'month' | 'year' | 'all';

interface EscapeOrder {
  id: string;
  stripe_session_id: string;
  offer_slug: string;
  game_name: string;
  phones: number;
  amount_cents: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  codes: string[];
  created_at: string;
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

const PERIOD_LABELS: Record<Period, string> = {
  today: "Aujourd'hui",
  week: 'Cette semaine',
  month: 'Ce mois',
  year: 'Cette année',
  all: 'Tout',
};

const GAME_CITIES: Record<string, string> = {
  'escape-ichasagua': 'Los Cristianos',
  'escape-trois-cles': 'La Laguna',
  'escape-bateria': 'Puerto de la Cruz',
  'escape-cendres': 'Garachico',
};

const GAME_COLORS: Record<string, string> = {
  'escape-ichasagua': '#00d4ff',
  'escape-trois-cles': '#a855f7',
  'escape-bateria': '#39ff14',
  'escape-cendres': '#ff2d7b',
};

const ESCAPE_GAMES = [
  { slug: 'escape-ichasagua', name: 'Le Code d\'Ichasagua', city: 'Los Cristianos' },
  { slug: 'escape-trois-cles', name: 'Le Coffre des Trois Clés', city: 'La Laguna' },
  { slug: 'escape-bateria', name: 'Le Butin de la Batería', city: 'Puerto de la Cruz' },
  { slug: 'escape-cendres', name: 'Les Cendres de l\'Âme', city: 'Garachico' },
];

interface GygForm {
  customerName: string;
  customerEmail: string;
  offerSlug: string;
  phones: number;
  locale: string;
}

export default function EscapeSalesPage() {
  const [period, setPeriod] = useState<Period>('month');
  const [orders, setOrders] = useState<EscapeOrder[]>([]);
  const [loading, setLoading] = useState(true);

  // GYG manual send state
  const [gygForm, setGygForm] = useState<GygForm>({
    customerName: '',
    customerEmail: '',
    offerSlug: 'escape-ichasagua',
    phones: 1,
    locale: 'en',
  });
  const [gygSending, setGygSending] = useState(false);
  const [gygResult, setGygResult] = useState<{ success?: boolean; codes?: string[]; error?: string } | null>(null);

  async function sendGygCode() {
    setGygSending(true);
    setGygResult(null);
    try {
      const res = await fetch('/api/admin/send-escape-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...gygForm, source: 'getyourguide' }),
      });
      const data = await res.json();
      if (res.ok) {
        setGygResult({ success: true, codes: data.codes });
        setGygForm(f => ({ ...f, customerName: '', customerEmail: '' }));
        fetchData();
      } else {
        setGygResult({ error: data.error || 'Une erreur est survenue' });
      }
    } catch {
      setGygResult({ error: 'Erreur réseau' });
    } finally {
      setGygSending(false);
    }
  }

  const fetchData = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const range = getDateRange(period);

    const { data } = await supabase
      .from('escape_orders')
      .select('*')
      .gte('created_at', range.from + 'T00:00:00')
      .lte('created_at', range.to + 'T23:59:59')
      .order('created_at', { ascending: false });

    setOrders(data || []);
    setLoading(false);
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // KPIs
  const totalRevenue = useMemo(() => orders.reduce((s, o) => s + o.amount_cents, 0), [orders]);
  const totalOrders = orders.length;
  const avgOrder = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const totalPhones = useMemo(() => orders.reduce((s, o) => s + o.phones, 0), [orders]);

  // Ranking by game
  const gameRanking = useMemo(() => {
    const map = new Map<string, { slug: string; name: string; count: number; revenue: number; phones: number }>();
    for (const o of orders) {
      const existing = map.get(o.offer_slug) || { slug: o.offer_slug, name: o.game_name, count: 0, revenue: 0, phones: 0 };
      existing.count += 1;
      existing.revenue += o.amount_cents;
      existing.phones += o.phones;
      map.set(o.offer_slug, existing);
    }
    return Array.from(map.values()).sort((a, b) => b.revenue - a.revenue);
  }, [orders]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Escape Game Sales</h1>
          <p className="text-sm text-muted-foreground">Chiffre d&apos;affaires et ventes escape games</p>
        </div>
        <div className="flex gap-1 rounded-lg border border-border/50 bg-[#111118] p-1">
          {(Object.keys(PERIOD_LABELS) as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                period === p
                  ? 'bg-neon-orange text-black'
                  : 'text-muted-foreground hover:text-white'
              }`}
            >
              {PERIOD_LABELS[p]}
            </button>
          ))}
        </div>
      </div>

      {/* GYG Manual Send Card */}
      <Card className="border-[#ff8c00]/30 bg-[#111118]">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff8c00]/10">
              <Send className="h-4 w-4 text-[#ff8c00]" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Envoyer un code — Get Your Guide</h2>
              <p className="text-xs text-muted-foreground">Réservation reçue via GYG ? Génère et envoie les codes au client.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Customer name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Nom du client</label>
              <input
                type="text"
                placeholder="John Smith"
                value={gygForm.customerName}
                onChange={e => setGygForm(f => ({ ...f, customerName: e.target.value }))}
                className="rounded-lg border border-border/50 bg-[#0d0d14] px-3 py-2 text-sm text-white placeholder-muted-foreground focus:border-[#ff8c00]/50 focus:outline-none"
              />
            </div>

            {/* Customer email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Email du client</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={gygForm.customerEmail}
                onChange={e => setGygForm(f => ({ ...f, customerEmail: e.target.value }))}
                className="rounded-lg border border-border/50 bg-[#0d0d14] px-3 py-2 text-sm text-white placeholder-muted-foreground focus:border-[#ff8c00]/50 focus:outline-none"
              />
            </div>

            {/* Escape game */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Escape game</label>
              <select
                value={gygForm.offerSlug}
                onChange={e => setGygForm(f => ({ ...f, offerSlug: e.target.value }))}
                className="rounded-lg border border-border/50 bg-[#0d0d14] px-3 py-2 text-sm text-white focus:border-[#ff8c00]/50 focus:outline-none"
              >
                {ESCAPE_GAMES.map(g => (
                  <option key={g.slug} value={g.slug}>{g.name} — {g.city}</option>
                ))}
              </select>
            </div>

            {/* Phones */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Nombre de téléphones</label>
              <select
                value={gygForm.phones}
                onChange={e => setGygForm(f => ({ ...f, phones: parseInt(e.target.value) }))}
                className="rounded-lg border border-border/50 bg-[#0d0d14] px-3 py-2 text-sm text-white focus:border-[#ff8c00]/50 focus:outline-none"
              >
                <option value={1}>1 téléphone — 1 équipe</option>
                <option value={2}>2 téléphones — 2 équipes</option>
                <option value={3}>3 téléphones — 3 équipes</option>
              </select>
            </div>

            {/* Language */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Langue de l&apos;email</label>
              <select
                value={gygForm.locale}
                onChange={e => setGygForm(f => ({ ...f, locale: e.target.value }))}
                className="rounded-lg border border-border/50 bg-[#0d0d14] px-3 py-2 text-sm text-white focus:border-[#ff8c00]/50 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
              </select>
            </div>

            {/* Send button */}
            <div className="flex items-end">
              <button
                onClick={sendGygCode}
                disabled={gygSending || !gygForm.customerName || !gygForm.customerEmail}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ff8c00] px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-[#ff8c00]/80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {gygSending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {gygSending ? 'Envoi en cours…' : 'Générer & Envoyer'}
              </button>
            </div>
          </div>

          {/* Result feedback */}
          {gygResult && (
            <div className={`mt-4 flex items-start gap-2 rounded-lg p-3 text-sm ${
              gygResult.success
                ? 'bg-green-500/10 text-green-400'
                : 'bg-red-500/10 text-red-400'
            }`}>
              {gygResult.success ? (
                <>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <p className="font-medium">Codes envoyés avec succès !</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {gygResult.codes?.map((code, i) => (
                        <span key={i} className="rounded bg-white/10 px-2 py-0.5 font-mono text-xs text-white">
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>{gygResult.error}</p>
                </>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-neon-orange" />
        </div>
      ) : (
        <>
          {/* KPI Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Euro, label: 'Chiffre d\'affaires', value: formatEur(totalRevenue), color: '#ff2d7b' },
              { icon: ShoppingCart, label: 'Commandes', value: String(totalOrders), color: '#a855f7' },
              { icon: TrendingUp, label: 'Panier moyen', value: formatEur(avgOrder), color: '#ff8c00' },
              { icon: Smartphone, label: 'Téléphones vendus', value: String(totalPhones), color: '#00d4ff' },
            ].map((kpi, i) => (
              <Card key={i} className="border-border/50 bg-[#111118]">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${kpi.color}15` }}>
                      <kpi.icon className="h-5 w-5" style={{ color: kpi.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{kpi.label}</p>
                      <p className="text-xl font-bold text-white">{kpi.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Game Ranking */}
          {gameRanking.length > 0 && (
            <Card className="border-border/50 bg-[#111118]">
              <CardContent className="p-6">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  Classement par escape game
                </h2>
                <div className="space-y-3">
                  {gameRanking.map((game, i) => {
                    const maxRevenue = gameRanking[0]?.revenue || 1;
                    const pct = (game.revenue / maxRevenue) * 100;
                    const color = GAME_COLORS[game.slug] || '#ff8c00';
                    const city = GAME_CITIES[game.slug] || '';
                    return (
                      <div key={game.slug}>
                        <div className="mb-1 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-white/20">#{i + 1}</span>
                            <div>
                              <span className="text-sm font-medium text-white">{game.name}</span>
                              {city && (
                                <span className="ml-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                                  <MapPin size={10} /> {city}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-bold" style={{ color }}>{formatEur(game.revenue)}</span>
                            <span className="ml-3 text-xs text-muted-foreground">{game.count} ventes · {game.phones} tél.</span>
                          </div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-white/5">
                          <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Orders Table */}
          <Card className="border-border/50 bg-[#111118]">
            <CardContent className="p-0">
              <div className="border-b border-border/50 px-6 py-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Détail des commandes ({orders.length})
                </h2>
              </div>
              {orders.length === 0 ? (
                <div className="px-6 py-12 text-center text-sm text-muted-foreground">
                  Aucune vente sur cette période
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/50 text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Client</th>
                        <th className="hidden px-6 py-3 md:table-cell">Escape</th>
                        <th className="px-6 py-3 text-center">Tél.</th>
                        <th className="px-6 py-3 text-right">Montant</th>
                        <th className="hidden px-6 py-3 lg:table-cell">Codes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => {
                        const color = GAME_COLORS[order.offer_slug] || '#ff8c00';
                        return (
                          <tr key={order.id} className="border-b border-border/30 transition-colors hover:bg-white/[0.02]">
                            <td className="whitespace-nowrap px-6 py-3 text-muted-foreground">
                              {new Date(order.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                            </td>
                            <td className="px-6 py-3">
                              <div className="text-white">{order.customer_name}</div>
                              <div className="text-xs text-muted-foreground">{order.customer_email}</div>
                            </td>
                            <td className="hidden px-6 py-3 md:table-cell">
                              <span className="text-sm" style={{ color }}>{order.game_name}</span>
                            </td>
                            <td className="px-6 py-3 text-center">
                              <span className="inline-flex items-center gap-1 text-muted-foreground">
                                <Smartphone size={12} /> {order.phones}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-3 text-right font-semibold text-neon-orange">
                              {formatEur(order.amount_cents)}
                            </td>
                            <td className="hidden px-6 py-3 lg:table-cell">
                              <div className="flex flex-wrap gap-1">
                                {(order.codes || []).map((code, ci) => (
                                  <span key={ci} className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                                    {code}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
