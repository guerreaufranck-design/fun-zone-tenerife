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
    ];
  },
};

export default withNextIntl(nextConfig);
