'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, LogIn, Users, MousePointerClick, Loader2, ArrowUpRight } from 'lucide-react';

type Period = 'today' | 'week' | 'month' | 'year' | 'all';

interface TrafficData {
  capped: boolean;
  totals: { pageviews: number; entries: number; sessions: number; outbound: number };
  devices: { mobile: number; desktop: number };
  sources: { source: string; count: number }[];
  landingPages: { path: string; count: number }[];
  topPages: { path: string; count: number }[];
  outboundByTarget: { target: string; count: number }[];
  outboundPages: { path: string; discoverCars: number; getYourGuide: number; whatsapp: number; total: number }[];
  countries: { country: string; count: number }[];
}

const PERIODS: { key: Period; label: string }[] = [
  { key: 'today', label: "Aujourd'hui" },
  { key: 'week', label: 'Semaine' },
  { key: 'month', label: 'Mois' },
  { key: 'year', label: 'Année' },
  { key: 'all', label: 'Tout' },
];

const TARGET_LABEL: Record<string, string> = {
  'discover-cars': 'Discover Cars',
  getyourguide: 'GetYourGuide',
  whatsapp: 'WhatsApp',
};

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

function Stat({ icon, label, value, hint }: { icon: React.ReactNode; label: string; value: string; hint?: string }) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-muted-foreground">
          {icon}
          <span className="text-sm">{label}</span>
        </div>
        <div className="mt-2 text-3xl font-bold">{value}</div>
        {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
      </CardContent>
    </Card>
  );
}

function BarList({
  title,
  rows,
  emptyLabel = 'Aucune donnée sur cette période',
}: {
  title: string;
  rows: { label: string; count: number }[];
  emptyLabel?: string;
}) {
  const max = rows.reduce((m, r) => Math.max(m, r.count), 0) || 1;
  return (
    <Card>
      <CardContent className="p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">{title}</h3>
        {rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">{emptyLabel}</p>
        ) : (
          <ul className="space-y-2">
            {rows.map((r) => (
              <li key={r.label} className="relative">
                <div
                  className="absolute inset-y-0 left-0 rounded bg-[#00d4ff]/10"
                  style={{ width: `${Math.max(4, (r.count / max) * 100)}%` }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between gap-3 px-2 py-1.5 text-sm">
                  <span className="truncate" title={r.label}>
                    {r.label}
                  </span>
                  <span className="shrink-0 font-semibold tabular-nums">{r.count}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export default function TrafficPage() {
  const [period, setPeriod] = useState<Period>('month');
  const [data, setData] = useState<TrafficData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const range = getDateRange(period);
      const res = await fetch(`/api/admin/traffic?from=${range.from}&to=${range.to}`);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Erreur ${res.status}`);
      }
      setData(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erreur inconnue');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const nf = new Intl.NumberFormat('fr-FR');

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Traffic</h1>
          <p className="text-sm text-muted-foreground">
            Données first-party (ta base, pas GA4) : d&apos;où arrivent les visiteurs et quels liens ils cliquent.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 rounded-lg border border-border/60 p-1">
          {PERIODS.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                period === p.key ? 'bg-[#00d4ff] font-semibold text-[#0a0a0f]' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Chargement…
        </div>
      ) : error ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-red-400">{error}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Si l&apos;erreur mentionne « traffic_events », la table n&apos;est pas encore créée : lance la migration
              <code className="mx-1 rounded bg-white/10 px-1">016_traffic_events.sql</code> dans Supabase.
            </p>
          </CardContent>
        </Card>
      ) : data ? (
        <>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Stat
              icon={<Users className="h-4 w-4" />}
              label="Sessions"
              value={nf.format(data.totals.sessions)}
              hint="Visiteurs uniques (par onglet)"
            />
            <Stat
              icon={<LogIn className="h-4 w-4" />}
              label="Entrées"
              value={nf.format(data.totals.entries)}
              hint="Premières arrivées sur le site"
            />
            <Stat
              icon={<Eye className="h-4 w-4" />}
              label="Pages vues"
              value={nf.format(data.totals.pageviews)}
              hint={`${data.devices.mobile} mobile · ${data.devices.desktop} desktop`}
            />
            <Stat
              icon={<MousePointerClick className="h-4 w-4" />}
              label="Clics sortants"
              value={nf.format(data.totals.outbound)}
              hint="Vers les liens d'affiliation"
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <BarList
              title="D'où arrivent les visiteurs"
              rows={data.sources.map((s) => ({ label: s.source, count: s.count }))}
            />
            <BarList
              title="Pages d'arrivée (landing)"
              rows={data.landingPages.map((p) => ({ label: p.path, count: p.count }))}
            />
          </div>

          <Card>
            <CardContent className="p-5">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                <ArrowUpRight className="h-4 w-4" /> Clics par destination
              </h3>
              {data.outboundByTarget.length === 0 ? (
                <p className="text-sm text-muted-foreground">Aucun clic sortant sur cette période</p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {data.outboundByTarget.map((t) => (
                    <div key={t.target} className="rounded-lg border border-border/60 px-4 py-3">
                      <div className="text-xs text-muted-foreground">{TARGET_LABEL[t.target] ?? t.target}</div>
                      <div className="text-2xl font-bold">{nf.format(t.count)}</div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Clics sortants par page
              </h3>
              {data.outboundPages.length === 0 ? (
                <p className="text-sm text-muted-foreground">Aucun clic sortant sur cette période</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/60 text-left text-xs uppercase text-muted-foreground">
                        <th className="py-2 pr-3 font-medium">Page</th>
                        <th className="py-2 px-3 text-right font-medium">Discover Cars</th>
                        <th className="py-2 px-3 text-right font-medium">GetYourGuide</th>
                        <th className="py-2 px-3 text-right font-medium">WhatsApp</th>
                        <th className="py-2 pl-3 text-right font-medium">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.outboundPages.map((p) => (
                        <tr key={p.path} className="border-b border-border/30">
                          <td className="py-2 pr-3">
                            <span className="truncate" title={p.path}>
                              {p.path}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-right tabular-nums">{p.discoverCars || '–'}</td>
                          <td className="py-2 px-3 text-right tabular-nums">{p.getYourGuide || '–'}</td>
                          <td className="py-2 px-3 text-right tabular-nums">{p.whatsapp || '–'}</td>
                          <td className="py-2 pl-3 text-right font-semibold tabular-nums">{p.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <BarList
              title="Pages les plus vues"
              rows={data.topPages.map((p) => ({ label: p.path, count: p.count }))}
            />
            <BarList
              title="Pays"
              rows={data.countries.map((c) => ({ label: c.country, count: c.count }))}
            />
          </div>

          {data.capped && (
            <p className="text-center text-xs text-muted-foreground">
              Affichage limité aux 50 000 derniers événements de la période.
            </p>
          )}
        </>
      ) : null}
    </div>
  );
}
