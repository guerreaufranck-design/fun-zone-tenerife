-- Fix minimum age for axe throwing offers: must be 14+ (accompanied by adult)
-- Below 14 (8-14), only archery (bows) is available
UPDATE offers SET age_min = 14 WHERE slug IN ('traditional-axe-1h', 'premium-axe-2h');
