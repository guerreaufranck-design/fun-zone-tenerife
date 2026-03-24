'use client';

import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  price: number;
  available: boolean;
  lanesAvailable?: number;
  dynamicPricing?: {
    label: string;
    discount: number;
  };
}

type SlotStatus = 'green' | 'orange' | 'red';

function getSlotStatus(slot: TimeSlot, totalLanes: number): SlotStatus {
  if (!slot.available) return 'red';
  const lanes = slot.lanesAvailable ?? totalLanes;
  if (lanes >= totalLanes) return 'green';
  return 'orange';
}

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  selected: TimeSlot | null;
  onSelect: (slot: TimeSlot) => void;
  loading?: boolean;
  totalLanes?: number;
}

export default function TimeSlotPicker({
  slots,
  selected,
  onSelect,
  loading = false,
  totalLanes = 4,
}: TimeSlotPickerProps) {
  const t = useTranslations('booking');

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="relative h-12 w-12 mb-4">
          <div className="absolute inset-0 rounded-full border-2 border-[#00b4d8]/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00b4d8] animate-spin" />
        </div>
        <p className="text-sm text-muted-foreground animate-pulse">{t('loadingSlots')}</p>
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
        <p className="text-muted-foreground">{t('noSlots')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {slots.map((slot, index) => {
          const isSelected = selected?.id === slot.id;
          const status = getSlotStatus(slot, totalLanes);

          const statusColors = {
            green: {
              border: 'border-emerald-500/50',
              bg: 'bg-emerald-500/5',
              indicator: 'bg-emerald-500',
              hoverBorder: 'hover:border-emerald-500',
              hoverShadow: 'hover:shadow-[0_0_12px_rgba(16,185,129,0.2)]',
            },
            orange: {
              border: 'border-amber-500/50',
              bg: 'bg-amber-500/5',
              indicator: 'bg-amber-500',
              hoverBorder: 'hover:border-amber-500',
              hoverShadow: 'hover:shadow-[0_0_12px_rgba(245,158,11,0.2)]',
            },
            red: {
              border: 'border-red-500/30',
              bg: 'bg-red-500/5',
              indicator: 'bg-red-500',
              hoverBorder: '',
              hoverShadow: '',
            },
          };

          const colors = statusColors[status];

          return (
            <motion.button
              key={slot.id}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => status !== 'red' && onSelect(slot)}
              disabled={status === 'red'}
              className={cn(
                'relative flex flex-col items-center justify-center rounded-xl border-2 p-5 transition-all duration-200',
                isSelected
                  ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(0,212,255,0.3)] scale-[1.02]'
                  : status === 'red'
                    ? 'border-red-500/20 bg-red-500/5 opacity-60 cursor-not-allowed'
                    : cn(colors.border, colors.bg, colors.hoverBorder, colors.hoverShadow, 'cursor-pointer')
              )}
            >
              {/* Status indicator dot */}
              <div className={cn(
                'absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full',
                isSelected ? 'bg-primary' : colors.indicator
              )} />

              {slot.dynamicPricing && status !== 'red' && (
                <Badge
                  variant="neonGreen"
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] px-1.5 py-0.5 whitespace-nowrap"
                >
                  <Sparkles className="h-2.5 w-2.5 mr-0.5" />
                  {slot.dynamicPricing.label}
                </Badge>
              )}

              <span
                className={cn(
                  'text-lg font-heading font-bold',
                  isSelected ? 'text-primary' : status === 'red' ? 'text-muted-foreground' : 'text-foreground'
                )}
              >
                {slot.startTime} - {slot.endTime}
              </span>

              {status !== 'red' ? (
                <span
                  className={cn(
                    'text-sm mt-1.5',
                    isSelected ? 'text-primary/80' : 'text-muted-foreground'
                  )}
                >
                  {slot.price}&nbsp;&euro;
                  <span className="text-xs opacity-60">/{t('perPerson')}</span>
                  {slot.dynamicPricing && (
                    <span className="text-neon-green text-xs ml-1">
                      (-{slot.dynamicPricing.discount}%)
                    </span>
                  )}
                </span>
              ) : (
                <span className="text-xs mt-1.5 text-red-400 font-medium">
                  {t('slotFull')}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Color legend */}
      <div className="flex items-center justify-center gap-5 pt-2">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs text-muted-foreground">{t('slotAvailable')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          <span className="text-xs text-muted-foreground">{t('slotLimited')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="text-xs text-muted-foreground">{t('slotFull')}</span>
        </div>
      </div>
    </div>
  );
}
