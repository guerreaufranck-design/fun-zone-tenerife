import type { Metadata } from 'next';
import { getIsland } from '@/lib/audio-tour';
import {
  IslandHubPage,
  islandHubStaticParams,
  islandHubMetadata,
} from '@/components/audio-tour/IslandHub';
import { FUERTEVENTURA_HUB } from '@/data/audio-tour-hubs';

const island = getIsland('fuerteventura')!;

export const dynamicParams = false;

export function generateStaticParams() {
  return islandHubStaticParams();
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return islandHubMetadata(island, FUERTEVENTURA_HUB, params);
}

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return IslandHubPage({ island, hub: FUERTEVENTURA_HUB, params });
}
