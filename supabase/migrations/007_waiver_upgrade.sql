-- Waiver legal upgrade: add signature, email, DOB, reference number
ALTER TABLE waivers
  ADD COLUMN email text,
  ADD COLUMN date_of_birth date,
  ADD COLUMN signature_data text,
  ADD COLUMN waiver_ref text UNIQUE,
  ADD COLUMN language text DEFAULT 'en';

-- Index for reference lookups
CREATE INDEX idx_waivers_ref ON waivers(waiver_ref);

-- Index for email lookups
CREATE INDEX idx_waivers_email ON waivers(email);
