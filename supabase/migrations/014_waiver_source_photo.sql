-- Discovery source: how did you hear about us
ALTER TABLE waivers ADD COLUMN IF NOT EXISTS discovery_source text;
ALTER TABLE waivers ADD COLUMN IF NOT EXISTS discovery_source_other text;

-- Photo/video consent for social media
ALTER TABLE waivers ADD COLUMN IF NOT EXISTS photo_consent boolean;
