import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";
import { nanoid } from "nanoid";

/**
 * Merge Tailwind CSS classes with clsx + tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price from cents to EUR string
 * e.g. 2500 -> "25,00 EUR" or "25.00 EUR"
 */
export function formatPrice(cents: number, locale: string = "en"): string {
  const amount = cents / 100;
  const localeMap: Record<string, string> = {
    en: "en-GB",
    es: "es-ES",
    fr: "fr-FR",
    de: "de-DE",
    nl: "nl-NL",
  };
  return new Intl.NumberFormat(localeMap[locale] ?? "en-GB", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

/**
 * Generate a unique booking reference
 * Format: AXT-YYYY-XXXXX (e.g. AXT-2026-A3B7K)
 */
export function generateBookingRef(): string {
  const year = new Date().getFullYear();
  const id = nanoid(5).toUpperCase();
  return `AXT-${year}-${id}`;
}

/**
 * Generate a unique waiver reference
 * Format: WVR-YYYY-XXXXX (e.g. WVR-2026-K9M2B)
 */
export function generateWaiverRef(): string {
  const year = new Date().getFullYear();
  const id = nanoid(5).toUpperCase();
  return `WVR-${year}-${id}`;
}

/**
 * Format a date string (YYYY-MM-DD or ISO) to a human-readable format
 * e.g. "2026-03-17" -> "17 March 2026"
 */
export function formatDate(
  dateStr: string,
  formatStr: string = "d MMMM yyyy"
): string {
  const date = parseISO(dateStr);
  return format(date, formatStr);
}

/**
 * Format a time string (HH:mm or HH:mm:ss) to display format
 * e.g. "18:00" -> "18:00", "18:00:00" -> "18:00"
 */
export function formatTime(timeStr: string): string {
  const parts = timeStr.split(":");
  return `${parts[0]}:${parts[1]}`;
}
