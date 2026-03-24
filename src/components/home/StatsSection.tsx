'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isInView: boolean;
}

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2, isInView }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(0, target, {
        duration,
        ease: 'easeOut',
        onUpdate(value) {
          setDisplayValue(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { key: 'interactiveGames', value: 17, prefix: '', suffix: '+' },
  { key: 'throwingLanes', value: 4, prefix: '', suffix: '' },
  { key: 'happyThrowers', value: 5000, prefix: '', suffix: '+' },
  { key: 'averageRating', value: 4.9, prefix: '', suffix: '' },
];

export default function StatsSection() {
  const t = useTranslations('stats');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0a0f]">
      {/* Neon line top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />

      <div className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/[0.02] via-transparent to-[#00d4ff]/[0.02]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center text-center"
              >
                <div className="neon-glow mb-2 text-4xl font-bold text-[#00d4ff] sm:text-5xl md:text-6xl">
                  {stat.key === 'averageRating' ? (
                    <span>
                      {isInView ? '4.9' : '0'}
                      <span className="text-[#ff6b00]">&#9733;</span>
                    </span>
                  ) : (
                    <AnimatedCounter
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  )}
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-base">
                  {t(stat.key)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Neon line bottom */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />
    </section>
  );
}
