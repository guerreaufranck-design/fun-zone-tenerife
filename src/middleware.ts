import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Run next-intl on every path so locale-less URLs (e.g. /about, /contact)
  // get redirected to the default locale (/en/about) instead of falling
  // through to the [locale] route and 404/500-ing.
  // Excluded (served as-is, no locale handling):
  // - /api            API routes (incl. the Stripe webhook — must NOT redirect)
  // - /_next /_vercel Next.js / Vercel internals
  // - /monitoring     Sentry tunnel
  // - /admin          non-localized admin panel
  // - /privacy /terms /waiver  non-localized top-level pages
  // - anything with a dot (favicon.ico, sitemap.xml, robots.txt, /images/*, …)
  matcher: ['/((?!api|_next|_vercel|monitoring|admin|privacy|terms|waiver|.*\\..*).*)']
};
