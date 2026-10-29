'use client';

import { useLocale } from 'next-intl';
import { activities, type Activity } from '@/data/activities';
import { withGygCampaign } from '@/lib/gyg';

// GetYourGuide cross-sell at the foot of every article, CONTEXTUAL to the
// article's topic (a whale-watching article shows sea activities, a Teide
// article shows nature activities…) so the links match buying intent. Tagged
// cmp=funzone-blog so blog conversions are measurable in the GYG dashboard.

const HEADINGS: Record<string, { title: string; note: string }> = {
  en: { title: 'Popular things to do in Tenerife', note: 'Booked via GetYourGuide (affiliate links)' },
  es: { title: 'Qué hacer en Tenerife', note: 'Reservas vía GetYourGuide (enlaces de afiliado)' },
  fr: { title: 'À faire à Tenerife', note: 'Réservation via GetYourGuide (liens affiliés)' },
  de: { title: 'Beliebte Aktivitäten auf Teneriffa', note: 'Buchung über GetYourGuide (Affiliate-Links)' },
  nl: { title: 'Populaire activiteiten op Tenerife', note: 'Geboekt via GetYourGuide (affiliate links)' },
  it: { title: 'Cosa fare a Tenerife', note: 'Prenotazioni via GetYourGuide (link di affiliazione)' },
};

const GYG = activities.filter((a) => !a.isFunZone);
const bySlug = (slugs: string[]) =>
  slugs.map((s) => GYG.find((a) => a.slug === s)).filter((a): a is Activity => Boolean(a));
const byCategory = (cat: string) => GYG.filter((a) => a.category === cat);

/** Choose up to 4 activities relevant to the article's topic. */
function pickForArticle(slug: string, category: string): Activity[] {
  const t = `${slug} ${category}`.toLowerCase();
  let pool: Activity[] = [];
  if (/whale|dolphin|boat|catamaran|\bsea\b|beach|coast|strand|strände|plage|snorkel|div(e|ing)|scuba|surf|jet.?ski|sail|gigantes|submarine|parasail|water/.test(t)) {
    pool = byCategory('Water & Sea');
  } else if (/teide|stargaz|\bstar|hik(e|ing)|wander|randonn|masca|quad|buggy|paraglid|horse|helicopter|nature|natur|volcano|volcan|vulkan|adventure|trek/.test(t)) {
    pool = byCategory('Nature & Adventure');
  } else if (/siam|loro|\bpark|family|famille|familie|kid|child|kinder|enfant|rainy|weather|teenager|teens/.test(t)) {
    pool = [...byCategory('Parks & Attractions'), ...byCategory('Water & Sea')];
  } else if (/stag|hen|despedida|evjf|\bevg\b|jga|junggesell|group|party|bachelor|squad|competitive/.test(t)) {
    pool = bySlug(['jet-ski-tenerife', 'catamaran-sunset-cruise-tenerife', 'karting-tenerife', 'parasailing-tenerife']);
  } else if (/wine|wein|flamenco|dinner|show|night|nacht|evening|abend|soir|couple|date|romantic/.test(t)) {
    pool = [...byCategory('Evenings & Shows'), ...byCategory('Water & Sea')];
  }
  if (pool.length < 4) {
    pool = [...pool, ...bySlug(['teide-cable-car-tour', 'whale-watching-tenerife', 'siam-park-tickets', 'jet-ski-tenerife'])];
  }
  // de-dupe, keep order, cap at 4
  const seen = new Set<string>();
  return pool.filter((a) => !seen.has(a.slug) && seen.add(a.slug)).slice(0, 4);
}

export default function RelatedActivities({ slug = '', category = '' }: { slug?: string; category?: string }) {
  const locale = useLocale();
  const h = HEADINGS[locale] ?? HEADINGS.en;
  const picks = pickForArticle(slug, category);
  if (picks.length === 0) return null;

  return (
    <section className="mx-auto mt-16 max-w-3xl border-t border-border/40 pt-10">
      <h2 className="text-xl font-bold text-white">{h.title}</h2>
      <p className="mt-1 text-xs text-muted-foreground">{h.note}</p>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {picks.map((a) => (
          <a
            key={a.slug}
            href={withGygCampaign(a.bookUrl, 'funzone-blog')}
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
