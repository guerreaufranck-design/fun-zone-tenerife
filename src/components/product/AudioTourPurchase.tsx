'use client';

import { useState } from 'react';
import { Headphones, Minus, Plus, Globe } from 'lucide-react';
import { AUDIO_TOUR_PRICE, TOUR_LANGUAGES } from '@/lib/audio-tour';

export default function AudioTourPurchase({
  city,
  citySlug,
}: {
  city: string;
  /** Lume city slug, passed to checkout → Lume at fulfilment. */
  citySlug: string;
}) {
  const [lang, setLang] = useState('en');
  const [qty, setQty] = useState(1);
  const [pending, setPending] = useState(false);

  const total = AUDIO_TOUR_PRICE * qty;

  const buy = () => {
    // Checkout is wired in phase 2 (Stripe session → webhook → Lume activation
    // API returns the codes). For now the pilot only validates the UI.
    setPending(true);
    // Intended call: POST /api/audio-tour/checkout { citySlug, lang, qty }
  };

  return (
    <div className="rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#00d4ff]/5 to-[#111118] p-6 sm:p-8">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00d4ff]">City Pass</p>
          <h3 className="mt-1 text-lg font-bold text-white">{city}: self-guided audio tour</h3>
          <p className="mt-1 text-xs text-white/50">Valid 1 day · offline · augmented-reality guide</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-white">€{total}</p>
          <p className="text-xs text-white/50">€{AUDIO_TOUR_PRICE} / code</p>
        </div>
      </div>

      {/* Tour language (32) */}
      <label className="mt-6 block">
        <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
          <Globe size={15} className="text-[#00d4ff]" /> Tour language
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
        <span className="mt-1 block text-xs text-white/40">Narrated by native speakers. 32 languages available.</span>
      </label>

      {/* Quantity */}
      <div className="mt-5">
        <span className="mb-2 block text-sm font-semibold text-white/85">Number of codes</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-xl border border-border/60 bg-[#0a0a0f]">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-11 w-11 items-center justify-center text-white/70 transition-colors hover:text-[#00d4ff] disabled:opacity-30"
              disabled={qty <= 1}
              aria-label="Fewer codes"
            >
              <Minus size={16} />
            </button>
            <span className="w-10 text-center text-base font-bold text-white">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => Math.min(20, q + 1))}
              className="flex h-11 w-11 items-center justify-center text-white/70 transition-colors hover:text-[#00d4ff] disabled:opacity-30"
              disabled={qty >= 20}
              aria-label="More codes"
            >
              <Plus size={16} />
            </button>
          </div>
          <span className="text-xs text-white/40">One code activates the tour for one person.</span>
        </div>
      </div>

      {/* Buy */}
      <button
        type="button"
        onClick={buy}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00d4ff] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0a0a0f] transition-all hover:bg-[#33ddff]"
      >
        <Headphones size={18} /> Buy for €{total}
      </button>
      {pending && (
        <p className="mt-3 text-center text-xs text-white/50">
          Secure checkout is being finalised. Your code and tour are delivered instantly by email once live.
        </p>
      )}
      <p className="mt-3 text-center text-[11px] text-white/30">Instant email delivery · activation code generated on purchase</p>
    </div>
  );
}
