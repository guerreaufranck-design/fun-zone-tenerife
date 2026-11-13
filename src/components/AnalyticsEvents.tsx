'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

/**
 * Global outbound-click tracking for GA4.
 *
 * A single delegated listener catches clicks on EVERY GetYourGuide affiliate
 * link and EVERY WhatsApp link — current and future, with no per-link wiring —
 * and fires a key-event-ready GA4 event. This is the money metric (how many
 * visitors we send to GYG, by placement) and it is instrumented once here so
 * any future site that reuses this component inherits it on day one.
 *
 * Note: clicks INSIDE the GYG availability iframe are cross-origin and cannot
 * be observed here; GYG tracks those itself via the `cmp` tag. This listener
 * covers the real anchor links (cards, CTAs, blog/celebration cross-sells).
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = e.target as Element | null;
      const a = el?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;

      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      const host = url.hostname.toLowerCase();

      if (host === 'getyourguide.com' || host.endsWith('.getyourguide.com')) {
        track('gyg_click', {
          link_url: url.href,
          link_domain: 'getyourguide.com',
          placement: url.searchParams.get('cmp') || 'untagged',
          page_path: window.location.pathname,
        });
      } else if (host === 'wa.me' || host.endsWith('whatsapp.com')) {
        track('whatsapp_click', {
          link_url: url.href,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
