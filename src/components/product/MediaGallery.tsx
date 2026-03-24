'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface MediaGalleryProps {
  items?: MediaItem[];
  experienceTitle?: string;
}

export default function MediaGallery({ items, experienceTitle = 'Experience' }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // No items — show placeholder
  if (!items || items.length === 0) {
    return (
      <div className="aspect-video w-full rounded-xl border border-border/50 bg-gradient-to-br from-[#111] via-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center">
        <div className="text-center text-muted-foreground/40">
          <ImageIcon className="h-12 w-12 mx-auto mb-2" />
          <p className="text-sm">No media yet</p>
        </div>
      </div>
    );
  }

  const activeItem = items[activeIndex];

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <>
      <div className="space-y-3">
        {/* Main display */}
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-[#0a0a0f]"
          onClick={() => setLightboxOpen(true)}
        >
          {activeItem.type === 'video' ? (
            <>
              <video
                src={activeItem.src}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-transform hover:scale-110">
                  <Play className="ml-1 h-6 w-6 text-white" fill="white" />
                </div>
              </div>
            </>
          ) : (
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          )}

          {/* Navigation arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-2 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-2 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {items.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 overflow-hidden rounded-lg border transition-all ${
                  index === activeIndex
                    ? 'border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                    : 'border-border/50 hover:border-border'
                }`}
              >
                <div className="h-16 w-24 relative bg-[#0a0a0f]">
                  {item.type === 'video' ? (
                    <div className="flex h-full items-center justify-center">
                      <Play className="h-4 w-4 text-white/50" fill="white" fillOpacity={0.5} />
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 p-2 text-white/70 transition-colors hover:bg-black/70 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            {items.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 text-white/70 transition-colors hover:bg-black/70 hover:text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <motion.div
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative mx-16 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-border/30 bg-[#0a0a0f]"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === 'video' ? (
                <video
                  src={activeItem.src}
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              )}
            </motion.div>

            {items.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 text-white/70 transition-colors hover:bg-black/70 hover:text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-1.5 text-sm text-white/70">
              {activeIndex + 1} / {items.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
