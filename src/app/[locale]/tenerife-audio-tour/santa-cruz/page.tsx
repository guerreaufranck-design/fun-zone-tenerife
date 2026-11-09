import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { Headphones, MapPin, Clock, Wifi, Compass, Lock, ChevronRight, Globe } from 'lucide-react';
import { type Locale } from '@/lib/seo';
import AudioTourPurchase from '@/components/product/AudioTourPurchase';
import { AUDIO_TOUR_PRICE, TOUR_LANGUAGES } from '@/lib/audio-tour';

const BASE = 'https://funzonetenerife.com';
const PATH = '/tenerife-audio-tour/santa-cruz';
const LOCALES: Locale[] = ['en', 'es', 'fr', 'de', 'nl', 'it'];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${BASE}/${l}${PATH}`;
  languages['x-default'] = `${BASE}/en${PATH}`;

  return {
    title: 'Santa Cruz de Tenerife Audio Tour | Self-Guided Walk',
    description:
      'A self-guided GPS audio tour of Santa Cruz de Tenerife. Walk the capital at your own pace with native-voice stories in 32 languages, offline and with an AR guide.',
    keywords:
      'santa cruz de tenerife audio tour, self-guided tour santa cruz, things to do santa cruz tenerife, santa cruz walking tour, audio guide tenerife',
    alternates: { canonical: `${BASE}/${locale}${PATH}`, languages },
    openGraph: {
      title: 'Santa Cruz de Tenerife Audio Tour | Fun Zone Tenerife',
      description:
        'Walk Santa Cruz de Tenerife at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      url: `${BASE}/${locale}${PATH}`,
      type: 'website',
      images: [{ url: `${BASE}/images/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

const secrets = [
  {
    place: 'Plaza de España',
    teaser:
      'The largest square in the Canary Islands hides a sunken secret beneath the water: the buried bones of a fortress that once decided who reached the city and who did not.',
  },
  {
    place: 'Playa de Las Teresitas',
    teaser:
      'That postcard-perfect golden sand is not local at all. It crossed the sea by the shipload from another continent entirely, and the reason why says a lot about this city.',
  },
  {
    place: 'Auditorio de Tenerife',
    teaser:
      'The great white wave on the waterfront seems to change shape as you move around it. Stand in the right spot and it stops being a building and becomes something else.',
  },
];

const benefits = [
  { icon: Clock, text: 'Start any time, any day. No fixed slot, no guide to meet, no queue.' },
  { icon: Headphones, text: 'Native-voice narration in your language, one story unlocking at each stop.' },
  { icon: Wifi, text: 'Download it once and it works fully offline, no roaming, no dead zones.' },
  { icon: MapPin, text: 'A GPS route plus an augmented-reality arrow so you never take a wrong turn.' },
];

