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
  borderColor: string;
  bgColor: string;
  hoverBg: string;
  hoverText: string;
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
    borderColor: 'border-[#00d4ff]',
    bgColor: 'bg-[#00d4ff]',
    hoverBg: 'group-hover:bg-[#00d4ff]',
    hoverText: 'group-hover:text-black',
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
    borderColor: 'border-[#a855f7]',
    bgColor: 'bg-[#a855f7]',
    hoverBg: 'group-hover:bg-[#a855f7]',
    hoverText: 'group-hover:text-white',
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
    borderColor: 'border-[#39ff14]',
    bgColor: 'bg-[#39ff14]',
    hoverBg: 'group-hover:bg-[#39ff14]',
    hoverText: 'group-hover:text-black',
    shadowColor: 'rgba(57,255,20,0.3)',
    overlayFrom: 'from-[#0a1a0a]/70',
    overlayVia: 'via-[#0a1a0a]/50',
  },
  {
    id: 'escape',
    href: '/escape-game',
    image: '/images/offers/traditional-axe.jpg',
    icon: Map,
    color: 'text-neon-pink',
    hoverColor: 'group-hover:text-neon-pink',
    glowClass: 'neon-glow-pink',
    borderColor: 'border-[#ff2d7b]',
    bgColor: 'bg-[#ff2d7b]',
    hoverBg: 'group-hover:bg-[#ff2d7b]',
    hoverText: 'group-hover:text-white',
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
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a12]">
      {/* 2x2 Grid panels */}
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {activities.map((activity) => {
          const Icon = activity.icon;
          const isHovered = hoveredId === activity.id;
          const otherHovered = hoveredId !== null && !isHovered;

          return (
            <motion.a
              key={activity.id}
              href={`/${locale}${activity.href}`}
              className={`group relative flex min-h-[50vh] cursor-pointer items-center justify-center overflow-hidden transition-all duration-500 md:min-h-[50vh] ${
                otherHovered ? 'opacity-70' : 'opacity-100'
              }`}
              onMouseEnter={() => setHoveredId(activity.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial="hidden"
              animate="visible"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={activity.image}
                  alt={t(`${activity.id}Title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${activity.overlayFrom} ${activity.overlayVia} to-black/75 transition-all duration-500 group-hover:opacity-80`} />

              {/* Colored border glow on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 60px ${activity.shadowColor}, inset 0 0 120px ${activity.shadowColor.replace('0.3', '0.1')}`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 -mt-4 flex flex-col items-center gap-3 px-6 text-center">
                <motion.div
                  custom={1}
                  variants={fadeInUp}
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${activity.borderColor}/30 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:${activity.borderColor}/60 group-hover:bg-white/10`}
                  style={{
                    borderColor: `${activity.shadowColor.replace('0.3', '0.3')}`,
                  }}
                >
                  <Icon className={`h-7 w-7 ${activity.color}`} />
                </motion.div>

                <motion.h2
                  custom={2}
                  variants={fadeInUp}
                  className={`${activity.glowClass} text-2xl font-bold tracking-wider text-white transition-all duration-300 ${activity.hoverColor} sm:text-3xl lg:text-4xl`}
                >
                  {t(`${activity.id}Title`)}
                </motion.h2>

                <motion.p
                  custom={3}
                  variants={fadeInUp}
                  className="max-w-[260px] text-sm text-white/70"
                >
                  {t(`${activity.id}Subtitle`)}
                </motion.p>

                <motion.div
                  custom={4}
                  variants={fadeInUp}
                  className={`mt-2 rounded-xl border px-6 py-2.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 ${activity.color}`}
                  style={{
                    borderColor: `${activity.shadowColor.replace('0.3', '0.5')}`,
                    backgroundColor: `${activity.shadowColor.replace('0.3', '0.1')}`,
                  }}
                  onMouseEnter={() => {}} // inherit from parent
                >
                  {t('discover')}
                </motion.div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Grid lines overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        {/* Horizontal line */}
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Central branding overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pointer-events-none absolute inset-0 z-30 hidden items-center justify-center md:flex"
      >
        <div className="rounded-2xl bg-black/60 px-8 py-5 backdrop-blur-xl">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/logo-funzone.png"
              alt="Fun Zone Tenerife"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-contain"
            />
            <div>
              <h1 className="neon-glow text-3xl font-bold tracking-wider text-white lg:text-4xl">
                FUN ZONE
              </h1>
              <p className="text-center text-[10px] font-medium tracking-[0.5em] text-neon-orange">
                TENERIFE
              </p>
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-white/50">
            {t('subtitle')}
          </p>
        </div>
      </motion.div>

      {/* Mobile branding */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute left-0 right-0 top-16 z-30 flex flex-col items-center md:hidden"
      >
        <Image
          src="/images/logo-funzone.png"
          alt="Fun Zone Tenerife"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-contain"
        />
        <h1 className="neon-glow mt-1 text-xl font-bold tracking-wider text-white">
          FUN ZONE
        </h1>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
