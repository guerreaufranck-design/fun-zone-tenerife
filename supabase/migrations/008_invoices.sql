-- Invoice system for Axe Throwing Tenerife
CREATE TABLE invoices (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_number text UNIQUE NOT NULL,
  booking_id uuid REFERENCES bookings(id),

  -- Issuer info (cached at invoice creation time)
  issuer_name text NOT NULL,
  issuer_address text NOT NULL,
  issuer_nif text NOT NULL,
  issuer_email text,
  issuer_phone text,

  -- Client info
  client_name text NOT NULL,
  client_address text,
  client_nif text,
  client_email text,

  -- Line items as JSONB array
  -- Each item: { description: string, quantity: number, unit_price_cents: number }
  items jsonb NOT NULL DEFAULT '[]',

  -- Totals
  subtotal_cents integer NOT NULL,
  tax_label text DEFAULT 'IGIC',
  tax_rate numeric(5,2) DEFAULT 7.00,
  tax_cents integer DEFAULT 0,
  total_cents integer NOT NULL,

  -- Dates
  invoice_date date NOT NULL DEFAULT CURRENT_DATE,

  -- Meta
  status text DEFAULT 'issued' CHECK (status IN ('draft', 'issued', 'paid', 'cancelled')),
  language text DEFAULT 'es',
  notes text,

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX idx_invoices_number ON invoices(invoice_number);
CREATE INDEX idx_invoices_booking ON invoices(booking_id);
CREATE INDEX idx_invoices_date ON invoices(invoice_date DESC);

-- Enable RLS
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Admin access policy
CREATE POLICY "Admin full access on invoices"
  ON invoices FOR ALL
  USING (true)
  WITH CHECK (true);
