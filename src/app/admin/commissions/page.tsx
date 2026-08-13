import { createAdminClient } from '@/lib/supabase/admin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

// Fun Zone's own OTA slug on the axe site (matches partners.slug there).
const PARTNER_SLUG = 'funzone';

function euros(cents: number) {
  return (cents / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}

interface ReferralBooking {
  booking_ref: string;
  booking_date: string;
  customer_name: string;
  total_cents: number;
  referral_commission_pct: number | null;
  payment_status: string;
}

// Billable once the customer has at least paid the deposit.
const BILLABLE_PAYMENT = new Set(['paid', 'partial']);

export default async function CommissionsPage() {
  const supabase = createAdminClient();

  // Reads the shared axe/funzone Supabase directly (referral_partner /
  // referral_commission_pct come from migration 022, not yet in generated
  // types → loose query). NOTE: after the axe sale separates the DB, switch
  // this to the axe partner read-API.
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

  const months = new Map<string, { sales: number; gross: number; commission: number }>();
  for (const b of rows) {
    if (!isBillable(b)) continue;
    const month = b.booking_date.slice(0, 7);
    const m = months.get(month) ?? { sales: 0, gross: 0, commission: 0 };
    m.sales += 1;
    m.gross += b.total_cents;
    m.commission += commissionOf(b);
    months.set(month, m);
  }
  const monthRows = [...months.entries()].sort((a, b) => b[0].localeCompare(a[0]));
  const totalCommission = monthRows.reduce((s, [, m]) => s + m.commission, 0);
  const totalGross = monthRows.reduce((s, [, m]) => s + m.gross, 0);
  const totalSales = monthRows.reduce((s, [, m]) => s + m.sales, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Mes commissions (Fun Zone)</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Ventes que Fun Zone a envoyées sur le site de lancer de haches (via <code>?ref=funzone</code>),
          avec la commission due à 25 %. À facturer une fois par mois. Facturable dès l&apos;acompte payé.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Ventes référées</CardTitle></CardHeader>
          <CardContent><span className="text-2xl font-bold text-white">{totalSales}</span></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">CA généré (brut)</CardTitle></CardHeader>
          <CardContent><span className="text-2xl font-bold text-white">{euros(totalGross)}</span></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Commission à facturer</CardTitle></CardHeader>
          <CardContent><span className="text-2xl font-bold text-[#c9a24b]">{euros(totalCommission)}</span></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Par mois (à facturer)</CardTitle></CardHeader>
        <CardContent>
          {monthRows.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aucune vente référée pour le moment.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 text-left text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Mois</th>
                    <th className="py-2 pr-4 font-medium">Ventes</th>
                    <th className="py-2 pr-4 font-medium">CA brut</th>
                    <th className="py-2 font-medium text-[#c9a24b]">Commission (25%)</th>
                  </tr>
                </thead>
                <tbody>
                  {monthRows.map(([month, m]) => (
                    <tr key={month} className="border-b border-border/30">
                      <td className="py-2 pr-4 font-medium text-white">{month}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{m.sales}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{euros(m.gross)}</td>
                      <td className="py-2 font-semibold text-[#c9a24b]">{euros(m.commission)}</td>
                    </tr>
                  ))}
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
