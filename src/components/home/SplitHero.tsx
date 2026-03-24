'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Brain, Crosshair, Map, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
  }),
};

type Activity = {
  id: string;
  href: string;
  image: string;
  icon: typeof Target;
  color: string;
  hoverColor: string;
  glowClass: string;
  shadowColor: string;
  overlayFrom: string;
  overlayVia: string;
};

const activities: Activity[] = [
  {
    id: 'axe',
    href: '/axe-throwing',
    image: '/images/offers/traditional-axe.jpg',
    icon: Target,
    color: 'text-neon-blue',
    hoverColor: 'group-hover:text-neon-blue',
    glowClass: 'neon-glow-blue',
    shadowColor: 'rgba(0,212,255,0.3)',
    overlayFrom: 'from-black/65',
    overlayVia: 'via-black/45',
  },
  {
    id: 'quiz',
    href: '/quiz-room',
    image: '/images/offers/quizzaboom.png',
    icon: Brain,
    color: 'text-neon-violet',
    hoverColor: 'group-hover:text-neon-violet',
    glowClass: 'neon-glow-violet',
    shadowColor: 'rgba(168,85,247,0.3)',
    overlayFrom: 'from-[#1a0a2e]/70',
    overlayVia: 'via-[#1a0a2e]/50',
  },
  {
    id: 'darts',
    href: '/darts',
    image: '/images/offers/darts-classic.jpg',
    icon: Crosshair,
    color: 'text-neon-green',
    hoverColor: 'group-hover:text-neon-green',
    glowClass: 'neon-glow-green',
    shadowColor: 'rgba(57,255,20,0.3)',
    overlayFrom: 'from-[#0a1a0a]/70',
    overlayVia: 'via-[#0a1a0a]/50',
  },
  {
    id: 'escape',
    href: '/escape-game',
    image: '/images/offers/escape.png',
    icon: Map,
    color: 'text-neon-pink',
    hoverColor: 'group-hover:text-neon-pink',
    glowClass: 'neon-glow-pink',
    shadowColor: 'rgba(255,45,123,0.3)',
    overlayFrom: 'from-[#1a0a15]/70',
    overlayVia: 'via-[#1a0a15]/50',
  },
];

export default function SplitHero() {
  const t = useTranslations('splitHero');
  const locale = useLocale();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-[#0a0a12] pb-12 pt-24">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-neon-orange/5 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-neon-violet/5 blur-[120px]" />
      </div>

      {/* Branding header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-10 flex flex-col items-center px-4"
      >
        <Image
          src="/images/logo-funzone.png"
          alt="Fun Zone Tenerife"
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-contain"
          priority
        />
        <h1 className="neon-glow mt-4 text-3xl font-bold tracking-wider text-white sm:text-4xl md:text-5xl">
          FUN ZONE
        </h1>
        <p className="mt-1 text-xs font-medium tracking-[0.5em] text-neon-orange sm:text-sm">
          TENERIFE
        </p>
        <p className="mt-3 max-w-md text-center text-sm text-white/50 sm:text-base">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const isHovered = hoveredId === activity.id;
          const otherHovered = hoveredId !== null && !isHovered;

          return (
            <motion.a
              key={activity.id}
              href={`/${locale}${activity.href}`}
              className={`group relative flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-white/5 transition-all duration-500 ${
                otherHovered ? 'scale-[0.98] opacity-60' : 'opacity-100'
              } ${isHovered ? 'scale-[1.02]' : ''}`}
              onMouseEnter={() => setHoveredId(activity.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              style={{
                boxShadow: isHovered
                  ? `0 0 40px ${activity.shadowColor}, 0 20px 60px rgba(0,0,0,0.5)`
                  : '0 4px 30px rgba(0,0,0,0.3)',
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={activity.image}
                  alt={t(`${activity.id}Title`)}
                  fill
                  className="rounded-3xl object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${activity.overlayFrom} ${activity.overlayVia} to-black/80 transition-all duration-500 group-hover:opacity-80`} />

              {/* Colored border glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 60px ${activity.shadowColor}, inset 0 0 120px ${activity.shadowColor.replace('0.3', '0.08')}`,
                }}
              />

              {/* Neon border on hover */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-opacity-40"
                style={{
                  borderColor: isHovered ? activity.shadowColor.replace('0.3', '0.4') : 'transparent',
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/10"
                  style={{
                    borderColor: activity.shadowColor.replace('0.3', '0.3'),
                  }}
                >
                  <Icon className={`h-7 w-7 ${activity.color}`} />
                </div>

                <h2
                  className={`${activity.glowClass} text-2xl font-bold tracking-wider text-white transition-all duration-300 ${activity.hoverColor} sm:text-3xl lg:text-4xl`}
                >
                  {t(`${activity.id}Title`)}
                </h2>

                <p className="max-w-[260px] text-sm text-white/60">
                  {t(`${activity.id}Subtitle`)}
                </p>

                <div
                  className={`mt-2 rounded-xl border px-6 py-2.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 ${activity.color}`}
                  style={{
                    borderColor: activity.shadowColor.replace('0.3', '0.5'),
                    backgroundColor: activity.shadowColor.replace('0.3', '0.1'),
                  }}
                >
                  {t('discover')}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
