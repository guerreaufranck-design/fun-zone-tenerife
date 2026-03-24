import { NextResponse } from 'next/server';

export async function GET() {
  const body = `# Robots.txt for Axe Throwing Tenerife
# https://axethrowingtenerife.com

User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

# Specific bot permissions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Sitemap
Sitemap: https://axethrowingtenerife.com/sitemap.xml
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