export default async function SantaCruzAudioTourPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageUrl = `${BASE}/${locale}${PATH}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: 'Santa Cruz de Tenerife Self-Guided Audio Tour',
      description:
        'A self-guided GPS walking audio tour of Santa Cruz de Tenerife, the capital of Tenerife, with native-voice stories in 32 languages, offline playback and an augmented-reality guide.',
      url: pageUrl,
      image: `${BASE}/images/og-image.jpg`,
      touristType: ['Independent travellers', 'Culture', 'History'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santa Cruz de Tenerife',
        addressRegion: 'Canary Islands',
        addressCountry: 'ES',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 28.4636, longitude: -16.2518 },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Santa Cruz de Tenerife Audio Tour, City Pass',
      description:
        'Self-guided audio walking tour of Santa Cruz de Tenerife. One activation code per person, valid one day, narrated in your choice of 32 languages.',
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/${locale}` },
        { '@type': 'ListItem', position: 2, name: 'Tenerife Audio Tours', item: `${BASE}/${locale}/tenerife-audio-tour` },
        { '@type': 'ListItem', position: 3, name: 'Santa Cruz de Tenerife', item: pageUrl },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="px-4 pt-24 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="mx-auto flex max-w-4xl flex-wrap items-center gap-1 text-xs text-white/40">
          <li><Link href="/" className="hover:text-[#00d4ff]">Home</Link></li>
          <li><ChevronRight size={12} /></li>
          <li>Tenerife</li>
          <li><ChevronRight size={12} /></li>
          <li className="text-white/70">Santa Cruz de Tenerife</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-1/4 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#00d4ff]/5 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff]">
            <Headphones size={14} /> Tenerife
          </span>
          <h1 className="neon-glow-blue mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Santa Cruz de Tenerife
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            A self-guided GPS audio walk through the island&apos;s capital. Volcanic drama, Atlantic trade and quiet corners the cruise crowds never reach, told in your ear right where it all happened.
          </p>
        </div>
      </section>

      {/* The version the postcards leave out */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-[#00d4ff]">Santa Cruz, the version the postcards leave out</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-white/70">
            Not the glossy shots. The stories even locals walk past without knowing, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {secrets.map((s) => (
              <div key={s.place} className="rounded-xl border border-border/50 bg-[#111118] p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <MapPin size={15} className="text-[#00d4ff]" /> {s.place}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.teaser}</p>
                <p className="mt-3 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#00d4ff]/70">
                  <Lock size={11} /> Full story unlocks in the tour
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <AudioTourPurchase city="Santa Cruz de Tenerife" citySlug="santa-cruz-de-tenerife" />
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-[#00d4ff]">Point your phone, follow the arrow, never get lost</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/70">
            The tour carries an augmented-reality guide. Lift your phone and the camera shows the street ahead with a glowing arrow laid over the real view, always pointing to your next stop. No map to decode, no wrong turns, and like everything here it runs completely offline once you have downloaded it.
          </p>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-border/50 bg-[#111118] p-4 text-sm text-white/85">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
                    <Icon size={16} />
                  </span>
                  {b.text}
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
            <h2 className="text-2xl font-bold text-white">The story of Santa Cruz de Tenerife</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/75">
              <p>
                Santa Cruz is the working heart of Tenerife, a port city on the north-east coast where cruise liners, container ships and ferries have docked for centuries. While the south of the island built itself around sun loungers and resorts, the capital grew up around trade, and it shows. Colonial façades sit next to bold modern design, and almost everything worth seeing is close enough to reach on foot.
              </p>
              <p>
                It began in 1494, when the Castilian conqueror Alonso Fernández de Lugo came ashore and planted a silver cross on the beach. That cross gave the place its name, Santa Cruz, the holy cross. For a long time it was only a landing stage serving the real capital inland, San Cristóbal de La Laguna, up in the cooler hills.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00d4ff]">From a landing stage to the capital</h3>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-white/75">
              <p>
                Everything changed in 1706. A volcanic eruption swallowed the harbour of Garachico, until then the island&apos;s busiest port, and the sea traffic moved south to Santa Cruz almost overnight. By 1723 it was the island&apos;s leading town, and in 1833 it was named capital of the whole Canary archipelago, a title it held alone until it began to share the honour with Las Palmas de Gran Canaria in 1927.
              </p>
              <p>
                The city also earned a strange footnote in British naval history. In 1797 Admiral Horatio Nelson led an assault on the port and failed badly, losing his right arm to a cannon shot in the process. Santa Cruz still marks the victory every year, and the defence of the city remains a point of local pride. For a lighter kind of fame, its February Carnival is one of the largest on earth, rivalled only by Rio de Janeiro.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00d4ff]">What to look out for</h3>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-white/75">
              <p>
                Start at Plaza de España, the vast seafront square with its circular lake, and remember the sixteenth-century castle of San Cristóbal lies beneath your feet. A short walk away, the Auditorio de Tenerife rises like a frozen wave, the work of architect Santiago Calatrava and now a symbol of the island itself.
              </p>
              <p>
                For green and quiet, Parque García Sanabria is the largest city park in the Canaries, full of sculpture, exotic planting and a famous floral clock. History lovers should find the MUNA museum, where the mummies of the Guanches, the island&apos;s indigenous people, are kept, while the TEA arts centre handles the contemporary side. End at the Mercado de Nuestra Señora de África for local food, or drive out to Playa de Las Teresitas when you want the beach.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00d4ff]">When to go</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              The capital is warm and subtropical all year. For comfortable walking with little rain, aim for March to May or September to November. If you want the spectacle, come for Carnival in February, though the streets are packed and rooms sell out months ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Bonus anecdotes */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#8b5cf6]/20 bg-gradient-to-br from-[#8b5cf6]/5 to-[#111118] p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white">
            <Compass size={18} className="text-[#8b5cf6]" /> Three things most visitors never learn
          </h2>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/75">
            <li>
              <strong className="text-white">The beach is imported.</strong> The golden sand of Las Teresitas did not wash up here. Tenerife&apos;s own beaches are black volcanic grit, so in the 1970s millions of sacks of pale sand were shipped in from the Sahara to build the postcard shoreline you see today.
            </li>
            <li>
              <strong className="text-white">A clock that was a gift.</strong> The floral clock in Parque García Sanabria keeps real time and was a present from another country, quietly ticking among the flowerbeds for decades.
            </li>
            <li>
              <strong className="text-white">Mummies in the museum.</strong> Long before the Spanish arrived, the Guanche people mummified their dead. Several of them now rest in the city&apos;s archaeology museum, a direct line back to an island culture that vanished five centuries ago.
            </li>
          </ul>
        </div>
      </section>

      {/* Available in 32 languages */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-bold text-[#00d4ff]">
            <Globe size={20} /> Santa Cruz in your language, all 32
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/70">
            Korean, Chinese, Hebrew and 29 more, every stop narrated by a native speaker. One of the widest language choices of any self-guided audio tour.
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
          <h2 className="text-2xl font-bold text-white">Get the key to Santa Cruz</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
            Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.
          </p>
          <div className="mt-6">
            <AudioTourPurchase city="Santa Cruz de Tenerife" citySlug="santa-cruz-de-tenerife" />
          </div>
        </div>
      </section>
    </div>
  );
}
