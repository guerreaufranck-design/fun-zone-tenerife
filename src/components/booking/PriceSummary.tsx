'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Sparkles, Tag, Info } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PriceSummaryProps {
  experienceName: string;
  players: number;
  date: string;
  time: string;
  pricePerPerson: number;
  totalPrice: number;
  depositAmount: number;
  dynamicPricing?: {
    label: string;
    discount: number;
    savings: number;
  };
}

export default function PriceSummary({
  experienceName,
  players,
  date,
  time,
  pricePerPerson,
  totalPrice,
  depositAmount,
  dynamicPricing,
}: PriceSummaryProps) {
  const t = useTranslations('booking');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="border-primary/20 shadow-[0_0_20px_rgba(0,212,255,0.08)]">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-heading neon-glow">
            {t('summary')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          {/* Experience */}
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">{t('experience')}</span>
            <span className="text-foreground font-medium text-sm">{experienceName}</span>
          </div>

          {/* Players */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Users className="h-3.5 w-3.5" />
              <span>{t('players')}</span>
            </div>
            <span className="text-foreground font-medium text-sm">{players}</span>
          </div>

          {/* Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="h-3.5 w-3.5" />
              <span>{t('date')}</span>
            </div>
            <span className="text-foreground font-medium text-sm">{date}</span>
          </div>

          {/* Time */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Clock className="h-3.5 w-3.5" />
              <span>{t('time')}</span>
            </div>
            <span className="text-foreground font-medium text-sm">{time}</span>
          </div>

          <div className="border-t border-border my-2" />

          {/* Dynamic pricing badge */}
          {dynamicPricing && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-neon-green" />
                <Badge variant="neonGreen" className="text-xs">
                  {dynamicPricing.label}
                </Badge>
              </div>
              <span className="text-neon-green text-sm font-medium">
                -{dynamicPricing.savings}&nbsp;&euro;
              </span>
            </div>
          )}

          {/* PRICE PER PERSON - highlighted */}
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-[#8b5cf6]/10 border border-primary/20 p-3 sm:p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Tag className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground text-sm">{t('pricePerPerson')}</span>
            </div>
            <span className="text-2xl sm:text-3xl font-heading font-bold text-primary neon-glow">
              {pricePerPerson}&nbsp;&euro;
            </span>
            <span className="text-muted-foreground text-sm ml-1">/{t('perPerson')}</span>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between">
            <span className="text-foreground font-semibold">{t('total')}</span>
            <span className="text-lg font-heading font-bold text-foreground">
              {totalPrice}&nbsp;&euro;
            </span>
          </div>

          {/* Deposit info */}
          <div className="flex items-start gap-2 sm:gap-3 rounded-lg bg-neon-green/5 border border-neon-green/20 px-2 py-2 sm:px-3 sm:py-3">
            <Info className="h-4 w-4 text-neon-green flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-neon-green">
                {t('depositLabel')}: {depositAmount}&nbsp;&euro;
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {t('depositNote')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
