'use client';

import { useState } from 'react';
import { Headphones, Minus, Plus, Globe } from 'lucide-react';
import { AUDIO_TOUR_PRICE, TOUR_LANGUAGES } from '@/lib/audio-tour';

export interface PurchaseLabels {
  cityPassTag: string;
  heading: string;
  validity: string;
  perCode: string;
  tourLanguageLabel: string;
  tourLanguageHint: string;
  numberOfCodesLabel: string;
  oneCodeHint: string;
  buyLabel: string;
  pendingNote: string;
  deliveryNote: string;
  lessCodesAria: string;
  moreCodesAria: string;
}

/** Lume issues at most 6 codes per order. */
const MAX_CODES = 6;

export default function AudioTourPurchase({
  city,
  citySlug,
  locale,
  labels,
}: {
  city: string;
  /** Route slug (e.g. "santa-cruz"); resolved to the Lume slug server-side. */
  citySlug: string;
  /** UI locale, for the checkout success/cancel URLs + Stripe page language. */
  locale: string;
  labels: PurchaseLabels;
}) {
  const [lang, setLang] = useState('en');
  const [qty, setQty] = useState(1);
  const [pending, setPending] = useState(false);

  const total = AUDIO_TOUR_PRICE * qty;

  const buy = async () => {
    // Create a Stripe Checkout session, then redirect to Stripe's hosted page.
    // After payment, the webhook + confirmation page call Lume, which emails
    // the activation code to the customer and returns the code(s).
    setPending(true);
    try {
      const res = await fetch('/api/audio-tour/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ citySlug, language: lang, quantity: qty, locale }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.url) {
        window.location.href = data.url as string;
        return;
      }
      setPending(false);
    } catch {
      setPending(false);
    }
    void city;
  };

  return (
    <div className="rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#00d4ff]/5 to-[#111118] p-6 sm:p-8">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00d4ff]">{labels.cityPassTag}</p>
          <h3 className="mt-1 text-lg font-bold text-white">{labels.heading}</h3>
          <p className="mt-1 text-xs text-white/50">{labels.validity}</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-white">€{total}</p>
          <p className="text-xs text-white/50">€{AUDIO_TOUR_PRICE} {labels.perCode}</p>
        </div>
      </div>

      {/* Tour language (32) */}
      <label className="mt-6 block">
        <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
          <Globe size={15} className="text-[#00d4ff]" /> {labels.tourLanguageLabel}
        </span>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="w-full rounded-xl border border-border/60 bg-[#0a0a0f] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#00d4ff]/50"
        >
          {TOUR_LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
        <span className="mt-1 block text-xs text-white/40">{labels.tourLanguageHint}</span>
      </label>

      {/* Quantity */}
      <div className="mt-5">
        <span className="mb-2 block text-sm font-semibold text-white/85">{labels.numberOfCodesLabel}</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-xl border border-border/60 bg-[#0a0a0f]">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-11 w-11 items-center justify-center text-white/70 transition-colors hover:text-[#00d4ff] disabled:opacity-30"
              disabled={qty <= 1}
              aria-label={labels.lessCodesAria}
            >
              <Minus size={16} />
            </button>
            <span className="w-10 text-center text-base font-bold text-white">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => Math.min(MAX_CODES, q + 1))}
              className="flex h-11 w-11 items-center justify-center text-white/70 transition-colors hover:text-[#00d4ff] disabled:opacity-30"
              disabled={qty >= MAX_CODES}
              aria-label={labels.moreCodesAria}
            >
              <Plus size={16} />
            </button>
          </div>
          <span className="text-xs text-white/40">{labels.oneCodeHint}</span>
        </div>
      </div>

      {/* Buy */}
      <button
        type="button"
        onClick={buy}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00d4ff] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0a0a0f] transition-all hover:bg-[#33ddff]"
      >
        <Headphones size={18} /> {labels.buyLabel} €{total}
      </button>
      {pending && (
        <p className="mt-3 text-center text-xs text-white/50">{labels.pendingNote}</p>
      )}
      <p className="mt-3 text-center text-[11px] text-white/30">{labels.deliveryNote}</p>
    </div>
  );
}
