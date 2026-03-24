'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
  Clock, Users, Axe, Target, Gamepad2, Swords,
  PartyPopper, CircleDot,
  Check, AlertCircle, ArrowLeft, Loader2, Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MediaGallery from '@/components/product/MediaGallery';
import TikTokCarousel from '@/components/product/TikTokCarousel';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import type { Offer, OfferPricing, OfferMedia } from '@/lib/supabase/types';

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

type Category = 'axe' | 'ninja' | 'darts' | 'special';

interface PricingTier {
  players: string;
  price: string;
}

interface MappedExperience {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  duration: number;
  laneType: string;
  maxPlayers: number;
  minAge: number | null;
  fromPrice: number;
  category: Category;
  includes: string[];
  whatsIncluded: string[];
  icon: typeof Axe;
  color: string;
  pricing: PricingTier[];
}

interface RelatedExperience {
  slug: string;
  title: string;
  description: string;
  fromPrice: number;
  icon: typeof Axe;
  color: string;
  category: Category;
}

function getIconForSlug(slug: string): typeof Axe {
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
    case 'darts': return '#00d4ff';
    case 'special': return '#ff6b00';
    default: return '#00d4ff';
  }
}

function calculateFromPrice(pricing: OfferPricing[]): number {
  if (pricing.length === 0) return 0;
  const perPersonPrices = pricing.map((p) => p.price_cents / p.players / 100);
  return Math.min(...perPersonPrices);
}

function buildPricingTiers(pricing: OfferPricing[]): PricingTier[] {
  if (pricing.length === 0) return [];

  // Sort by players ascending
  const sorted = [...pricing].sort((a, b) => a.players - b.players);

  // Calculate per-person price for each tier
  const withPerPerson = sorted.map((p) => ({
    players: p.players,
    perPersonPrice: Math.round(p.price_cents / p.players / 100),
  }));

  // Group consecutive player counts with same per-person price into ranges
  const tiers: PricingTier[] = [];
  let rangeStart = withPerPerson[0].players;
  let rangeEnd = withPerPerson[0].players;
  let currentPrice = withPerPerson[0].perPersonPrice;

  for (let i = 1; i < withPerPerson.length; i++) {
    const item = withPerPerson[i];
    if (item.perPersonPrice === currentPrice && item.players === rangeEnd + 1) {
      // Extend the current range
      rangeEnd = item.players;
    } else {
      // Push current range and start new one
      tiers.push({
        players: rangeStart === rangeEnd ? `${rangeStart}` : `${rangeStart}-${rangeEnd}`,
        price: `${currentPrice}`,
      });
      rangeStart = item.players;
      rangeEnd = item.players;
      currentPrice = item.perPersonPrice;
    }
  }

  // Push last range
  tiers.push({
    players: rangeStart === rangeEnd ? `${rangeStart}` : `${rangeStart}-${rangeEnd}`,
    price: `${currentPrice}`,
  });

  return tiers;
}

