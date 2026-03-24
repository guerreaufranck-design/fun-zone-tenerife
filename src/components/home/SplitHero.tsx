'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Brain, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function SplitHero() {
  const t = useTranslations('splitHero');
  const locale = useLocale();
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Top branding bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-0 right-0 top-0 z-30 flex flex-col items-center pt-20 sm:pt-24"
      >
        <h1 className="neon-glow text-center text-3xl font-bold tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl">
          FUN ZONE
        </h1>
        <span className="mt-1 text-xs font-medium tracking-[0.5em] text-neon-blue sm:text-sm">
          TENERIFE
        </span>
        <p className="mt-3 max-w-md px-4 text-center text-sm text-muted-foreground sm:text-base">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Split panels */}
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* LEFT - Axe Throwing */}
        <motion.a
          href={`/${locale}/axe-throwing`}
          className={`group relative flex flex-1 cursor-pointer items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
            hoveredSide === 'right' ? 'md:flex-[0.7]' : hoveredSide === 'left' ? 'md:flex-[1.3]' : 'md:flex-1'
          }`}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          initial="hidden"
          animate="visible"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/offers/traditional-axe.jpg"
              alt="Axe Throwing"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 transition-all duration-500 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/70" />

          {/* Neon border on hover */}
          <div className="absolute inset-0 border-r-0 border-neon-blue/0 transition-all duration-500 group-hover:border-neon-blue/30 md:border-r-2" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-32 text-center md:py-0">
            <motion.div
              custom={1}
              variants={fadeInUp}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neon-blue/30 bg-neon-blue/10 transition-all duration-500 group-hover:border-neon-blue/60 group-hover:bg-neon-blue/20 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            >
              <Target className="h-8 w-8 text-neon-blue" />
            </motion.div>

            <motion.h2
              custom={2}
              variants={fadeInUp}
              className="text-3xl font-bold tracking-wider text-white transition-all duration-300 group-hover:text-neon-blue sm:text-4xl lg:text-5xl"
            >
              {t('axeTitle')}
            </motion.h2>

            <motion.p
              custom={3}
              variants={fadeInUp}
              className="max-w-xs text-sm text-muted-foreground sm:text-base"
            >
              {t('axeSubtitle')}
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeInUp}
              className="mt-4 rounded-xl border border-neon-blue/50 bg-neon-blue/10 px-8 py-3 text-sm font-bold uppercase tracking-wider text-neon-blue transition-all duration-300 group-hover:bg-neon-blue group-hover:text-black group-hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]"
            >
              {t('discover')}
            </motion.div>
          </div>
        </motion.a>

        {/* Vertical divider (desktop) */}
        <div className="relative z-20 hidden w-px md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/40 to-transparent" />
        </div>

        {/* Horizontal divider (mobile) */}
        <div className="relative z-20 h-px md:hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />
        </div>

        {/* RIGHT - Quiz Room */}
        <motion.a
          href={`/${locale}/quiz-room`}
          className={`group relative flex flex-1 cursor-pointer items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
            hoveredSide === 'left' ? 'md:flex-[0.7]' : hoveredSide === 'right' ? 'md:flex-[1.3]' : 'md:flex-1'
          }`}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          initial="hidden"
          animate="visible"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/offers/quizzaboom.png"
              alt="Quiz Room"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 transition-all duration-500 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/70" />

          {/* Neon border on hover */}
          <div className="absolute inset-0 border-l-0 border-accent/0 transition-all duration-500 group-hover:border-accent/30 md:border-l-2" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-32 text-center md:py-0">
            <motion.div
              custom={1}
              variants={fadeInUp}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 transition-all duration-500 group-hover:border-accent/60 group-hover:bg-accent/20 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              <Brain className="h-8 w-8 text-accent" />
            </motion.div>

            <motion.h2
              custom={2}
              variants={fadeInUp}
              className="text-3xl font-bold tracking-wider text-white transition-all duration-300 group-hover:text-accent sm:text-4xl lg:text-5xl"
            >
              {t('quizTitle')}
            </motion.h2>

            <motion.p
              custom={3}
              variants={fadeInUp}
              className="max-w-xs text-sm text-muted-foreground sm:text-base"
            >
              {t('quizSubtitle')}
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeInUp}
              className="mt-4 rounded-xl border border-accent/50 bg-accent/10 px-8 py-3 text-sm font-bold uppercase tracking-wider text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
            >
              {t('discover')}
            </motion.div>
          </div>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
