-- Track review request email status on waivers
ALTER TABLE waivers ADD COLUMN IF NOT EXISTS review_email_sent boolean DEFAULT false;
