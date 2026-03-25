'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
  Clock, Users, Axe, Target, Gamepad2, Swords,
  PartyPopper, CircleDot, Brain, Map,
  Loader2, ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { createClient } from '@/lib/supabase/client';
import type { Offer, OfferPricing } from '@/lib/supabase/types';
import Image from 'next/image';

const offerImages: Record<string, string> = {
  'traditional-axe-1h': '/images/offers/traditional-axe.jpg',
  'ninja-axe-1h': '/images/offers/ninja-axe-1h.jpg',
  'premium-axe-2h': '/images/offers/premium-axe-2h.jpg',
  'ninja-axe-2h': '/images/offers/ninja-axe-2h.jpg',
  'ninja-initiation': '/images/offers/ninja-initiation.jpg',
  'darts-pixels': '/images/offers/darts-pixels.jpg',
  'darts-pixels-30min': '/images/offers/darts-pixels.jpg',
  'darts-pixels-1h': '/images/offers/darts-pixels.jpg',
  'classic-darts': '/images/offers/darts-classic.jpg',
  'classic-darts-30min': '/images/offers/darts-classic.jpg',
  'classic-darts-1h': '/images/offers/darts-classic.jpg',
  'birthday-kids': '/images/offers/birthday-kids.jpg',
  'birthday-adult': '/images/offers/birthday-adult.jpg',
  'team-building': '/images/offers/team-building.jpg',
  'teambuilding': '/images/offers/team-building.jpg',
  'despedida': '/images/offers/despedida.jpg',
  'bachelor-party': '/images/offers/despedida.jpg',
  'quizzaboom-1h': '/images/offers/quizzaboom.png',
};

export type ActivityType = 'axe' | 'quiz' | 'darts' | 'escape';

interface ActivityConfig {
  type: ActivityType;
  heroImage: string;
  accentColor: string;
  glowClass: string;
  icon: typeof Axe;
  filterFn: (offer: Offer) => boolean;
}

const activityConfigs: Record<ActivityType, ActivityConfig> = {
  axe: {
    type: 'axe',
    heroImage: '/images/offers/traditional-axe.jpg',
    accentColor: '#00d4ff',
    glowClass: 'neon-glow-blue',
    icon: Target,
    filterFn: (offer) => {
      if (offer.slug.includes('teambuilding') || offer.slug.includes('bachelor') || offer.slug.includes('birthday') || offer.slug.includes('despedida')) return false;
      if (offer.lane_type === 'darts_pixels' || offer.lane_type === 'classic_darts') return false;
      if (offer.slug.includes('quizzaboom')) return false;
      return offer.lane_type === 'axe' || offer.slug.includes('axe') || offer.slug.includes('ninja') || offer.slug.includes('premium');
    },
  },
  quiz: {
    type: 'quiz',
    heroImage: '/images/offers/quizzaboom.png',
    accentColor: '#a855f7',
    glowClass: 'neon-glow-violet',
    icon: Brain,
    filterFn: (offer) => offer.slug.includes('quizzaboom'),
  },
  darts: {
    type: 'darts',
    heroImage: '/images/offers/darts-classic.jpg',
    accentColor: '#39ff14',
    glowClass: 'neon-glow-green',
    icon: Gamepad2,
    filterFn: (offer) => {
      if (offer.slug.includes('teambuilding') || offer.slug.includes('bachelor') || offer.slug.includes('birthday') || offer.slug.includes('despedida')) return false;
      return offer.lane_type === 'darts_pixels' || offer.lane_type === 'classic_darts' || offer.slug.includes('darts');
    },
  },
  escape: {
    type: 'escape',
    heroImage: '/images/offers/escape.png',
    accentColor: '#ff2d7b',
    glowClass: 'neon-glow-pink',
    icon: Map,
    filterFn: (offer) => offer.slug.includes('escape') || offer.slug.includes('chronicle'),
  },
};

function getIconForSlug(slug: string): typeof Axe {
  if (slug.includes('ninja')) return Swords;
  if (slug.includes('premium')) return Target;
  if (slug.includes('darts-pixels') || slug.includes('darts_pixels')) return Gamepad2;
  if (slug.includes('teambuilding')) return Users;
  if (slug.includes('bachelor')) return PartyPopper;
  if (slug.includes('classic-darts') || slug.includes('classic_darts')) return CircleDot;
  if (slug.includes('quizzaboom')) return Brain;
  return Axe;
}

function calculateFromPrice(offerId: string, pricing: OfferPricing[]): number {
  const offerPricing = pricing.filter((p) => p.offer_id === offerId);
  if (offerPricing.length === 0) return 0;
  const perPersonPrices = offerPricing.map((p) => p.price_cents / p.players / 100);
  return Math.min(...perPersonPrices);
}

interface MappedExperience {
  slug: string;
  title: string;
  description: string;
  duration: number;
  maxPlayers: number;
  fromPrice: number;
  includes: string[];
  color: string;
  icon: typeof Axe;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
};

interface ActivityLandingPageProps {
  activityType: ActivityType;
}

