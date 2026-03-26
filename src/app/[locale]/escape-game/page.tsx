'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Map, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface EscapeGame {
  id: string;
  image: string;
  duration: string;
  players: string;
}

const escapeGames: EscapeGame[] = [
  {
    id: 'ichasagua',
    image: '/images/offers/escape.png',
    duration: '1h30',
    players: '2-6',
  },
  {
    id: 'troisCles',
    image: '/images/offers/escape.png',
    duration: '2h30',
    players: '2-6',
  },
  {
    id: 'bateria',
    image: '/images/offers/escape.png',
    duration: '1h45',
    players: '2-6',
  },
  {
    id: 'cendres',
    image: '/images/offers/garachico.png',
    duration: '2h45',
    players: '2-6',
  },
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
            src="/images/offers/escape.png"
            alt={t('escape.title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />

          {/* Pink glow */}
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
                <Users size={14} className="text-[#ff2d7b]" />
                {tEscape('teamBased')}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#ff2d7b]" />
                {tEscape('selfPaced')}
              </span>
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

                {/* Badges */}
                <div className="absolute right-3 top-3 flex gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-[#ff2d7b]/30 bg-black/60 px-3 py-1 text-xs font-medium text-[#ff2d7b] backdrop-blur-sm">
                    <Clock size={12} />
                    {game.duration}
                  </span>
                </div>
                <div className="absolute left-3 top-3">
                  <span className="flex items-center gap-1 rounded-full border border-[#ff2d7b]/30 bg-black/60 px-3 py-1 text-xs font-medium text-[#ff2d7b] backdrop-blur-sm">
                    <Users size={12} />
                    {game.players}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
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
                <div className="mb-5 flex items-center gap-2">
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

                <Button
                  variant="outline"
                  className="w-full border-[#ff2d7b]/30 text-[#ff2d7b] transition-all hover:bg-[#ff2d7b]/10 hover:border-[#ff2d7b]/50"
                  asChild
                >
                  <Link href="/book">{tEscape('bookThis')}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
