'use client';

import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowLeft, Map, Clock, Smartphone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getEscapeGameBySlug } from '@/data/escape-games';
import { notFound } from 'next/navigation';

const pricing = [
  { phones: 1, price: 19 },
  { phones: 2, price: 25 },
  { phones: 3, price: 35 },
];

const ui: Record<string, Record<string, string>> = {
  theExperience: { en: 'The experience', fr: "L'expérience", es: 'La experiencia', de: 'Das Erlebnis', it: "L'esperienza" },
  trueHistory: { en: 'True history', fr: 'Histoire vraie', es: 'Historia real', de: 'Wahre Geschichte', it: 'Storia vera' },
  theJourney: { en: 'The journey', fr: 'Le parcours', es: 'El recorrido', de: 'Die Route', it: 'Il percorso' },
  stepsOneSecret: { en: 'steps. One secret.', fr: 'étapes. Un seul secret.', es: 'etapas. Un solo secreto.', de: 'Stationen. Ein Geheimnis.', it: 'tappe. Un solo segreto.' },
  step: { en: 'Step', fr: 'Étape', es: 'Etapa', de: 'Station', it: 'Tappa' },
  act: { en: 'Act', fr: 'Acte', es: 'Acto', de: 'Akt', it: 'Atto' },
  whatMakesUnique: { en: 'What makes this game unique', fr: 'Ce qui rend ce jeu unique', es: 'Lo que hace único a este juego', de: 'Was dieses Spiel einzigartig macht', it: 'Cosa rende unico questo gioco' },
  moreThan: { en: 'More than a scavenger hunt', fr: 'Bien plus qu\'un jeu de piste', es: 'Mucho más que una búsqueda del tesoro', de: 'Mehr als eine Schnitzeljagd', it: 'Molto più di una caccia al tesoro' },
  practicalInfo: { en: 'Practical info', fr: 'Infos pratiques', es: 'Información práctica', de: 'Praktische Infos', it: 'Info pratiche' },
  everythingToKnow: { en: 'Everything you need to know', fr: 'Tout ce qu\'il faut savoir', es: 'Todo lo que necesitas saber', de: 'Alles was Sie wissen müssen', it: 'Tutto quello che c\'è da sapere' },
  pricingTitle: { en: 'Pricing', fr: 'Tarifs', es: 'Precios', de: 'Preise', it: 'Prezzi' },
  phone: { en: 'phone', fr: 'téléphone', es: 'teléfono', de: 'Handy', it: 'telefono' },
  phones: { en: 'phones', fr: 'téléphones', es: 'teléfonos', de: 'Handys', it: 'telefoni' },
  pricingNote: { en: 'Each phone receives a unique game code. Want to compete? Book multiple phones!', fr: 'Chaque téléphone reçoit un code de jeu unique. Envie de compétition ? Réservez plusieurs téléphones !', es: 'Cada teléfono recibe un código único. ¿Quieres competir? ¡Reserva varios teléfonos!', de: 'Jedes Handy erhält einen einzigartigen Spielcode. Lust auf Wettbewerb? Buchen Sie mehrere Handys!', it: 'Ogni telefono riceve un codice unico. Vuoi competere? Prenota più telefoni!' },
  bookAdventure: { en: 'Book your adventure', fr: 'Réserver votre aventure', es: 'Reserva tu aventura', de: 'Abenteuer buchen', it: 'Prenota la tua avventura' },
  bookNow: { en: 'Book now', fr: 'Réserver maintenant', es: 'Reservar ahora', de: 'Jetzt buchen', it: 'Prenota ora' },
  from: { en: 'From', fr: 'À partir de', es: 'Desde', de: 'Ab', it: 'Da' },
  perPhone: { en: '/phone', fr: '/téléphone', es: '/teléfono', de: '/Handy', it: '/telefono' },
  backToAll: { en: 'Back to all escape games', fr: 'Retour aux escape games', es: 'Volver a los escape games', de: 'Zurück zu allen Escape Games', it: 'Torna a tutti gli escape game' },
  discover: { en: 'Discover', fr: 'Découvrir', es: 'Descubrir', de: 'Entdecken', it: 'Scopri' },
  today: { en: 'Today', fr: "Aujourd'hui", es: 'Hoy', de: 'Heute', it: 'Oggi' },
  yourInvestigation: { en: 'Your investigation begins', fr: 'Votre enquête commence', es: 'Tu investigación comienza', de: 'Ihre Ermittlung beginnt', it: 'La vostra indagine inizia' },
  outdoor: { en: 'Outdoor', fr: 'En plein air', es: 'Al aire libre', de: 'Im Freien', it: "All'aperto" },
  unlimitedPlayers: { en: 'Unlimited players', fr: 'Joueurs illimités', es: 'Jugadores ilimitados', de: 'Unbegrenzte Spieler', it: 'Giocatori illimitati' },
  urbanAct: { en: 'Urban Act', fr: 'Acte Urbain', es: 'Acto Urbano', de: 'Städtischer Akt', it: 'Atto Urbano' },
  wildAct: { en: 'Wild Act', fr: 'Acte Sauvage', es: 'Acto Salvaje', de: 'Wilder Akt', it: 'Atto Selvaggio' },
};

