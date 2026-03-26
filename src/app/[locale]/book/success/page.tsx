'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Calendar, Clock, Users, Download, ArrowRight, Map, Smartphone } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function BookingSuccessContent() {
  const t = useTranslations('bookingSuccess');
  const searchParams = useSearchParams();
  const locale = useLocale();

  const ref = searchParams.get('ref') ?? '';
  const experience = searchParams.get('experience') ?? '';
  const date = searchParams.get('date') ?? '';
  const time = searchParams.get('time') ?? '';
  const players = searchParams.get('players') ?? '';
  const isEscape = searchParams.get('type') === 'escape';

  const handleDownloadCalendar = () => {
    const startDate = date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Fun Zone Tenerife//Booking//EN',
      'BEGIN:VEVENT',
      `DTSTART:${startDate}T${(time.split(' - ')[0] || '18:00').replace(':', '')}00`,
      `SUMMARY:Fun Zone Tenerife - ${experience}`,
      `DESCRIPTION:Booking ref: ${ref}. ${players} players.`,
      'LOCATION:Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Americas',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `fun-zone-${ref}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full">
        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-neon-green/20 blur-xl"
              style={{ width: 96, height: 96 }}
            />
            <div className="relative w-24 h-24 rounded-full bg-neon-green/10 border-2 border-neon-green/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.3)]">
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Check className="h-12 w-12 text-neon-green" strokeWidth={3} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-heading font-bold neon-glow mb-3">
            {t('title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {isEscape ? t('escapeSubtitle') : t('subtitle')}
          </p>
        </motion.div>

        {/* Booking details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-primary/20 shadow-[0_0_20px_rgba(0,212,255,0.08)]">
            <CardContent className="pt-6 space-y-4">
              {/* Booking ref - only for regular bookings */}
              {ref && (
                <div className="text-center pb-4 border-b border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {t('bookingRef')}
                  </p>
                  <p className="text-2xl font-heading font-bold text-primary neon-glow tracking-wider">
                    {ref}
                  </p>
                </div>
              )}

              {/* Escape game specific info */}
              {isEscape && (
                <div className="text-center pb-4 border-b border-border">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Map className="h-5 w-5 text-[#ff2d7b]" />
                    <span className="text-sm font-semibold text-[#ff2d7b] uppercase tracking-wider">
                      Escape Game
                    </span>
                  </div>
                </div>
              )}

              {/* Experience name */}
              {experience && (
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">{t('experience')}</span>
                  <span className="text-foreground font-medium text-sm">{experience}</span>
                </div>
              )}

              {/* Players - regular bookings */}
              {players && !isEscape && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Users className="h-3.5 w-3.5" />
                    <span>{t('players')}</span>
                  </div>
                  <span className="text-foreground font-medium text-sm">{players}</span>
                </div>
              )}

              {/* Date - regular bookings */}
              {date && !isEscape && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{t('date')}</span>
                  </div>
                  <span className="text-foreground font-medium text-sm">{date}</span>
                </div>
              )}

              {/* Time - regular bookings */}
              {time && !isEscape && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{t('time')}</span>
                  </div>
                  <span className="text-foreground font-medium text-sm">{time}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Escape game instructions */}
        {isEscape && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4"
          >
            <Card className="border-[#ff2d7b]/20 bg-[#ff2d7b]/5">
              <CardContent className="pt-5 space-y-3">
                <p className="text-sm font-semibold text-[#ff2d7b]">📧 {t('escapeNextSteps')}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#ff2d7b]">1.</span>
                    <span>{t('escapeInstruction1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#ff2d7b]">2.</span>
                    <span>{t('escapeInstruction2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#ff2d7b]">3.</span>
                    <span>{t('escapeInstruction3')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 space-y-3"
        >
          {/* Calendar download - only for regular bookings with a date */}
          {!isEscape && date && (
            <Button
              variant="outline"
              size="lg"
              className="w-full gap-2"
              onClick={handleDownloadCalendar}
            >
              <Download className="h-4 w-4" />
              {t('addToCalendar')}
            </Button>
          )}

          <Button variant="default" size="lg" className="w-full gap-2" asChild>
            <Link href="/">
              {t('backToHome')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Email note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-muted-foreground text-sm mt-6"
        >
          {isEscape ? t('escapeEmailNote') : t('emailNote')}
        </motion.p>
      </div>
    </div>
  );
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  );
}
