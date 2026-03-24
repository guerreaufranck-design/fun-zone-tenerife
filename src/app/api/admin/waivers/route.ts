import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(req: NextRequest) {
  const supabase = createAdminClient();
  const { searchParams } = new URL(req.url);

  const date = searchParams.get("date");
  const search = searchParams.get("search");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "10", 10);

  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  let query = supabase
    .from("waivers")
    .select("*, bookings(booking_ref)", { count: "exact" })
    .order("signed_at", { ascending: false });

  if (date) {
    query = query.gte("signed_at", `${date}T00:00:00`).lt("signed_at", `${date}T23:59:59.999`);
  }

  if (search) {
    query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%`);
  }

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data: data || [], total: count || 0 });
}