export default function EscapeGameDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const slug = params.slug as string;
  const game = getEscapeGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const t = (field: Record<string, string>) => field[locale] || field['en'] || '';
  const u = (key: string) => ui[key]?.[locale] || ui[key]?.['en'] || key;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* STICKY BOOKING CARD - always visible, follows scroll */}
      <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md sm:bottom-6 sm:left-auto sm:right-6 lg:bottom-8 lg:right-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', damping: 25, stiffness: 300 }}
          className="relative overflow-hidden rounded-2xl border border-[#c9a24b]/20 bg-[#0d0a07]/95 p-4 shadow-[0_-4px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(201,162,75,0.08)] backdrop-blur-xl sm:p-5"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#c9a24b]/5 blur-2xl" />

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#c9a24b]/10">
              <Sparkles size={14} className="text-[#c9a24b]" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] leading-relaxed text-[#ede0c8]/80 sm:text-sm">
                {t(game.stickyMessage)}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={`/${locale}/book`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#c9a24b] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#0a0800] transition-all hover:bg-[#e8c97a] hover:shadow-[0_0_20px_rgba(201,162,75,0.3)]"
                >
                  {u('bookNow')}
                </a>
                <span className="text-xs text-[#6b5e52]">
                  {u('from')} <span className="font-semibold text-[#c9a24b]">19€</span>{u('perPhone')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={game.image}
            alt={t(game.title)}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Dark overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a07]/50 via-[#1a0e06]/55 to-[#0a0a0f]/90" />

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
            {[`🏛 ${u('outdoor')}`, `⏱ ${game.duration}`, `∞ ${u('unlimitedPlayers')}`, `📍 ${game.distance}`].map((pill) => (
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
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a24b]/50">{u('discover')}</span>
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
          {u('theExperience')}
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
              <p className="font-serif text-4xl font-bold text-[#c9a24b]/80 sm:text-5xl">{u('today')}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#6b5e52]">{u('yourInvestigation')}</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">
              {u('trueHistory')}
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
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">{u('theJourney')}</p>
            <h2 className="font-serif text-2xl font-semibold text-[#f4ede0] sm:text-3xl">
              {game.acts.length} {u('stepsOneSecret')}
            </h2>
          </div>

          {game.zones ? (
            // Dual-zone layout (e.g. urban + mountain)
            <>
              {game.zones.map((zone) => {
                const zoneActs = game.acts.filter((a) => a.zone === zone.id);
                const isMountain = zone.id === 'mountain';
                return (
                  <div key={zone.id}>
                    {/* Zone transition banner */}
                    <div className="mb-10 border-y border-[#c9a24b]/10 bg-gradient-to-r from-[#3d9ca8]/5 via-[#7a4f2a]/10 to-[#3d9ca8]/5 px-6 py-10 text-center">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#3d9ca8]">
                        {t(zone.tag)}
                      </p>
                      <p className="font-serif text-lg font-semibold text-[#f4ede0]">{t(zone.title)}</p>
                      <p className="mx-auto mt-2 max-w-xl font-serif text-sm italic text-[#ede0c8]/60">{t(zone.description)}</p>
                    </div>

                    <div className="relative mb-14">
                      <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-[#c9a24b]/30 to-transparent md:left-8" />
                      {zoneActs.map((act, i) => {
                        const globalIndex = game.acts.indexOf(act);
                        return (
                          <motion.div
                            key={globalIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-[32px_1fr] gap-6 border-b border-[#c9a24b]/8 py-10 md:grid-cols-[64px_1fr] md:gap-9"
                          >
                            <div className="flex justify-center pt-1">
                              <div className={`h-3.5 w-3.5 rounded-full ${isMountain ? 'bg-[#c9a24b] shadow-[0_0_20px_rgba(201,162,75,0.5)]' : 'bg-[#3d9ca8] shadow-[0_0_20px_rgba(61,156,168,0.5)]'}`} />
                            </div>
                            <div>
                              <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#6b5e52]">{u('step')} {globalIndex + 1}</p>
                              <h3 className="mb-1 font-serif text-lg font-semibold text-[#f4ede0]">{t(act.title)}</h3>
                              <p className={`mb-3 text-[10px] uppercase tracking-[0.2em] ${isMountain ? 'text-[#c9a24b]/60' : 'text-[#3d9ca8]/60'}`}>{t(act.location)}</p>
                              <p className="font-serif text-base leading-relaxed text-[#ede0c8]/75">{t(act.description)}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            // Standard single-zone layout
            <div className="relative">
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
                      <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#6b5e52]">{u('act')} {i + 1}</p>
                      <h3 className="mb-1 font-serif text-lg font-semibold text-[#f4ede0]">{t(act.title)}</h3>
                      <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#c9a24b]/60">{t(act.location)}</p>
                      <p className="font-serif text-base leading-relaxed text-[#ede0c8]/75">{t(act.description)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">
          {u('whatMakesUnique')}
          <span className="block h-px w-14 bg-[#c9a24b]/40" />
        </p>
        <h2 className="mb-12 font-serif text-2xl font-semibold text-[#f4ede0]">{u('moreThan')}</h2>

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
          {u('practicalInfo')}
          <span className="block h-px w-14 bg-[#c9a24b]/40" />
        </p>
        <h2 className="mb-12 font-serif text-2xl font-semibold text-[#f4ede0]">{u('everythingToKnow')}</h2>

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
        <h2 className="mb-8 text-center font-serif text-2xl font-semibold text-[#f4ede0]">{u('pricingTitle')}</h2>
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
                {tier.phones} {tier.phones === 1 ? u('phone') : u('phones')}
              </p>
              <p className="text-3xl font-bold text-[#f4ede0]">
                {tier.price}<span className="text-base text-[#6b5e52]">€</span>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[10px] tracking-wide text-[#6b5e52]">
          {u('pricingNote')}
        </p>
      </section>

      {/* WARNING */}
      {game.warning && (
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="flex gap-4 border border-[#c9a24b]/20 border-l-[3px] border-l-[#c9a24b] bg-[#7a3012]/10 p-5">
            <span className="flex-shrink-0 text-xl">{game.warning.icon}</span>
            <div>
              <p className="mb-1 font-serif text-sm font-semibold tracking-[0.1em] text-[#c9a24b]">{t(game.warning.title)}</p>
              <p className="font-serif text-sm leading-relaxed text-[#ede0c8]/80">{t(game.warning.body)}</p>
            </div>
          </div>
        </section>
      )}

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

          <a
            href={`/${locale}/book`}
            className="mt-10 inline-block bg-[#c9a24b] px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] text-[#0d0a07] transition-all hover:bg-[#e8c97a] hover:shadow-[0_0_40px_rgba(201,162,75,0.3)]"
          >
            {u('bookAdventure')}
          </a>

          <div className="mt-8">
            <Button variant="ghost" size="sm" asChild className="text-[#c9a24b]/50 hover:text-[#c9a24b]">
              <Link href="/escape-game">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {u('backToAll')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
