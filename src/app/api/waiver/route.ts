import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { generateWaiverRef } from '@/lib/utils';
import { sendWaiverConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      address,
      phone,
      email,
      dateOfBirth,
      signatureData,
      accepted,
      bookingId,
      language,
      discoverySource,
      discoverySourceOther,
      photoConsent,
    } = body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !address ||
      !phone ||
      !email ||
      !dateOfBirth ||
      !signatureData ||
      !accepted
    ) {
      return NextResponse.json(
        { error: 'All fields are required including email, date of birth, and signature' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate age (must be 12+)
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 12) {
      return NextResponse.json(
        { error: 'Participant must be at least 12 years old' },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();
    const waiverRef = generateWaiverRef();

    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    const { data, error } = await supabase
      .from('waivers')
      .insert({
        first_name: firstName,
        last_name: lastName,
        address,
        phone,
        email,
        date_of_birth: dateOfBirth,
        signature_data: signatureData,
        waiver_ref: waiverRef,
        language: language || 'en',
        accepted: true,
        booking_id: bookingId || null,
        ip_address: ip,
        user_agent: userAgent,
        discovery_source: discoverySource || null,
        discovery_source_other: discoverySourceOther || null,
        photo_consent: photoConsent ?? null,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send confirmation email (fire-and-forget)
    sendWaiverConfirmation({
      waiver_ref: data.waiver_ref,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      date_of_birth: data.date_of_birth,
      signature_data: data.signature_data,
      signed_at: data.signed_at,
      language: data.language,
    }).catch((err) => {
      console.error('Failed to send waiver confirmation email:', err);
    });

    return NextResponse.json({
      success: true,
      waiverId: data.id,
      waiverRef: data.waiver_ref,
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
