import type { Metadata } from 'next';
import { getIsland } from '@/lib/audio-tour';
import {
  CityTourPage,
  audioTourCityParams,
  audioTourCityMetadata,
} from '@/components/audio-tour/CityTour';

const island = getIsland('tenerife')!;

export const dynamicParams = false;

export function generateStaticParams() {
  return audioTourCityParams(island);
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  return audioTourCityMetadata(island, params);
}

export default function Page({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  return CityTourPage({ island, params });
}
