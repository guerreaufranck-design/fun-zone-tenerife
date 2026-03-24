'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

export default function BookingCancelPage() {
  const t = useTranslations('bookingCancel');

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-destructive/10 border-2 border-destructive/30 flex items-center justify-center">
            <XCircle className="h-12 w-12 text-destructive" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-heading font-bold mb-3 text-foreground">
            {t('title')}
          </h1>
          <p className="text-muted-foreground text-lg mb-2">
            {t('subtitle')}
          </p>
          <p className="text-muted-foreground text-sm">
            {t('noCharge')}
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 space-y-3"
        >
          <Button variant="default" size="lg" className="w-full gap-2" asChild>
            <Link href="/book">
              <RefreshCw className="h-4 w-4" />
              {t('tryAgain')}
            </Link>
          </Button>

          <Button variant="ghost" size="lg" className="w-full gap-2" asChild>
            <Link href="/">
              {t('backToHome')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
