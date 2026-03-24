import { useTranslations } from 'next-intl';
import { Target, CalendarDays, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    titleKey: 'step1Title',
    descriptionKey: 'step1Description',
    icon: Target,
    color: '#00d4ff',
  },
  {
    number: '02',
    titleKey: 'step2Title',
    descriptionKey: 'step2Description',
    icon: CalendarDays,
    color: '#8b5cf6',
  },
  {
    number: '03',
    titleKey: 'step3Title',
    descriptionKey: 'step3Description',
    icon: Zap,
    color: '#ff6b00',
  },
];

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="neon-glow mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-[#00d4ff]/30 via-[#8b5cf6]/30 to-[#ff6b00]/30 md:block" />
          {/* Neon glow on the line */}
          <div className="absolute left-0 right-0 top-16 hidden h-px shadow-[0_0_8px_rgba(0,212,255,0.3)] md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  {/* Numbered circle */}
                  <div
                    className="relative z-10 mb-6 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 bg-[#0a0a0f]"
                    style={{
                      borderColor: `${step.color}40`,
                      boxShadow: `0 0 20px ${step.color}15, 0 0 40px ${step.color}08, inset 0 0 20px ${step.color}05`,
                    }}
                  >
                    <span
                      className="mb-1 text-xs font-bold uppercase tracking-widest"
                      style={{ color: step.color }}
                    >
                      Step {step.number}
                    </span>
                    <Icon size={36} style={{ color: step.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {t(step.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
