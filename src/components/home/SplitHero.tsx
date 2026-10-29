'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Compass, Map as MapIcon, Headphones, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

type Loc = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'it';

const HERO: Record<Loc, { headline: string; subtitle: string; discover: string }> = {
  en: { headline: 'Things to do in Tenerife', subtitle: 'Tours, activities, self-guided escape games and island travel tips — your guide to the best of Tenerife.', discover: 'Explore' },
  es: { headline: 'Qué hacer en Tenerife', subtitle: 'Tours, actividades, escape games autoguiados y consejos de viaje — tu guía de lo mejor de Tenerife.', discover: 'Explorar' },
  fr: { headline: 'Que faire à Tenerife', subtitle: 'Excursions, activités, escape games autoguidés et conseils de voyage — votre guide du meilleur de Tenerife.', discover: 'Explorer' },
  de: { headline: 'Aktivitäten auf Teneriffa', subtitle: 'Touren, Ausflüge, selbstgeführte Escape Games und Reisetipps — dein Guide für das Beste auf Teneriffa.', discover: 'Entdecken' },
  nl: { headline: 'Dingen om te doen op Tenerife', subtitle: 'Tours, activiteiten, zelfgeleide escape games en reistips — jouw gids voor het beste van Tenerife.', discover: 'Ontdek' },
  it: { headline: 'Cosa fare a Tenerife', subtitle: 'Tour, attività, escape games autoguidati e consigli di viaggio — la tua guida al meglio di Tenerife.', discover: 'Esplora' },
};

const CARD_TITLES: Record<Loc, { activities: string; escape: string; audio: string }> = {
  en: { activities: 'Tours & Activities', escape: 'Escape Games', audio: 'Audio Guide' },
  es: { activities: 'Tours y Actividades', escape: 'Escape Games', audio: 'Audioguía' },
  fr: { activities: 'Excursions & Activités', escape: 'Escape Games', audio: 'Audioguide' },
  de: { activities: 'Touren & Ausflüge', escape: 'Escape Games', audio: 'Audioguide' },
  nl: { activities: 'Tours & Activiteiten', escape: 'Escape Games', audio: 'Audiogids' },
  it: { activities: 'Tour e Attività', escape: 'Escape Games', audio: 'Audioguida' },
};

type Card = {
  id: 'activities' | 'escape' | 'audio';
  href: '/activities' | '/escape-game' | '/audio-guide-canaries';
  image: string;
  icon: typeof Compass;
  color: string;
  glowClass: string;
  shadow: string;
  overlay: string;
};

const CARDS: Card[] = [
  { id: 'activities', href: '/activities', image: '/images/activities/teide-cable-car-tour.avif', icon: Compass, color: 'text-neon-blue', glowClass: 'neon-glow-blue', shadow: 'rgba(0,212,255,0.3)', overlay: 'from-[#06121a]/70' },
  { id: 'escape', href: '/escape-game', image: '/images/offers/escapegame.png', icon: MapIcon, color: 'text-neon-pink', glowClass: 'neon-glow-pink', shadow: 'rgba(255,45,123,0.3)', overlay: 'from-[#1a0a15]/70' },
  { id: 'audio', href: '/audio-guide-canaries', image: '/images/activities/masca-gorge-hike.avif', icon: Headphones, color: 'text-neon-green', glowClass: 'neon-glow-green', shadow: 'rgba(57,255,20,0.3)', overlay: 'from-[#0a1a0a]/70' },
];

export default function SplitHero() {
  const locale = (useLocale() as Loc) ?? 'en';
  const h = HERO[locale] ?? HERO.en;
  const titles = CARD_TITLES[locale] ?? CARD_TITLES.en;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-[#0a0a12] pb-12 pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-neon-orange/5 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-neon-blue/5 blur-[120px]" />
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
          width={72}
          height={72}
          className="h-16 w-16 rounded-full object-contain"
          priority
        />
        <h1 className="neon-glow mt-4 text-3xl font-bold leading-tight tracking-wide text-white sm:text-4xl md:text-5xl">
          {h.headline}
        </h1>
        <p className="mt-3 max-w-xl text-center text-sm text-white/55 sm:text-base">
          {h.subtitle}
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {CARDS.map((card, index) => {
          const Icon = card.icon;
          const isHovered = hoveredId === card.id;
          const otherHovered = hoveredId !== null && !isHovered;

          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className={`transition-all duration-500 ${otherHovered ? 'scale-[0.98] opacity-70' : 'opacity-100'} ${isHovered ? 'scale-[1.02]' : ''}`}
              style={{ boxShadow: isHovered ? `0 0 40px ${card.shadow}, 0 20px 60px rgba(0,0,0,0.5)` : '0 4px 30px rgba(0,0,0,0.3)' }}
            >
              <Link
                href={card.href}
                className="group relative flex aspect-[4/5] cursor-pointer items-end overflow-hidden rounded-3xl border border-white/5"
              >
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={titles[card.id]}
                    fill
                    className="rounded-3xl object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority={index < 3}
                  />
                </div>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-t ${card.overlay} via-black/40 to-black/85`} />
                <div
                  className="absolute inset-0 rounded-3xl border-2 transition-all duration-500"
                  style={{ borderColor: isHovered ? card.shadow.replace('0.3', '0.5') : 'transparent' }}
                />

                <div className="relative z-10 w-full p-6 text-center">
                  <div
                    className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/10"
                    style={{ borderColor: card.shadow }}
                  >
                    <Icon className={`h-7 w-7 ${card.color}`} />
                  </div>
                  <h2 className={`${card.glowClass} text-xl font-bold tracking-wide text-white sm:text-2xl`}>
                    {titles[card.id]}
                  </h2>
                  <div
                    className={`mt-3 inline-block rounded-xl border px-5 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 ${card.color}`}
                    style={{ borderColor: card.shadow.replace('0.3', '0.5'), backgroundColor: card.shadow.replace('0.3', '0.1') }}
                  >
                    {h.discover}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-10 flex justify-center"
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
