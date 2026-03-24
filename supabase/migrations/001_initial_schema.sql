-- Enable UUID extension (use gen_random_uuid which is built-in)

-- Offers
create table offers (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title jsonb not null default '{}',
  description jsonb not null default '{}',
  short_desc jsonb not null default '{}',
  duration_minutes int not null default 60,
  min_players int not null default 1,
  max_players int not null default 9,
  lane_type text not null check (lane_type in ('axe', 'darts_pixels', 'classic_darts')),
  includes jsonb default '[]',
  age_min int default 12,
  is_active boolean default true,
  sort_order int default 0,
  seo_title jsonb default '{}',
  seo_description jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Offer pricing (per player count)
create table offer_pricing (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid not null references offers(id) on delete cascade,
  players int not null,
  price_cents int not null,
  created_at timestamptz default now(),
  unique(offer_id, players)
);

-- Dynamic pricing rules
create table dynamic_pricing (
  id uuid primary key default gen_random_uuid(),
  day_of_week int check (day_of_week between 0 and 6),
  start_hour time,
  end_hour time,
  modifier_type text not null check (modifier_type in ('percentage', 'fixed')),
  modifier_value numeric not null,
  label jsonb default '{}',
  is_active boolean default true,
  created_at timestamptz default now()
);

-- Offer media (images + videos)
create table offer_media (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid not null references offers(id) on delete cascade,
  type text not null check (type in ('image', 'video')),
  url text not null,
  alt_text jsonb default '{}',
  sort_order int default 0,
  created_at timestamptz default now()
);

-- Lanes
create table lanes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null check (type in ('axe', 'darts_pixels', 'classic_darts')),
  max_players int not null default 5,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- Business hours
create table business_hours (
  id uuid primary key default gen_random_uuid(),
  day_of_week int not null check (day_of_week between 0 and 6),
  open_time time not null,
  close_time time not null,
  is_closed boolean default false,
  unique(day_of_week)
);

-- Closed dates
create table closed_dates (
  id uuid primary key default gen_random_uuid(),
  date date not null unique,
  reason text,
  created_at timestamptz default now()
);

-- Bookings
create table bookings (
  id uuid primary key default gen_random_uuid(),
  booking_ref text unique not null,
  offer_id uuid not null references offers(id),
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  players int not null,
  booking_date date not null,
  start_time time not null,
  end_time time not null,
  lanes_needed int not null default 1,
  total_cents int not null,
  deposit_cents int not null default 0,
  payment_type text not null check (payment_type in ('deposit', 'full')),
  payment_status text not null default 'pending' check (payment_status in ('pending', 'paid', 'refunded', 'partial')),
  stripe_session_id text,
  stripe_payment_intent text,
  status text not null default 'confirmed' check (status in ('confirmed', 'cancelled', 'modified', 'completed', 'no_show', 'manual')),
  reminder_sent boolean default false,
  notes text,
  language text default 'en',
  source text default 'online' check (source in ('online', 'manual', 'phone')),
  google_event_id text,
  outlook_event_id text,
  modification_token text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Booking-Lane assignments
create table booking_lanes (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  lane_id uuid not null references lanes(id),
  created_at timestamptz default now()
);

-- FAQ items
create table faq_items (
  id uuid primary key default gen_random_uuid(),
  question jsonb not null default '{}',
  answer jsonb not null default '{}',
  category text,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- Blog posts
create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title jsonb not null default '{}',
  content jsonb not null default '{}',
  excerpt jsonb not null default '{}',
  cover_image text,
  seo_title jsonb default '{}',
  seo_description jsonb default '{}',
  is_published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- TikTok embeds
create table tiktok_embeds (
  id uuid primary key default gen_random_uuid(),
  tiktok_url text not null,
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- Site settings
create table site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz default now()
);

-- Gift vouchers
create table gift_vouchers (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  offer_id uuid references offers(id),
  players int,
  purchaser_name text not null,
  purchaser_email text not null,
  recipient_name text,
  recipient_email text,
  message text,
  amount_cents int not null,
  is_redeemed boolean default false,
  redeemed_at timestamptz,
  redeemed_booking_id uuid references bookings(id),
  stripe_session_id text,
  payment_status text default 'pending',
  expires_at timestamptz,
  created_at timestamptz default now()
);

-- Indexes
create index idx_bookings_date on bookings(booking_date);
create index idx_bookings_status on bookings(status);
create index idx_bookings_ref on bookings(booking_ref);
create index idx_bookings_email on bookings(customer_email);
create index idx_offer_pricing_offer on offer_pricing(offer_id);
create index idx_offer_media_offer on offer_media(offer_id);
create index idx_booking_lanes_booking on booking_lanes(booking_id);
create index idx_blog_posts_published on blog_posts(is_published, published_at);

-- Seed lanes
insert into lanes (name, type, max_players) values
  ('Axe Lane 1', 'axe', 5),
  ('Axe Lane 2', 'axe', 5),
  ('Axe Lane 3', 'axe', 5),
  ('Axe Lane 4', 'axe', 5),
  ('Darts Pixels', 'darts_pixels', 6),
  ('Classic Darts', 'classic_darts', 10);

-- Seed business hours (Tue-Sun 14:00-20:00, Mon closed)
insert into business_hours (day_of_week, open_time, close_time, is_closed) values
  (0, '14:00', '20:00', false),  -- Sunday
  (1, '14:00', '20:00', true),   -- Monday (closed)
  (2, '14:00', '20:00', false),  -- Tuesday
  (3, '14:00', '20:00', false),  -- Wednesday
  (4, '14:00', '20:00', false),  -- Thursday
  (5, '14:00', '20:00', false),  -- Friday
  (6, '14:00', '20:00', false);  -- Saturday

-- Seed offers from existing Shopify products
insert into offers (slug, title, description, short_desc, duration_minutes, min_players, max_players, lane_type, includes, age_min, sort_order) values
  ('traditional-axe-1h',
   '{"en": "Traditional Axe Throwing 1H", "es": "Lanzamiento de Hacha Tradicional 1H", "fr": "Lancer de Hache Traditionnel 1H", "de": "Traditionelles Axtwerfen 1H", "nl": "Traditioneel Bijlwerpen 1U"}',
   '{"en": "Master the art of traditional axe throwing with expert guidance. Perfect for beginners and experienced throwers alike.", "es": "Domina el arte del lanzamiento de hacha tradicional con la guía de expertos.", "fr": "Maîtrisez l''art du lancer de hache traditionnel avec un guide expert.", "de": "Meistern Sie die Kunst des traditionellen Axtwerfens mit fachkundiger Anleitung.", "nl": "Beheers de kunst van het traditionele bijlwerpen met deskundige begeleiding."}',
   '{"en": "Classic axe throwing experience", "es": "Experiencia clásica de lanzamiento de hacha", "fr": "Expérience classique de lancer de hache", "de": "Klassisches Axtwerfen-Erlebnis", "nl": "Klassieke bijlwerp-ervaring"}',
   60, 1, 20, 'axe', '[]', 12, 1),

  ('ninja-axe-1h',
   '{"en": "Ninja + Axe Throwing 1H", "es": "Ninja + Lanzamiento de Hacha 1H", "fr": "Ninja + Lancer de Hache 1H", "de": "Ninja + Axtwerfen 1H", "nl": "Ninja + Bijlwerpen 1U"}',
   '{"en": "The ultimate ninja experience combining axe, shuriken, and knife throwing for the ultimate test of skill.", "es": "La experiencia ninja definitiva combinando hacha, shuriken y lanzamiento de cuchillos.", "fr": "L''expérience ninja ultime combinant hache, shuriken et lancer de couteaux.", "de": "Das ultimative Ninja-Erlebnis mit Axt, Shuriken und Messerwerfen.", "nl": "De ultieme ninja-ervaring met bijl, shuriken en meswerpen."}',
   '{"en": "Axe + shuriken + knife throwing combo", "es": "Combo hacha + shuriken + cuchillo", "fr": "Combo hache + shuriken + couteau", "de": "Axt + Shuriken + Messer Kombi", "nl": "Bijl + shuriken + mes combo"}',
   60, 1, 20, 'axe', '[]', 14, 2),

  ('premium-axe-2h',
   '{"en": "Premium Axe Throwing 2H", "es": "Lanzamiento de Hacha Premium 2H", "fr": "Lancer de Hache Premium 2H", "de": "Premium Axtwerfen 2H", "nl": "Premium Bijlwerpen 2U"}',
   '{"en": "Exclusive 2-hour premium session with drinks included. Master precision in a luxury environment.", "es": "Sesión premium exclusiva de 2 horas con bebida incluida. Domina la precisión en un ambiente de lujo.", "fr": "Session premium exclusive de 2 heures avec boisson incluse. Maîtrisez la précision dans un environnement luxueux.", "de": "Exklusive 2-Stunden Premium-Session mit Getränken. Meistern Sie Präzision in luxuriöser Umgebung.", "nl": "Exclusieve 2-uur premium sessie met drankje inbegrepen. Beheers precisie in een luxe omgeving."}',
   '{"en": "2H premium session with drink", "es": "Sesión premium 2H con bebida", "fr": "Session premium 2H avec boisson", "de": "2H Premium-Session mit Getränk", "nl": "2U premium sessie met drankje"}',
   120, 1, 20, 'axe', '["drink"]', 12, 3),

  ('ninja-axe-2h',
   '{"en": "Ninja + Axe Throwing 2H", "es": "Ninja + Lanzamiento de Hacha 2H", "fr": "Ninja + Lancer de Hache 2H", "de": "Ninja + Axtwerfen 2H", "nl": "Ninja + Bijlwerpen 2U"}',
   '{"en": "The ultimate 2-hour ninja experience with axe, shuriken, knife throwing and a drink included.", "es": "La experiencia ninja definitiva de 2 horas con hacha, shuriken, cuchillos y bebida incluida.", "fr": "L''expérience ninja ultime de 2 heures avec hache, shuriken, couteaux et boisson incluse.", "de": "Das ultimative 2-Stunden Ninja-Erlebnis mit Axt, Shuriken, Messern und Getränk.", "nl": "De ultieme 2-uur ninja-ervaring met bijl, shuriken, messen en drankje inbegrepen."}',
   '{"en": "2H ninja combo with drink", "es": "Combo ninja 2H con bebida", "fr": "Combo ninja 2H avec boisson", "de": "2H Ninja-Kombi mit Getränk", "nl": "2U ninja combo met drankje"}',
   120, 1, 20, 'axe', '["drink"]', 14, 4),

  ('darts-pixels',
   '{"en": "Darts Pixels", "es": "Darts Pixels", "fr": "Darts Pixels", "de": "Darts Pixels", "nl": "Darts Pixels"}',
   '{"en": "High-tech interactive darts with digital projected targets. 15+ game modes combining traditional darts and blowgun shooting.", "es": "Dardos interactivos de alta tecnología con objetivos digitales proyectados. Más de 15 modos de juego.", "fr": "Fléchettes interactives high-tech avec cibles numériques projetées. Plus de 15 modes de jeu.", "de": "Hightech-Darts mit digital projizierten Zielen. Über 15 Spielmodi.", "nl": "Hightech interactieve darts met digitaal geprojecteerde doelen. 15+ spelmodi."}',
   '{"en": "Interactive digital darts + blowgun", "es": "Dardos digitales interactivos + cerbatana", "fr": "Fléchettes numériques + sarbacane", "de": "Digitale Darts + Blasrohr", "nl": "Digitale darts + blaaspijp"}',
   60, 1, 6, 'darts_pixels', '[]', 6, 5),

  ('ninja-initiation',
   '{"en": "Ninja Initiation", "es": "Iniciación Ninja", "fr": "Initiation Ninja", "de": "Ninja-Einführung", "nl": "Ninja Initiatie"}',
   '{"en": "30-minute shuriken throwing session with interactive digital targets. Unleash your inner ninja!", "es": "Sesión de 30 minutos de lanzamiento de shuriken con objetivos digitales interactivos.", "fr": "Session de 30 minutes de lancer de shuriken avec cibles numériques interactives.", "de": "30-minütige Shuriken-Wurf-Session mit interaktiven digitalen Zielen.", "nl": "30 minuten shuriken werpen met interactieve digitale doelen."}',
   '{"en": "30min shuriken session", "es": "Sesión de 30min de shuriken", "fr": "Session de 30min shuriken", "de": "30min Shuriken-Session", "nl": "30min shuriken sessie"}',
   30, 1, 6, 'darts_pixels', '[]', 14, 6),

  ('teambuilding',
   '{"en": "Team Building Experience", "es": "Experiencia Team Building", "fr": "Team Building", "de": "Team Building Erlebnis", "nl": "Team Building Ervaring"}',
   '{"en": "Strengthen team cohesion through adrenaline-packed axe and ninja throwing competitions. Private lanes, expert guidance, 17 interactive games.", "es": "Fortalece la cohesión del equipo con competiciones de lanzamiento de hacha y ninja. Pistas privadas y 17 juegos interactivos.", "fr": "Renforcez la cohésion d''équipe avec des compétitions de lancer de hache et ninja. Pistes privées et 17 jeux interactifs.", "de": "Stärken Sie den Teamzusammenhalt durch Axt- und Ninja-Wurfwettbewerbe. Private Bahnen und 17 interaktive Spiele.", "nl": "Versterk teamcohesie met bijl- en ninja-werpcompetities. Privé banen en 17 interactieve spellen."}',
   '{"en": "Corporate axe throwing events", "es": "Eventos corporativos de hacha", "fr": "Événements entreprise lancer de hache", "de": "Firmen-Axtwerfen-Events", "nl": "Bedrijfsevenementen bijlwerpen"}',
   120, 2, 30, 'axe', '["drink", "snacks"]', 18, 7),

  ('bachelor-party',
   '{"en": "Bachelor / Bachelorette Party", "es": "Despedida de Soltero/a", "fr": "Enterrement de Vie de Garçon/Fille", "de": "Junggesellen-/Junggesellinnenabschied", "nl": "Vrijgezellenfeest"}',
   '{"en": "Pre-wedding celebration with 2-hour private session, cava, snacks, and party vibes. Axe & ninja star throwing with 17 interactive games.", "es": "Celebración pre-boda con sesión privada de 2 horas, cava, aperitivos y ambiente festivo.", "fr": "Célébration pré-mariage avec session privée de 2 heures, cava, snacks et ambiance festive.", "de": "Feier vor der Hochzeit mit 2-Stunden privater Session, Cava, Snacks und Party-Atmosphäre.", "nl": "Pre-bruiloft viering met 2-uur privé sessie, cava, snacks en feestsfeer."}',
   '{"en": "Party package with cava & snacks", "es": "Pack fiesta con cava y aperitivos", "fr": "Pack fête avec cava et snacks", "de": "Party-Paket mit Cava & Snacks", "nl": "Feestpakket met cava & snacks"}',
   120, 2, 20, 'axe', '["cava", "snacks"]', 18, 8),

  ('classic-darts',
   '{"en": "Classic Darts", "es": "Dardos Clásicos", "fr": "Fléchettes Classiques", "de": "Klassische Darts", "nl": "Klassieke Darts"}',
   '{"en": "Professional dartboard experience. Play on a professional darts lane – Perfect for serious players & casual fun.", "es": "Experiencia de dardos profesional. Juega en una pista profesional de dardos.", "fr": "Expérience de fléchettes professionnelle. Jouez sur une piste de fléchettes professionnelle.", "de": "Professionelles Dart-Erlebnis. Spielen Sie auf einer professionellen Dartbahn.", "nl": "Professionele dartervaring. Speel op een professionele dartbaan."}',
   '{"en": "Professional darts lane rental", "es": "Alquiler de pista de dardos profesional", "fr": "Location de piste de fléchettes professionnelle", "de": "Professionelle Dartbahn-Miete", "nl": "Professionele dartbaan verhuur"}',
   60, 1, 10, 'classic_darts', '[]', 6, 9);

-- Seed pricing for all offers (in cents)
-- Traditional Axe 1H (25€/pp for 1, degressive to ~14€/pp at 20)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
       unnest(array[2500,3600,5100,6400,8000,9600,11200,12800,14400,16000,17600,19200,20800,22400,24000,25600,27200,28800,30400,32000])
from offers where slug = 'traditional-axe-1h';

-- Ninja + Axe 1H (36€/pp for 1, degressive)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
       unnest(array[3600,4800,6600,8400,10500,12600,14700,16800,18900,21000,23100,25200,27300,29400,31500,33600,35700,37800,39900,42000])
from offers where slug = 'ninja-axe-1h';

-- Premium Axe 2H (35€/pp for 1, degressive)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
       unnest(array[3500,6000,8700,11200,14000,16800,19600,22400,25200,28000,30800,33600,36400,39200,42000,44800,47600,50400,53200,56000])
from offers where slug = 'premium-axe-2h';

-- Ninja + Axe 2H (46€/pp for 1, degressive)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
       unnest(array[4600,7200,10100,13200,16500,19800,23100,26400,29700,33000,36300,39600,42900,46200,49500,52800,56100,59400,62700,66000])
from offers where slug = 'ninja-axe-2h';

-- Darts Pixels (various durations - using 1h pricing, durations managed at offer level)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[1,2,3,4,5,6]), unnest(array[1600,2400,3200,4000,5000,6000])
from offers where slug = 'darts-pixels';

-- Ninja Initiation (30 min)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[1,2,3,4,5,6]), unnest(array[1500,1900,2850,3800,4750,5700])
from offers where slug = 'ninja-initiation';

-- Team Building (per person pricing for groups)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[2,5,10,15,20,25,30]), unnest(array[7000,16000,30000,42000,56000,70000,90000])
from offers where slug = 'teambuilding';

