import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { sendEscapeGameCode } from '@/lib/email';

const ESCAPE_CITIES: Record<string, string> = {
  'escape-ichasagua': 'Los Cristianos & Playa de las Américas',
  'escape-trois-cles': 'San Cristóbal de La Laguna',
  'escape-bateria': 'Puerto de la Cruz',
  'escape-cendres': 'Garachico',
};

const ESCAPE_DURATIONS: Record<string, string> = {
  'escape-ichasagua': '3-4h',
  'escape-trois-cles': '2-2h30',
  'escape-bateria': '1h30-2h',
  'escape-cendres': '2h30-3h',
};

const ESCAPE_GAME_IDS: Record<string, string> = {
  'escape-ichasagua': '11111111-1111-1111-1111-111111111111',
  'escape-trois-cles': '22222222-2222-2222-2222-222222222222',
  'escape-bateria': '33333333-3333-3333-3333-333333333333',
  'escape-cendres': '44444444-4444-4444-4444-444444444444',
};

const ESCAPE_NAMES: Record<string, string> = {
  'escape-ichasagua': 'Le Code d\'Ichasagua',
  'escape-trois-cles': 'Le Coffre des Trois Clés',
  'escape-bateria': 'Le Butin de la Batería',
  'escape-cendres': 'Les Cendres de l\'Âme',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerName, customerEmail, offerSlug, phones, locale = 'en', source = 'manual' } = body as {
      customerName: string;
      customerEmail: string;
      offerSlug: string;
      phones: number;
      locale?: string;
      source?: string;
    };

    if (!customerName || !customerEmail || !offerSlug || !phones) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (phones < 1 || phones > 3) {
      return NextResponse.json({ error: 'Invalid number of phones (1-3)' }, { status: 400 });
    }

    const appUrl = process.env.ESCAPE_GAME_APP_URL || 'https://escape-game-indol.vercel.app';
    const apiSecret = process.env.CODE_API_SECRET || 'FZ-EG-2026-sEcReT';
    const gameId = ESCAPE_GAME_IDS[offerSlug] || '';
    const gameName = ESCAPE_NAMES[offerSlug] || 'Escape Game';
    const city = ESCAPE_CITIES[offerSlug] || '';
    const duration = ESCAPE_DURATIONS[offerSlug] || '2h';

    if (!gameId) {
      return NextResponse.json({ error: 'Unknown escape game slug' }, { status: 400 });
    }

    const generatedCodes: string[] = [];
    const errors: string[] = [];

    for (let i = 0; i < phones; i++) {
      try {
        const codeRes = await fetch(`${appUrl}/api/generate-code`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-secret': apiSecret,
          },
          body: JSON.stringify({
            gameId,
            customerEmail,
            customerName,
          }),
        });

        if (!codeRes.ok) {
          const errData = await codeRes.json().catch(() => ({}));
          errors.push(`Phone ${i + 1}: code generation failed — ${JSON.stringify(errData)}`);
          continue;
        }

        const { code } = await codeRes.json();
        generatedCodes.push(code);

        await sendEscapeGameCode({
          email: customerEmail,
          customerName,
          code,
          gameName,
          city,
          estimatedDuration: duration,
          appUrl,
          language: locale,
        });
      } catch (err) {
        errors.push(`Phone ${i + 1}: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    if (generatedCodes.length === 0) {
      return NextResponse.json({ error: 'Failed to generate any code', details: errors }, { status: 500 });
    }

    // Save to escape_orders for analytics
    try {
      const supabase = createAdminClient();
      await supabase.from('escape_orders').insert({
        stripe_session_id: `manual-${source}-${Date.now()}`,
        offer_slug: offerSlug,
        game_name: gameName,
        phones,
        amount_cents: 0, // GYG handled the payment
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: null,
        locale,
        codes: generatedCodes,
        source,
      });
    } catch (dbErr) {
      console.error('Failed to save escape order to DB:', dbErr);
    }

    return NextResponse.json({
      success: true,
      codes: generatedCodes,
      sent: generatedCodes.length,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('SEND_ESCAPE_CODE_ERROR:', errMsg);
    return NextResponse.json({ error: 'Internal server error', details: errMsg }, { status: 500 });
  }
}
