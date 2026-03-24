'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

const WHATSAPP_NUMBER = '34623362229';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.49l6.328-2.024C10.008 31.074 12.886 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.013-3.179 2.28-.853.18-1.966.324-5.715-1.228-4.8-1.986-7.89-6.857-8.13-7.174-.228-.317-1.924-2.56-1.924-4.883 0-2.323 1.218-3.463 1.65-3.937.432-.474.943-.593 1.257-.593.314 0 .628.003.903.016.29.014.678-.11 1.06.808.39.94 1.336 3.263 1.453 3.5.118.237.196.513.04.83-.158.316-.237.513-.474.79-.237.278-.498.62-.71.832-.238.237-.485.494-.209.968.277.474 1.231 2.03 2.643 3.29 1.816 1.62 3.347 2.122 3.821 2.36.474.236.75.196 1.027-.118.277-.316 1.178-1.375 1.493-1.848.315-.474.63-.394 1.061-.237.432.158 2.755 1.3 3.228 1.536.474.237.79.355.907.553.118.197.118 1.14-.272 2.24z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const t = useTranslations('common');
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);

  // Show tooltip after 3 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownTooltip) {
        setShowTooltip(true);
        setHasShownTooltip(true);
        // Auto-hide after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasShownTooltip]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t('whatsappMessage')
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative mb-2 max-w-[220px] rounded-xl bg-white px-4 py-3 shadow-lg"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300"
              aria-label="Close"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-sm font-medium text-gray-900">
              {t('whatsappTooltip')}
            </p>
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -mr-2 -translate-y-1/2">
              <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)]"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <WhatsAppIcon className="relative h-8 w-8 text-white" />
      </motion.a>
    </div>
  );
}
