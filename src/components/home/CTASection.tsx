'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Users, Map as MapIcon } from 'lucide-react';

type Loc = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'it';

const COPY: Record<Loc, { title: string; subtitle: string; cta: string; groups: string; escape: string }> = {
  en: { title: 'Ready to explore Tenerife?', subtitle: "Find and book the island's best activities, tours and escape games in minutes.", cta: 'See activities', groups: 'Groups & parties', escape: 'Escape games' },
  es: { title: '¿Listo para descubrir Tenerife?', subtitle: 'Encuentra y reserva las mejores actividades, tours y escape games de la isla en minutos.', cta: 'Ver actividades', groups: 'Grupos y despedidas', escape: 'Escape games' },
  fr: { title: 'Prêt à explorer Tenerife ?', subtitle: "Trouvez et réservez les meilleures activités, excursions et escape games de l'île en quelques minutes.", cta: 'Voir les activités', groups: 'Groupes & EVJF/EVG', escape: 'Escape games' },
  de: { title: 'Bereit, Teneriffa zu entdecken?', subtitle: 'Finde und buche die besten Aktivitäten, Touren und Escape Games der Insel in Minuten.', cta: 'Aktivitäten ansehen', groups: 'Gruppen & JGA', escape: 'Escape Games' },
  nl: { title: 'Klaar om Tenerife te ontdekken?', subtitle: 'Vind en boek de beste activiteiten, tours en escape games van het eiland in minuten.', cta: 'Bekijk activiteiten', groups: 'Groepen & feesten', escape: 'Escape games' },
  it: { title: 'Pronto a esplorare Tenerife?', subtitle: 'Trova e prenota le migliori attività, tour ed escape games dell’isola in pochi minuti.', cta: 'Vedi le attività', groups: 'Gruppi e addii', escape: 'Escape games' },
};

export default function CTASection() {
  const locale = (useLocale() as Loc) ?? 'en';
  const c = COPY[locale] ?? COPY.en;

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#8b5cf6]/10 to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[#0a0a0f]/60" />
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-[#00d4ff]/5 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#8b5cf6]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl py-20 text-center sm:py-24">
        <h2 className="neon-glow mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{c.title}</h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">{c.subtitle}</p>

        <div className="mb-8">
          <Button variant="neon" size="xl" asChild>
            <Link href="/activities">{c.cta}</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/celebrations"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#00d4ff]"
          >
            <Users size={16} className="transition-colors group-hover:text-[#00d4ff]" />
            {c.groups}
          </Link>
          <span className="text-border">|</span>
          <Link
            href="/escape-game"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#ff2d7b]"
          >
            <MapIcon size={16} className="transition-colors group-hover:text-[#ff2d7b]" />
            {c.escape}
          </Link>
        </div>
      </div>
    </section>
  );
}
