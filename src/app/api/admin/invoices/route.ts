import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// GET /api/admin/invoices — list all invoices
export async function GET(req: NextRequest) {
  const supabase = createAdminClient();
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  let query = supabase
    .from("invoices")
    .select("*")
    .order("invoice_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (search) {
    query = query.or(
      `invoice_number.ilike.%${search}%,client_name.ilike.%${search}%,client_nif.ilike.%${search}%`
    );
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data || []);
}

// POST /api/admin/invoices — create a new invoice
export async function POST(req: NextRequest) {
  const supabase = createAdminClient();
  const body = await req.json();

  // Generate next invoice number: FAC-YYYY-NNNN
  const year = new Date().getFullYear();
  const { data: lastInvoice } = await supabase
    .from("invoices")
    .select("invoice_number")
    .like("invoice_number", `FAC-${year}-%`)
    .order("invoice_number", { ascending: false })
    .limit(1)
    .maybeSingle();

  let nextNum = 1;
  if (lastInvoice?.invoice_number) {
    const parts = lastInvoice.invoice_number.split("-");
    nextNum = parseInt(parts[2], 10) + 1;
  }

  const invoiceNumber = `FAC-${year}-${String(nextNum).padStart(4, "0")}`;

  // Calculate totals from items
  const items = body.items || [];
  const subtotalCents = items.reduce(
    (sum: number, item: { quantity: number; unit_price_cents: number }) =>
      sum + item.quantity * item.unit_price_cents,
    0
  );
  const taxRate = parseFloat(body.tax_rate ?? 7);
  const taxCents = Math.round(subtotalCents * (taxRate / 100));
  const totalCents = subtotalCents + taxCents;

  const invoiceData = {
    invoice_number: invoiceNumber,
    booking_id: body.booking_id || null,
    issuer_name: body.issuer_name,
    issuer_address: body.issuer_address,
    issuer_nif: body.issuer_nif,
    issuer_email: body.issuer_email || null,
    issuer_phone: body.issuer_phone || null,
    client_name: body.client_name,
    client_address: body.client_address || null,
    client_nif: body.client_nif || null,
    client_email: body.client_email || null,
    items,
    subtotal_cents: subtotalCents,
    tax_label: body.tax_label || "IGIC",
    tax_rate: taxRate,
    tax_cents: taxCents,
    total_cents: totalCents,
    invoice_date: body.invoice_date || new Date().toISOString().split("T")[0],
    status: body.status || "issued",
    language: body.language || "es",
    notes: body.notes || null,
  };

  const { data, error } = await supabase
    .from("invoices")
    .insert(invoiceData)
    .select()
    .single();

  if (error) {
    console.error("Invoice creation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
