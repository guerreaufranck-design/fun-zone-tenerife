'use client';

import { motion } from 'framer-motion';
import { Minus, Plus, Users, AlertTriangle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

interface PlayerSelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max: number;
  pricePerPerson?: number;
}

export default function PlayerSelector({
  value,
  onChange,
  min = 1,
  max,
  pricePerPerson,
}: PlayerSelectorProps) {
  const t = useTranslations('booking');
  const tCommon = useTranslations('common');

  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-6">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={decrement}
          disabled={value <= min}
          className="h-14 w-14 rounded-full border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all disabled:opacity-30"
        >
          <Minus className="h-6 w-6" />
        </Button>

        <motion.div
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex flex-col items-center"
        >
          <span className="text-7xl font-heading font-bold text-primary neon-glow">
            {value}
          </span>
          <span className="text-muted-foreground text-sm mt-1">
            {value === 1 ? tCommon('player') : tCommon('players')}
          </span>
        </motion.div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={increment}
          disabled={value >= max}
          className="h-14 w-14 rounded-full border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all disabled:opacity-30"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      {pricePerPerson && (
        <p className="text-muted-foreground text-sm">
          {t('fromPerPerson', { amount: `${pricePerPerson} €` })}
        </p>
      )}

      {value > 5 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg border border-neon-orange/30 bg-neon-orange/5 px-4 py-3 text-sm"
        >
          <AlertTriangle className="h-4 w-4 text-neon-orange flex-shrink-0" />
          <span className="text-neon-orange">{t('doubleLaneNote')}</span>
        </motion.div>
      )}

      <div className="flex items-center gap-2 text-muted-foreground text-xs">
        <Users className="h-3.5 w-3.5" />
        <span>{t('maxPlayers', { max })}</span>
      </div>
    </div>
  );
}
