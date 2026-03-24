'use client';

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function QuizzaBoomPopup() {
  const [show, setShow] = useState(false);
  const t = useTranslations('quizzaboom');
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('quizzaboom-popup-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('quizzaboom-popup-dismissed', '1');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) dismiss();
  };

  const handleBook = () => {
    dismiss();
    router.push('/en/book');
  };

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl border border-primary/30 bg-[#0d0d14] shadow-[0_0_40px_rgba(0,212,255,0.15)] overflow-hidden">
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="px-5 pt-5 pb-3 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[3px] text-primary/80 font-medium mb-1">
            {t('comingSoon')}
          </p>
          <h2 className="text-lg sm:text-xl font-heading font-bold text-white leading-tight">
            {t('headline')}
          </h2>
        </div>

        {/* Video */}
        <div className="px-4 pb-3">
          <div className="rounded-xl overflow-hidden border border-white/5">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
            >
              <source src="/videos/logo-quizzaboom.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* CTA */}
        <div className="px-5 pb-5">
          <button
            onClick={handleBook}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-[#8b5cf6] text-white font-heading font-bold text-sm sm:text-base tracking-wide hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all active:scale-[0.98]"
          >
            {t('bookNow')}
          </button>
        </div>
      </div>
    </div>
  );
}
