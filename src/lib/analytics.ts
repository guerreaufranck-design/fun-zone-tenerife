/**
 * Lightweight GA4 (gtag) event helper, safe to call from any client component.
 * The gtag snippet itself is injected once by <Analytics/> in the root layout;
 * this just forwards events to it, and never throws if GA is blocked/absent.
 */

type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export function track(event: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', event, params);
  } catch {
    /* analytics must never break the UI */
  }
}
