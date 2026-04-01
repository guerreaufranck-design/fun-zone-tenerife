'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Clock, MapPin, Map, ArrowLeft, Smartphone, Star, Calendar, Mail, X, Minus, Plus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

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

  const [modalOpen, setModalOpen] = useState(false);
  const [phones, setPhones] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleIslandPassCheckout(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/island-pass/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phones, customerName: name, customerEmail: email, customerPhone: phone, locale }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed');
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  }

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

                <button
                  onClick={() => setModalOpen(true)}
                  className="flex-shrink-0 rounded-xl bg-[#ff2d7b] px-8 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,45,123,0.5)] transition-all hover:bg-[#ff2d7b]/90 hover:shadow-[0_0_35px_rgba(255,45,123,0.7)]"
                >
                  {tEscape('islandPass.cta')} →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Island Pass Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#ff2d7b]/30 bg-[#0d0a10] shadow-[0_0_60px_rgba(255,45,123,0.3)]"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h3 className="text-xl font-bold text-white">🏝️ {tEscape('islandPass.title')}</h3>
                <p className="text-sm text-white/50">{tEscape('islandPass.subtitle')}</p>
              </div>
              <button onClick={() => setModalOpen(false)} className="rounded-full p-2 text-white/40 hover:bg-white/10 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleIslandPassCheckout} className="px-6 py-6 space-y-5">
              {/* Phones selector */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50">
                  {tEscape('islandPass.phonesLabel') || 'Number of phones'}
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setPhones(p => Math.max(1, p - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-3xl font-bold text-white">{phones}</span>
                    <p className="text-xs text-white/40">{phones === 1 ? tEscape('phone') : tEscape('phones')}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPhones(p => Math.min(3, p + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <p className="mt-2 text-center text-sm font-semibold text-[#ff2d7b]">
                  Total: {phones * 79}€
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                  {tEscape('islandPass.nameLabel') || 'Full name'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#ff2d7b]/50 focus:outline-none focus:ring-1 focus:ring-[#ff2d7b]/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                  {tEscape('islandPass.emailLabel') || 'Email address'}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#ff2d7b]/50 focus:outline-none focus:ring-1 focus:ring-[#ff2d7b]/30"
                />
                <p className="mt-1 text-xs text-white/30">
                  {tEscape('islandPass.emailHint') || 'Your 4 activation codes will be sent here'}
                </p>
              </div>

              {/* Phone (optional) */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                  {tEscape('islandPass.phoneLabel') || 'Phone (optional)'}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+34 600 000 000"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#ff2d7b]/50 focus:outline-none focus:ring-1 focus:ring-[#ff2d7b]/30"
                />
              </div>

              {error && (
                <p className="rounded-xl bg-red-500/10 px-4 py-2 text-xs text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff2d7b] py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,45,123,0.4)] transition-all hover:bg-[#ff2d7b]/90 disabled:opacity-60"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                {loading ? '...' : `${tEscape('islandPass.cta')} — ${phones * 79}€`}
              </button>
            </form>
          </motion.div>
        </div>
      )}

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
