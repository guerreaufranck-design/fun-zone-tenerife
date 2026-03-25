'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Clock, Users, Axe, Target, Gamepad2, Swords, PartyPopper, CircleDot, Brain, Map, Loader2 } from 'lucide-react';
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

type Category = 'all' | 'axe' | 'ninja' | 'darts' | 'quiz' | 'escape' | 'special';

interface MappedExperience {
  slug: string;
  title: string;
  description: string;
  duration: number;
  laneType: string;
  maxPlayers: number;
  minAge: number | null;
  fromPrice: number;
  category: Category;
  includes: string[];
  icon: typeof Axe;
  color: string;
}

function getIconForSlug(slug: string): typeof Axe {
  if (slug.includes('quizzaboom')) return Brain;
  if (slug.includes('escape') || slug.includes('chronicle')) return Map;
  if (slug.includes('ninja')) return Swords;
  if (slug.includes('premium')) return Target;
  if (slug.includes('darts-pixels') || slug.includes('darts_pixels')) return Gamepad2;
  if (slug.includes('teambuilding')) return Users;
  if (slug.includes('bachelor')) return PartyPopper;
  if (slug.includes('classic-darts') || slug.includes('classic_darts')) return CircleDot;
  return Axe;
}

function getCategoryForOffer(offer: Offer): Category {
  if (offer.slug.includes('teambuilding') || offer.slug.includes('bachelor') || offer.slug.includes('birthday') || offer.slug.includes('despedida')) return 'special';
  if (offer.slug.includes('quizzaboom')) return 'quiz';
  if (offer.slug.includes('escape') || offer.slug.includes('chronicle')) return 'escape';
  if (offer.lane_type === 'darts_pixels') {
    if (offer.slug.includes('ninja')) return 'ninja';
    return 'darts';
  }
  if (offer.lane_type === 'classic_darts') return 'darts';
  if (offer.slug.includes('ninja')) return 'ninja';
  return 'axe';
}

function getColorForCategory(category: Category): string {
  switch (category) {
    case 'axe': return '#00d4ff';
    case 'ninja': return '#8b5cf6';
    case 'darts': return '#39ff14';
    case 'quiz': return '#a855f7';
    case 'escape': return '#ff2d7b';
    case 'special': return '#ff6b00';
    default: return '#00d4ff';
  }
}

function calculateFromPrice(offerId: string, pricing: OfferPricing[]): number {
  const offerPricing = pricing.filter((p) => p.offer_id === offerId);
  if (offerPricing.length === 0) return 0;
  const perPersonPrices = offerPricing.map((p) => p.price_cents / p.players / 100);
  return Math.min(...perPersonPrices);
}

const categories: { key: Category; label: string; icon: typeof Axe }[] = [
  { key: 'all', label: 'All', icon: Target },
  { key: 'axe', label: 'Axe Throwing', icon: Axe },
  { key: 'ninja', label: 'Ninja', icon: Swords },
  { key: 'darts', label: 'Darts', icon: Gamepad2 },
  { key: 'quiz', label: 'Quiz Room', icon: Brain },
  { key: 'escape', label: 'Escape Game', icon: Map },
  { key: 'special', label: 'Special Events', icon: PartyPopper },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function ExperiencesPage() {
  const t = useTranslations('experiences');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
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
        console.error('Error fetching experiences:', offersRes.error || pricingRes.error);
        setLoading(false);
        return;
      }

      const offers = offersRes.data as Offer[];
      const pricing = pricingRes.data as OfferPricing[];

      const mapped: MappedExperience[] = offers.map((offer) => {
        const category = getCategoryForOffer(offer);
        const title = (offer.title as Record<string, string>)[locale] || (offer.title as Record<string, string>)['en'] || '';
        const description = (offer.short_desc as Record<string, string>)[locale] || (offer.short_desc as Record<string, string>)['en'] || '';

        return {
          slug: offer.slug,
          title,
          description,
          duration: offer.duration_minutes,
          laneType: offer.lane_type,
          maxPlayers: offer.max_players,
          minAge: offer.age_min,
          fromPrice: calculateFromPrice(offer.id, pricing),
          category,
          includes: (offer.includes as string[]) || [],
          icon: getIconForSlug(offer.slug),
          color: getColorForCategory(category),
        };
      });

      setExperiences(mapped);
      setLoading(false);
    }

    fetchExperiences();
  }, [locale]);

  const filteredExperiences = useMemo(() => {
    return activeCategory === 'all'
      ? experiences
      : experiences.filter((exp) => exp.category === activeCategory);
  }, [activeCategory, experiences]);

  const formatDuration = (minutes: number) => {
    if (minutes >= 60) {
      const hours = minutes / 60;
      return `${hours}h`;
    }
    return `${minutes}min`;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d4ff]/5 blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-[#8b5cf6]/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              {t('title')}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'border border-[#00d4ff]/50 bg-[#00d4ff]/10 text-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                      : 'border border-border/50 bg-[#111118] text-muted-foreground hover:border-border hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Experience Cards Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-[#00d4ff]" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredExperiences.map((exp, i) => {
                const Icon = exp.icon;
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
                        '--card-accent': exp.color,
                        '--card-glow': `${exp.color}15`,
                      } as React.CSSProperties}
                    >
                      {/* Image area */}
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
                            <Icon
                              size={48}
                              className="text-white/10 transition-all duration-300 group-hover:scale-110 group-hover:text-white/20"
                              style={{ color: `${exp.color}20` }}
                            />
                          </div>
                        )}
                        {/* Badges */}
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
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl text-white">
                            {exp.title}
                          </CardTitle>
                          {exp.slug.includes('quizzaboom') && (
                            <Badge className="bg-gradient-to-r from-[#ff6b00] to-[#ff2d55] text-white border-none text-[10px] font-bold uppercase tracking-wider animate-pulse px-2 py-0.5">
                              NEW !
                            </Badge>
                          )}
                        </div>
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
                        <div className="text-lg font-bold" style={{ color: exp.color }}>
                          {tCommon('from')} &euro;{Math.round(exp.fromPrice)}
                          <span className="text-sm font-normal text-muted-foreground">
                            /pp
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={{ pathname: '/experiences/[slug]' as const, params: { slug: exp.slug } }}>
                              {tCommon('learnMore')}
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/book">
                              {t('bookNow')}
                            </Link>
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
