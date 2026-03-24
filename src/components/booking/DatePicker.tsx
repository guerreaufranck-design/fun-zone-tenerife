'use client';

import { DayPicker } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { isBefore, isMonday, startOfDay, format, addMonths } from 'date-fns';
import { useTranslations } from 'next-intl';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  closedDates?: string[];
  availableFrom?: string | null;
}

export default function DatePicker({ selected, onSelect, closedDates = [], availableFrom }: DatePickerProps) {
  const t = useTranslations('booking');
  const today = startOfDay(new Date());
  const minDate = availableFrom ? startOfDay(new Date(availableFrom + 'T00:00:00')) : today;
  const effectiveFrom = minDate > today ? minDate : today;

  const closedSet = new Set(closedDates);

  const isDisabled = (date: Date) => {
    if (isBefore(date, effectiveFrom) || isMonday(date)) return true;
    return closedSet.has(format(date, 'yyyy-MM-dd'));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Calendar className="h-4 w-4" />
        <span>{t('closedMondays')}</span>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 shadow-[0_0_15px_rgba(0,212,255,0.05)]">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={onSelect}
          disabled={isDisabled}
          startMonth={today}
          endMonth={addMonths(today, 6)}
          defaultMonth={effectiveFrom}
          components={{
            Chevron: ({ orientation }) => {
              if (orientation === 'left') return <ChevronLeft className="h-4 w-4" />;
              return <ChevronRight className="h-4 w-4" />;
            },
          }}
          classNames={{
            root: 'text-foreground',
            months: 'flex flex-col',
            month: 'space-y-4',
            month_caption: 'flex justify-center pt-1 relative items-center mb-2',
            caption_label: 'text-base font-heading font-semibold text-foreground',
            nav: 'absolute inset-x-0 top-1 flex items-center justify-between px-1 z-10',
            button_previous: 'h-8 w-8 bg-muted rounded-lg border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all text-muted-foreground hover:text-primary cursor-pointer',
            button_next: 'h-8 w-8 bg-muted rounded-lg border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all text-muted-foreground hover:text-primary cursor-pointer',
            month_grid: 'w-full border-collapse',
            weekdays: 'flex',
            weekday: 'text-muted-foreground w-10 h-10 flex items-center justify-center text-xs font-medium uppercase',
            week: 'flex mt-1',
            day: 'h-10 w-10 flex items-center justify-center text-sm rounded-lg transition-all',
            day_button: 'h-10 w-10 flex items-center justify-center rounded-lg transition-all hover:bg-primary/10 hover:text-primary hover:border hover:border-primary/30 cursor-pointer',
            selected: '!bg-primary !text-primary-foreground shadow-[0_0_12px_rgba(0,212,255,0.4)] font-semibold',
            today: 'font-medium underline underline-offset-4 decoration-primary/40',
            disabled: 'text-muted-foreground/30 cursor-not-allowed hover:bg-transparent hover:text-muted-foreground/30 hover:border-none',
            outside: 'text-muted-foreground/20',
          }}
          style={{ position: 'relative' }}
        />
      </div>
    </div>
  );
}
