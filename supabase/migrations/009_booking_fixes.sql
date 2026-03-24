-- Allow updates and deletes on bookings (needed for admin cancel/delete)
CREATE POLICY "Public update bookings" ON bookings FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Public delete bookings" ON bookings FOR DELETE USING (true);

-- Add backoffice_only flag to offers (for Get Your Guide, BonosVIP etc.)
ALTER TABLE offers ADD COLUMN IF NOT EXISTS backoffice_only boolean DEFAULT false;

-- Add reminder_sent and modification_token to bookings if not exists
-- (ensuring manual bookings can receive reminders)
ALTER TABLE bookings ALTER COLUMN reminder_sent SET DEFAULT false;
