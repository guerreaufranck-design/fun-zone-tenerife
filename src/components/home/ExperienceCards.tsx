'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Clock, Users, Axe, Sword, Target, Gamepad2, Swords, PartyPopper, Briefcase, GlassWater, CircleDot, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';

/* ============================================
   STATIC MAPPINGS (design only — not product data)
   ============================================ */

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

function getColorForSlug(slug: string, laneType: string): string {
  if (slug.includes('ninja') || slug.includes('initiation') || slug.includes('birthday-adult')) return '#8b5cf6';
  if (slug.includes('premium') || slug.includes('classic-darts') || slug.includes('despedida') || slug.includes('bachelor')) return '#ff6b00';
  if (slug.includes('ninja-axe-2h') || slug.includes('team')) return '#00ff88';
  return '#00d4ff';
}

/* ============================================
   TYPES
   ============================================ */

interface MappedExperience {
  slug: string;
  title: string;
  description: string;
  duration: string;
  players: string;
  priceFrom: number;
  image: string;
  color: string;
  icon: typeof Axe;
}

/* ============================================
   ANIMATION
   ============================================ */

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

/* ============================================
   COMPONENT
   ============================================ */

export default function ExperienceCards() {
  const t = useTranslations('experiences');
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [experiences, setExperiences] = useState<MappedExperience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOffers() {
      const supabase = createClient();

      const [offersRes, pricingRes] = await Promise.all([
        supabase
          .from('offers')
          .select('id, slug, title, short_desc, duration_minutes, min_players, max_players, lane_type, is_active, sort_order')
          .eq('is_active', true)
          .neq('backoffice_only', true)
          .order('sort_order'),
        supabase
          .from('offer_pricing')
          .select('offer_id, players, price_cents'),
      ]);

      if (!offersRes.data || !pricingRes.data) {
        setLoading(false);
        return;
      }

      // Group pricing by offer_id
      const pricingByOffer = new Map<string, { players: number; price_cents: number }[]>();
      for (const p of pricingRes.data) {
        if (!pricingByOffer.has(p.offer_id)) pricingByOffer.set(p.offer_id, []);
        pricingByOffer.get(p.offer_id)!.push(p);
      }

      const mapped: MappedExperience[] = offersRes.data.map((offer) => {
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
        const descObj = offer.short_desc as Record<string, string>;

        const duration = offer.duration_minutes >= 60
          ? `${offer.duration_minutes / 60}h`
          : `${offer.duration_minutes}min`;

        return {
          slug: offer.slug,
          title: titleObj[locale] || titleObj['en'] || offer.slug,
          description: descObj?.[locale] || descObj?.['en'] || '',
          duration,
          players: `${offer.min_players}-${offer.max_players}`,
          priceFrom: Math.round(minPricePerPerson),
          image: offerImages[offer.slug] || '',
          color: getColorForSlug(offer.slug, offer.lane_type),
          icon: getIconForSlug(offer.slug, offer.lane_type),
        };
      });

      setExperiences(mapped);
      setLoading(false);
    }

    fetchOffers();
  }, [locale]);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="neon-glow mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div ref={ref}>
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={cardVariants}
                >
                  <Link href={{ pathname: '/experiences/[slug]', params: { slug: exp.slug } }} className="block h-full">
                    <Card className="group relative flex h-full flex-col overflow-hidden border-border/50 bg-[#111118] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]">
                      {/* Image area */}
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#111] via-[#1a1a2e] to-[#0a0a0f]">
                        {exp.image ? (
                          <Image
                            src={exp.image}
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
                        {/* Duration badge */}
                        <div className="absolute right-3 top-3">
                          <Badge variant="neonBlue" className="gap-1">
                            <Clock size={12} />
                            {exp.duration}
                          </Badge>
                        </div>
                        {/* Players badge */}
                        <div className="absolute left-3 top-3">
                          <Badge variant="secondary" className="gap-1 bg-black/60 backdrop-blur-sm border-white/10">
                            <Users size={12} />
                            {exp.players}
                          </Badge>
                        </div>
                        {/* Gradient overlay at bottom */}
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
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {exp.description}
                        </p>
                      </CardContent>

                      <CardFooter className="flex items-center justify-between border-t border-border/50 pt-4">
                        <div>
                          <span className="text-xs text-muted-foreground">{t('from')}</span>
                          <span className="ml-1 text-xl font-bold" style={{ color: exp.color }}>
                            &euro;{exp.priceFrom}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            /{t('perPerson')}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-neon-blue transition-colors group-hover:text-white">
                          {t('bookNow')} &rarr;
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
