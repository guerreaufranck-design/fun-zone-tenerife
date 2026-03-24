import { getResend } from "./resend";
import { BookingConfirmation } from "@/emails/BookingConfirmation";
import { BookingReminder } from "@/emails/BookingReminder";
import { BookingModified } from "@/emails/BookingModified";
import { WaiverConfirmation } from "@/emails/WaiverConfirmation";
import { ReviewRequest } from "@/emails/ReviewRequest";
import { formatPrice, formatDate, formatTime } from "./utils";
import type { Booking, Offer, MultilingualText } from "./supabase/types";

const FROM_EMAIL =
  "Axe Throwing Tenerife <bookings@axethrowingtenerife.com>";

function getOfferName(offer: Offer, language: string): string {
  const title = offer.title as MultilingualText;
  return title[language] ?? title["en"] ?? "Axe Throwing Experience";
}

function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://axe-throwing-tenerife.vercel.app";
}

export async function sendBookingConfirmation(
  booking: Booking,
  offer: Offer
): Promise<void> {
  const language = booking.language ?? "en";

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: booking.customer_email,
    subject:
      language === "es"
        ? `Reserva Confirmada - ${booking.booking_ref}`
        : language === "fr"
          ? `Reservation Confirmee - ${booking.booking_ref}`
          : language === "de"
            ? `Buchung Bestatigt - ${booking.booking_ref}`
            : language === "nl"
              ? `Boeking Bevestigd - ${booking.booking_ref}`
              : `Booking Confirmed - ${booking.booking_ref}`,
    react: BookingConfirmation({
      bookingRef: booking.booking_ref,
      customerName: booking.customer_name,
      experienceName: getOfferName(offer, language),
      date: formatDate(booking.booking_date),
      time: formatTime(booking.start_time),
      players: booking.players,
      totalPrice: formatPrice(booking.total_cents, language),
      depositPaid: formatPrice(booking.deposit_cents, language),
      remainingBalance: formatPrice(
        booking.total_cents - booking.deposit_cents,
        language
      ),
      paymentType: booking.payment_type,
      language,
      alreadyPaid: booking.total_cents === 0 && booking.payment_status === "paid",
    }),
  });
}

export async function sendBookingReminder(
  booking: Booking,
  offer: Offer
): Promise<void> {
  const language = booking.language ?? "en";

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: booking.customer_email,
    subject:
      language === "es"
        ? `Recordatorio: Tu sesion es manana - ${booking.booking_ref}`
        : language === "fr"
          ? `Rappel : Votre session est demain - ${booking.booking_ref}`
          : language === "de"
            ? `Erinnerung: Ihre Session ist morgen - ${booking.booking_ref}`
            : language === "nl"
              ? `Herinnering: Je sessie is morgen - ${booking.booking_ref}`
              : `Reminder: Your session is tomorrow - ${booking.booking_ref}`,
    react: BookingReminder({
      bookingRef: booking.booking_ref,
      customerName: booking.customer_name,
      experienceName: getOfferName(offer, language),
      date: formatDate(booking.booking_date),
      time: formatTime(booking.start_time),
      players: booking.players,
      language,
    }),
  });
}

export async function sendBookingModified(
  booking: Booking & {
    _oldDate?: string;
    _oldStartTime?: string;
    _oldEndTime?: string;
  },
  offer: Offer
): Promise<void> {
  const language = booking.language ?? "en";

  const oldDate = booking._oldDate
    ? formatDate(booking._oldDate)
    : "";
  const oldTime = booking._oldStartTime
    ? formatTime(booking._oldStartTime)
    : "";

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: booking.customer_email,
    subject:
      language === "es"
        ? `Reserva Modificada - ${booking.booking_ref}`
        : language === "fr"
          ? `Reservation Modifiee - ${booking.booking_ref}`
          : language === "de"
            ? `Buchung Geandert - ${booking.booking_ref}`
            : language === "nl"
              ? `Boeking Gewijzigd - ${booking.booking_ref}`
              : `Booking Modified - ${booking.booking_ref}`,
    react: BookingModified({
      bookingRef: booking.booking_ref,
      customerName: booking.customer_name,
      experienceName: getOfferName(offer, language),
      players: booking.players,
      oldDate,
      newDate: formatDate(booking.booking_date),
      oldTime,
      newTime: formatTime(booking.start_time),
      language,
    }),
  });
}

const ADMIN_EMAIL = "guerreau.franck@gmail.com";