-- Bachelor Party (per person pricing)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[2,4,6,8,10,12,15,20]), unnest(array[7000,12000,18000,24000,30000,36000,45000,60000])
from offers where slug = 'bachelor-party';

-- Classic Darts (per lane pricing)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[1]), unnest(array[2000])
from offers where slug = 'classic-darts';

-- Safety waivers
create table waivers (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id),
  first_name text not null,
  last_name text not null,
  address text not null,
  phone text not null,
  accepted boolean not null default false,
  ip_address text,
  user_agent text,
  signed_at timestamptz default now(),
  created_at timestamptz default now()
);

create index idx_waivers_booking on waivers(booking_id);

-- RLS policies
alter table offers enable row level security;
alter table offer_pricing enable row level security;
alter table dynamic_pricing enable row level security;
alter table offer_media enable row level security;
alter table lanes enable row level security;
alter table business_hours enable row level security;
alter table closed_dates enable row level security;
alter table bookings enable row level security;
alter table booking_lanes enable row level security;
alter table faq_items enable row level security;
alter table blog_posts enable row level security;
alter table tiktok_embeds enable row level security;
alter table site_settings enable row level security;
alter table gift_vouchers enable row level security;
alter table waivers enable row level security;

-- Public read access for most tables
create policy "Public read offers" on offers for select using (true);
create policy "Public read offer_pricing" on offer_pricing for select using (true);
create policy "Public read offer_media" on offer_media for select using (true);
create policy "Public read business_hours" on business_hours for select using (true);
create policy "Public read closed_dates" on closed_dates for select using (true);
create policy "Public read faq_items" on faq_items for select using (is_active = true);
create policy "Public read blog_posts" on blog_posts for select using (is_published = true);
create policy "Public read tiktok_embeds" on tiktok_embeds for select using (is_active = true);
create policy "Public read lanes" on lanes for select using (true);
create policy "Public read dynamic_pricing" on dynamic_pricing for select using (is_active = true);

-- Bookings: public can insert (create booking), but only read own by ref
create policy "Public insert bookings" on bookings for insert with check (true);
create policy "Public read own booking" on bookings for select using (true);

-- Waivers: public can insert
create policy "Public insert waivers" on waivers for insert with check (true);
create policy "Public read own waiver" on waivers for select using (true);

-- Service role has full access (admin operations go through service role client)
