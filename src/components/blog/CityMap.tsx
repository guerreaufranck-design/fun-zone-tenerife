/**
 * A lightweight Google Maps embed for a town, used in the city blog guides.
 * Uses the key-less Maps embed endpoint (q=<place>&output=embed), so there is
 * no API key, no cost and no tracking setup. The heading + place name also give
 * Google a strong, human-readable local-relevance signal for the town.
 */
const HEADING: Record<string, string> = {
  en: 'Where is',
  es: 'Dónde está',
  fr: 'Où se trouve',
  de: 'Wo liegt',
  nl: 'Waar ligt',
  it: 'Dove si trova',
};

export default function CityMap({
  name,
  lat,
  lng,
  locale = 'en',
}: {
  name: string;
  lat: number;
  lng: number;
  locale?: string;
}) {
  const q = encodeURIComponent(`${name}, Tenerife`);
  const src = `https://www.google.com/maps?q=${q}&ll=${lat},${lng}&z=13&output=embed`;
  const heading = `${HEADING[locale] ?? HEADING.en} ${name}?`;

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-bold text-white">{heading}</h2>
      <div className="overflow-hidden rounded-2xl border border-border/50">
        <iframe
          title={`Map of ${name}, Tenerife`}
          src={src}
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, display: 'block' }}
        />
      </div>
    </section>
  );
}
