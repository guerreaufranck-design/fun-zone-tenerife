import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Axe, MapPin, Brain, Target, Users, Sun, PartyPopper, Anchor } from 'lucide-react';
import { getAlternates, type Locale } from '@/lib/seo';
import { celebrations } from '@/data/celebrations';
import { activities } from '@/data/activities';

const LOCALES: Locale[] = ['en', 'es', 'fr', 'de', 'nl', 'it'];

// GetYourGuide cross-sell picks (group/party-friendly water experiences).
const CROSS_SELL_SLUGS = [
  'catamaran-sunset-cruise-tenerife',
  'los-gigantes-boat-trip',
  'jet-ski-tenerife',
  'parasailing-tenerife',
];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (locale as Locale) in celebrations ? (locale as Locale) : 'en';
  const c = celebrations[l];
  const alternates = getAlternates('/celebrations');

  return {
    title: c.seoTitle,
    description: c.seoDescription,
    keywords: c.keywords,
    alternates: { canonical: `https://funzonetenerife.com/${l}/${c.slug}`, languages: alternates.languages },
    openGraph: {
      title: c.seoTitle,
      description: c.seoDescription,
      url: `https://funzonetenerife.com/${l}/${c.slug}`,
      siteName: 'Fun Zone Tenerife',
      locale: l,
      type: 'website',
      images: [{ url: 'https://funzonetenerife.com/images/offers/traditional-axe.jpg', width: 1200, height: 630 }],
    },
  };
}

const ACTIVITY_ICONS = [MapPin, Brain, Target];
const ACTIVITY_LINKS = ['/escape-game', '/quiz-room', '/darts'] as const;

export default async function CelebrationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = (locale as Locale) in celebrations ? (locale as Locale) : 'en';
  const c = celebrations[l];

  const crossSell = CROSS_SELL_SLUGS
    .map((slug) => activities.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0a0806] text-[#ede0c8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a24b]/30 bg-[#c9a24b]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#c9a24b]">
            <PartyPopper size={14} /> Playa Las Américas · Tenerife
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{c.h1}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#ede0c8]/80 sm:text-lg">{c.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/axe-throwing"
              className="inline-flex items-center gap-2 rounded-xl bg-[#c9a24b] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a0800] transition-all hover:bg-[#e8c97a]"
            >
              <Axe size={18} /> {c.ctaButton}
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 rounded-xl border border-[#c9a24b]/30 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#c9a24b] transition-all hover:bg-[#c9a24b]/10"
            >
              {c.crossSellTitle}
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[#ede0c8]/75">{c.intro}</p>
      </section>

      {/* WHY TENERIFE */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-bold text-[#c9a24b]">
            <Sun size={22} /> {c.whyTitle}
          </h2>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {c.why.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-[#c9a24b]/15 bg-[#12100c] p-4 text-sm text-[#ede0c8]/85">
                <span className="mt-0.5 text-[#c9a24b]">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-[#c9a24b]">{c.activitiesTitle}</h2>

          {/* Axe hero card */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#c9a24b]/30 bg-gradient-to-br from-[#1a140a] to-[#12100c] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a24b]/15 text-[#c9a24b]"><Axe size={24} /></span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a24b]">#1</span>
                <h3 className="text-xl font-bold">{c.heroActivity.name}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#ede0c8]/80">{c.heroActivity.pitch}</p>
            <Link href="/axe-throwing" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#c9a24b] hover:text-[#e8c97a]">
              {c.ctaButton} →
            </Link>
          </div>

          {/* Other activities */}
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {c.activities.map((act, i) => {
              const Icon = ACTIVITY_ICONS[i] ?? Target;
              return (
                <Link
                  key={act.name}
                  href={ACTIVITY_LINKS[i] ?? '/activities'}
                  className="group rounded-2xl border border-[#c9a24b]/15 bg-[#12100c] p-6 transition-all hover:border-[#c9a24b]/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c9a24b]/10 text-[#c9a24b]"><Icon size={20} /></span>
                  <h3 className="mt-4 font-bold text-[#ede0c8] group-hover:text-[#c9a24b]">{act.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#ede0c8]/70">{act.blurb}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CROSS-SELL (GetYourGuide) */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-bold text-[#c9a24b]">
            <Anchor size={22} /> {c.crossSellTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#ede0c8]/70">{c.crossSellIntro}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {crossSell.map((a) => (
              <a
                key={a.slug}
                href={a.bookUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="group rounded-2xl border border-[#c9a24b]/15 bg-[#12100c] p-5 transition-all hover:border-[#c9a24b]/40"
              >
                <h3 className="font-bold text-[#ede0c8] group-hover:text-[#c9a24b]">{a.name}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#ede0c8]/65">{a.description}</p>
                <span className="mt-3 inline-block text-xs font-bold text-[#c9a24b]">GetYourGuide →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#c9a24b]/30 bg-gradient-to-br from-[#1a140a] to-[#12100c] p-8 text-center sm:p-10">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-bold">
            <Users size={22} className="text-[#c9a24b]" /> {c.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#ede0c8]/80">{c.ctaText}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/axe-throwing" className="inline-flex items-center gap-2 rounded-xl bg-[#c9a24b] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a0800] transition-all hover:bg-[#e8c97a]">
              <Axe size={18} /> {c.ctaButton}
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-[#c9a24b]/30 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#c9a24b] transition-all hover:bg-[#c9a24b]/10">
              <MapPin size={16} /> {c.h1}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#c9a24b]">{c.faqTitle}</h2>
          <div className="mt-8 space-y-4">
            {c.faq.map((f) => (
              <details key={f.q} className="group rounded-xl border border-[#c9a24b]/15 bg-[#12100c] p-5">
                <summary className="cursor-pointer list-none font-bold text-[#ede0c8]">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-[#ede0c8]/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
