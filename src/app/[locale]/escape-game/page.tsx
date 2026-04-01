'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Clock, MapPin, Map, ArrowLeft, Smartphone, Star, Tag, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface EscapeGame {
  id: string;
  slug: string;
  image: string;
  duration: string;
  popular?: boolean;
  badge?: string;
}

const escapeGames: EscapeGame[] = [
  {
    id: 'ichasagua',
    slug: 'le-code-dichasagua',
    image: '/images/offers/cristianos.png',
    duration: '3h-4h',
  },
  {
    id: 'troisCles',
    slug: 'le-coffre-des-trois-cles',
    image: '/images/offers/la-laguna.png',
    duration: '2h30',
    badge: 'family',
  },
  {
    id: 'bateria',
    slug: 'le-butin-de-la-bateria',
    image: '/images/offers/puerto.png',
    duration: '1h45',
  },
  {
    id: 'cendres',
    slug: 'les-cendres-de-lame',
    image: '/images/offers/garachico.png',
    duration: '2h45',
    popular: true,
  },
];

const pricing = [
  { phones: 1, price: 25 },
  { phones: 2, price: 35 },
  { phones: 3, price: 45 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function EscapeGamePage() {
  const t = useTranslations('activities');
  const tEscape = useTranslations('escapeGames');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
          <Image
            src="/images/offers/escapegame.png"
            alt={t('escape.title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(255,45,123,0.3) 0%, transparent 70%)',
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
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff2d7b]/40 bg-white/5 backdrop-blur-sm">
                    <Map className="h-7 w-7 text-[#ff2d7b]" />
                  </div>
                  <h1 className="neon-glow-pink text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    {t('escape.title')}
                  </h1>
                </div>
                <p className="max-w-2xl text-lg text-white/70">
                  {t('escape.subtitle')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('escape.description')}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#ff2d7b]" />
                {tEscape('outdoor')}
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone size={14} className="text-[#ff2d7b]" />
                {tEscape('phoneRequired')}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#ff2d7b]" />
                {tEscape('selfPaced')}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="neon-glow-pink mb-6 text-center text-2xl font-bold text-white">
              {tEscape('pricingTitle')}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {pricing.map((tier, i) => (
                <div
                  key={tier.phones}
                  className={`relative overflow-hidden rounded-2xl border p-5 text-center transition-all duration-300 ${
                    i === 1
                      ? 'border-[#ff2d7b]/50 bg-[#ff2d7b]/10 shadow-[0_0_30px_rgba(255,45,123,0.15)]'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute -right-8 top-2 rotate-45 bg-[#ff2d7b] px-8 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Popular
                    </div>
                  )}
                  <div className="mb-2 flex items-center justify-center gap-1">
                    {Array.from({ length: tier.phones }).map((_, idx) => (
                      <Smartphone key={idx} size={18} className="text-[#ff2d7b]" />
                    ))}
                  </div>
                  <p className="mb-1 text-xs text-white/50">
                    {tier.phones} {tier.phones === 1 ? tEscape('phone') : tEscape('phones')}
                  </p>
                  <p className="text-3xl font-bold text-white">
                    {tier.price}<span className="text-lg text-white/50">€</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-white/40">
              {tEscape('pricingNote')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Island Pass */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-[#ff2d7b]/40 bg-gradient-to-br from-[#1a0a12] via-[#120810] to-[#0a0a0f] p-1 shadow-[0_0_60px_rgba(255,45,123,0.2)]"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ff2d7b]/20 via-transparent to-[#ff2d7b]/10 blur-xl" />

            <div className="relative rounded-[22px] bg-[#0d0a10] p-8 sm:p-10">
              {/* Top row */}
              <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <span className="mb-3 inline-block rounded-full border border-[#ff2d7b]/50 bg-[#ff2d7b]/10 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-[#ff2d7b]">
                    ⭐ {tEscape('islandPass.badge')}
                  </span>
                  <h2 className="neon-glow-pink text-3xl font-bold text-white sm:text-4xl">
                    🏝️ {tEscape('islandPass.title')}
                  </h2>
                  <p className="mt-1 text-lg font-medium text-white/60">
                    {tEscape('islandPass.subtitle')}
                  </p>
                </div>

                {/* Price block */}
                <div className="flex-shrink-0 text-right">
                  <div className="flex items-baseline justify-end gap-2">
                    <span className="text-xl text-white/30 line-through">{tEscape('islandPass.originalPrice')}</span>
                    <span className="text-5xl font-bold text-white">{tEscape('islandPass.price')}</span>
                  </div>
                  <p className="text-sm text-white/40">{tEscape('islandPass.perPhone')}</p>
                  <span className="mt-1 inline-block rounded-full bg-[#ff2d7b] px-3 py-0.5 text-xs font-bold text-white shadow-[0_0_15px_rgba(255,45,123,0.5)]">
                    {tEscape('islandPass.saving')}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/60">
                {tEscape('islandPass.description')}
              </p>

              {/* Cities */}
              <p className="mb-6 flex flex-wrap items-center gap-1 text-sm font-medium text-[#ff2d7b]/80">
                <MapPin size={14} className="flex-shrink-0" />
                {tEscape('islandPass.locations')}
              </p>

              {/* Tags + CTA */}
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    <Star size={11} className="text-[#ff2d7b]" />
                    {tEscape('islandPass.tag1')}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    <Calendar size={11} className="text-[#ff2d7b]" />
                    {tEscape('islandPass.tag2')}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    <Mail size={11} className="text-[#ff2d7b]" />
                    {tEscape('islandPass.tag3')}
                  </span>
                </div>

                <a
                  href={`/${locale}/book?category=escape&pass=island`}
                  className="flex-shrink-0 rounded-xl bg-[#ff2d7b] px-8 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,45,123,0.5)] transition-all hover:bg-[#ff2d7b]/90 hover:shadow-[0_0_35px_rgba(255,45,123,0.7)]"
                >
                  {tEscape('islandPass.cta')} →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Escape Games Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
          {escapeGames.map((game, i) => (
            <motion.div
              key={game.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#111118] transition-all duration-500 hover:border-[#ff2d7b]/30 hover:shadow-[0_0_40px_rgba(255,45,123,0.15)]"
            >
              {/* Clickable area -> product page */}
              <a href={`/${locale}/escape-game/${game.slug}`} className="block">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={game.image}
                    alt={tEscape(`${game.id}.title`)}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />

                  <div className="absolute right-3 top-3">
                    <span className="flex items-center gap-1 rounded-full border border-[#ff2d7b]/30 bg-black/60 px-3 py-1 text-xs font-medium text-[#ff2d7b] backdrop-blur-sm">
                      <Clock size={12} />
                      {game.duration}
                    </span>
                  </div>
                  {(game.popular || game.badge) && (
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-[#ff2d7b] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,45,123,0.4)]">
                        {game.popular ? tEscape('mostPopular') : game.badge ? tEscape(`badge_${game.badge}`) : ''}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-6 pt-6">
                  <h3 className="neon-glow-pink mb-1 text-xl font-bold text-white sm:text-2xl">
                    {tEscape(`${game.id}.title`)}
                  </h3>
                  <p className="mb-3 flex items-center gap-1.5 text-sm text-[#ff2d7b]/80">
                    <MapPin size={14} />
                    {tEscape(`${game.id}.location`)}
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-white/60">
                    {tEscape(`${game.id}.description`)}
                  </p>

                  {/* Difficulty */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xs text-white/40">{tEscape('difficulty')}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-2 w-5 rounded-full ${
                            idx < Number(tEscape(`${game.id}.difficultyLevel`))
                              ? 'bg-[#ff2d7b]'
                              : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </a>

              {/* Book button -> booking page (separate from card link) */}
              <div className="px-6 pb-6">
                <a
                  href={`/${locale}/book?category=escape`}
                  className="inline-flex w-full items-center justify-center rounded-md border border-[#ff2d7b]/30 bg-[#ff2d7b]/10 px-4 py-2.5 text-sm font-bold text-[#ff2d7b] transition-all hover:border-[#ff2d7b]/60 hover:bg-[#ff2d7b]/20"
                >
                  {tEscape('bookThis')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
