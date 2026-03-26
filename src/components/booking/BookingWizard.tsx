'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import {
  Axe,
  Target,
  Swords,
  Clock,
  Users,
  Calendar,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Star,
  Loader2,
  PartyPopper,
  BrainCircuit,
  Map as MapIcon,
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@/lib/supabase/client';
import DatePicker from './DatePicker';
import TimeSlotPicker, { type TimeSlot } from './TimeSlotPicker';
import PlayerSelector from './PlayerSelector';
import PriceSummary from './PriceSummary';
import PaymentChoice from './PaymentChoice';

/* ============================================
   EXPERIENCE TYPE (loaded from Supabase)
   ============================================ */

interface Experience {
  id: string;
  slug: string;
  title: string;
  duration: number;
  laneType: string;
  maxPlayers: number;
  minPlayers: number;
  fromPrice: number;
  icon: string;
  category: CategoryKey;
  availableFrom: string | null;
}

function getIconType(slug: string, laneType: string): string {
  if (slug.includes('quiz')) return 'quiz';
  if (slug.includes('ninja') || slug.includes('initiation')) return 'ninja';
  if (slug.includes('premium')) return 'premium';
  if (laneType === 'darts_pixels' || laneType === 'classic_darts') return 'darts';
  return 'axe';
}

/* ============================================
   CATEGORY SYSTEM
   ============================================ */

type CategoryKey = 'axe' | 'ninja' | 'darts' | 'quiz' | 'escape' | 'events';

interface Category {
  key: CategoryKey;
  icon: typeof Axe;
}

const categories: Category[] = [
  { key: 'escape', icon: MapIcon },
  { key: 'axe', icon: Axe },
  { key: 'ninja', icon: Swords },
  { key: 'darts', icon: Target },
  { key: 'quiz', icon: BrainCircuit },
  { key: 'events', icon: PartyPopper },
];

function getCategory(slug: string, laneType: string): CategoryKey {
  if (slug.includes('escape') || laneType === 'escape') return 'escape';
  if (slug.includes('quiz')) return 'quiz';
  if (slug.includes('ninja') || slug.includes('initiation')) return 'ninja';
  if (laneType === 'darts_pixels' || laneType === 'classic_darts') return 'darts';
  if (
    slug.includes('birthday') ||
    slug.includes('bachelor') ||
    slug.includes('team')
  )
    return 'events';
  return 'axe';
}

/* ============================================
   ICON MAPPING
   ============================================ */

function ExperienceIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case 'axe':
      return <Axe className={className} />;
    case 'ninja':
      return <Swords className={className} />;
    case 'premium':
      return <Star className={className} />;
    case 'darts':
      return <Target className={className} />;
    case 'quiz':
      return <BrainCircuit className={className} />;
    case 'escape':
      return <MapIcon className={className} />;
    default:
      return <Axe className={className} />;
  }
}

/* ============================================
   STEP INDICATOR
   ============================================ */

const steps = [
  { key: 'step1', icon: Axe },
  { key: 'step2', icon: Users },
  { key: 'step3', icon: Calendar },
  { key: 'step4', icon: CreditCard },
  { key: 'step5', icon: CreditCard },
] as const;

