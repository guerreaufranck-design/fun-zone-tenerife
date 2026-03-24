'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ArrowRight, Sparkles, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type PaymentType = 'deposit' | 'full';

interface PaymentChoiceProps {
  totalPrice: number;
  depositAmount: number;
  onConfirm: (paymentType: PaymentType) => void;
  loading?: boolean;
}

export default function PaymentChoice({
  totalPrice,
  depositAmount,
  onConfirm,
  loading = false,
}: PaymentChoiceProps) {
  const t = useTranslations('booking');
  const [selected, setSelected] = useState<PaymentType>('deposit');

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Deposit option */}
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setSelected('deposit')}
          className={cn(
            'relative flex flex-col items-center rounded-xl border-2 p-3 sm:p-6 transition-all duration-300 text-left',
            selected === 'deposit'
              ? 'border-primary bg-primary/5 shadow-[0_0_25px_rgba(0,212,255,0.2)]'
              : 'border-border bg-card hover:border-primary/30 hover:shadow-[0_0_10px_rgba(0,212,255,0.1)]'
          )}
        >
          <Badge
            variant="neonBlue"
            className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs uppercase tracking-wider"
          >
            <Sparkles className="h-3 w-3 mr-1" />
            {t('recommended')}
          </Badge>

          {selected === 'deposit' && (
            <div className="absolute top-3 right-3">
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          )}

          <CreditCard className={cn(
            'h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3',
            selected === 'deposit' ? 'text-primary' : 'text-muted-foreground'
          )} />

          <h3 className={cn(
            'text-sm sm:text-lg font-heading font-semibold mb-1',
            selected === 'deposit' ? 'text-primary' : 'text-foreground'
          )}>
            {t('deposit')}
          </h3>

          <p className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-1 sm:mb-2">
            {depositAmount}&nbsp;&euro;
          </p>

          <p className="text-muted-foreground text-xs sm:text-sm text-center">
            {t('depositDescription')}
          </p>
        </motion.button>

        {/* Full payment option */}
        <motion.button
          type="button"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setSelected('full')}
          className={cn(
            'relative flex flex-col items-center rounded-xl border-2 p-3 sm:p-6 transition-all duration-300 text-left',
            selected === 'full'
              ? 'border-primary bg-primary/5 shadow-[0_0_25px_rgba(0,212,255,0.2)]'
              : 'border-border bg-card hover:border-primary/30 hover:shadow-[0_0_10px_rgba(0,212,255,0.1)]'
          )}
        >
          {selected === 'full' && (
            <div className="absolute top-3 right-3">
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          )}

          <CreditCard className={cn(
            'h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3',
            selected === 'full' ? 'text-primary' : 'text-muted-foreground'
          )} />

          <h3 className={cn(
            'text-sm sm:text-lg font-heading font-semibold mb-1',
            selected === 'full' ? 'text-primary' : 'text-foreground'
          )}>
            {t('fullPayment')}
          </h3>

          <p className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-1 sm:mb-2">
            {totalPrice}&nbsp;&euro;
          </p>

          <p className="text-muted-foreground text-xs sm:text-sm text-center">
            {t('fullPaymentDescription')}
          </p>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          variant="neon"
          size="xl"
          className="w-full"
          onClick={() => onConfirm(selected)}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t('processing')}
            </span>
          ) : (
            <span className="flex items-center gap-2">
              {t('confirmAndPay')}
              <ArrowRight className="h-5 w-5" />
            </span>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
