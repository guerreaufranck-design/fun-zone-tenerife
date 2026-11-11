'use client';

import { useEffect } from 'react';

/**
 * Sets <html lang> to the active locale. The root <html> is rendered by the
 * non-localized root layout (which cannot know the locale), so it ships
 * lang="en"; this corrects it on the client for every localized page, which is
 * what JS-rendering crawlers (Googlebot) and assistive tech read.
 */
export function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return null;
}
