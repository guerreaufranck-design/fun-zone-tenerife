import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vkrqdzbfmppfjqayxcju.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Block vulnerability-scanner junk (e.g. /wp.php, /shell.php, /.env). These
  // unknown single-segment paths otherwise fall through to the [locale] route
  // and return a 500 (next-intl reads headers → static-to-dynamic error) instead
  // of a clean response, which trips Vercel 5xx alerts. Bounce them to home.
  async redirects() {
    return [
      {
        source: '/:scan(.*\\.(?:php|asp|aspx|jsp|cgi|env|bak|sql))',
        destination: '/',
        permanent: false,
      },
      // The physical venue (axe throwing / quiz room / darts) has closed and
      // axethrowingtenerife.com no longer operates. Permanently (301) redirect the
      // dead product URLs to the activities directory so inbound links / SEO equity
      // are preserved instead of 404ing. NOTE: /book is intentionally NOT redirected
      // off-site anymore — it now serves the internal self-paced escape booking.
      { source: '/:locale/axe-throwing', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/quiz-room', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/darts', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/experiences', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/experiences/quizzaboom-1h', destination: '/:locale/activities', permanent: true },
      // Safety nets for any non-locale-prefixed legacy inbound links.
      { source: '/axe-throwing', destination: '/en/activities', permanent: true },
      { source: '/quiz-room', destination: '/en/activities', permanent: true },
      { source: '/darts', destination: '/en/activities', permanent: true },
      // Retired venue-centric blog articles → activities directory (301).
      { source: '/:locale/blog/evening-entertainment-tenerife-south', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/blog/date-night-ideas-tenerife', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/blog/group-games-tenerife-competitive', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/blog/activities-teenagers-tenerife-south', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/blog/indoor-activities-tenerife-all-weather', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/blog/tenerife-bad-weather-rainy-day-activities', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/blog/family-activities-tenerife-kids-2025', destination: '/:locale/activities', permanent: true },
      { source: '/:locale/blog/things-to-do-playa-las-americas-2025', destination: '/:locale/activities', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
