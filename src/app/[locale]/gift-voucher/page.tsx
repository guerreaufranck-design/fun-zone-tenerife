'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gift, Check, ChevronRight, Users, Clock,
  Axe, Sword, Target, Gamepad2, Swords,
  PartyPopper, GraduationCap, CircleDot, Briefcase, GlassWater,
  CreditCard, Minus, Plus, Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createClient } from '@/lib/supabase/client';

function getIconForSlug(slug: string, laneType: string) {
  if (slug.includes('ninja') || slug.includes('initiation')) return Swords;
  if (slug.includes('premium')) return Target;
  if (slug.includes('darts-pixels') || laneType === 'darts_pixels') return Gamepad2;
  if (slug.includes('classic-darts') || laneType === 'classic_darts') return CircleDot;
  if (slug.includes('team') || slug.includes('teambuilding')) return Briefcase;
  if (slug.includes('bachelor') || slug.includes('despedida')) return GlassWater;
  if (slug.includes('birthday')) return PartyPopper;
  return Axe;
}

function getColorForSlug(slug: string): string {
  if (slug.includes('ninja') || slug.includes('initiation') || slug.includes('birthday-adult')) return '#8b5cf6';
  if (slug.includes('premium') || slug.includes('classic-darts') || slug.includes('despedida') || slug.includes('bachelor') || slug.includes('team')) return '#ff6b00';
  if (slug.includes('ninja-axe-2h')) return '#00ff88';
  return '#00d4ff';
}

interface GiftExperience {
  slug: string;
  title: string;
  duration: number;
  maxPlayers: number;
  fromPrice: number;
  icon: typeof Axe;
  color: string;
}

