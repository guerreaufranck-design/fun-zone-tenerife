'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Plus, Trash2, Loader2, Printer } from 'lucide-react';

interface LineItem {
  description: string;
  quantity: number;
  unit_price: string; // in euros, user-facing
}

// Default issuer info
const DEFAULT_ISSUER = {
  name: 'Axe Throwing Tenerife',
  address: 'Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Americas, Arona 38650, Santa Cruz de Tenerife',
  nif: 'X2022269V',
  email: 'axethrowingtenerife@gmail.com',
  phone: '+34 623 362 229',
};

function eurosToCents(euros: string): number {
  return Math.round(parseFloat(euros || '0') * 100);
}

export default function NewInvoicePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [createdId, setCreatedId] = useState<string | null>(null);

  // Issuer
  const [issuerName, setIssuerName] = useState(DEFAULT_ISSUER.name);
  const [issuerAddress, setIssuerAddress] = useState(DEFAULT_ISSUER.address);
  const [issuerNif, setIssuerNif] = useState(DEFAULT_ISSUER.nif);
  const [issuerEmail, setIssuerEmail] = useState(DEFAULT_ISSUER.email);
  const [issuerPhone, setIssuerPhone] = useState(DEFAULT_ISSUER.phone);

  // Client
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientNif, setClientNif] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  // Invoice details
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [taxRate, setTaxRate] = useState('7');
  const [taxLabel, setTaxLabel] = useState('IGIC');
  const [language, setLanguage] = useState('es');
  const [notes, setNotes] = useState('');

  // Line items
  const [items, setItems] = useState<LineItem[]>([
    { description: '', quantity: 1, unit_price: '' },
  ]);

  function addItem() {
    setItems([...items, { description: '', quantity: 1, unit_price: '' }]);
  }

  function removeItem(index: number) {
    setItems(items.filter((_, i) => i !== index));
  }

  function updateItem(index: number, field: keyof LineItem, value: string | number) {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  }

  // Calculations
  const subtotalCents = items.reduce(
    (sum, item) => sum + item.quantity * eurosToCents(item.unit_price),
    0
  );
  const taxRateNum = parseFloat(taxRate) || 0;
  const taxCents = Math.round(subtotalCents * (taxRateNum / 100));
  const totalCents = subtotalCents + taxCents;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!clientName.trim()) {
      alert('Client name is required');
      return;
    }
    if (items.length === 0 || !items[0].description.trim()) {
      alert('At least one line item is required');
      return;
    }

    setSaving(true);

    const payload = {
      issuer_name: issuerName,
      issuer_address: issuerAddress,
      issuer_nif: issuerNif,
      issuer_email: issuerEmail,
      issuer_phone: issuerPhone,
      client_name: clientName,
      client_address: clientAddress,
      client_nif: clientNif,
      client_email: clientEmail,
      items: items.map((item) => ({
        description: item.description,
        quantity: item.quantity,
        unit_price_cents: eurosToCents(item.unit_price),
      })),
      tax_rate: taxRateNum,
      tax_label: taxLabel,
      invoice_date: invoiceDate,
      language,
      notes: notes || null,
      status: 'issued',
    };

    try {
      const res = await fetch('/api/admin/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to create invoice');
      }

      const invoice = await res.json();
      setCreatedId(invoice.id);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error creating invoice');
    } finally {
      setSaving(false);
    }
  }

  // Success state
  if (createdId) {
    return (
      <div className="max-w-lg mx-auto py-12 text-center space-y-6">
        <div className="text-6xl">✅</div>
        <h2 className="text-2xl font-bold">Invoice Created!</h2>
        <p className="text-muted-foreground">The invoice has been generated successfully.</p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link href={`/admin/invoices/print?id=${createdId}`} target="_blank">
              <Printer className="h-4 w-4 mr-2" />
              Print / Export PDF
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/invoices">Back to Invoices</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/invoices">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">New Invoice</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Issuer & Client side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Issuer */}
          <Card className="bg-[#111118] border-border/30">
            <CardHeader>
              <CardTitle className="text-base">From (Issuer)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground">Business Name</label>
                <Input value={issuerName} onChange={(e) => setIssuerName(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Address</label>
                <Input value={issuerAddress} onChange={(e) => setIssuerAddress(e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-muted-foreground">NIF/NIE</label>
                  <Input value={issuerNif} onChange={(e) => setIssuerNif(e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Phone</label>
                  <Input value={issuerPhone} onChange={(e) => setIssuerPhone(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <Input value={issuerEmail} onChange={(e) => setIssuerEmail(e.target.value)} />
              </div>
            </CardContent>
          </Card>

          {/* Client */}
          <Card className="bg-[#111118] border-border/30">
            <CardHeader>
              <CardTitle className="text-base">To (Client)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground">Client Name *</label>
                <Input value={clientName} onChange={(e) => setClientName(e.target.value)} required />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Address</label>
                <Input value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">CIF/NIF</label>
                <Input value={clientNif} onChange={(e) => setClientNif(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <Input value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Invoice details */}
        <Card className="bg-[#111118] border-border/30">
          <CardHeader>
            <CardTitle className="text-base">Invoice Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="text-xs text-muted-foreground">Date</label>
                <Input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Tax Label</label>
                <Input value={taxLabel} onChange={(e) => setTaxLabel(e.target.value)} placeholder="IGIC" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Tax Rate (%)</label>
                <Input type="number" step="0.01" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>

            {/* Line items */}
            <div className="space-y-3">
              <div className="grid grid-cols-[1fr_80px_120px_40px] gap-3 text-xs text-muted-foreground font-medium">
                <span>Description</span>
                <span>Qty</span>
                <span>Unit Price (€)</span>
                <span></span>
              </div>
              {items.map((item, i) => (
                <div key={i} className="grid grid-cols-[1fr_80px_120px_40px] gap-3">
                  <Input
                    placeholder="Service description..."
                    value={item.description}
                    onChange={(e) => updateItem(i, 'description', e.target.value)}
                  />
                  <Input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => updateItem(i, 'quantity', parseInt(e.target.value) || 1)}
                  />
                  <Input
                    type="number"
                    step="0.01"
                    min={0}
                    placeholder="0.00"
                    value={item.unit_price}
                    onChange={(e) => updateItem(i, 'unit_price', e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 text-destructive"
                    onClick={() => removeItem(i)}
                    disabled={items.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={addItem}>
                <Plus className="h-3 w-3 mr-1" /> Add Line
              </Button>
            </div>

            {/* Totals */}
            <div className="mt-6 pt-4 border-t border-border/30 space-y-2 text-sm max-w-xs ml-auto">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>€{(subtotalCents / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{taxLabel} ({taxRate}%)</span>
                <span>€{(taxCents / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-border/30">
                <span>Total</span>
                <span className="text-primary">€{(totalCents / 100).toFixed(2)}</span>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-6">
              <label className="text-xs text-muted-foreground">Notes (optional)</label>
              <textarea
                className="w-full mt-1 rounded-md border border-border bg-background px-3 py-2 text-sm resize-none"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Additional notes for the invoice..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/invoices">Cancel</Link>
          </Button>
          <Button type="submit" disabled={saving}>
            {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Create Invoice
          </Button>
        </div>
      </form>
    </div>
  );
}
