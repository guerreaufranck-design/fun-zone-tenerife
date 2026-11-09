'use client';

import { useEffect, useState } from 'react';
import { Headphones, Ticket, WifiOff, ArrowRight } from 'lucide-react';
import { AUDIO_TOUR_PRICE } from '@/lib/audio-tour';

export interface StickyLabels {
  reassure1: string;
  reassure2: string;
  onePrice: string;
  cta: string;
}

/**
 * Sticky purchase bar that slides up once the visitor scrolls past the hero,
 * mirroring the reference layout. The CTA scrolls to the on-page purchase block
 * (id="buy").
 */
export default function AudioTourStickyBar({ city, labels }: { city: string; labels: StickyLabels }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toBuy = () => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[#00d4ff]/20 bg-[#0a0a0f]/95 backdrop-blur-md transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-6 sm:px-6">
        <div className="hidden min-w-0 items-center gap-2 text-sm font-semibold text-white sm:flex">
          <Headphones size={16} className="shrink-0 text-[#00d4ff]" />
          <span className="truncate">{city}</span>
        </div>
        <div className="hidden flex-1 items-center gap-5 text-xs text-white/55 lg:flex">
          <span className="flex items-center gap-1.5"><Ticket size={13} className="text-[#00d4ff]" /> {labels.reassure1}</span>
          <span className="flex items-center gap-1.5"><WifiOff size={13} className="text-[#00d4ff]" /> {labels.reassure2}</span>
        </div>
        <div className="flex flex-1 items-center justify-end gap-3 lg:flex-none">
          <div className="text-right leading-tight">
            <span className="block text-lg font-bold text-white">€{AUDIO_TOUR_PRICE}</span>
            <span className="block text-[10px] uppercase tracking-wider text-white/40">{labels.onePrice}</span>
          </div>
          <button
            type="button"
            onClick={toBuy}
            className="inline-flex items-center gap-2 rounded-xl bg-[#00d4ff] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0f] transition-all hover:bg-[#33ddff] sm:text-sm"
          >
            {labels.cta} <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
