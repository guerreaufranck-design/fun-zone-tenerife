import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { AUDIO_TOUR_PRICE, TOUR_LANGUAGES, getCityMeta, getIslandOfCity } from '@/lib/audio-tour';
import { LUME_MAX_QUANTITY } from '@/lib/lume';

/**
 * Creates a Stripe Checkout session for a Tenerife city audio tour.
 * Flat 12 € per activation code, EUR only. The customer picks the tour LANGUAGE
 * (one of 32) and the NUMBER OF CODES (1..6, Lume's per-call max).
 *
 * Fulfilment (calling Lume, emailing the code) happens after payment, in the
 * Stripe webhook and on the confirmation page, never here.
 */

// Stripe hosted-page language (only the locales we actually ship a UI in).
const STRIPE_LOCALES = new Set(['en', 'es', 'fr', 'de', 'it', 'nl']);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { citySlug, language, quantity, locale } = body as {
      citySlug?: string;
      language?: string;
      quantity?: number;
      locale?: string;
    };

    // citySlug here is the ROUTE slug (e.g. "santa-cruz"); the Lume fulfilment
    // slug is resolved from CityMeta in the webhook / confirmation page.
    const meta = citySlug ? getCityMeta(citySlug) : undefined;
    if (!meta) {
      return NextResponse.json({ error: 'Unknown city' }, { status: 400 });
    }

    const reqLang = (language || '').toLowerCase();
    const lang = TOUR_LANGUAGES.some((l) => l.code === reqLang) ? reqLang : 'en';
    const langLabel = TOUR_LANGUAGES.find((l) => l.code === lang)?.label ?? lang;

    const qty = Math.max(1, Math.min(LUME_MAX_QUANTITY, Math.floor(Number(quantity) || 1)));
    const uiLocale = locale && STRIPE_LOCALES.has(locale) ? locale : 'en';
    const unitAmount = AUDIO_TOUR_PRICE * 100; // 12 € → 1200 cents, per code

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'https://funzonetenerife.com');

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      locale: uiLocale as 'en' | 'es' | 'fr' | 'de' | 'it' | 'nl',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `${meta.displayName}: audio tour (${langLabel})`,
              description: `Self-guided audio tour · activation code${qty > 1 ? ` × ${qty}` : ''}`,
            },
            unit_amount: unitAmount,
          },
          quantity: qty,
        },
      ],
      metadata: {
        type: 'audio_tour',
        citySlug: meta.slug,
        language: lang,
        quantity: String(qty),
        locale: uiLocale,
      },
      // The confirmation page is shared by every island (it fulfils from the
      // session metadata). The cancel URL must return to the city's OWN island
      // route, else other-island buyers land on a 404.
      success_url: `${siteUrl}/${uiLocale}/tenerife-audio-tour/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/${uiLocale}${getIslandOfCity(meta.slug)?.routeBase ?? '/tenerife-audio-tour'}/${meta.slug}`,
      currency: 'eur',
      // Stripe Checkout collects the customer email itself; the webhook +
      // confirmation page read it from the completed session and pass it to Lume.
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('AUDIO_TOUR_CHECKOUT_ERROR:', errMsg);
    return NextResponse.json(
      { error: 'Failed to create checkout session', details: errMsg },
      { status: 500 }
    );
  }
}
