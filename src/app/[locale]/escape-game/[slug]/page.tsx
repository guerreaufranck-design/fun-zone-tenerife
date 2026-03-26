'use client';

import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowLeft, Map, Clock, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getEscapeGameBySlug } from '@/data/escape-games';
import { notFound } from 'next/navigation';

const pricing = [
  { phones: 1, price: 19 },
  { phones: 2, price: 25 },
  { phones: 3, price: 35 },
];

export default function EscapeGameDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const slug = params.slug as string;
  const game = getEscapeGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const t = (field: Record<string, string>) => field[locale] || field['en'] || '';

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a07] via-[#1a0e06] to-[#0a0a0f]" />

        {/* Lava glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 h-1/2 w-[600px] -translate-x-1/2 rounded-full bg-[#8b2a0a]/20 blur-[120px]" />
          <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-[#c9a24b]/5 blur-[100px]" />
        </div>

        {/* Decorative lines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[15, 35, 65, 82].map((left, i) => (
            <motion.div
              key={i}
              className="absolute top-0 w-px"
              style={{
                left: `${left}%`,
                height: `${15 + i * 7}%`,
                background: 'linear-gradient(180deg, transparent 0%, rgba(139,42,10,0.4) 40%, rgba(201,162,75,0.2) 70%, transparent 100%)',
              }}
              animate={{ opacity: [0, 1, 0], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 8, delay: i * 1.5, repeat: Infinity }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-10 inline-block border border-[#c9a24b]/60 px-5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a24b]">
            Escape Game · {t(game.location)} · Tenerife
          </div>

          {/* Eyebrow */}
          <p className="mb-5 text-[11px] font-light uppercase tracking-[0.4em] text-[#6b5e52]">
            {t(game.subtitle)}
          </p>

          {/* Title */}
          <h1 className="mb-3 font-serif text-4xl font-bold leading-tight text-[#f4ede0] sm:text-5xl md:text-6xl" style={{ textShadow: '0 0 80px rgba(139,42,10,0.6)' }}>
            {t(game.title)}
          </h1>

          {/* Divider */}
          <div className="mx-auto my-8 h-px w-20 bg-gradient-to-r from-transparent via-[#c9a24b] to-transparent" />

          {/* Tagline */}
          <p className="mx-auto max-w-xl text-lg italic leading-relaxed text-[#ede0c8]/90 sm:text-xl">
            {t(game.tagline)}
          </p>

          {/* Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['🏛 Outdoor', `⏱ ${game.duration}`, '∞ Unlimited players', `📍 ${game.distance}`].map((pill) => (
              <span key={pill} className="border border-[#c9a24b]/30 bg-[#c9a24b]/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#c9a24b]">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-px bg-gradient-to-b from-[#c9a24b] to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a24b]/50">Discover</span>
        </motion.div>
      </section>

      {/* QUOTE */}
      <section className="border-y border-[#c9a24b]/10 bg-gradient-to-br from-[#1a0e06]/95 to-[#3a1f0e]/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-serif text-xl italic leading-relaxed text-[#f4ede0] sm:text-2xl">
            {t(game.quote)}
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#6b5e52]">
            {t(game.quoteAttr)}
          </p>
        </div>
      </section>

      {/* INTRO / EXPERIENCE */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">
          The experience
          <span className="block h-px w-14 bg-[#c9a24b]/40" />
        </p>
        <h2 className="mb-6 font-serif text-2xl font-semibold text-[#f4ede0] sm:text-3xl">
          {t(game.intro)}
        </h2>
        <p className="font-serif text-lg leading-loose text-[#ede0c8]/85">
          {t(game.introBody)}
        </p>
      </section>

      {/* HISTORY */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Visual timeline */}
          <div className="relative flex aspect-[3/4] flex-col items-center justify-center gap-5 overflow-hidden border border-[#c9a24b]/20 bg-gradient-to-br from-[#3a1f0e]/80 via-[#8b2a0a]/20 to-[#0d0a07]/90 p-10">
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#8b2a0a]/30 to-transparent" />
            {game.dates.map((d, i) => (
              <div key={i} className="relative z-10 text-center">
                <p className="font-serif text-4xl font-bold text-[#c9a24b]/80 sm:text-5xl">{d.year}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#6b5e52]">{t(d.label)}</p>
                {i < game.dates.length - 1 && <div className="mx-auto my-4 h-px w-10 bg-[#c9a24b]/20" />}
              </div>
            ))}
            <div className="mx-auto my-2 h-px w-10 bg-[#c9a24b]/20" />
            <div className="relative z-10 text-center">
              <p className="font-serif text-4xl font-bold text-[#c9a24b]/80 sm:text-5xl">Today</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#6b5e52]">Your investigation begins</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">
              True history
              <span className="block h-px w-14 bg-[#c9a24b]/40" />
            </p>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-[#f4ede0]">
              {t(game.historyTitle)}
            </h2>
            <div className="space-y-4 font-serif text-base leading-loose text-[#ede0c8]/80">
              {(game.historyBody[locale as keyof typeof game.historyBody] || game.historyBody['en']).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTS / PARCOURS */}
      <section className="bg-gradient-to-b from-[#0a0a0f] via-[#1a0808]/40 to-[#0a0a0f] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">The journey</p>
            <h2 className="font-serif text-2xl font-semibold text-[#f4ede0] sm:text-3xl">
              {game.acts.length} acts. One secret.
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-[#c9a24b]/30 to-transparent md:left-8" />

            <div className="space-y-0">
              {game.acts.map((act, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-[32px_1fr] gap-6 border-b border-[#c9a24b]/8 py-10 md:grid-cols-[64px_1fr] md:gap-9"
                >
                  <div className="flex justify-center pt-1">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#c9a24b] shadow-[0_0_20px_rgba(201,162,75,0.5)]" />
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#6b5e52]">Act {i + 1}</p>
                    <h3 className="mb-1 font-serif text-lg font-semibold text-[#f4ede0]">{t(act.title)}</h3>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#c9a24b]/60">{t(act.location)}</p>
                    <p className="font-serif text-base leading-relaxed text-[#ede0c8]/75">{t(act.description)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">
          What makes this game unique
          <span className="block h-px w-14 bg-[#c9a24b]/40" />
        </p>
        <h2 className="mb-12 font-serif text-2xl font-semibold text-[#f4ede0]">More than a scavenger hunt</h2>

        <div className="grid grid-cols-1 gap-px border border-[#c9a24b]/10 bg-[#c9a24b]/10 sm:grid-cols-2">
          {game.features.map((f, i) => (
            <div key={i} className="bg-[#1a0e06] p-10 transition-colors hover:bg-[#3a1f0e]/50">
              <span className="mb-3 text-3xl text-[#c9a24b]/15">{String(i + 1).padStart(2, '0')}</span>
              <p className="mb-3 text-2xl">{f.icon}</p>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#c9a24b]">{t(f.title)}</p>
              <p className="font-serif text-base leading-relaxed text-[#ede0c8]/80">{t(f.description)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICAL INFO */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">
          Practical info
          <span className="block h-px w-14 bg-[#c9a24b]/40" />
        </p>
        <h2 className="mb-12 font-serif text-2xl font-semibold text-[#f4ede0]">Everything you need to know</h2>

        <div className="grid grid-cols-2 gap-px border border-[#c9a24b]/10 bg-[#c9a24b]/10 sm:grid-cols-3 lg:grid-cols-6">
          {game.infos.map((info, i) => (
            <div key={i} className="bg-[#1a0e06] px-5 py-8 text-center">
              <span className="mb-3 block text-2xl">{info.icon}</span>
              <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-[#6b5e52]">{t(info.label)}</p>
              <p className="font-serif text-sm font-semibold text-[#c9a24b]">{t(info.value)}</p>
              <p className="mt-1 font-serif text-xs text-[#ede0c8]/50">{t(info.sub)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-8 text-center font-serif text-2xl font-semibold text-[#f4ede0]">Pricing</h2>
        <div className="grid grid-cols-3 gap-4">
          {pricing.map((tier, i) => (
            <div
              key={tier.phones}
              className={`relative overflow-hidden border p-6 text-center transition-all ${
                i === 1
                  ? 'border-[#c9a24b]/50 bg-[#c9a24b]/10 shadow-[0_0_30px_rgba(201,162,75,0.1)]'
                  : 'border-[#c9a24b]/15 bg-[#c9a24b]/5'
              }`}
            >
              {i === 1 && (
                <div className="absolute -right-7 top-2 rotate-45 bg-[#c9a24b] px-8 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#0d0a07]">
                  Popular
                </div>
              )}
              <div className="mb-3 flex items-center justify-center gap-1">
                {Array.from({ length: tier.phones }).map((_, idx) => (
                  <Smartphone key={idx} size={16} className="text-[#c9a24b]" />
                ))}
              </div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#6b5e52]">
                {tier.phones} {tier.phones === 1 ? 'phone' : 'phones'}
              </p>
              <p className="text-3xl font-bold text-[#f4ede0]">
                {tier.price}<span className="text-base text-[#6b5e52]">€</span>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[10px] tracking-wide text-[#6b5e52]">
          Each phone receives a unique game code. Want to compete? Book multiple phones!
        </p>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b2a0a]/15 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <p className="font-serif text-2xl font-bold text-[#c9a24b] sm:text-3xl">{t(game.motto)}</p>
          <p className="mt-2 text-[10px] italic tracking-[0.15em] text-[#6b5e52]">{t(game.mottoSub)}</p>

          <p className="mx-auto mt-10 max-w-2xl font-serif text-lg leading-relaxed text-[#f4ede0]/90">
            {t(game.ctaBody)}
          </p>

          <Button
            className="mt-10 bg-[#c9a24b] px-12 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#0d0a07] transition-all hover:bg-[#e8c97a] hover:shadow-[0_0_40px_rgba(201,162,75,0.3)]"
            asChild
          >
            <Link href="/book">Book your adventure</Link>
          </Button>

          <div className="mt-8">
            <Button variant="ghost" size="sm" asChild className="text-[#c9a24b]/50 hover:text-[#c9a24b]">
              <Link href="/escape-game">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all escape games
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
