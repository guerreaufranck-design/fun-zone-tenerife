import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const supabase = createAdminClient();

  const [hoursResult, closedResult] = await Promise.all([
    supabase.from("business_hours").select("*").order("day_of_week"),
    supabase.from("closed_dates").select("*").order("date"),
  ]);

  if (hoursResult.error) {
    return NextResponse.json(
      { error: hoursResult.error.message },
      { status: 500 }
    );
  }
  if (closedResult.error) {
    return NextResponse.json(
      { error: closedResult.error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    hours: hoursResult.data,
    closedDates: closedResult.data,
  });
}

export async function PUT(request: NextRequest) {
  const supabase = createAdminClient();
  const { hours } = await request.json();

  if (!Array.isArray(hours)) {
    return NextResponse.json(
      { error: "hours must be an array" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("business_hours")
    .upsert(
      hours.map(
        (h: {
          day_of_week: number;
          open_time: string;
          close_time: string;
          is_closed: boolean;
        }) => ({
          day_of_week: h.day_of_week,
          open_time: h.open_time,
          close_time: h.close_time,
          is_closed: h.is_closed,
        })
      ),
      { onConflict: "day_of_week" }
    )
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
