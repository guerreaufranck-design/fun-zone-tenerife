'use client';

import { useLocale } from 'next-intl';
import { activities } from '@/data/activities';

// Curated, unambiguous GetYourGuide picks shown at the foot of every article.
// Monetizes blog traffic without editing each post. rel="sponsored" per Google
// affiliate-link guidance.
const PICKS = ['teide-cable-car-tour', 'siam-park-tickets', 'jet-ski-tenerife', 'loro-parque-tickets'];

const HEADINGS: Record<string, { title: string; note: string }> = {
  en: { title: 'Popular things to do in Tenerife', note: 'Booked via GetYourGuide (affiliate links)' },
  es: { title: 'Qué hacer en Tenerife', note: 'Reservas vía GetYourGuide (enlaces de afiliado)' },
  fr: { title: 'À faire à Tenerife', note: 'Réservation via GetYourGuide (liens affiliés)' },
  de: { title: 'Beliebte Aktivitäten auf Teneriffa', note: 'Buchung über GetYourGuide (Affiliate-Links)' },
  nl: { title: 'Populaire activiteiten op Tenerife', note: 'Geboekt via GetYourGuide (affiliate links)' },
  it: { title: 'Cosa fare a Tenerife', note: 'Prenotazioni via GetYourGuide (link di affiliazione)' },
};

export default function RelatedActivities() {
  const locale = useLocale();
  const h = HEADINGS[locale] ?? HEADINGS.en;
  const picks = PICKS.map((slug) => activities.find((a) => a.slug === slug)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a)
  );
  if (picks.length === 0) return null;

  return (
    <section className="mx-auto mt-16 max-w-3xl border-t border-border/40 pt-10">
      <h2 className="text-xl font-bold text-white">{h.title}</h2>
      <p className="mt-1 text-xs text-muted-foreground">{h.note}</p>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {picks.map((a) => (
          <a
            key={a.slug}
            href={a.bookUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="group rounded-xl border border-border/50 bg-[#111118] p-4 transition-all hover:border-[#00d4ff]/30"
          >
            <p className="text-xs font-medium text-[#00d4ff]">{a.location}</p>
            <h3 className="mt-1 text-sm font-bold leading-snug text-white group-hover:text-[#00d4ff]">
              {a.name}
            </h3>
            <span className="mt-2 inline-block text-xs font-semibold text-muted-foreground">
              GetYourGuide →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
