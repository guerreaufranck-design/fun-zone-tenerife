import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

// 79€ per phone set (4 games)
const ISLAND_PASS_PRICE_CENTS = 7900;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phones, customerName, customerEmail, customerPhone, locale } = body as {
      phones: number;
      customerName: string;
      customerEmail: string;
      customerPhone?: string;
      locale?: string;
    };

    if (!phones || !customerName || !customerEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (phones < 1 || phones > 3) {
      return NextResponse.json({ error: 'Invalid number of phones (1-3)' }, { status: 400 });
    }

    const lang = locale ?? 'en';
    const totalCents = ISLAND_PASS_PRICE_CENTS * phones;

    const productNames: Record<string, string> = {
      fr: `🏝️ Island Pass — ${phones} téléphone${phones > 1 ? 's' : ''}`,
      es: `🏝️ Island Pass — ${phones} teléfono${phones > 1 ? 's' : ''}`,
      de: `🏝️ Island Pass — ${phones} Handy${phones > 1 ? 's' : ''}`,
      it: `🏝️ Island Pass — ${phones} telefono${phones > 1 ? 'i' : ''}`,
      en: `🏝️ Island Pass — ${phones} phone${phones > 1 ? 's' : ''}`,
    };

    const productDescs: Record<string, string> = {
      fr: `4 aventures complètes : Los Cristianos, La Laguna, Puerto de la Cruz, Garachico`,
      es: `4 aventuras completas: Los Cristianos, La Laguna, Puerto de la Cruz, Garachico`,
      de: `4 komplette Abenteuer: Los Cristianos, La Laguna, Puerto de la Cruz, Garachico`,
      it: `4 avventure complete: Los Cristianos, La Laguna, Puerto de la Cruz, Garachico`,
      en: `4 full adventures: Los Cristianos, La Laguna, Puerto de la Cruz, Garachico`,
    };

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'https://www.funzonetenerife.com');

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: productNames[lang] ?? productNames['en'],
              description: productDescs[lang] ?? productDescs['en'],
            },
            unit_amount: totalCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        type: 'island_pass',
        phones: String(phones),
        customerName,
        customerPhone: customerPhone ?? '',
        locale: lang,
      },
      success_url: `${siteUrl}/${lang}/book/success?session_id={CHECKOUT_SESSION_ID}&type=escape`,
      cancel_url: `${siteUrl}/${lang}/escape-game`,
      customer_email: customerEmail,
      currency: 'eur',
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('ISLAND_PASS_CHECKOUT_ERROR:', errMsg);
    return NextResponse.json(
      { error: 'Failed to create checkout session', details: errMsg },
      { status: 500 }
    );
  }
}
