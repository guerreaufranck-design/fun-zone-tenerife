'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

interface InvoiceItem {
  description: string;
  quantity: number;
  unit_price_cents: number;
}

interface Invoice {
  id: string;
  invoice_number: string;
  issuer_name: string;
  issuer_address: string;
  issuer_nif: string;
  issuer_email: string | null;
  issuer_phone: string | null;
  client_name: string;
  client_address: string | null;
  client_nif: string | null;
  client_email: string | null;
  items: InvoiceItem[];
  subtotal_cents: number;
  tax_label: string;
  tax_rate: number;
  tax_cents: number;
  total_cents: number;
  invoice_date: string;
  status: string;
  language: string;
  notes: string | null;
}

const labels: Record<string, Record<string, string>> = {
  es: {
    invoice: 'FACTURA',
    date: 'Fecha',
    invoiceNumber: 'N\u00famero de factura',
    from: 'De',
    to: 'Cliente',
    nif: 'NIF/CIF',
    description: 'Descripci\u00f3n',
    quantity: 'Cant.',
    unitPrice: 'Precio unitario',
    amount: 'Importe',
    subtotal: 'Base imponible',
    total: 'TOTAL',
    notes: 'Notas',
    phone: 'Tel',
    email: 'Email',
  },
  en: {
    invoice: 'INVOICE',
    date: 'Date',
    invoiceNumber: 'Invoice Number',
    from: 'From',
    to: 'Bill To',
    nif: 'Tax ID',
    description: 'Description',
    quantity: 'Qty',
    unitPrice: 'Unit Price',
    amount: 'Amount',
    subtotal: 'Subtotal',
    total: 'TOTAL',
    notes: 'Notes',
    phone: 'Phone',
    email: 'Email',
  },
  fr: {
    invoice: 'FACTURE',
    date: 'Date',
    invoiceNumber: 'Num\u00e9ro de facture',
    from: 'De',
    to: 'Client',
    nif: 'N\u00b0 fiscal',
    description: 'Description',
    quantity: 'Qt\u00e9',
    unitPrice: 'Prix unitaire',
    amount: 'Montant',
    subtotal: 'Sous-total HT',
    total: 'TOTAL',
    notes: 'Notes',
    phone: 'T\u00e9l',
    email: 'Email',
  },
  de: {
    invoice: 'RECHNUNG',
    date: 'Datum',
    invoiceNumber: 'Rechnungsnummer',
    from: 'Von',
    to: 'An',
    nif: 'Steuernummer',
    description: 'Beschreibung',
    quantity: 'Menge',
    unitPrice: 'Einzelpreis',
    amount: 'Betrag',
    subtotal: 'Zwischensumme',
    total: 'GESAMT',
    notes: 'Anmerkungen',
    phone: 'Tel',
    email: 'E-Mail',
  },
};

function formatCents(cents: number): string {
  return (cents / 100).toFixed(2).replace('.', ',') + ' \u20ac';
}

