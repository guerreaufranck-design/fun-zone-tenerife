import { createAdminClient } from '@/lib/supabase/admin';
import { getTrackingDb } from '@/lib/supabase/private';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

// Fun Zone's own OTA slug on the axe site (matches partners.slug there).
const PARTNER_SLUG = 'funzone';

function euros(cents: number) {
  return (cents / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}
function pct(n: number) {
  return `${(n * 100).toFixed(1)}%`;
}

interface ReferralBooking {
  booking_ref: string;
  booking_date: string;
  customer_name: string;
  total_cents: number;
  referral_commission_pct: number | null;
  payment_status: string;
}

const BILLABLE_PAYMENT = new Set(['paid', 'partial']);

export default async function CommissionsPage() {
  const supabase = createAdminClient();

  // Sales (referred bookings) come from the shared axe DB. referral_partner /
  // referral_commission_pct are from migration 022 → loose query.
  const { data } = await (supabase.from('bookings') as unknown as {
    select: (cols: string) => {
      eq: (col: string, val: string) => {
        order: (col: string, opts: { ascending: boolean }) => Promise<{ data: ReferralBooking[] | null }>;
      };
    };
  })
    .select('booking_ref, booking_date, customer_name, total_cents, referral_commission_pct, payment_status')
    .eq('referral_partner', PARTNER_SLUG)
    .order('booking_date', { ascending: false });

  const rows: ReferralBooking[] = data ?? [];
  const commissionOf = (b: ReferralBooking) =>
    Math.round((b.total_cents * (b.referral_commission_pct ?? 0)) / 100);
  const isBillable = (b: ReferralBooking) => BILLABLE_PAYMENT.has(b.payment_status);

  const sales = new Map<string, { sales: number; gross: number; commission: number }>();
  for (const b of rows) {
    if (!isBillable(b)) continue;
    const month = b.booking_date.slice(0, 7);
    const m = sales.get(month) ?? { sales: 0, gross: 0, commission: 0 };
    m.sales += 1;
    m.gross += b.total_cents;
    m.commission += commissionOf(b);
    sales.set(month, m);
  }

  // Traffic (outbound clicks Fun Zone sent to axe) lives in Fun Zone's PRIVATE
  // DB — never visible to the axe side.
  const trackingDb = getTrackingDb();
  const clicksByMonth = new Map<string, number>();
  let totalClicks = 0;
  const { data: clicks } = await trackingDb
    .from('referral_clicks')
    .select('created_at')
    .eq('partner', PARTNER_SLUG);
  for (const c of (clicks ?? []) as { created_at: string }[]) {
    const month = (c.created_at ?? '').slice(0, 7);
    if (!month) continue;
    clicksByMonth.set(month, (clicksByMonth.get(month) ?? 0) + 1);
    totalClicks += 1;
  }

  const allMonths = [...new Set([...sales.keys(), ...clicksByMonth.keys()])].sort((a, b) => b.localeCompare(a));
  const totalSales = [...sales.values()].reduce((s, m) => s + m.sales, 0);
  const totalCommission = [...sales.values()].reduce((s, m) => s + m.commission, 0);
  const conversion = totalClicks > 0 ? totalSales / totalClicks : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Mes commissions & trafic (Fun Zone)</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Trafic que Fun Zone envoie sur le site de lancer de haches (via <code>?ref=funzone</code>) et
          commission due à 25 %, à facturer chaque mois. Le trafic (clics) est privé à Fun Zone.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Clics envoyés</CardTitle></CardHeader>
          <CardContent><span className="text-2xl font-bold text-white">{totalClicks}</span></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Ventes référées</CardTitle></CardHeader>
          <CardContent><span className="text-2xl font-bold text-white">{totalSales}</span></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Conversion</CardTitle></CardHeader>
          <CardContent><span className="text-2xl font-bold text-white">{pct(conversion)}</span></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Commission à facturer</CardTitle></CardHeader>
          <CardContent><span className="text-2xl font-bold text-[#c9a24b]">{euros(totalCommission)}</span></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Par mois</CardTitle></CardHeader>
        <CardContent>
          {allMonths.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aucune donnée pour le moment.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 text-left text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Mois</th>
                    <th className="py-2 pr-4 font-medium">Clics</th>
                    <th className="py-2 pr-4 font-medium">Ventes</th>
                    <th className="py-2 pr-4 font-medium">Conversion</th>
                    <th className="py-2 pr-4 font-medium">CA brut</th>
                    <th className="py-2 font-medium text-[#c9a24b]">Commission (25%)</th>
                  </tr>
                </thead>
                <tbody>
                  {allMonths.map((month) => {
                    const s = sales.get(month) ?? { sales: 0, gross: 0, commission: 0 };
                    const clicks = clicksByMonth.get(month) ?? 0;
                    const conv = clicks > 0 ? s.sales / clicks : 0;
                    return (
                      <tr key={month} className="border-b border-border/30">
                        <td className="py-2 pr-4 font-medium text-white">{month}</td>
                        <td className="py-2 pr-4 text-muted-foreground">{clicks}</td>
                        <td className="py-2 pr-4 text-muted-foreground">{s.sales}</td>
                        <td className="py-2 pr-4 text-muted-foreground">{clicks > 0 ? pct(conv) : '—'}</td>
                        <td className="py-2 pr-4 text-muted-foreground">{euros(s.gross)}</td>
                        <td className="py-2 font-semibold text-[#c9a24b]">{euros(s.commission)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Détail des ventes</CardTitle></CardHeader>
        <CardContent>
          {rows.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aucune réservation référée.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 text-left text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Réf.</th>
                    <th className="py-2 pr-4 font-medium">Date</th>
                    <th className="py-2 pr-4 font-medium">Client</th>
                    <th className="py-2 pr-4 font-medium">Montant</th>
                    <th className="py-2 pr-4 font-medium">Commission</th>
                    <th className="py-2 font-medium">Paiement</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((b) => (
                    <tr key={b.booking_ref} className={`border-b border-border/30 ${isBillable(b) ? '' : 'opacity-50'}`}>
                      <td className="py-2 pr-4 font-mono text-xs text-white">{b.booking_ref}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{b.booking_date}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{b.customer_name}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{euros(b.total_cents)}</td>
                      <td className="py-2 pr-4 font-semibold text-[#c9a24b]">{euros(commissionOf(b))}</td>
                      <td className="py-2 text-muted-foreground">{b.payment_status}</td>
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
