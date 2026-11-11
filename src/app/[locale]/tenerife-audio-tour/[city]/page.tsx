import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Headphones, MapPin, Clock, Wifi, Compass, Lock, ChevronRight, Globe } from 'lucide-react';
import { locales, type Locale } from '@/lib/seo';
import AudioTourPurchase from '@/components/product/AudioTourPurchase';
import AudioTourStickyBar from '@/components/product/AudioTourStickyBar';
import { AUDIO_TOUR_PRICE, TOUR_LANGUAGES, CITY_META, getCityMeta, getUi } from '@/lib/audio-tour';
import { getCityCopy } from '@/data/audio-tour-content';

const BASE = 'https://funzonetenerife.com';
const BENEFIT_ICONS = [Clock, Headphones, Wifi, MapPin];

function pathFor(slug: string) {
  return `/tenerife-audio-tour/${slug}`;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_META.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city } = await params;
  const copy = getCityCopy(city, locale);
  if (!copy) return {};

  const path = pathFor(city);
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${BASE}/${l}${path}`;
  languages['x-default'] = `${BASE}/en${path}`;

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: copy.keywords,
    alternates: { canonical: `${BASE}/${locale}${path}`, languages },
    openGraph: {
      title: copy.ogTitle,
      description: copy.ogDescription,
      url: `${BASE}/${locale}${path}`,
      type: 'website',
      images: [{ url: `${BASE}/images/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function CityAudioTourPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  setRequestLocale(locale);

  const meta = getCityMeta(city);
  const copy = getCityCopy(city, locale);
  if (!meta || !copy) notFound();

  const ui = getUi(locale);
  const name = meta.displayName;
  const path = pathFor(city);
  const pageUrl = `${BASE}/${locale}${path}`;

  const purchaseLabels = {
    cityPassTag: ui.cityPassTag,
    heading: `${name}: ${ui.audioTourSuffix}`,
    validity: ui.validity,
    perCode: ui.perCode,
    tourLanguageLabel: ui.tourLanguageLabel,
    tourLanguageHint: ui.tourLanguageHint,
    numberOfCodesLabel: ui.numberOfCodesLabel,
    oneCodeHint: ui.oneCodeHint,
    buyLabel: ui.buyLabel,
    pendingNote: ui.pendingNote,
    deliveryNote: ui.deliveryNote,
    lessCodesAria: ui.lessCodesAria,
    moreCodesAria: ui.moreCodesAria,
  };

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: `${name} Self-Guided Audio Tour`,
      description: copy.metaDescription,
      url: pageUrl,
      image: `${BASE}/images/og-image.jpg`,
      touristType: ['Independent travellers', 'Culture', 'History'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: name,
        addressRegion: 'Canary Islands',
        addressCountry: 'ES',
      },
      geo: { '@type': 'GeoCoordinates', latitude: meta.geo.latitude, longitude: meta.geo.longitude },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${name} Audio Tour, City Pass`,
      description: copy.metaDescription,
      category: 'Self-guided audio tour',
      brand: { '@type': 'Brand', name: 'Fun Zone Tenerife' },
      offers: {
        '@type': 'Offer',
        price: String(AUDIO_TOUR_PRICE),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: pageUrl,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: ui.breadcrumbHome, item: `${BASE}/${locale}` },
        { '@type': 'ListItem', position: 2, name: 'Tenerife Audio Tours', item: `${BASE}/${locale}/tenerife-audio-tour` },
        { '@type': 'ListItem', position: 3, name, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="px-4 pt-24 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="mx-auto flex max-w-4xl flex-wrap items-center gap-1 text-xs text-white/40">
          <li><Link href="/" className="hover:text-[#00d4ff]">{ui.breadcrumbHome}</Link></li>
          <li><ChevronRight size={12} /></li>
          <li>{ui.breadcrumbRegion}</li>
          <li><ChevronRight size={12} /></li>
          <li className="text-white/70">{name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-1/4 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#00d4ff]/5 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff]">
            <Headphones size={14} /> {ui.badge}
          </span>
          <h1 className="neon-glow-blue mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {name}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {copy.heroIntro}
          </p>
        </div>
      </section>

      {/* The version the postcards leave out */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-[#00d4ff]">{copy.postcardHeading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-white/70">
            {copy.postcardIntro}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {copy.secrets.map((s) => (
              <div key={s.place} className="rounded-xl border border-border/50 bg-[#111118] p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <MapPin size={15} className="text-[#00d4ff]" /> {s.place}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.teaser}</p>
                <p className="mt-3 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#00d4ff]/70">
                  <Lock size={11} /> {ui.secretLockLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery (Wikimedia Commons, credited) */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-3">
          {meta.photos.map((p) => (
            <figure key={p.src} className="group relative overflow-hidden rounded-xl border border-border/50">
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.src}
                  alt={`${p.label}, ${name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-[10px] text-white/60">
                {p.credit}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Purchase */}
      <section id="buy" className="scroll-mt-24 px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <AudioTourPurchase city={name} citySlug={city} locale={locale} labels={purchaseLabels} />
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-[#00d4ff]">{ui.howHeading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/70">
            {ui.howIntro}
          </p>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {ui.benefits.map((text, i) => {
              const Icon = BENEFIT_ICONS[i] ?? Clock;
              return (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-border/50 bg-[#111118] p-4 text-sm text-white/85">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
                    <Icon size={16} />
                  </span>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* The story */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white">{copy.storyTitle}</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/75">
              {copy.storyIntro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {copy.storyBlocks.map((block) => (
            <div key={block.heading}>
              <h3 className="text-lg font-bold text-[#00d4ff]">{block.heading}</h3>
              <div className="mt-3 space-y-4 text-sm leading-relaxed text-white/75">
                {block.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
            <MapPin size={20} className="text-[#00d4ff]" /> {copy.mapHeading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{copy.mapIntro}</p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-border/50">
            <iframe
              title={`Map of ${name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(meta.mapQuery)}&z=12&output=embed`}
              width="100%"
              height="340"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Bonus anecdotes */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#8b5cf6]/20 bg-gradient-to-br from-[#8b5cf6]/5 to-[#111118] p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white">
            <Compass size={18} className="text-[#8b5cf6]" /> {copy.bonusHeading}
          </h2>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/75">
            {copy.bonus.map((b) => (
              <li key={b.lead}>
                <strong className="text-white">{b.lead}</strong> {b.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Available in 32 languages */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-bold text-[#00d4ff]">
            <Globe size={20} /> {copy.langHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/70">
            {ui.langIntro}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {TOUR_LANGUAGES.map((l) => (
              <span key={l.code} className="rounded-full border border-border/50 bg-[#111118] px-3 py-1 text-xs text-white/60">
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-white">{copy.ctaHeading}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">{copy.ctaIntro}</p>
          <div className="mt-6">
            <AudioTourPurchase city={name} citySlug={city} locale={locale} labels={purchaseLabels} />
          </div>
        </div>
      </section>

      <AudioTourStickyBar
        city={name}
        labels={{
          reassure1: ui.stickyReassure1,
          reassure2: ui.stickyReassure2,
          onePrice: ui.stickyOnePrice,
          cta: ui.stickyCta,
        }}
      />
    </div>
  );
}
