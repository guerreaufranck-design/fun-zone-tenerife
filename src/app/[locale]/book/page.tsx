'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import BookingWizard from '@/components/booking/BookingWizard';

export default function BookPage() {
  const t = useTranslations('booking');

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-heading font-bold neon-glow mb-4">
            {t('title')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <BookingWizard />
      </div>
    </div>
  );
}