export default function ActivityLandingPage({ activityType }: ActivityLandingPageProps) {
  const config = activityConfigs[activityType];
  const t = useTranslations('activities');
  const tExp = useTranslations('experiences');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [experiences, setExperiences] = useState<MappedExperience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      const supabase = createClient();

      const [offersRes, pricingRes] = await Promise.all([
        supabase.from('offers').select('*').eq('is_active', true).neq('backoffice_only', true).order('sort_order'),
        supabase.from('offer_pricing').select('offer_id, players, price_cents'),
      ]);

      if (offersRes.error || pricingRes.error) {
        setLoading(false);
        return;
      }

      const offers = offersRes.data as Offer[];
      const pricing = pricingRes.data as OfferPricing[];

      const filtered = offers.filter(config.filterFn);

      const mapped: MappedExperience[] = filtered.map((offer) => {
        const title = (offer.title as Record<string, string>)[locale] || (offer.title as Record<string, string>)['en'] || '';
        const description = (offer.short_desc as Record<string, string>)[locale] || (offer.short_desc as Record<string, string>)['en'] || '';

        return {
          slug: offer.slug,
          title,
          description,
          duration: offer.duration_minutes,
          maxPlayers: offer.max_players,
          fromPrice: calculateFromPrice(offer.id, pricing),
          includes: (offer.includes as string[]) || [],
          color: config.accentColor,
          icon: getIconForSlug(offer.slug),
        };
      });

      setExperiences(mapped);
      setLoading(false);
    }

    fetchExperiences();
  }, [locale, config]);

  const formatDuration = (minutes: number) => {
    if (minutes >= 60) {
      const hours = minutes / 60;
      return `${hours}h`;
    }
    return `${minutes}min`;
  };

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
          <Image
            src={config.heroImage}
            alt={t(`${activityType}.title`)}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />

          {/* Colored glow */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(ellipse at center bottom, ${config.accentColor}30 0%, transparent 70%)`,
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Button variant="ghost" size="sm" asChild className="mb-4">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('backToHome')}
                  </Link>
                </Button>
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-white/5 backdrop-blur-sm"
                    style={{ borderColor: `${config.accentColor}40` }}
                  >
                    <Icon className="h-7 w-7" style={{ color: config.accentColor }} />
                  </div>
                  <h1
                    className={`${config.glowClass} text-3xl font-bold text-white sm:text-4xl md:text-5xl`}
                  >
                    {t(`${activityType}.title`)}
                  </h1>
                </div>
                <p className="max-w-2xl text-lg text-white/70">
                  {t(`${activityType}.subtitle`)}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground"
          >
            {t(`${activityType}.description`)}
          </motion.p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin" style={{ color: config.accentColor }} />
            </div>
          ) : experiences.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <Icon className="mx-auto mb-4 h-16 w-16 text-white/10" />
              <h2 className="mb-2 text-xl font-bold text-white">{t('comingSoon')}</h2>
              <p className="text-muted-foreground">{t('comingSoonDesc')}</p>
              <Button variant="neon" className="mt-6" asChild>
                <Link href="/book">{tExp('bookNow')}</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {experiences.map((exp, i) => {
                const ExpIcon = exp.icon;
                return (
                  <motion.div
                    key={exp.slug}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    layout
                  >
                    <Card
                      className="group relative flex h-full flex-col overflow-hidden border-border/50 bg-[#111118] transition-all duration-300 hover:border-[color:var(--card-accent)]/40 hover:shadow-[0_0_30px_var(--card-glow)]"
                      style={{
                        '--card-accent': config.accentColor,
                        '--card-glow': `${config.accentColor}15`,
                      } as React.CSSProperties}
                    >
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#111] via-[#1a1a2e] to-[#0a0a0f]">
                        {offerImages[exp.slug] ? (
                          <Image
                            src={offerImages[exp.slug]}
                            alt={exp.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <ExpIcon
                              size={48}
                              className="text-white/10"
                              style={{ color: `${config.accentColor}20` }}
                            />
                          </div>
                        )}
                        <div className="absolute right-3 top-3 flex gap-2">
                          <Badge variant="neonBlue" className="gap-1">
                            <Clock size={12} />
                            {formatDuration(exp.duration)}
                          </Badge>
                        </div>
                        <div className="absolute left-3 top-3">
                          <Badge variant="neonViolet" className="gap-1">
                            <Users size={12} />
                            1-{exp.maxPlayers}
                          </Badge>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111118] to-transparent" />
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                          {exp.description}
                        </p>
                        {exp.includes.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {exp.includes.map((item) => (
                              <Badge key={item} variant="secondary" className="text-xs capitalize">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="flex items-center justify-between border-t border-border/50 pt-4">
                        <div className="text-lg font-bold" style={{ color: config.accentColor }}>
                          {tCommon('from')} &euro;{Math.round(exp.fromPrice)}
                          <span className="text-sm font-normal text-muted-foreground">/pp</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={{ pathname: '/experiences/[slug]' as const, params: { slug: exp.slug } }}>
                              {tCommon('learnMore')}
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/book">{tExp('bookNow')}</Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
