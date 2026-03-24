-- Add reviewed flag to waivers table
ALTER TABLE waivers ADD COLUMN IF NOT EXISTS reviewed boolean NOT NULL DEFAULT false;
