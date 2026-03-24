'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

interface TikTokEmbed {
  id: string;
  tiktok_url: string;
  is_active: boolean;
  sort_order: number;
}

interface TikTokOEmbed {
  thumbnail_url: string;
  title: string;
  author_name: string;
}

interface TikTokDisplay {
  id: string;
  url: string;
  videoId: string | null;
  thumbnailUrl: string | null;
  title: string;
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17V11.9a4.84 4.84 0 01-3.77-1.44V6.69h3.77z" />
    </svg>
  );
}

function getVideoId(url: string): string | null {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : null;
}

const gradients = [
  'from-[#00d4ff]/20 via-[#1a1a2e] to-[#0a0a0f]',
  'from-[#8b5cf6]/20 via-[#1a1a2e] to-[#0a0a0f]',
  'from-[#ff6b00]/20 via-[#1a1a2e] to-[#0a0a0f]',
  'from-[#00ff88]/20 via-[#1a1a2e] to-[#0a0a0f]',
];

function TikTokCard({ item, index }: {
  item: TikTokDisplay;
  index: number;
}) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      className="group relative flex-shrink-0"
    >
      <div className="relative h-[320px] w-[180px] overflow-hidden rounded-xl border border-border/50 transition-all duration-300 group-hover:border-[#00d4ff]/30 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]">
        {item.videoId ? (
          <iframe
            src={`https://www.tiktok.com/player/v1/${item.videoId}?autoplay=1&loop=1&controls=0&music_info=0&description=0`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay"
            allowFullScreen
            style={{ border: 'none', pointerEvents: 'none' }}
          />
        ) : item.thumbnailUrl ? (
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            sizes="180px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-b ${gradients[index % gradients.length]}`} />
        )}

        {/* TikTok icon */}
        <div className="absolute right-2 top-2 z-10">
          <TikTokIcon className="h-4 w-4 text-white/40" />
        </div>

        {/* Bottom title */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
          <p className="line-clamp-2 text-xs font-medium leading-tight text-white/80">
            {item.title}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

export default function TikTokCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<TikTokDisplay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTikToks() {
      try {
        const { createClient } = await import('@/lib/supabase/client');
        const supabase = createClient();
        const { data, error } = await supabase
          .from('tiktok_embeds')
          .select('*')
          .eq('is_active', true)
          .order('sort_order');

        if (error || !data || data.length === 0) {
          setLoading(false);
          return;
        }

        const embeds = data as TikTokEmbed[];

        const displayItems: TikTokDisplay[] = await Promise.all(
          embeds.map(async (embed) => {
            const videoId = getVideoId(embed.tiktok_url);
            try {
              const res = await fetch(
                `https://www.tiktok.com/oembed?url=${encodeURIComponent(embed.tiktok_url)}`
              );
              if (res.ok) {
                const oembed: TikTokOEmbed = await res.json();
                return {
                  id: embed.id,
                  url: embed.tiktok_url,
                  videoId,
                  thumbnailUrl: oembed.thumbnail_url,
                  title: oembed.title || oembed.author_name || 'TikTok',
                };
              }
            } catch {
              // Fallback
            }
            return {
              id: embed.id,
              url: embed.tiktok_url,
              videoId,
              thumbnailUrl: null,
              title: 'TikTok',
            };
          })
        );

        setItems(displayItems);
      } catch (err) {
        console.error('Error fetching TikTok embeds:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchTikToks();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 py-8">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Loading TikToks...</span>
      </div>
    );
  }

  if (items.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TikTokIcon className="h-5 w-5 text-white" />
        <h3 className="text-lg font-semibold text-white">Follow us on TikTok</h3>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <TikTokCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
