-- First-party traffic tracker (independent of GA4).
--
-- Two kinds of rows:
--   type = 'pageview'  -> one row per page view (is_entry = true on the first
--                         view of a session, which carries the real external
--                         referrer: that is the "where did the visitor arrive
--                         from" signal).
--   type = 'outbound'  -> one row per click on a money link (Discover Cars,
--                         GetYourGuide, WhatsApp). target says which, path says
--                         from which page.
--
-- Writes happen ONLY server-side through /api/track using the service-role key,
-- so RLS is enabled with no public policy: the anon browser client can neither
-- read nor write this table directly. The admin report reads it through
-- /api/admin/traffic (also service role, behind the admin session).

create table if not exists public.traffic_events (
  id           uuid        primary key default gen_random_uuid(),
  created_at   timestamptz not null    default now(),
  type         text        not null    check (type in ('pageview', 'outbound')),
  path         text,                 -- page the event happened on (incl. locale prefix)
  locale       text,                 -- en | es | fr | de | nl | it
  referrer     text,                 -- raw document.referrer (entry pageviews only)
  referrer_host text,                -- normalized source host, e.g. google.com (or 'direct')
  is_entry     boolean     not null    default false,
  target       text,                 -- outbound only: 'discover-cars' | 'getyourguide' | 'whatsapp'
  target_url   text,                 -- outbound only: full destination URL
  country      text,                 -- 2-letter code from the Vercel edge header
  device       text,                 -- 'mobile' | 'desktop'
  session_id   text                  -- opaque per-session id (sessionStorage), for unique counts
);

create index if not exists traffic_events_created_idx      on public.traffic_events (created_at desc);
create index if not exists traffic_events_type_created_idx  on public.traffic_events (type, created_at desc);
create index if not exists traffic_events_target_created_idx on public.traffic_events (target, created_at desc);

alter table public.traffic_events enable row level security;
-- No policies on purpose: all access goes through the service-role key server-side.
