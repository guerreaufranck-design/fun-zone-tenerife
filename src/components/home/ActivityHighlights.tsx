'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight, Headphones, Star } from 'lucide-react';
import { activities, type Activity } from '@/data/activities';
import { withGygCampaign } from '@/lib/gyg';

type Loc = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'it';

// Curated island must-dos shown on the homepage (GetYourGuide affiliate).
const HIGHLIGHT_SLUGS = [
  'teide-cable-car-tour',
  'whale-watching-tenerife',
  'siam-park-tickets',
  'catamaran-sunset-cruise-tenerife',
  'loro-parque-tickets',
  'los-gigantes-boat-trip',
  'jet-ski-tenerife',
  'teide-stargazing-tour',
];

const COPY: Record<Loc, { title: string; subtitle: string; seeAll: string; seePrice: string; affiliate: string; audioTitle: string; audioText: string; audioCta: string }> = {
  en: { title: 'Popular things to do in Tenerife', subtitle: 'Hand-picked tours and experiences, booked through GetYourGuide.', seeAll: 'See all activities', seePrice: 'See the price', affiliate: 'Booked via GetYourGuide (affiliate)', audioTitle: 'Explore with the Canary Islands audio guide', audioText: 'Discover Tenerife at your own pace — stories and routes on your phone.', audioCta: 'Discover the audio guide' },
  es: { title: 'Qué hacer en Tenerife', subtitle: 'Tours y experiencias seleccionados, reservados con GetYourGuide.', seeAll: 'Ver todas las actividades', seePrice: 'Ver el precio', affiliate: 'Reservas vía GetYourGuide (afiliado)', audioTitle: 'Explora con la audioguía de Canarias', audioText: 'Descubre Tenerife a tu ritmo — historias y rutas en tu móvil.', audioCta: 'Descubrir la audioguía' },
  fr: { title: 'À faire à Tenerife', subtitle: 'Des excursions et expériences sélectionnées, réservées via GetYourGuide.', seeAll: 'Voir toutes les activités', seePrice: 'Voir le prix', affiliate: 'Réservation via GetYourGuide (affilié)', audioTitle: 'Explorez avec l\'audioguide des Canaries', audioText: 'Découvrez Tenerife à votre rythme — histoires et itinéraires sur votre téléphone.', audioCta: 'Découvrir l\'audioguide' },
  de: { title: 'Beliebte Aktivitäten auf Teneriffa', subtitle: 'Handverlesene Touren und Erlebnisse, gebucht über GetYourGuide.', seeAll: 'Alle Aktivitäten ansehen', seePrice: 'Preis ansehen', affiliate: 'Buchung über GetYourGuide (Affiliate)', audioTitle: 'Entdecke mit dem Kanaren-Audioguide', audioText: 'Erlebe Teneriffa in deinem Tempo — Geschichten und Routen auf dem Handy.', audioCta: 'Audioguide entdecken' },
  nl: { title: 'Populaire activiteiten op Tenerife', subtitle: 'Zorgvuldig gekozen tours en ervaringen, geboekt via GetYourGuide.', seeAll: 'Alle activiteiten bekijken', seePrice: 'Prijs bekijken', affiliate: 'Geboekt via GetYourGuide (affiliate)', audioTitle: 'Ontdek met de audiogids van de Canarische Eilanden', audioText: 'Ontdek Tenerife in je eigen tempo — verhalen en routes op je telefoon.', audioCta: 'Ontdek de audiogids' },
  it: { title: 'Cosa fare a Tenerife', subtitle: 'Tour ed esperienze selezionati, prenotati tramite GetYourGuide.', seeAll: 'Vedi tutte le attività', seePrice: 'Vedi il prezzo', affiliate: 'Prenotazioni via GetYourGuide (affiliato)', audioTitle: 'Esplora con l\'audioguida delle Canarie', audioText: 'Scopri Tenerife al tuo ritmo — storie e itinerari sul telefono.', audioCta: 'Scopri l\'audioguida' },
};

export default function ActivityHighlights() {
  const locale = (useLocale() as Loc) ?? 'en';
  const c = COPY[locale] ?? COPY.en;

  const picks = HIGHLIGHT_SLUGS
    .map((slug) => activities.find((a) => a.slug === slug))
    .filter((a): a is Activity => Boolean(a));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{c.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{c.subtitle}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {picks.map((a) => (
          <a
            key={a.slug}
            href={withGygCampaign(a.bookUrl, 'funzone-home')}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="group overflow-hidden rounded-2xl border border-border/50 bg-[#111118] transition-all hover:border-[#00d4ff]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
          >
            <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${a.gradient}`}>
              {a.image ? (
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-5xl">{a.emoji}</div>
              )}
            </div>
            <div className="p-4">
              <p className="text-xs font-medium text-[#00d4ff]">{a.location}</p>
              <h3 className="mt-1 text-sm font-bold leading-snug text-white group-hover:text-[#00d4ff]">{a.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-white/90">{a.isFunZone ? a.price : c.seePrice}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground group-hover:text-[#00d4ff]">
                  GetYourGuide <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Link
          href="/activities"
          className="inline-flex items-center gap-2 rounded-xl border border-[#00d4ff]/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#00d4ff] transition-all hover:bg-[#00d4ff]/10"
        >
          {c.seeAll} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <p className="mt-3 flex items-center justify-center gap-1 text-[11px] text-muted-foreground/70">
        <Star className="h-3 w-3" /> {c.affiliate}
      </p>

      {/* Audio guide (Lume) feature band */}
      <div className="mt-14 overflow-hidden rounded-2xl border border-[#39ff14]/20 bg-gradient-to-br from-[#39ff14]/5 to-[#111118] p-6 sm:p-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#39ff14]/10 text-[#39ff14]">
            <Headphones className="h-7 w-7" />
          </span>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{c.audioTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.audioText}</p>
          </div>
          <Link
            href="/audio-guide-canaries"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#39ff14] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0a0a0f] transition-all hover:bg-[#5cff44]"
          >
            {c.audioCta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
