'use client';

import { useLocale } from 'next-intl';
import { Compass, CalendarDays, Zap } from 'lucide-react';

type Loc = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'it';

const COPY: Record<Loc, {
  title: string;
  subtitle: string;
  steps: { title: string; description: string }[];
}> = {
  en: {
    title: 'How it works',
    subtitle: 'Three simple steps to the best of Tenerife',
    steps: [
      { title: 'Discover', description: "Browse the island's best tours, activities and self-guided escape games, all in one place." },
      { title: 'Book', description: 'Book in a few taps — via GetYourGuide for tours, or get an instant code for an escape game.' },
      { title: 'Enjoy', description: 'Show up and enjoy. No stress, just the best things to do in Tenerife.' },
    ],
  },
  es: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos sencillos hacia lo mejor de Tenerife',
    steps: [
      { title: 'Descubre', description: 'Explora los mejores tours, actividades y escape games autoguiados de la isla, todo en un sitio.' },
      { title: 'Reserva', description: 'Reserva en unos toques — vía GetYourGuide para tours, o recibe un código al instante para un escape game.' },
      { title: 'Disfruta', description: 'Preséntate y disfruta. Sin estrés, solo lo mejor que hacer en Tenerife.' },
    ],
  },
  fr: {
    title: 'Comment ça marche',
    subtitle: 'Trois étapes simples vers le meilleur de Tenerife',
    steps: [
      { title: 'Découvrir', description: "Parcourez les meilleures excursions, activités et escape games autoguidés de l'île, au même endroit." },
      { title: 'Réserver', description: 'Réservez en quelques clics — via GetYourGuide pour les excursions, ou recevez un code immédiat pour un escape game.' },
      { title: 'Profiter', description: 'Présentez-vous et profitez. Sans stress, juste le meilleur à faire à Tenerife.' },
    ],
  },
  de: {
    title: 'So funktioniert es',
    subtitle: 'In drei einfachen Schritten zum Besten von Teneriffa',
    steps: [
      { title: 'Entdecken', description: 'Durchstöbere die besten Touren, Aktivitäten und selbstgeführten Escape Games der Insel – alles an einem Ort.' },
      { title: 'Buchen', description: 'Buche in wenigen Taps — über GetYourGuide für Touren oder mit Sofort-Code für ein Escape Game.' },
      { title: 'Genießen', description: 'Hinkommen und genießen. Ohne Stress, einfach das Beste auf Teneriffa.' },
    ],
  },
  nl: {
    title: 'Hoe het werkt',
    subtitle: 'Drie simpele stappen naar het beste van Tenerife',
    steps: [
      { title: 'Ontdek', description: 'Blader door de beste tours, activiteiten en zelfgeleide escape games van het eiland, op één plek.' },
      { title: 'Boek', description: 'Boek in een paar tikken — via GetYourGuide voor tours, of ontvang direct een code voor een escape game.' },
      { title: 'Geniet', description: 'Kom langs en geniet. Geen stress, gewoon het beste om te doen op Tenerife.' },
    ],
  },
  it: {
    title: 'Come funziona',
    subtitle: 'Tre semplici passi verso il meglio di Tenerife',
    steps: [
      { title: 'Scopri', description: 'Esplora i migliori tour, attività ed escape games autoguidati dell’isola, tutto in un posto.' },
      { title: 'Prenota', description: 'Prenota in pochi tocchi — via GetYourGuide per i tour, o ricevi un codice immediato per un escape game.' },
      { title: 'Divertiti', description: 'Presentati e divertiti. Senza stress, solo il meglio da fare a Tenerife.' },
    ],
  },
};

const META = [
  { number: '01', icon: Compass, color: '#00d4ff' },
  { number: '02', icon: CalendarDays, color: '#8b5cf6' },
  { number: '03', icon: Zap, color: '#ff6b00' },
];

export default function HowItWorks() {
  const locale = (useLocale() as Loc) ?? 'en';
  const c = COPY[locale] ?? COPY.en;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="neon-glow mb-4 text-4xl font-bold text-white md:text-5xl">{c.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-[#00d4ff]/30 via-[#8b5cf6]/30 to-[#ff6b00]/30 md:block" />
          <div className="absolute left-0 right-0 top-16 hidden h-px shadow-[0_0_8px_rgba(0,212,255,0.3)] md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {c.steps.map((step, i) => {
              const meta = META[i];
              const Icon = meta.icon;
              return (
                <div key={meta.number} className="relative flex flex-col items-center text-center">
                  <div
                    className="relative z-10 mb-6 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 bg-[#0a0a0f]"
                    style={{
                      borderColor: `${meta.color}40`,
                      boxShadow: `0 0 20px ${meta.color}15, 0 0 40px ${meta.color}08, inset 0 0 20px ${meta.color}05`,
                    }}
                  >
                    <span className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: meta.color }}>
                      Step {meta.number}
                    </span>
                    <Icon size={36} style={{ color: meta.color }} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
