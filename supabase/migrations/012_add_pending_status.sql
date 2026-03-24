-- Add 'pending' to allowed booking statuses
-- Needed so bookings can be created as pending before Stripe payment
ALTER TABLE bookings DROP CONSTRAINT IF EXISTS bookings_status_check;
ALTER TABLE bookings ADD CONSTRAINT bookings_status_check
  CHECK (status IN ('pending', 'confirmed', 'cancelled', 'modified', 'completed', 'no_show', 'manual'));
