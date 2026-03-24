'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Calendar, Clock, Users, Download, ArrowRight, X, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const quizPopupText: Record<string, { headline: string; cta: string }> = {
  en: { headline: 'COMING SOON: THE 1ST QUIZ ROOM IN TENERIFE!', cta: 'BOOK NOW!' },
  es: { headline: 'PROXIMAMENTE: LA 1ª QUIZ ROOM DE TENERIFE!', cta: 'RESERVA AHORA!' },
  fr: { headline: 'BIENTOT: LA 1ERE QUIZ ROOM DE TENERIFE!', cta: 'RESERVEZ MAINTENANT!' },
  de: { headline: 'BALD: DER 1. QUIZ ROOM AUF TENERIFFA!', cta: 'JETZT BUCHEN!' },
  nl: { headline: 'BINNENKORT: DE 1E QUIZ ROOM OP TENERIFE!', cta: 'BOEK NU!' },
  it: { headline: 'PROSSIMAMENTE: LA 1ª QUIZ ROOM DI TENERIFE!', cta: 'PRENOTA ORA!' },
};

function BookingSuccessContent() {
  const t = useTranslations('bookingSuccess');
  const searchParams = useSearchParams();

  const locale = useLocale();
  const ref = searchParams.get('ref') ?? '';
  const experience = searchParams.get('experience') ?? '';
  const date = searchParams.get('date') ?? '';
  const time = searchParams.get('time') ?? '';
  const players = searchParams.get('players') ?? '';
  const [showQuizPopup, setShowQuizPopup] = useState(true);
  const quiz = quizPopupText[locale] ?? quizPopupText.en;

  const handleDownloadCalendar = () => {
    const startDate = date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Axe Throwing Tenerife//Booking//EN',
      'BEGIN:VEVENT',
      `DTSTART:${startDate}T${(time.split(' - ')[0] || '18:00').replace(':', '')}00`,
      `SUMMARY:Axe Throwing - ${experience}`,
      `DESCRIPTION:Booking ref: ${ref}. ${players} players.`,
      'LOCATION:Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Americas',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `axe-throwing-${ref}.ics`;
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
          <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
        </motion.div>

        {/* Booking details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-primary/20 shadow-[0_0_20px_rgba(0,212,255,0.08)]">
            <CardContent className="pt-6 space-y-4">
              {/* Booking ref */}
              <div className="text-center pb-4 border-b border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {t('bookingRef')}
                </p>
                <p className="text-2xl font-heading font-bold text-primary neon-glow tracking-wider">
                  {ref}
                </p>
              </div>

              {/* Details */}
              {experience && (
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">{t('experience')}</span>
                  <span className="text-foreground font-medium text-sm">{experience}</span>
                </div>
              )}

              {players && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Users className="h-3.5 w-3.5" />
                    <span>{t('players')}</span>
                  </div>
                  <span className="text-foreground font-medium text-sm">{players}</span>
                </div>
              )}

              {date && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{t('date')}</span>
                  </div>
                  <span className="text-foreground font-medium text-sm">{date}</span>
                </div>
              )}

              {time && (
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

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 space-y-3"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full gap-2"
            onClick={handleDownloadCalendar}
          >
            <Download className="h-4 w-4" />
            {t('addToCalendar')}
          </Button>

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
          {t('emailNote')}
        </motion.p>
      </div>

      {/* QuizzaBoom popup */}
      {showQuizPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowQuizPopup(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-primary/30 bg-[#0d0d14] shadow-[0_0_40px_rgba(0,212,255,0.15)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowQuizPopup(false)}
              className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4 text-white" />
            </button>

            {/* NEW badge */}
            <div className="absolute top-3 left-3 z-10">
              <div className="flex items-center gap-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                <Sparkles className="h-3 w-3" />
                NEW
              </div>
            </div>

            {/* Video */}
            <div className="aspect-video bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/logo-quizzaboom.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Content */}
            <div className="p-5 text-center space-y-4">
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-tight">
                {quiz.headline}
              </h3>

              <a href={`/${locale}/experiences/quizzaboom-1h`}>
                <Button
                  variant="neon"
                  size="lg"
                  className="w-full text-base font-bold gap-2 mt-2"
                  onClick={() => setShowQuizPopup(false)}
                >
                  {quiz.cta}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
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
