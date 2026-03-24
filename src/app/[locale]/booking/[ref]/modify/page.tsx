'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import {
  Calendar,
  Clock,
  Users,
  Check,
  AlertTriangle,
  ArrowRight,
  ChevronLeft,
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DatePicker from '@/components/booking/DatePicker';
import TimeSlotPicker, { type TimeSlot } from '@/components/booking/TimeSlotPicker';

interface BookingDetails {
  ref: string;
  experience: string;
  experienceSlug: string;
  players: number;
  date: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
}

function ModifyBookingContent() {
  const t = useTranslations('bookingModify');
  const tBooking = useTranslations('booking');
  const params = useParams();
  const searchParams = useSearchParams();

  const bookingRef = params.ref as string;
  const token = searchParams.get('token') ?? '';

  // State
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Fetch booking details
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await fetch(
          `/api/bookings/${bookingRef}?token=${token}`
        );
        if (res.ok) {
          const data = await res.json();
          setBooking(data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingRef, token]);

  // Fetch time slots
  const fetchTimeSlots = useCallback(async (date: Date) => {
    if (!booking) return;

    setLoadingSlots(true);
    setSelectedSlot(null);

    try {
      const dateStr = format(date, 'yyyy-MM-dd');
      const res = await fetch(
        `/api/bookings/availability?offerId=${booking.experienceSlug}&date=${dateStr}&players=${booking.players}`
      );

      if (res.ok) {
        const data = await res.json();
        setTimeSlots(data.slots || []);
      } else {
        setTimeSlots([]);
      }
    } catch {
      setTimeSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  }, [booking]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      fetchTimeSlots(date);
    } else {
      setTimeSlots([]);
      setSelectedSlot(null);
    }
  };

  // Submit modification
  const handleSubmit = async () => {
    if (!selectedDate || !selectedSlot) return;

    setSubmitting(true);

    try {
      const res = await fetch(`/api/bookings/${bookingRef}/modify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          date: format(selectedDate, 'yyyy-MM-dd'),
          timeSlotId: selectedSlot.id,
          startTime: selectedSlot.startTime,
          endTime: selectedSlot.endTime,
        }),
      });

      if (res.ok) {
        setSuccess(true);
      }
    } catch {
      // handle error silently
    } finally {
      setSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  // Error state
  if (error || !booking) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <h1 className="text-2xl font-heading font-bold mb-3">{t('notFound')}</h1>
          <p className="text-muted-foreground mb-6">{t('notFoundDescription')}</p>
          <Button variant="default" asChild>
            <Link href="/">{t('backToHome')}</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Success state
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-neon-green" />
          </div>
          <h1 className="text-3xl font-heading font-bold mb-3 neon-glow">
            {t('successTitle')}
          </h1>
          <p className="text-muted-foreground text-lg mb-2">
            {t('successSubtitle')}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {t('newDate')}: {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''} | {selectedSlot?.startTime} - {selectedSlot?.endTime}
          </p>
          <Button variant="default" size="lg" className="gap-2" asChild>
            <Link href="/">
              {t('backToHome')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-heading font-bold neon-glow mb-3">
            {t('title')}
          </h1>
          <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
        </motion.div>

        {/* Current booking info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-heading text-muted-foreground">
                {t('currentBooking')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">{t('ref')}</span>
                <span className="text-primary font-semibold text-sm">{booking.ref}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">{tBooking('experience')}</span>
                <span className="text-foreground font-medium text-sm">{booking.experience}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Users className="h-3.5 w-3.5" />
                  <span>{tBooking('players')}</span>
                </div>
                <span className="text-foreground font-medium text-sm">{booking.players}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{tBooking('date')}</span>
                </div>
                <span className="text-foreground font-medium text-sm">{booking.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{tBooking('time')}</span>
                </div>
                <span className="text-foreground font-medium text-sm">
                  {booking.startTime} - {booking.endTime}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* New date & time selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-heading font-semibold mb-6 text-center">
            {t('chooseNewDateTime')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center lg:text-left">
                {tBooking('selectDate')}
              </h3>
              <DatePicker
                selected={selectedDate}
                onSelect={handleDateSelect}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center lg:text-left">
                {tBooking('selectTime')}
              </h3>
              {selectedDate ? (
                <TimeSlotPicker
                  slots={timeSlots}
                  selected={selectedSlot}
                  onSelect={setSelectedSlot}
                  loading={loadingSlots}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">{tBooking('selectDateFirst')}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex justify-between mt-10 pt-6 border-t border-border">
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/">
              <ChevronLeft className="h-4 w-4" />
              {tBooking('back')}
            </Link>
          </Button>

          <Button
            variant="neon"
            size="lg"
            onClick={handleSubmit}
            disabled={!selectedDate || !selectedSlot || submitting}
            className="gap-2"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t('saving')}
              </span>
            ) : (
              <>
                {t('confirmChange')}
                <Check className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ModifyBookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    }>
      <ModifyBookingContent />
    </Suspense>
  );
}