function StepIndicator({ currentStep }: { currentStep: number }) {
  const t = useTranslations('booking');

  return (
    <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2">
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;

        return (
          <div key={step.key} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 border-2',
                  isActive
                    ? 'border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                    : isCompleted
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-muted text-muted-foreground'
                )}
              >
                {isCompleted ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={cn(
                  'text-[10px] mt-1.5 font-medium whitespace-nowrap hidden sm:block',
                  isActive ? 'text-primary' : isCompleted ? 'text-primary/70' : 'text-muted-foreground'
                )}
              >
                {t(step.key)}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 transition-colors duration-300 mt-[-16px] sm:mt-[-12px]',
                  isCompleted ? 'bg-primary' : 'bg-border'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ============================================
   SLIDE ANIMATION
   ============================================ */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

/* ============================================
   BOOKING WIZARD
   ============================================ */

export default function BookingWizard() {
  const t = useTranslations('booking');
  const tExp = useTranslations('experiences');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  // Wizard state
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const wizardRef = useRef<HTMLDivElement>(null);

  // Category + Experiences from Supabase — support ?category=escape URL param
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat && ['axe', 'ninja', 'darts', 'quiz', 'escape', 'events'].includes(cat)) {
        return cat as CategoryKey;
      }
    }
    return null;
  });
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  // Booking data
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [players, setPlayers] = useState(2);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // API state
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [totalLanes, setTotalLanes] = useState(0);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [closedDates, setClosedDates] = useState<string[]>([]);

  // Calculated values
  const totalPrice = selectedSlot ? selectedSlot.price * players : 0;
  const depositAmount = Math.ceil(totalPrice * 0.2);

  /* ============================================
     FETCH EXPERIENCES FROM SUPABASE
     ============================================ */

  useEffect(() => {
    async function fetchOffers() {
      const supabase = createClient();

      const { data: offers } = await supabase
        .from('offers')
        .select('id, slug, title, duration_minutes, min_players, max_players, lane_type, is_active, sort_order, available_from')
        .eq('is_active', true)
        .neq('backoffice_only', true)
        .order('sort_order');

      if (!offers || offers.length === 0) {
        setLoadingExperiences(false);
        return;
      }

      // Fetch all pricing in one query
      const offerIds = offers.map((o) => o.id);
      const { data: allPricing } = await supabase
        .from('offer_pricing')
        .select('offer_id, players, price_cents')
        .in('offer_id', offerIds);

      // Group pricing by offer_id
      const pricingByOffer = new Map<string, { players: number; price_cents: number }[]>();
      if (allPricing) {
        for (const p of allPricing) {
          if (!pricingByOffer.has(p.offer_id)) {
            pricingByOffer.set(p.offer_id, []);
          }
          pricingByOffer.get(p.offer_id)!.push(p);
        }
      }

      const mapped: Experience[] = offers.map((offer) => {
        const pricing = pricingByOffer.get(offer.id) || [];
        let minPricePerPerson = 0;

        if (pricing.length > 0) {
          if (offer.lane_type === 'classic_darts') {
            minPricePerPerson = pricing[0].price_cents / 100;
          } else {
            minPricePerPerson = Math.min(
              ...pricing.map((p) => p.price_cents / p.players / 100)
            );
          }
        }

        const titleObj = offer.title as Record<string, string>;
        const localizedTitle = titleObj[locale] || titleObj['en'] || offer.slug;

        return {
          id: offer.id,
          slug: offer.slug,
          title: localizedTitle,
          duration: offer.duration_minutes,
          laneType: offer.lane_type,
          maxPlayers: offer.max_players,
          minPlayers: offer.min_players,
          fromPrice: Math.round(minPricePerPerson),
          icon: getIconType(offer.slug, offer.lane_type),
          category: getCategory(offer.slug, offer.lane_type),
          availableFrom: offer.available_from ?? null,
        };
      });

      setExperiences(mapped);
      setLoadingExperiences(false);
    }

    fetchOffers();
  }, [locale]);

  // Fetch closed dates once
  useEffect(() => {
    fetch('/api/bookings/closed-dates')
      .then((r) => r.json())
      .then((d) => setClosedDates(d.closedDates ?? []))
      .catch(() => {});
  }, []);

  /* ============================================
     NAVIGATION
     ============================================ */

  const scrollToTop = () => {
    wizardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goNext = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 5));
    setTimeout(scrollToTop, 100);
  };

  const goBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setTimeout(scrollToTop, 100);
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 1:
        return selectedExperience !== null;
      case 2:
        return players >= 1;
      case 3:
        return selectedDate !== undefined && selectedSlot !== null;
      case 4:
        return customerName.trim() !== '' && customerEmail.trim() !== '' && customerPhone.trim() !== '';
      default:
        return true;
    }
  };

  /* ============================================
     FETCH TIME SLOTS
     ============================================ */

  const fetchTimeSlots = useCallback(async (date: Date) => {
    if (!selectedExperience) return;

    setLoadingSlots(true);
    setSelectedSlot(null);

    try {
      const dateStr = format(date, 'yyyy-MM-dd');
      const res = await fetch(
        `/api/bookings/availability?offerId=${selectedExperience.id}&date=${dateStr}&players=${players}&locale=${locale}`
      );

      if (res.ok) {
        const data = await res.json();
        setTimeSlots(data.slots || []);
        setTotalLanes(data.totalLanes || 0);
      } else {
        setTimeSlots([]);
        setTotalLanes(0);
      }
    } catch {
      setTimeSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  }, [selectedExperience, players, locale]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      fetchTimeSlots(date);
    } else {
      setTimeSlots([]);
      setSelectedSlot(null);
    }
  };

  // Auto-fetch slots when arriving at step 3 with a date already selected
  useEffect(() => {
    if (currentStep === 3 && selectedDate && timeSlots.length === 0 && !loadingSlots) {
      fetchTimeSlots(selectedDate);
    }
  }, [currentStep, selectedDate, timeSlots.length, loadingSlots, fetchTimeSlots]);

  /* ============================================
     HANDLE PAYMENT
     ============================================ */

  const handlePayment = async (paymentType: 'deposit' | 'full') => {
    setPaymentLoading(true);

    try {
      // Step 1: Create the booking
      const bookingRes = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offerId: selectedExperience?.id,
          players,
          date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
          startTime: selectedSlot?.startTime,
          endTime: selectedSlot?.endTime,
          customerName,
          customerEmail,
          customerPhone,
          paymentType,
          language: locale,
        }),
      });

      if (!bookingRes.ok) {
        const err = await bookingRes.json();
        console.error('Booking creation failed:', err);
        return;
      }

      const booking = await bookingRes.json();

      // Step 2: Create Stripe checkout session
      const checkoutRes = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingId: booking.id,
          paymentType,
          locale,
        }),
      });

      if (checkoutRes.ok) {
        const data = await checkoutRes.json();
        if (data.url) {
          window.location.href = data.url;
        }
      } else {
        const err = await checkoutRes.json();
        console.error('Checkout session failed:', err);
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setPaymentLoading(false);
    }
  };

  /* ============================================
     VALIDATE STEP 4
     ============================================ */

  const validateDetails = (): boolean => {
    const newErrors: Record<string, boolean> = {};
    if (!customerName.trim()) newErrors.name = true;
    if (!customerEmail.trim() || !customerEmail.includes('@')) newErrors.email = true;
    if (!customerPhone.trim()) newErrors.phone = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 4) {
      if (!validateDetails()) return;
    }
    goNext();
  };

  /* ============================================
     RENDER STEPS
     ============================================ */

  const renderStep = () => {
    switch (currentStep) {
      /* --- Step 1: Choose Category then Experience --- */
      case 1: {
        const filteredExperiences = selectedCategory
          ? experiences.filter((e) => e.category === selectedCategory)
          : [];

        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-heading font-bold neon-glow">{t('step1')}</h2>
              <p className="text-muted-foreground mt-2">{t('step1Description')}</p>
            </div>

            {loadingExperiences ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : !selectedCategory ? (
              /* --- Category Selection --- */
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat) => {
                  const catExperiences = experiences.filter((e) => e.category === cat.key);
                  if (catExperiences.length === 0) return null;
                  const minPrice = Math.min(...catExperiences.map((e) => e.fromPrice));
                  const IconComponent = cat.icon;

                  return (
                    <motion.div
                      key={cat.key}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Card
                        className="cursor-pointer transition-all duration-300 h-full hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                        onClick={() => setSelectedCategory(cat.key)}
                      >
                        <CardContent className="p-5 sm:p-6 flex flex-col items-center text-center gap-3">
                          <div className="h-14 w-14 rounded-xl bg-muted border border-border flex items-center justify-center">
                            <IconComponent className="h-7 w-7 text-primary" />
                          </div>

                          <h3 className="font-heading font-bold text-sm sm:text-base leading-tight">
                            {t(`category_${cat.key}`)}
                          </h3>

                          <p className="text-[11px] text-muted-foreground">
                            {catExperiences.length} {catExperiences.length > 1 ? t('options') : t('option')}
                          </p>

                          <div className="mt-auto pt-1">
                            <span className="text-[10px] text-muted-foreground">{tCommon('from')} </span>
                            <span className="text-lg font-heading font-bold text-primary">
                              {minPrice}&nbsp;&euro;
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              /* --- Experience Selection within Category --- */
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedExperience(null);
                  }}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t(`category_${selectedCategory}`)}
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredExperiences.map((exp) => {
                    const isSelected = selectedExperience?.id === exp.id;

                    return (
                      <motion.div
                        key={exp.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card
                          className={cn(
                            'cursor-pointer transition-all duration-300 h-full',
                            isSelected
                              ? 'border-primary shadow-[0_0_25px_rgba(0,212,255,0.25)] bg-primary/5'
                              : 'hover:border-primary/40'
                          )}
                          onClick={() => setSelectedExperience(exp)}
                        >
                          <CardContent className="p-4 flex items-center gap-4">
                            <div
                              className={cn(
                                'h-12 w-12 shrink-0 rounded-lg flex items-center justify-center transition-colors',
                                isSelected
                                  ? 'bg-primary/20 border border-primary/40'
                                  : 'bg-muted border border-border'
                              )}
                            >
                              <ExperienceIcon
                                type={exp.icon}
                                className={cn(
                                  'h-6 w-6',
                                  isSelected ? 'text-primary' : 'text-muted-foreground'
                                )}
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className={cn(
                                'font-heading font-semibold text-sm leading-tight',
                                isSelected ? 'text-primary' : 'text-foreground'
                              )}>
                                {exp.title}
                              </h3>

                              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                                <div className="flex items-center gap-0.5">
                                  <Clock className="h-3 w-3" />
                                  <span>
                                    {exp.duration >= 60
                                      ? `${exp.duration / 60}h`
                                      : `${exp.duration}min`}
                                  </span>
                                </div>
                                <div className="flex items-center gap-0.5">
                                  <Users className="h-3 w-3" />
                                  <span>{exp.minPlayers}-{exp.maxPlayers}</span>
                                </div>
                              </div>
                            </div>

                            <div className="text-right shrink-0">
                              <span className="text-[10px] text-muted-foreground block">{tCommon('from')}</span>
                              <span className="text-lg font-heading font-bold text-primary">
                                {exp.fromPrice}&euro;
                              </span>
                            </div>

                            {isSelected && (
                              <div className="shrink-0">
                                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                                  <svg className="h-4 w-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      }

      /* --- Step 2: Number of Players --- */
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-heading font-bold neon-glow">{t('step2')}</h2>
              <p className="text-muted-foreground mt-2">{t('step2Description')}</p>
            </div>

            <div className="flex justify-center py-8">
              <PlayerSelector
                value={players}
                onChange={setPlayers}
                max={selectedExperience?.maxPlayers ?? 20}
                pricePerPerson={selectedExperience?.fromPrice}
              />
            </div>
          </div>
        );

      /* --- Step 3: Date & Time --- */
      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-heading font-bold neon-glow">{t('step3')}</h2>
              <p className="text-muted-foreground mt-2">{t('step3Description')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center lg:text-left">
                  {t('selectDate')}
                </h3>
                <DatePicker
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  closedDates={closedDates}
                  availableFrom={selectedExperience?.availableFrom}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center lg:text-left">
                  {t('selectTime')}
                </h3>
                {selectedDate ? (
                  <TimeSlotPicker
                    slots={timeSlots}
                    selected={selectedSlot}
                    onSelect={setSelectedSlot}
                    loading={loadingSlots}
                    totalLanes={totalLanes}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <Calendar className="h-12 w-12 text-muted-foreground/30 mb-4" />
                    <p className="text-muted-foreground">{t('selectDateFirst')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      /* --- Step 4: Your Details --- */
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-heading font-bold neon-glow">{t('step4')}</h2>
              <p className="text-muted-foreground mt-2">{t('step4Description')}</p>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <div>
                <Label htmlFor="name">{t('name')} *</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
                  }}
                  placeholder={t('namePlaceholder')}
                  className={cn('mt-1.5', errors.name && 'border-red-500')}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{t('required')}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">{t('email')} *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => {
                    setCustomerEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: false }));
                  }}
                  placeholder={t('emailPlaceholder')}
                  className={cn('mt-1.5', errors.email && 'border-red-500')}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{t('emailInvalid')}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">{t('phone')} *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => {
                    setCustomerPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: false }));
                  }}
                  placeholder={t('phonePlaceholder')}
                  className={cn('mt-1.5', errors.phone && 'border-red-500')}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{t('required')}</p>
                )}
              </div>
            </div>
          </div>
        );

      /* --- Step 5: Payment --- */
      case 5:
        return (
          <div className="space-y-4 sm:space-y-8">
            <div className="text-center mb-2 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-heading font-bold neon-glow">{t('step5')}</h2>
              <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">{t('step5Description')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <PriceSummary
                experienceName={selectedExperience?.title ?? ''}
                players={players}
                date={selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''}
                time={selectedSlot ? `${selectedSlot.startTime} - ${selectedSlot.endTime}` : ''}
                pricePerPerson={selectedSlot?.price ?? 0}
                totalPrice={totalPrice}
                depositAmount={depositAmount}
                dynamicPricing={
                  selectedSlot?.dynamicPricing
                    ? {
                        label: selectedSlot.dynamicPricing.label,
                        discount: selectedSlot.dynamicPricing.discount,
                        savings: Math.round(
                          (selectedSlot.price * players * selectedSlot.dynamicPricing.discount) / 100
                        ),
                      }
                    : undefined
                }
              />

              <PaymentChoice
                totalPrice={totalPrice}
                depositAmount={depositAmount}
                onConfirm={handlePayment}
                loading={paymentLoading}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={wizardRef} className="w-full max-w-4xl mx-auto">
      <StepIndicator currentStep={currentStep} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      {currentStep < 5 && (
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="ghost"
            onClick={goBack}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            {t('back')}
          </Button>

          <Button
            variant="default"
            onClick={handleNext}
            disabled={!canProceed()}
            className="gap-2"
          >
            {t('next')}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {currentStep === 5 && (
        <div className="flex justify-start mt-8 pt-6 border-t border-border">
          <Button variant="ghost" onClick={goBack} className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            {t('back')}
          </Button>
        </div>
      )}
    </div>
  );
}
