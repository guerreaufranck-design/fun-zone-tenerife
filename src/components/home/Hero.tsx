'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Target, ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/header.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 px-4 py-1.5 text-sm text-[#00d4ff]"
          >
            <Target size={14} />
            <span>Tenerife&apos;s #1 Axe Throwing Experience</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            custom={1}
            variants={fadeInUp}
            className="neon-glow text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            className="mt-4 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="neon" size="xl" asChild>
              <Link href="/book">{t('cta')}</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/experiences">{t('secondaryCta')}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
