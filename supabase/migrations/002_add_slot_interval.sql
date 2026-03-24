-- Add slot_interval_minutes to offers (configurable per product: 30 or 60 minutes)
ALTER TABLE offers ADD COLUMN IF NOT EXISTS slot_interval_minutes int DEFAULT 60;

-- Update existing offers: axe offers default to 60min, shorter offers to 30min
UPDATE offers SET slot_interval_minutes = 60 WHERE lane_type = 'axe';
UPDATE offers SET slot_interval_minutes = 30 WHERE lane_type IN ('darts_pixels', 'classic_darts');
UPDATE offers SET slot_interval_minutes = 30 WHERE slug = 'ninja-initiation';