export default function ExperienceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations('experiences');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const [experience, setExperience] = useState<MappedExperience | null>(null);
  const [relatedExperiences, setRelatedExperiences] = useState<RelatedExperience[]>([]);
  const [media, setMedia] = useState<OfferMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchExperience() {
      const supabase = createClient();

      // 1. Fetch the offer by slug
      const { data: offer, error: offerError } = await supabase
        .from('offers')
        .select('*')
        .eq('slug', slug)
        .single();

      if (offerError || !offer) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const typedOffer = offer as Offer;

      // 2-4. Fetch pricing, media, and related offers in parallel
      const [pricingRes, mediaRes, relatedRes] = await Promise.all([
        supabase
          .from('offer_pricing')
          .select('players, price_cents')
          .eq('offer_id', typedOffer.id)
          .order('players'),
        supabase
          .from('offer_media')
          .select('*')
          .eq('offer_id', typedOffer.id)
          .order('sort_order'),
        supabase
          .from('offers')
          .select('*')
          .eq('lane_type', typedOffer.lane_type)
          .neq('slug', slug)
          .eq('is_active', true)
          .limit(3),
      ]);

      const pricing = (pricingRes.data || []) as OfferPricing[];
      const mediaData = (mediaRes.data || []) as OfferMedia[];
      const relatedOffers = (relatedRes.data || []) as Offer[];

      // 5. Fetch pricing for related offers
      let relatedPricing: OfferPricing[] = [];
      if (relatedOffers.length > 0) {
        const relatedIds = relatedOffers.map((o) => o.id);
        const { data: relPricingData } = await supabase
          .from('offer_pricing')
          .select('offer_id, players, price_cents')
          .in('offer_id', relatedIds);
        relatedPricing = (relPricingData || []) as OfferPricing[];
      }

      // Map main experience
      const category = getCategoryForOffer(typedOffer);
      const title = (typedOffer.title as Record<string, string>)[locale] || (typedOffer.title as Record<string, string>)['en'] || '';
      const shortDesc = (typedOffer.short_desc as Record<string, string>)[locale] || (typedOffer.short_desc as Record<string, string>)['en'] || '';
      const longDesc = (typedOffer.description as Record<string, string>)[locale] || (typedOffer.description as Record<string, string>)['en'] || '';
      const includes = (typedOffer.includes as string[]) || [];

      const mapped: MappedExperience = {
        slug: typedOffer.slug,
        title,
        description: shortDesc,
        longDescription: longDesc,
        duration: typedOffer.duration_minutes,
        laneType: typedOffer.lane_type,
        maxPlayers: typedOffer.max_players,
        minAge: typedOffer.age_min,
        fromPrice: calculateFromPrice(pricing),
        category,
        includes,
        whatsIncluded: includes,
        icon: getIconForSlug(typedOffer.slug),
        color: getColorForCategory(category),
        pricing: buildPricingTiers(pricing),
      };

      // Map related experiences
      const mappedRelated: RelatedExperience[] = relatedOffers.map((rel) => {
        const relCategory = getCategoryForOffer(rel);
        const relPricing = relatedPricing.filter((p) => p.offer_id === rel.id);
        const relTitle = (rel.title as Record<string, string>)[locale] || (rel.title as Record<string, string>)['en'] || '';
        const relDesc = (rel.short_desc as Record<string, string>)[locale] || (rel.short_desc as Record<string, string>)['en'] || '';

        return {
          slug: rel.slug,
          title: relTitle,
          description: relDesc,
          fromPrice: calculateFromPrice(relPricing),
          icon: getIconForSlug(rel.slug),
          color: getColorForCategory(relCategory),
          category: relCategory,
        };
      });

      setExperience(mapped);
      setRelatedExperiences(mappedRelated);
      setMedia(mediaData);
      setLoading(false);
    }

    fetchExperience();
  }, [slug, locale]);

  const formatDuration = (minutes: number) => {
    if (minutes >= 60) {
      const hours = minutes / 60;
      return `${hours} ${hours === 1 ? tCommon('hour') : tCommon('hours')}`;
    }
    return `${minutes} ${tCommon('minutes')}`;
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f]">
        <Loader2 className="h-10 w-10 animate-spin text-[#00d4ff]" />
      </div>
    );
  }

  if (notFound || !experience) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f]">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-white">Experience not found</h1>
          <Button variant="outline" asChild>
            <Link href="/experiences">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Experiences
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = experience.icon;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
          {offerImages[experience.slug] ? (
            <>
              <Image
                src={offerImages[experience.slug]}
                alt={experience.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1a2e] to-[#0a0a0f]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon
                  size={120}
                  className="text-white/5"
                  style={{ color: `${experience.color}10` }}
                />
              </div>
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Button variant="ghost" size="sm" asChild className="mb-4">
                  <Link href="/experiences">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    All Experiences
                  </Link>
                </Button>
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="neon-glow text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    {experience.title}
                  </h1>
                  {experience.slug.includes('quizzaboom') && (
                    <Badge className="bg-gradient-to-r from-[#ff6b00] to-[#ff2d55] text-white border-none text-sm font-bold uppercase tracking-wider animate-pulse px-3 py-1">
                      NEW !
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="neonBlue" className="gap-1">
                    <Clock size={12} />
                    {formatDuration(experience.duration)}
                  </Badge>
                  <Badge variant="neonViolet" className="gap-1">
                    <Users size={12} />
                    1-{experience.maxPlayers} {tCommon('players')}
                  </Badge>
                  {experience.includes.map((item) => (
                    <Badge key={item} variant="neonGreen" className="gap-1 capitalize">
                      <Check size={12} />
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-8 lg:col-span-2">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="border-border/50 bg-[#111118]">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{t('details')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">
                      {experience.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* What's Included */}
              {experience.whatsIncluded.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="border-border/50 bg-[#111118]">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{t('includes')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {experience.whatsIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00ff88]/10">
                              <Check className="h-3 w-3 text-[#00ff88]" />
                            </div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Info boxes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-3"
              >
                <Card className="border-border/50 bg-[#111118] text-center">
                  <CardContent className="pt-6">
                    <Clock className="mx-auto mb-2 h-8 w-8 text-[#00d4ff]" />
                    <p className="text-sm text-muted-foreground">{t('duration')}</p>
                    <p className="text-lg font-bold text-white">{formatDuration(experience.duration)}</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-[#111118] text-center">
                  <CardContent className="pt-6">
                    <Users className="mx-auto mb-2 h-8 w-8 text-[#8b5cf6]" />
                    <p className="text-sm text-muted-foreground">{t('players')}</p>
                    <p className="text-lg font-bold text-white">1-{experience.maxPlayers}</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-[#111118] text-center">
                  <CardContent className="pt-6">
                    <AlertCircle className="mx-auto mb-2 h-8 w-8 text-[#ff6b00]" />
                    <p className="text-sm text-muted-foreground">Min. Age</p>
                    <p className="text-lg font-bold text-white">{experience.minAge}+</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Age notice - conditional per activity type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {experience.slug.includes('quizzaboom') ? (
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <div className="flex items-start gap-3">
                      <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                      <p className="text-sm text-muted-foreground">
                        {t('quizFamilyFriendly')}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="rounded-lg border border-[#ff6b00]/20 bg-[#ff6b00]/5 p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff6b00]" />
                        <p className="text-sm text-muted-foreground">
                          {t('ageRequirement')}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 mt-3">
                      <div className="flex items-start gap-3">
                        <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                        <p className="text-sm text-muted-foreground">
                          {t('childrenWelcome')}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>

              {/* Pricing Table */}
              {experience.pricing.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Card className="border-border/50 bg-[#111118]">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Pricing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-hidden rounded-lg border border-border/50">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border/50 bg-[#0a0a0f]">
                              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                                {t('players')}
                              </th>
                              <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                                {t('pricePerPerson')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {experience.pricing.map((tier, index) => (
                              <tr
                                key={index}
                                className="border-b border-border/30 last:border-0"
                              >
                                <td className="px-4 py-3 text-sm text-white">
                                  {tier.players} {tCommon('players')}
                                </td>
                                <td className="px-4 py-3 text-right text-lg font-bold" style={{ color: experience.color }}>
                                  &euro;{tier.price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Media Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="mb-4 text-xl font-bold text-white">Gallery</h2>
                <MediaGallery
                  experienceTitle={experience.title}
                  items={media.length > 0 ? media.map((m) => ({
                    type: m.type as 'image' | 'video',
                    src: m.url,
                    alt: (m.alt_text as Record<string, string>)?.[locale] || experience.title,
                  })) : undefined}
                />
              </motion.div>

              {/* TikTok Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <TikTokCarousel />
              </motion.div>
            </div>

            {/* Sidebar / Sticky CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="border-border/50 bg-[#111118]">
                    <CardContent className="pt-6">
                      <div className="mb-4 text-center">
                        <span className="text-sm text-muted-foreground">{tCommon('from')}</span>
                        <div className="text-4xl font-bold" style={{ color: experience.color }}>
                          &euro;{Math.round(experience.fromPrice)}
                        </div>
                        <span className="text-sm text-muted-foreground">{t('perPerson')}</span>
                      </div>
                      <Button variant="neon" size="xl" className="w-full" asChild>
                        <Link href="/book">{t('bookNow')}</Link>
                      </Button>
                      <p className="mt-3 text-center text-xs text-muted-foreground">
                        {t('depositInfo')}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick info */}
                <Card className="border-border/50 bg-[#111118]">
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#00d4ff]" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('duration')}</p>
                        <p className="font-medium text-white">{formatDuration(experience.duration)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[#8b5cf6]" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('players')}</p>
                        <p className="font-medium text-white">1-{experience.maxPlayers}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-[#ff6b00]" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('minAge')}</p>
                        <p className="font-medium text-white">{experience.minAge} {t('years')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Related Experiences */}
          {relatedExperiences.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16"
            >
              <h2 className="neon-glow mb-8 text-center text-3xl font-bold text-white">
                {t('relatedExperiences')}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedExperiences.map((exp) => {
                  const RelIcon = exp.icon;
                  return (
                    <Card
                      key={exp.slug}
                      className="group flex flex-col overflow-hidden border-border/50 bg-[#111118] transition-all duration-300 hover:border-[color:var(--card-accent)]/40 hover:shadow-[0_0_20px_var(--card-glow)]"
                      style={{
                        '--card-accent': exp.color,
                        '--card-glow': `${exp.color}15`,
                      } as React.CSSProperties}
                    >
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#111] via-[#1a1a2e] to-[#0a0a0f]">
                        {offerImages[exp.slug] ? (
                          <Image
                            src={offerImages[exp.slug]}
                            alt={exp.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <RelIcon size={40} style={{ color: `${exp.color}20` }} />
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#111118] to-transparent" />
                      </div>
                      <CardContent className="flex flex-1 flex-col pt-4">
                        <h3 className="mb-2 text-lg font-bold text-white">{exp.title}</h3>
                        <p className="mb-4 flex-1 text-sm text-muted-foreground">{exp.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold" style={{ color: exp.color }}>
                            {tCommon('from')} &euro;{Math.round(exp.fromPrice)}
                          </span>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={{ pathname: '/experiences/[slug]' as const, params: { slug: exp.slug } }}>
                              {tCommon('learnMore')}
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Mobile Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-[#111118]/95 p-4 backdrop-blur-lg lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-sm text-muted-foreground">{tCommon('from')}</span>
            <span className="ml-1 text-xl font-bold" style={{ color: experience.color }}>
              &euro;{Math.round(experience.fromPrice)}
            </span>
            <span className="text-sm text-muted-foreground">/{t('perPerson')}</span>
          </div>
          <Button variant="neon" size="lg" asChild>
            <Link href="/book">{t('bookNow')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