export default function GiftVoucherPage() {
  const t = useTranslations('gift');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const [experiences, setExperiences] = useState<GiftExperience[]>([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  useEffect(() => {
    async function fetchOffers() {
      const supabase = createClient();

      const [offersRes, pricingRes] = await Promise.all([
        supabase
          .from('offers')
          .select('id, slug, title, duration_minutes, min_players, max_players, lane_type, is_active, sort_order')
          .eq('is_active', true)
          .neq('backoffice_only', true)
          .order('sort_order'),
        supabase
          .from('offer_pricing')
          .select('offer_id, players, price_cents'),
      ]);

      if (!offersRes.data || !pricingRes.data) {
        setLoadingExperiences(false);
        return;
      }

      const pricingByOffer = new Map<string, { players: number; price_cents: number }[]>();
      for (const p of pricingRes.data) {
        if (!pricingByOffer.has(p.offer_id)) pricingByOffer.set(p.offer_id, []);
        pricingByOffer.get(p.offer_id)!.push(p);
      }

      const mapped: GiftExperience[] = offersRes.data.map((offer) => {
        const pricing = pricingByOffer.get(offer.id) || [];
        let minPrice = 0;
        if (pricing.length > 0) {
          if (offer.lane_type === 'classic_darts') {
            minPrice = pricing[0].price_cents / 100;
          } else {
            minPrice = Math.min(...pricing.map((p) => p.price_cents / p.players / 100));
          }
        }

        const titleObj = offer.title as Record<string, string>;

        return {
          slug: offer.slug,
          title: titleObj[locale] || titleObj['en'] || offer.slug,
          duration: offer.duration_minutes,
          maxPlayers: offer.max_players,
          fromPrice: Math.round(minPrice),
          icon: getIconForSlug(offer.slug, offer.lane_type),
          color: getColorForSlug(offer.slug),
        };
      });

      setExperiences(mapped);
      setLoadingExperiences(false);
    }

    fetchOffers();
  }, [locale]);

  const [step, setStep] = useState(1);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [players, setPlayers] = useState(2);
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');

  const selected = experiences.find((exp) => exp.slug === selectedExperience);

  const totalPrice = selected ? selected.fromPrice * players : 0;

  const formatDuration = (minutes: number) => {
    if (minutes >= 60) return `${minutes / 60}h`;
    return `${minutes}min`;
  };

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedExperience;
      case 2: return players >= 1;
      case 3: return recipientName.trim().length > 0 && recipientEmail.trim().length > 0;
      default: return false;
    }
  };

  const steps = [
    { number: 1, label: t('chooseExperience') },
    { number: 2, label: 'Number of Players' },
    { number: 3, label: t('chooseRecipient') },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-[#00d4ff]/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10">
            <Gift className="h-8 w-8 text-[#8b5cf6]" />
          </div>
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Step indicators */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between">
            {steps.map((s, index) => (
              <div key={s.number} className="flex flex-1 items-center">
                <button
                  onClick={() => {
                    if (s.number < step) setStep(s.number);
                  }}
                  className="flex items-center gap-2"
                >
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                      step >= s.number
                        ? 'border border-[#00d4ff]/50 bg-[#00d4ff]/10 text-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.2)]'
                        : 'border border-border/50 bg-[#111118] text-muted-foreground'
                    }`}
                  >
                    {step > s.number ? <Check className="h-4 w-4" /> : s.number}
                  </div>
                  <span className={`hidden text-sm font-medium sm:block ${
                    step >= s.number ? 'text-white' : 'text-muted-foreground'
                  }`}>
                    {s.label}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div className={`mx-3 h-px flex-1 transition-all duration-300 ${
                    step > s.number
                      ? 'bg-[#00d4ff]/40'
                      : 'bg-border/30'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* Step 1: Choose Experience */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h2 className="mb-6 text-xl font-bold text-white">{t('chooseExperience')}</h2>
                    {loadingExperiences ? (
                      <div className="flex items-center justify-center py-16">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    ) : (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {experiences.map((exp) => {
                        const Icon = exp.icon;
                        const isSelected = selectedExperience === exp.slug;
                        return (
                          <button
                            key={exp.slug}
                            onClick={() => setSelectedExperience(exp.slug)}
                            className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                              isSelected
                                ? 'border-[#00d4ff]/50 bg-[#00d4ff]/5 shadow-[0_0_20px_rgba(0,212,255,0.1)]'
                                : 'border-border/50 bg-[#111118] hover:border-border'
                            }`}
                          >
                            <div
                              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border"
                              style={{
                                borderColor: `${exp.color}30`,
                                backgroundColor: `${exp.color}10`,
                              }}
                            >
                              <Icon className="h-5 w-5" style={{ color: exp.color }} />
                            </div>
                            <div className="flex-1">
                              <h3 className="mb-1 font-semibold text-white">{exp.title}</h3>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {formatDuration(exp.duration)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  1-{exp.maxPlayers}
                                </span>
                              </div>
                              <div className="mt-1 text-sm font-bold" style={{ color: exp.color }}>
                                {tCommon('from')} &euro;{exp.fromPrice}/pp
                              </div>
                            </div>
                            {isSelected && (
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00d4ff]">
                                <Check className="h-4 w-4 text-[#0a0a0f]" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Number of Players */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="mb-6 text-xl font-bold text-white">Number of Players</h2>
                    <Card className="border-border/50 bg-[#111118]">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center gap-6">
                          <div className="flex items-center gap-6">
                            <button
                              onClick={() => setPlayers(Math.max(1, players - 1))}
                              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-[#0a0a0f] text-white transition-all hover:border-[#00d4ff]/30 hover:text-[#00d4ff] disabled:opacity-30"
                              disabled={players <= 1}
                            >
                              <Minus className="h-5 w-5" />
                            </button>
                            <div className="text-center">
                              <div className="neon-glow text-5xl font-bold text-[#00d4ff]">{players}</div>
                              <div className="mt-1 text-sm text-muted-foreground">
                                {players === 1 ? tCommon('player') : tCommon('players')}
                              </div>
                            </div>
                            <button
                              onClick={() => setPlayers(Math.min(selected?.maxPlayers || 9, players + 1))}
                              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-[#0a0a0f] text-white transition-all hover:border-[#00d4ff]/30 hover:text-[#00d4ff]"
                              disabled={players >= (selected?.maxPlayers || 9)}
                            >
                              <Plus className="h-5 w-5" />
                            </button>
                          </div>
                          {selected && (
                            <div className="text-center text-sm text-muted-foreground">
                              Max {selected.maxPlayers} players for {selected.title}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Step 3: Recipient Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="mb-6 text-xl font-bold text-white">{t('chooseRecipient')}</h2>
                    <Card className="border-border/50 bg-[#111118]">
                      <CardContent className="space-y-5 pt-6">
                        <div>
                          <Label htmlFor="recipientName">{t('recipientName')} *</Label>
                          <Input
                            id="recipientName"
                            value={recipientName}
                            onChange={(e) => setRecipientName(e.target.value)}
                            placeholder="John Doe"
                            className="mt-1.5"
                          />
                        </div>
                        <div>
                          <Label htmlFor="recipientEmail">{t('recipientEmail')} *</Label>
                          <Input
                            id="recipientEmail"
                            type="email"
                            value={recipientEmail}
                            onChange={(e) => setRecipientEmail(e.target.value)}
                            placeholder="john@example.com"
                            className="mt-1.5"
                          />
                        </div>
                        <div>
                          <Label htmlFor="personalMessage">{t('message')}</Label>
                          <Textarea
                            id="personalMessage"
                            value={personalMessage}
                            onChange={(e) => setPersonalMessage(e.target.value)}
                            placeholder="Happy birthday! Time to unleash your inner Viking..."
                            className="mt-1.5"
                            rows={4}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="mt-6 flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  className={step === 1 ? 'invisible' : ''}
                >
                  {tCommon('back')}
                </Button>

                {step < 3 ? (
                  <Button
                    variant="neon"
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                  >
                    {tCommon('next')}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    variant="neon"
                    size="lg"
                    disabled={!canProceed()}
                    onClick={() => {
                      // TODO: Stripe checkout integration
                      alert('Stripe checkout would open here');
                    }}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Pay &euro;{totalPrice}
                  </Button>
                )}
              </div>
            </div>

            {/* Voucher Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Voucher Preview
                </h3>
                <div className="relative overflow-hidden rounded-2xl border border-border/50">
                  {/* Gift card design */}
                  <div className="relative bg-gradient-to-br from-[#111118] via-[#1a1a2e] to-[#0d0d1a] p-6">
                    {/* Neon border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 via-transparent to-[#8b5cf6]/10" />
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#00d4ff]/40 via-transparent to-[#8b5cf6]/40" />
                    <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-[#8b5cf6]/40 via-transparent to-[#00d4ff]/40" />
                    <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-[#00d4ff]/40 via-transparent to-[#8b5cf6]/40" />
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#8b5cf6]/40 via-transparent to-[#00d4ff]/40" />

                    <div className="relative">
                      {/* Logo / Title */}
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00d4ff]/30 bg-[#00d4ff]/10">
                          <Gift className="h-5 w-5 text-[#00d4ff]" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-[#00d4ff]">Gift Voucher</p>
                          <p className="text-sm font-bold text-white">Axe Throwing Tenerife</p>
                        </div>
                      </div>

                      {/* Experience */}
                      {selected ? (
                        <div className="mb-4 rounded-lg border border-border/30 bg-[#0a0a0f]/50 p-3">
                          <p className="text-xs text-muted-foreground">Experience</p>
                          <p className="font-bold text-white">{selected.title}</p>
                          <div className="mt-1 flex gap-2">
                            <Badge variant="neonBlue" className="text-[10px]">
                              <Clock className="mr-1 h-3 w-3" />
                              {formatDuration(selected.duration)}
                            </Badge>
                            <Badge variant="neonViolet" className="text-[10px]">
                              <Users className="mr-1 h-3 w-3" />
                              {players} {players === 1 ? tCommon('player') : tCommon('players')}
                            </Badge>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-4 rounded-lg border border-dashed border-border/30 bg-[#0a0a0f]/30 p-3">
                          <p className="text-center text-xs text-muted-foreground">
                            Select an experience
                          </p>
                        </div>
                      )}

                      {/* Recipient */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground">For</p>
                        <p className="font-semibold text-white">
                          {recipientName || 'Recipient Name'}
                        </p>
                      </div>

                      {/* Message */}
                      {personalMessage && (
                        <div className="mb-4 rounded-lg bg-[#0a0a0f]/30 p-3">
                          <p className="text-xs italic text-muted-foreground">
                            &ldquo;{personalMessage}&rdquo;
                          </p>
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex items-end justify-between border-t border-border/30 pt-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Total Value</p>
                          <p className="neon-glow text-3xl font-bold text-[#00d4ff]">
                            &euro;{totalPrice}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-muted-foreground">Valid for 12 months</p>
                          <p className="text-[10px] text-muted-foreground">from date of purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