function formatDate(dateStr: string, lang: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  const locale = lang === 'es' ? 'es-ES' : lang === 'fr' ? 'fr-FR' : lang === 'de' ? 'de-DE' : 'en-GB';
  return d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function InvoicePrintPage() {
  const searchParams = useSearchParams();
  const invoiceId = searchParams.get('id');
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!invoiceId) return;
    async function load() {
      const res = await fetch(`/api/admin/invoices?search=`);
      const all = await res.json();
      const found = Array.isArray(all) ? all.find((inv: Invoice) => inv.id === invoiceId) : null;
      setInvoice(found || null);
      setLoading(false);
    }
    load();
  }, [invoiceId]);

  const handleDownloadPDF = useCallback(async () => {
    if (!invoiceRef.current || !invoice) return;
    setDownloading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const html2pdf = (await import('html2pdf.js' as any)).default;
      const element = invoiceRef.current;
      await html2pdf()
        .set({
          margin: 0,
          filename: `${invoice.invoice_number}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, letterRendering: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .from(element)
        .save();
    } catch (err) {
      console.error('PDF generation error:', err);
      alert('Error generating PDF. Try using Print (Ctrl+P) instead.');
    } finally {
      setDownloading(false);
    }
  }, [invoice]);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <p style={{ color: '#999', fontSize: '14px' }}>Loading invoice...</p>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <p style={{ color: '#999', fontSize: '14px' }}>Invoice not found</p>
      </div>
    );
  }

  const t = labels[invoice.language] || labels.es;

  return (
    <>
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          @page { margin: 0; size: A4; }
          .no-print { display: none !important; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #f0f0f0; }
      `}</style>

      {/* Action buttons — hidden on print */}
      <div className="no-print" style={{
        position: 'fixed', top: '16px', right: '16px', zIndex: 50,
        display: 'flex', gap: '8px', fontFamily: 'Arial, Helvetica, sans-serif',
      }}>
        <button
          onClick={handleDownloadPDF}
          disabled={downloading}
          style={{
            background: '#2563eb', color: '#fff', padding: '10px 20px',
            borderRadius: '8px', fontSize: '14px', fontWeight: 600,
            border: 'none', cursor: downloading ? 'wait' : 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            opacity: downloading ? 0.7 : 1,
          }}
        >
          {downloading ? 'Generating...' : 'Download PDF'}
        </button>
        <button
          onClick={() => window.print()}
          style={{
            background: '#f3f4f6', color: '#374151', padding: '10px 20px',
            borderRadius: '8px', fontSize: '14px', fontWeight: 600,
            border: '1px solid #d1d5db', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          Print
        </button>
        <button
          onClick={() => window.close()}
          style={{
            background: '#f3f4f6', color: '#374151', padding: '10px 16px',
            borderRadius: '8px', fontSize: '14px', fontWeight: 600,
            border: '1px solid #d1d5db', cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>

      {/* Invoice content — all inline styles for PDF reliability */}
      <div
        ref={invoiceRef}
        style={{
          width: '210mm',
          minHeight: '297mm',
          margin: '0 auto',
          background: '#ffffff',
          padding: '20mm',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: '13px',
          lineHeight: '1.5',
          color: '#111827',
        }}
      >
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
              {t.invoice}
            </h1>
            <p style={{ color: '#6b7280', margin: '4px 0', fontSize: '13px' }}>
              {t.invoiceNumber}: <span style={{ fontFamily: 'Courier New, monospace', fontWeight: 700, color: '#1f2937' }}>{invoice.invoice_number}</span>
            </p>
            <p style={{ color: '#6b7280', margin: '4px 0', fontSize: '13px' }}>
              {t.date}: <span style={{ fontWeight: 600, color: '#1f2937' }}>{formatDate(invoice.invoice_date, invoice.language)}</span>
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#2563eb', letterSpacing: '3px' }}>AXT</div>
            <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>Axe Throwing Tenerife</p>
          </div>
        </div>

        {/* From / To boxes */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
          <div style={{ flex: 1, background: '#f9fafb', borderRadius: '8px', padding: '20px', border: '1px solid #f3f4f6' }}>
            <h3 style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px 0' }}>
              {t.from}
            </h3>
            <p style={{ fontWeight: 700, color: '#111827', fontSize: '14px', margin: '0 0 4px 0' }}>{invoice.issuer_name}</p>
            <p style={{ color: '#4b5563', margin: '4px 0', fontSize: '12px' }}>{invoice.issuer_address}</p>
            <p style={{ color: '#4b5563', margin: '8px 0 0 0', fontSize: '12px' }}>
              {t.nif}: <span style={{ fontFamily: 'Courier New, monospace', fontWeight: 600 }}>{invoice.issuer_nif}</span>
            </p>
            {invoice.issuer_phone && (
              <p style={{ color: '#4b5563', margin: '2px 0', fontSize: '12px' }}>{t.phone}: {invoice.issuer_phone}</p>
            )}
            {invoice.issuer_email && (
              <p style={{ color: '#4b5563', margin: '2px 0', fontSize: '12px' }}>{t.email}: {invoice.issuer_email}</p>
            )}
          </div>
          <div style={{ flex: 1, background: '#f9fafb', borderRadius: '8px', padding: '20px', border: '1px solid #f3f4f6' }}>
            <h3 style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px 0' }}>
              {t.to}
            </h3>
            <p style={{ fontWeight: 700, color: '#111827', fontSize: '14px', margin: '0 0 4px 0' }}>{invoice.client_name}</p>
            {invoice.client_address && (
              <p style={{ color: '#4b5563', margin: '4px 0', fontSize: '12px' }}>{invoice.client_address}</p>
            )}
            {invoice.client_nif && (
              <p style={{ color: '#4b5563', margin: '8px 0 0 0', fontSize: '12px' }}>
                {t.nif}: <span style={{ fontFamily: 'Courier New, monospace', fontWeight: 600 }}>{invoice.client_nif}</span>
              </p>
            )}
            {invoice.client_email && (
              <p style={{ color: '#4b5563', margin: '2px 0', fontSize: '12px' }}>{t.email}: {invoice.client_email}</p>
            )}
          </div>
        </div>

        {/* Items table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
              <th style={{ textAlign: 'left', padding: '12px 0', fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {t.description}
              </th>
              <th style={{ textAlign: 'center', padding: '12px 0', fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', width: '70px' }}>
                {t.quantity}
              </th>
              <th style={{ textAlign: 'right', padding: '12px 0', fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', width: '120px' }}>
                {t.unitPrice}
              </th>
              <th style={{ textAlign: 'right', padding: '12px 0', fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', width: '120px' }}>
                {t.amount}
              </th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '14px 8px 14px 0', color: '#1f2937', fontSize: '13px' }}>{item.description}</td>
                <td style={{ padding: '14px 0', textAlign: 'center', color: '#4b5563', fontSize: '13px' }}>{item.quantity}</td>
                <td style={{ padding: '14px 0', textAlign: 'right', color: '#4b5563', fontSize: '13px' }}>{formatCents(item.unit_price_cents)}</td>
                <td style={{ padding: '14px 0', textAlign: 'right', fontWeight: 600, color: '#1f2937', fontSize: '13px' }}>{formatCents(item.quantity * item.unit_price_cents)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
          <div style={{ width: '260px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
              <span style={{ color: '#6b7280', fontSize: '13px' }}>{t.subtotal}</span>
              <span style={{ fontWeight: 600, fontSize: '13px' }}>{formatCents(invoice.subtotal_cents)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
              <span style={{ color: '#6b7280', fontSize: '13px' }}>{invoice.tax_label} ({invoice.tax_rate}%)</span>
              <span style={{ fontWeight: 600, fontSize: '13px' }}>{formatCents(invoice.tax_cents)}</span>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '12px 0', marginTop: '8px',
              borderTop: '2px solid #111827',
              fontSize: '18px', fontWeight: 800,
            }}>
              <span>{t.total}</span>
              <span style={{ color: '#2563eb' }}>{formatCents(invoice.total_cents)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {invoice.notes && (
          <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #f3f4f6' }}>
            <h3 style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 8px 0' }}>
              {t.notes}
            </h3>
            <p style={{ color: '#4b5563', margin: 0, fontSize: '12px', whiteSpace: 'pre-line' }}>{invoice.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px', textAlign: 'center', fontSize: '10px', color: '#9ca3af' }}>
          <p style={{ margin: '0 0 4px 0' }}>{invoice.issuer_name} &middot; {invoice.issuer_nif} &middot; {invoice.issuer_address}</p>
          {invoice.issuer_email && (
            <p style={{ margin: 0 }}>{invoice.issuer_email} &middot; {invoice.issuer_phone}</p>
          )}
        </div>
      </div>
    </>
  );
}
