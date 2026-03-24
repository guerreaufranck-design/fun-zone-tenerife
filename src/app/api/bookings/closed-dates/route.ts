import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const supabase = createAdminClient();
    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
      .from("closed_dates")
      .select("date")
      .gte("date", today)
      .order("date");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const dates = (data ?? []).map((d) => d.date);
    return NextResponse.json({ closedDates: dates });
  } catch (error) {
    console.error("Error fetching closed dates:", error);
    return NextResponse.json(
      { error: "Failed to fetch closed dates" },
      { status: 500 }
    );
  }
}
