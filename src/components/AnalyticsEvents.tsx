'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/analytics';

/**
 * Outbound-click + page-view tracking, fired to TWO sinks:
 *   1. GA4 (via track()), kept as-is for the existing dashboards.
 *   2. Our own first-party store, via a same-origin beacon to /api/track.
 *      This is the one we trust: our data, our database, far less ad-blocked
 *      than GA4, and reported inside the admin ("Traffic" page).
 *
 * A single delegated listener catches clicks on every money link — Discover
 * Cars, GetYourGuide and WhatsApp — current and future, with no per-link
 * wiring. A separate effect sends one page-view beacon per navigation, tagging
 * the first view of a session as the entry (which carries the real external
 * referrer: where the visitor came from).
 *
 * Note: clicks INSIDE the GYG availability iframe are cross-origin and cannot
 * be observed here; GYG tracks those itself via the `cmp` tag.
 */

const LOCALES = ['en', 'es', 'fr', 'de', 'nl', 'it'] as const;

/** Fire-and-forget same-origin beacon; never throws, never blocks navigation. */
function beacon(data: Record<string, unknown>): void {
  try {
    const body = JSON.stringify(data);
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      navigator.sendBeacon('/api/track', new Blob([body], { type: 'application/json' }));
    } else {
      void fetch('/api/track', {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      });
    }
  } catch {
    /* tracking must never break the UI */
  }
}

/** Stable opaque id for the current tab session (used for unique counts). */
function sessionId(): string {
  try {
    let s = sessionStorage.getItem('fz_sid');
    if (!s) {
      s = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem('fz_sid', s);
    }
    return s;
  } catch {
    return '';
  }
}

function localeFromPath(path: string): string | undefined {
  const seg = path.split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? seg : undefined;
}

export default function AnalyticsEvents() {
  const pathname = usePathname();

  // ---- Page views (one beacon per navigation) ----
  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) return;

    let isEntry = false;
    try {
      if (!sessionStorage.getItem('fz_entered')) {
        isEntry = true;
        sessionStorage.setItem('fz_entered', '1');
      }
    } catch {
      /* private mode: treat as a normal (non-entry) view */
    }

    beacon({
      t: 'pv',
      p: pathname,
      l: localeFromPath(pathname),
      e: isEntry,
      r: isEntry ? document.referrer || '' : '',
      s: sessionId(),
    });
  }, [pathname]);

  // ---- Outbound money-link clicks (delegated, set up once) ----
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
      const pagePath = window.location.pathname;

      let target: 'discover-cars' | 'getyourguide' | 'whatsapp' | null = null;
      if (host === 'discovercars.com' || host.endsWith('.discovercars.com')) {
        target = 'discover-cars';
      } else if (host === 'getyourguide.com' || host.endsWith('.getyourguide.com')) {
        target = 'getyourguide';
      } else if (host === 'wa.me' || host.endsWith('whatsapp.com')) {
        target = 'whatsapp';
      }
      if (!target) return;

      // First-party sink (the one Franck trusts).
      beacon({
        t: 'out',
        rt: target,
        u: url.href,
        p: pagePath,
        l: localeFromPath(pagePath),
        s: sessionId(),
      });

      // GA4 sink (kept for the existing dashboards).
      if (target === 'discover-cars') {
        track('discover_cars_click', { link_url: url.href, page_path: pagePath });
      } else if (target === 'getyourguide') {
        track('gyg_click', {
          link_url: url.href,
          link_domain: 'getyourguide.com',
          placement: url.searchParams.get('cmp') || 'untagged',
          page_path: pagePath,
        });
      } else {
        track('whatsapp_click', { link_url: url.href, page_path: pagePath });
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
