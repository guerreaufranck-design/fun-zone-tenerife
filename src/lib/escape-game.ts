/**
 * Integration with the Escape Game app.
 * Generates activation codes via API and sends them to customers.
 */

const ESCAPE_GAME_URL = process.env.ESCAPE_GAME_URL || "https://escape-game-indol.vercel.app";
const ESCAPE_GAME_API_SECRET = process.env.ESCAPE_GAME_API_SECRET || "FZ-EG-2026-sEcReT";

export interface EscapeGameProduct {
  gameId: string;
  title: Record<string, string>;
  city: string;
  estimatedDuration: string;
}

/**
 * Available escape games on Tenerife.
 */
export const ESCAPE_GAMES: EscapeGameProduct[] = [
  {
    gameId: "11111111-1111-1111-1111-111111111111",
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
    gameId: "22222222-2222-2222-2222-222222222222",
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
    gameId: "33333333-3333-3333-3333-333333333333",
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
    gameId: "44444444-4444-4444-4444-444444444444",
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
 * Generate an activation code by calling the Escape Game API.
 */
export async function generateEscapeGameCode(
  gameId: string,
  customerEmail?: string,
  customerName?: string
): Promise<{ code: string; gameId: string }> {
  const res = await fetch(`${ESCAPE_GAME_URL}/api/generate-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-secret": ESCAPE_GAME_API_SECRET,
    },
    body: JSON.stringify({ gameId, customerEmail, customerName }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Failed to generate code: ${res.status}`);
  }

  return res.json();
}

/**
 * Get the escape game app URL with the code pre-filled.
 */
export function getEscapeGameLink(): string {
  return ESCAPE_GAME_URL;
}

/**
 * Find an escape game product by gameId.
 */
export function findEscapeGame(gameId: string): EscapeGameProduct | undefined {
  return ESCAPE_GAMES.find((g) => g.gameId === gameId);
}