export async function sendAdminNewBookingNotification(
  booking: Booking,
  offer: Offer
): Promise<void> {
  const language = booking.language ?? "en";
  const offerName = getOfferName(offer, language);
  const laneType = (offer.lane_type as string) || "axe";
  const totalPaid =
    booking.payment_type === "full"
      ? formatPrice(booking.total_cents, "en")
      : formatPrice(booking.deposit_cents, "en");
  const remaining =
    booking.payment_type === "full"
      ? "€0.00"
      : formatPrice(booking.total_cents - booking.deposit_cents, "en");

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Booking - ${booking.booking_ref} - ${booking.customer_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d14; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%); padding: 20px 24px;">
          <h1 style="margin: 0; font-size: 20px; color: #fff;">New Booking Received</h1>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #9ca3af; width: 140px;">Reference</td>
              <td style="padding: 8px 0; font-weight: 700; color: #00d4ff; font-family: monospace;">${booking.booking_ref}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Customer</td>
              <td style="padding: 8px 0; font-weight: 600;">${booking.customer_name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Email</td>
              <td style="padding: 8px 0;">${booking.customer_email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Phone</td>
              <td style="padding: 8px 0;">${booking.customer_phone || "N/A"}</td>
            </tr>
            <tr style="border-top: 1px solid #1f2937;">
              <td style="padding: 12px 0 8px; color: #9ca3af;">Experience</td>
              <td style="padding: 12px 0 8px; font-weight: 600;">${offerName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Lane Type</td>
              <td style="padding: 8px 0; text-transform: capitalize;">${laneType.replace("_", " ")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Date</td>
              <td style="padding: 8px 0; font-weight: 600;">${formatDate(booking.booking_date)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Time</td>
              <td style="padding: 8px 0; font-weight: 600;">${formatTime(booking.start_time)} - ${formatTime(booking.end_time)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Players</td>
              <td style="padding: 8px 0; font-weight: 600; font-size: 16px;">${booking.players}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Lanes</td>
              <td style="padding: 8px 0;">${booking.lanes_needed}</td>
            </tr>
            <tr style="border-top: 1px solid #1f2937;">
              <td style="padding: 12px 0 8px; color: #9ca3af;">Total Price</td>
              <td style="padding: 12px 0 8px; font-weight: 700; font-size: 18px;">${formatPrice(booking.total_cents, "en")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Paid Now</td>
              <td style="padding: 8px 0; color: #22c55e; font-weight: 600;">${totalPaid}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Remaining</td>
              <td style="padding: 8px 0; color: ${booking.payment_type === "full" ? "#22c55e" : "#f97316"}; font-weight: 600;">${remaining}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Payment</td>
              <td style="padding: 8px 0;">${booking.payment_type === "full" ? "Full Payment" : "Deposit Only"}</td>
            </tr>
            ${booking.notes ? `<tr style="border-top: 1px solid #1f2937;"><td style="padding: 12px 0 8px; color: #9ca3af;">Notes</td><td style="padding: 12px 0 8px; font-style: italic;">${booking.notes}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; text-align: center;">
            <a href="${getSiteUrl()}/admin/bookings" style="display: inline-block; background: #00d4ff; color: #000; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">Open Admin Panel</a>
          </div>
        </div>
        <div style="padding: 16px 24px; text-align: center; font-size: 11px; color: #6b7280; border-top: 1px solid #1f2937;">
          Axe Throwing Tenerife - Automated Notification
        </div>
      </div>
    `,
  });
}

export async function sendWaiverConfirmation(waiver: {
  waiver_ref: string;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  signature_data: string;
  signed_at: string;
  language?: string;
}): Promise<void> {
  const language = waiver.language ?? "en";

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: waiver.email,
    subject:
      language === "es"
        ? `Exencion Firmada - ${waiver.waiver_ref}`
        : language === "fr"
          ? `Decharge Signee - ${waiver.waiver_ref}`
          : language === "de"
            ? `Verzichtserklarung Unterzeichnet - ${waiver.waiver_ref}`
            : language === "nl"
              ? `Verklaring Ondertekend - ${waiver.waiver_ref}`
              : `Waiver Signed - ${waiver.waiver_ref}`,
    react: WaiverConfirmation({
      waiverRef: waiver.waiver_ref,
      signerName: `${waiver.first_name} ${waiver.last_name}`,
      email: waiver.email,
      dateOfBirth: waiver.date_of_birth,
      signedAt: waiver.signed_at,
      signatureDataUrl: waiver.signature_data,
      language,
    }),
  });
}

export async function sendReviewRequest(waiver: {
  first_name: string;
  last_name: string;
  email: string;
  language?: string;
}): Promise<void> {
  const language = waiver.language ?? "en";

  const subjects: Record<string, string> = {
    en: "How was your axe throwing experience? 🪓",
    es: "Como fue tu experiencia de lanzamiento de hacha? 🪓",
    fr: "Comment etait votre lancer de hache ? 🪓",
    de: "Wie war Ihr Axtwurf-Erlebnis? 🪓",
    nl: "Hoe was je bijlwerp-ervaring? 🪓",
  };

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: waiver.email,
    subject: subjects[language] ?? subjects.en,
    react: ReviewRequest({
      signerName: waiver.first_name,
      language,
    }),
  });
}
