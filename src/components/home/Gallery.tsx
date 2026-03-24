'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const galleryImages = [
  // Row 1: large left + 2 small right
  { src: '/images/gallery/gallery-1.jpg', span: 'col-span-2 row-span-2' },
  { src: '/images/gallery/gallery-2.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery/gallery-3.jpg', span: 'col-span-1 row-span-1' },
  // Row 2 right side
  { src: '/images/gallery/gallery-4.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery/gallery-5.jpg', span: 'col-span-1 row-span-1' },
  // Row 3: 1 small + wide center + 1 small
  { src: '/images/gallery/gallery-6.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery/gallery-7.jpg', span: 'col-span-2 row-span-1' },
  { src: '/images/gallery/gallery-8.jpg', span: 'col-span-1 row-span-1' },
  // Row 4: 2 small left + large right
  { src: '/images/gallery/gallery-9.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery/gallery-10.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery/gallery-11.jpg', span: 'col-span-2 row-span-2' },
  // Row 5 left side
  { src: '/images/gallery/gallery-12.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery/gallery-13.jpg', span: 'col-span-1 row-span-1' },
  // Row 6: wide left + 2 small right
  { src: '/images/gallery/gallery-14.jpg', span: 'col-span-2 row-span-1' },
  { src: '/images/gallery/gallery-15.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery/gallery-16.jpg', span: 'col-span-1 row-span-1' },
  // Row 7: 3 small + 1
  { src: '/images/gallery/gallery-17.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery/gallery-18.jpg', span: 'col-span-2 row-span-1' },
  { src: '/images/gallery/gallery-19.png', span: 'col-span-1 row-span-1' },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' as const },
  }),
};

export default function Gallery() {
  const t = useTranslations('gallery');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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

        {/* Mosaic Grid */}
        <div className="grid auto-rows-[140px] grid-cols-2 gap-2 sm:auto-rows-[160px] sm:gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.src}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl ${item.span}`}
            >
              <Image
                src={item.src}
                alt="Axe Throwing Tenerife"
                fill
                sizes={item.span.includes('col-span-2') ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

              {/* Neon border on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-neon-blue/30 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
