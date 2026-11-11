import type { Metadata } from 'next';
import { getIsland } from '@/lib/audio-tour';
import {
  IslandHubPage,
  islandHubStaticParams,
  islandHubMetadata,
} from '@/components/audio-tour/IslandHub';
import { GRAN_CANARIA_HUB } from '@/data/audio-tour-hubs';

const island = getIsland('gran-canaria')!;

export const dynamicParams = false;

export function generateStaticParams() {
  return islandHubStaticParams();
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return islandHubMetadata(island, GRAN_CANARIA_HUB, params);
}

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return IslandHubPage({ island, hub: GRAN_CANARIA_HUB, params });
}
