'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Plus,
  Search,
  Printer,
  Loader2,
  FileText,
} from 'lucide-react';

interface Invoice {
  id: string;
  invoice_number: string;
  client_name: string;
  client_nif: string | null;
  client_email: string | null;
  invoice_date: string;
  subtotal_cents: number;
  tax_rate: number;
  tax_cents: number;
  total_cents: number;
  status: string;
  language: string;
}

const statusVariants: Record<string, 'neonGreen' | 'neonOrange' | 'neonBlue' | 'destructive'> = {
  issued: 'neonBlue',
  draft: 'neonOrange',
  paid: 'neonGreen',
  cancelled: 'destructive',
};

function formatCents(cents: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchInvoices = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    const res = await fetch(`/api/admin/invoices?${params}`);
    const data = await res.json();
    setInvoices(Array.isArray(data) ? data : []);
    setLoading(false);
  }, [search]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <Button asChild>
          <Link href="/admin/invoices/new">
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </Link>
        </Button>
      </div>

      <Card className="bg-[#111118] border-border/30">
        <CardHeader className="pb-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search number, client, NIF..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Number</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Client</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">NIF/CIF</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Date</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden sm:table-cell">Subtotal</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden sm:table-cell">Tax</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Total</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Status</th>
                  <th className="text-right py-3 px-3 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className="border-b border-border/10 hover:bg-secondary/20 transition-colors"
                  >
                    <td className="py-3 px-3 font-mono text-xs text-primary">{inv.invoice_number}</td>
                    <td className="py-3 px-3">
                      <div>
                        <p className="font-medium">{inv.client_name}</p>
                        {inv.client_email && (
                          <p className="text-xs text-muted-foreground">{inv.client_email}</p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-3 hidden md:table-cell font-mono text-xs">
                      {inv.client_nif || '—'}
                    </td>
                    <td className="py-3 px-3">{inv.invoice_date}</td>
                    <td className="py-3 px-3 hidden sm:table-cell">{formatCents(inv.subtotal_cents)}</td>
                    <td className="py-3 px-3 hidden sm:table-cell text-xs text-muted-foreground">
                      {formatCents(inv.tax_cents)} ({inv.tax_rate}%)
                    </td>
                    <td className="py-3 px-3 font-semibold">{formatCents(inv.total_cents)}</td>
                    <td className="py-3 px-3">
                      <Badge variant={statusVariants[inv.status] || 'secondary'}>
                        {inv.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        asChild
                      >
                        <Link href={`/admin/invoices/print?id=${inv.id}`} target="_blank">
                          <Printer className="h-4 w-4" />
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
                {invoices.length === 0 && (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-muted-foreground">
                      <FileText className="h-8 w-8 mx-auto mb-2 opacity-40" />
                      No invoices yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
