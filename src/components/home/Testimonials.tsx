'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'James R.',
    source: 'Google',
    rating: 5,
    text: 'Absolutely incredible experience! The digital targets are next level and the staff were super friendly. Best activity we did in Tenerife!',
  },
  {
    name: 'Sophie M.',
    source: 'TripAdvisor',
    rating: 5,
    text: 'We came for my hen party and had the time of our lives. The ninja stars were so much fun. Already planning to come back!',
  },
  {
    name: 'Carlos D.',
    source: 'Google',
    rating: 5,
    text: 'Went with my family for a birthday celebration. The kids loved it and the coaches made everyone feel safe and confident. Amazing venue!',
  },
  {
    name: 'Emma L.',
    source: 'TripAdvisor',
    rating: 5,
    text: 'The premium 2-hour experience was worth every penny. So many different games and the competition mode was hilarious. 10/10!',
  },
  {
    name: 'Thomas W.',
    source: 'Google',
    rating: 5,
    text: 'Used it for our team building event - 15 colleagues had a blast. The setup is professional and the atmosphere is electric. Highly recommend!',
  },
  {
    name: 'Lucia G.',
    source: 'Google',
    rating: 4,
    text: 'Such a unique experience in Tenerife. The venue has an awesome vibe and the interactive scoring system makes it really competitive and fun.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-[#ff6b00] text-[#ff6b00]' : 'text-border'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPos += 0.5;
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0a0f] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="neon-glow mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Scrolling testimonials */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-hidden py-4"
      >
        {/* Duplicate the list for infinite scroll effect */}
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <Card
            key={`${testimonial.name}-${i}`}
            className="min-w-[320px] max-w-[380px] shrink-0 border-border/30 bg-[#111118] transition-all duration-300 hover:border-[#00d4ff]/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)]"
          >
            <CardContent className="flex h-full flex-col p-6">
              {/* Quote icon */}
              <Quote size={24} className="mb-3 text-[#00d4ff]/20" />

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Quote text */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-4 flex items-center justify-between border-t border-border/30 pt-4">
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                </div>
                <span className="rounded-full bg-[#1a1a2e] px-2.5 py-0.5 text-xs text-muted-foreground">
                  {testimonial.source}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
    </section>
  );
}
