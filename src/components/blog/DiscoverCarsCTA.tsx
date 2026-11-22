/**
 * Discover Cars commercial CTA block, shown at the foot of every blog article
 * (maximum affiliate coverage). Localized hook + button, the Tenerife location
 * deeplink (a_aid=FUNZONETENERIFE), rel="sponsored nofollow noopener". Uses the
 * car/coast cover as a background so it reads as a polished promo, not a bare ad.
 */
const COPY: Record<string, { eyebrow: string; title: string; sub: string; cta: string }> = {
  en: {
    eyebrow: 'Car hire · DiscoverCars.com',
    title: 'Find the best car rental deal in Tenerife',
    sub: 'Compare every local supplier in one search. Free cancellation and no-deposit options.',
    cta: 'Compare car hire',
  },
  fr: {
    eyebrow: 'Location de voiture · DiscoverCars.com',
    title: 'Trouvez le meilleur tarif de location à Tenerife',
    sub: 'Comparez tous les loueurs en une recherche. Annulation gratuite et options sans caution.',
    cta: 'Comparer les loueurs',
  },
  es: {
    eyebrow: 'Alquiler de coches · DiscoverCars.com',
    title: 'Encuentra el mejor precio de alquiler en Tenerife',
    sub: 'Compara todas las compañías en una búsqueda. Cancelación gratuita y opciones sin depósito.',
    cta: 'Comparar precios',
  },
  de: {
    eyebrow: 'Mietwagen · DiscoverCars.com',
    title: 'Finde den besten Mietwagen-Preis auf Teneriffa',
    sub: 'Vergleiche alle Anbieter in einer Suche. Kostenlose Stornierung und Optionen ohne Kaution.',
    cta: 'Preise vergleichen',
  },
  nl: {
    eyebrow: 'Autohuur · DiscoverCars.com',
    title: 'Vind de beste autohuur-deal op Tenerife',
    sub: 'Vergelijk alle verhuurders in één zoekopdracht. Gratis annuleren en opties zonder borg.',
    cta: 'Vergelijk prijzen',
  },
  it: {
    eyebrow: 'Noleggio auto · DiscoverCars.com',
    title: 'Trova la migliore tariffa di noleggio a Tenerife',
    sub: 'Confronta tutti i fornitori in una ricerca. Cancellazione gratuita e opzioni senza deposito.',
    cta: 'Confronta i prezzi',
  },
};

export default function DiscoverCarsCTA({ locale = 'en' }: { locale?: string }) {
  const t = COPY[locale] ?? COPY.en;
  const href = 'https://www.discovercars.com/spain-canary-islands/tenerife?a_aid=FUNZONETENERIFE';

  return (
    <section className="my-10">
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="group relative block overflow-hidden rounded-2xl border border-[#00d4ff]/30"
        aria-label={t.title}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: "url('/images/blog/car-rental-tenerife.avif')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/85 to-[#0a0a0f]/40" aria-hidden="true" />
        <div className="relative z-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#00d4ff]">{t.eyebrow}</p>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{t.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.sub}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-[#00d4ff] px-5 py-3 font-semibold text-[#0a0a0f] transition-all group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] sm:self-auto">
            {t.cta}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">Affiliate link</p>
    </section>
  );
}
