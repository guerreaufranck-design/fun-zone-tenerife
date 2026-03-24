import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendReviewRequest } from "@/lib/email";

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    const supabase = createAdminClient();

    // Get yesterday's date (waivers signed yesterday → send review today)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStart = yesterday.toISOString().split("T")[0] + "T00:00:00";
    const yesterdayEnd = yesterday.toISOString().split("T")[0] + "T23:59:59";

    // Find waivers signed yesterday that haven't had review emails sent
    const { data: waivers, error } = await supabase
      .from("waivers")
      .select("id, first_name, last_name, email, language")
      .gte("signed_at", yesterdayStart)
      .lte("signed_at", yesterdayEnd)
      .eq("review_email_sent", false)
      .not("email", "is", null)
      .neq("email", "");

    if (error) {
      console.error("Error fetching waivers for review requests:", error);
      return NextResponse.json(
        { error: "Failed to fetch waivers" },
        { status: 500 }
      );
    }

    if (!waivers || waivers.length === 0) {
      return NextResponse.json({ sent: 0 });
    }

    let sentCount = 0;

    for (const waiver of waivers) {
      try {
        await sendReviewRequest(waiver);

        // Mark review email as sent
        await supabase
          .from("waivers")
          .update({ review_email_sent: true })
          .eq("id", waiver.id);

        sentCount++;
      } catch (emailError) {
        console.error(
          `Failed to send review request for waiver ${waiver.id}:`,
          emailError
        );
      }
    }

    return NextResponse.json({ sent: sentCount });
  } catch (error) {
    console.error("Error in review requests cron:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
