import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = createAdminClient();
  const body = await request.json();

  // Separate pricing from offer fields
  const { pricing, ...offerFields } = body;

  // 1. Update offer
  const { data, error } = await supabase
    .from("offers")
    .update({ ...offerFields, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 2. Update pricing if provided
  if (pricing !== undefined) {
    // Delete existing pricing
    const { error: deleteError } = await supabase
      .from("offer_pricing")
      .delete()
      .eq("offer_id", id);

    if (deleteError) {
      return NextResponse.json(
        { error: `Offer saved but pricing update failed: ${deleteError.message}` },
        { status: 500 }
      );
    }

    // Insert new pricing
    if (Array.isArray(pricing) && pricing.length > 0) {
      const pricingRows = pricing.map((p: { players: number; price_cents: number }) => ({
        offer_id: id,
        players: p.players,
        price_cents: p.price_cents,
      }));

      const { error: insertError } = await supabase
        .from("offer_pricing")
        .insert(pricingRows);

      if (insertError) {
        return NextResponse.json(
          { error: `Offer saved but failed to insert pricing: ${insertError.message}` },
          { status: 500 }
        );
      }
    }
  }

  return NextResponse.json(data);
}
