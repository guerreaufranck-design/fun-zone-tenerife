/**
 * Escape game catalogue (Tenerife) — resold from OddballTrip.
 *
 * Codes are NOT generated here: each sale is declared to OddballTrip's partner
 * API, which owns the games. See {@link file://./oddballtrip.ts}. This module
 * only holds the display catalogue + the OddballTrip slug mapping used by the
 * Island Pass flow (all four games in one purchase).
 */

export interface EscapeGameProduct {
  /** Fun Zone offer slug (matches the `offers` table). */
  offerSlug: string;
  /** OddballTrip catalogue slug — the key the partner API expects. */
  oddballSlug: string;
  title: Record<string, string>;
  city: string;
  estimatedDuration: string;
}

/**
 * Available escape games on Tenerife.
 * NOTE: "Les Cendres de l'Âme" (Garachico) has no game on OddballTrip yet — a
 * sale returns 202 'generating' and is delivered once the game is built.
 */
export const ESCAPE_GAMES: EscapeGameProduct[] = [
  {
    offerSlug: "escape-ichasagua",
    oddballSlug: "le-code-dichasagua",
    title: {
      fr: "Le Code d'Ichasagua",
      en: "The Code of Ichasagua",
      es: "El Codigo de Ichasagua",
      de: "Der Code von Ichasagua",
      it: "Il Codice di Ichasagua",
    },
    city: "Los Cristianos",
    estimatedDuration: "1h30",
  },
  {
    offerSlug: "escape-trois-cles",
    oddballSlug: "le-coffre-des-trois-cles",
    title: {
      fr: "Le Coffre des Trois Cles",
      en: "The Chest of Three Keys",
      es: "El Cofre de las Tres Llaves",
      de: "Die Truhe der drei Schlussel",
      it: "Il Forziere delle Tre Chiavi",
    },
    city: "San Cristobal de La Laguna",
    estimatedDuration: "2h30",
  },
  {
    offerSlug: "escape-bateria",
    oddballSlug: "le-butin-de-la-bateria",
    title: {
      fr: "Le Butin de la Bateria",
      en: "The Battery Bounty",
      es: "El Botin de la Bateria",
      de: "Die Beute der Batterie",
      it: "Il Bottino della Batteria",
    },
    city: "Puerto de la Cruz",
    estimatedDuration: "1h45",
  },
  {
    offerSlug: "escape-cendres",
    oddballSlug: "les-cendres-de-lame",
    title: {
      fr: "Les Cendres de l'Ame",
      en: "Ashes of the Soul",
      es: "Las Cenizas del Alma",
      de: "Asche der Seele",
      it: "Le Ceneri dell'Anima",
    },
    city: "Garachico",
    estimatedDuration: "2h45",
  },
];

/**
 * Find an escape game product by its Fun Zone offer slug.
 */
export function findEscapeGame(offerSlug: string): EscapeGameProduct | undefined {
  return ESCAPE_GAMES.find((g) => g.offerSlug === offerSlug);
}
