import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /monitoring (Sentry tunnel)
  // - Static files (e.g. /favicon.ico, /images/*, etc.)
  matcher: ['/', '/(en|es|fr|de|nl|it)/:path*']
};
