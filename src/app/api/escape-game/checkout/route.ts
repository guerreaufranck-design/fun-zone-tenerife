import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { createAdminClient } from '@/lib/supabase/admin';

const ESCAPE_PRICING: Record<number, number> = {
  1: 1900, // 19€
  2: 2500, // 25€
  3: 3500, // 35€
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { offerId, phones, customerName, customerEmail, customerPhone, locale } = body as {
      offerId: string;
      phones: number;
      customerName: string;
      customerEmail: string;
      customerPhone: string;
      locale?: string;
    };

    if (!offerId || !phones || !customerName || !customerEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (phones < 1 || phones > 3) {
      return NextResponse.json(
        { error: 'Invalid number of phones (1-3)' },
        { status: 400 }
      );
    }

    const amount = ESCAPE_PRICING[phones];
    if (!amount) {
      return NextResponse.json({ error: 'Invalid pricing' }, { status: 400 });
    }

    const supabase = createAdminClient();
    const lang = locale ?? 'en';

    // Fetch offer details
    const { data: offer } = await supabase
      .from('offers')
      .select('title, slug')
      .eq('id', offerId)
      .single();

    const experienceName =
      (offer?.title as Record<string, string>)?.[lang] ??
      (offer?.title as Record<string, string>)?.['en'] ??
      'Escape Game';

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'https://www.funzonetenerife.com');

    // Create Stripe Checkout Session
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `${experienceName} — ${phones} ${phones === 1 ? 'team' : 'teams'}`,
              description: `Escape Game Tenerife · ${phones} phone${phones > 1 ? 's' : ''} with unique game code`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        type: 'escape_game',
        offerId,
        offerSlug: offer?.slug ?? '',
        phones: String(phones),
        customerName,
        customerPhone: customerPhone ?? '',
        locale: lang,
      },
      success_url: `${siteUrl}/${lang}/book/success?session_id={CHECKOUT_SESSION_ID}&type=escape`,
      cancel_url: `${siteUrl}/${lang}/book/cancel`,
      customer_email: customerEmail,
      currency: 'eur',
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('ESCAPE_CHECKOUT_ERROR:', errMsg);
    return NextResponse.json(
      { error: 'Failed to create checkout session', details: errMsg },
      { status: 500 }
    );
  }
}
