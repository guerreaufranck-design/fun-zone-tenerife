import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Temporary endpoint to seed escape game offers
// DELETE THIS FILE AFTER USE

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!authHeader || authHeader !== `Bearer ${serviceKey}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    serviceKey!,
    { db: { schema: 'public' } }
  );

  // Step 1: Drop and recreate constraint to allow 'escape' and 'quiz' lane types
  const { error: constraintError } = await supabase.rpc('exec_sql' as never, {
    sql: `
      ALTER TABLE offers DROP CONSTRAINT IF EXISTS offers_lane_type_check;
      ALTER TABLE offers ADD CONSTRAINT offers_lane_type_check CHECK (lane_type IN ('axe', 'darts_pixels', 'classic_darts', 'escape', 'quiz'));
    `,
  } as never);

  // If RPC doesn't work, try direct insert anyway (constraint might be text)
  if (constraintError) {
    console.log('RPC not available, attempting direct insert:', constraintError.message);
  }

  // Step 2: Insert escape game offers
  const escapeOffers = [
    {
      slug: 'escape-ichasagua',
      title: {
        en: 'The Code of Ichasagua',
        fr: "Le Code d'Ichasagua",
        es: 'El Código de Ichasagua',
        de: 'Der Code von Ichasagua',
        nl: 'De Code van Ichasagua',
        it: 'Il Codice di Ichasagua',
      },
      description: {
        en: 'Explore the streets of Los Cristianos and uncover the ancient secret of the Guanche code. Decipher clues hidden in historical landmarks and solve puzzles that reveal a forgotten legend.',
        fr: "Explorez les rues de Los Cristianos et percez le secret ancestral du code Guanche. Déchiffrez des indices cachés dans les monuments historiques et résolvez des énigmes révélant une légende oubliée.",
        es: 'Explora las calles de Los Cristianos y descubre el secreto ancestral del código Guanche. Descifra pistas ocultas en monumentos históricos y resuelve enigmas que revelan una leyenda olvidada.',
        de: 'Erkunden Sie die Straßen von Los Cristianos und lüften Sie das uralte Geheimnis des Guanchen-Codes.',
        nl: 'Verken de straten van Los Cristianos en ontdek het eeuwenoude geheim van de Guanche-code.',
        it: 'Esplora le strade di Los Cristianos e scopri l\'antico segreto del codice Guanche.',
      },
      short_desc: {
        en: 'Outdoor escape adventure through Los Cristianos - 1h30',
        fr: 'Aventure escape en extérieur à Los Cristianos - 1h30',
        es: 'Aventura escape al aire libre en Los Cristianos - 1h30',
        de: 'Outdoor-Escape-Abenteuer durch Los Cristianos - 1h30',
        nl: 'Outdoor escape avontuur door Los Cristianos - 1h30',
        it: 'Avventura escape all\'aperto a Los Cristianos - 1h30',
      },
      duration_minutes: 90,
      min_players: 2,
      max_players: 99,
      lane_type: 'escape',
      includes: ['map', 'clues', 'phone-support'],
      is_active: true,
      sort_order: 50,
      seo_title: { en: 'The Code of Ichasagua - Outdoor Escape Game Los Cristianos', fr: "Le Code d'Ichasagua - Escape Game Extérieur Los Cristianos", es: 'El Código de Ichasagua - Escape Game Exterior Los Cristianos' },
      seo_description: { en: 'Outdoor escape game adventure in Los Cristianos, Tenerife. 1h30 of puzzles and exploration.', fr: "Escape game en extérieur à Los Cristianos, Tenerife. 1h30 d'énigmes et d'exploration.", es: 'Escape game al aire libre en Los Cristianos, Tenerife. 1h30 de enigmas y exploración.' },
    },
    {
      slug: 'escape-trois-cles',
      title: {
        en: 'The Chest of Three Keys',
        fr: 'Le Coffre des Trois Clés',
        es: 'El Cofre de las Tres Llaves',
        de: 'Die Truhe der Drei Schlüssel',
        nl: 'De Kist van Drie Sleutels',
        it: 'Lo Scrigno delle Tre Chiavi',
      },
      description: {
        en: 'Wander through the UNESCO World Heritage streets of La Laguna in search of three legendary keys. Each key unlocks a new chapter of an intrigue that has spanned centuries.',
        fr: 'Parcourez les rues classées au patrimoine mondial de La Laguna à la recherche de trois clés légendaires. Chaque clé déverrouille un nouveau chapitre d\'une intrigue qui traverse les siècles.',
        es: 'Recorre las calles Patrimonio de la Humanidad de La Laguna en busca de tres llaves legendarias. Cada llave desbloquea un nuevo capítulo de una intriga que atraviesa los siglos.',
        de: 'Wandern Sie durch die UNESCO-Welterbe-Straßen von La Laguna auf der Suche nach drei legendären Schlüsseln.',
        nl: 'Dwaal door de UNESCO-straten van La Laguna op zoek naar drie legendarische sleutels.',
        it: 'Percorri le strade Patrimonio dell\'Umanità di La Laguna alla ricerca di tre chiavi leggendarie.',
      },
      short_desc: {
        en: 'Outdoor escape adventure through La Laguna - 2h30',
        fr: 'Aventure escape en extérieur à La Laguna - 2h30',
        es: 'Aventura escape al aire libre en La Laguna - 2h30',
        de: 'Outdoor-Escape-Abenteuer durch La Laguna - 2h30',
        nl: 'Outdoor escape avontuur door La Laguna - 2h30',
        it: 'Avventura escape all\'aperto a La Laguna - 2h30',
      },
      duration_minutes: 150,
      min_players: 2,
      max_players: 99,
      lane_type: 'escape',
      includes: ['map', 'clues', 'phone-support'],
      is_active: true,
      sort_order: 51,
      seo_title: { en: 'The Chest of Three Keys - Outdoor Escape Game La Laguna', fr: 'Le Coffre des Trois Clés - Escape Game Extérieur La Laguna', es: 'El Cofre de las Tres Llaves - Escape Game Exterior La Laguna' },
      seo_description: { en: 'Outdoor escape game in La Laguna UNESCO heritage site. 2h30 of mystery.', fr: 'Escape game en extérieur à La Laguna, patrimoine UNESCO. 2h30 de mystère.', es: 'Escape game al aire libre en La Laguna, patrimonio UNESCO. 2h30 de misterio.' },
    },
    {
      slug: 'escape-bateria',
      title: {
        en: 'The Loot of La Batería',
        fr: 'Le Butin de la Batería',
        es: 'El Botín de la Batería',
        de: 'Die Beute der Batería',
        nl: 'De Buit van de Batería',
        it: 'Il Bottino della Batería',
      },
      description: {
        en: 'Follow the trail of a pirate treasure hidden along the coast of Puerto de la Cruz. Navigate through the historic harbour, decipher maritime codes and find the lost loot before time runs out.',
        fr: 'Suivez la piste d\'un trésor pirate caché le long de la côte de Puerto de la Cruz. Naviguez dans le port historique, déchiffrez les codes maritimes et trouvez le butin perdu avant la fin du temps.',
        es: 'Sigue la pista de un tesoro pirata escondido a lo largo de la costa de Puerto de la Cruz. Navega por el puerto histórico, descifra códigos marítimos y encuentra el botín perdido.',
        de: 'Folgen Sie der Spur eines Piratenschatzes entlang der Küste von Puerto de la Cruz.',
        nl: 'Volg het spoor van een piratenschat langs de kust van Puerto de la Cruz.',
        it: 'Segui la pista di un tesoro pirata nascosto lungo la costa di Puerto de la Cruz.',
      },
      short_desc: {
        en: 'Outdoor escape adventure through Puerto de la Cruz - 1h45',
        fr: 'Aventure escape en extérieur à Puerto de la Cruz - 1h45',
        es: 'Aventura escape al aire libre en Puerto de la Cruz - 1h45',
        de: 'Outdoor-Escape-Abenteuer durch Puerto de la Cruz - 1h45',
        nl: 'Outdoor escape avontuur door Puerto de la Cruz - 1h45',
        it: 'Avventura escape all\'aperto a Puerto de la Cruz - 1h45',
      },
      duration_minutes: 105,
      min_players: 2,
      max_players: 99,
      lane_type: 'escape',
      includes: ['map', 'clues', 'phone-support'],
      is_active: true,
      sort_order: 52,
      seo_title: { en: 'The Loot of La Batería - Outdoor Escape Game Puerto de la Cruz', fr: 'Le Butin de la Batería - Escape Game Extérieur Puerto de la Cruz', es: 'El Botín de la Batería - Escape Game Exterior Puerto de la Cruz' },
      seo_description: { en: 'Pirate-themed outdoor escape game in Puerto de la Cruz. 1h45 of adventure.', fr: 'Escape game pirate en extérieur à Puerto de la Cruz. 1h45 d\'aventure.', es: 'Escape game pirata al aire libre en Puerto de la Cruz. 1h45 de aventura.' },
    },
    {
      slug: 'escape-cendres',
      title: {
        en: 'The Ashes of the Soul',
        fr: "Les Cendres de l'Âme",
        es: 'Las Cenizas del Alma',
        de: 'Die Asche der Seele',
        nl: 'De As van de Ziel',
        it: "Le Ceneri dell'Anima",
      },
      description: {
        en: 'Delve into the volcanic history of Garachico, a town destroyed and reborn from lava. Uncover the mystery of a soul trapped between the ruins and the sea in this atmospheric adventure.',
        fr: "Plongez dans l'histoire volcanique de Garachico, une ville détruite et renaissante de la lave. Percez le mystère d'une âme piégée entre les ruines et la mer.",
        es: 'Sumérgete en la historia volcánica de Garachico, un pueblo destruido y renacido de la lava. Descubre el misterio de un alma atrapada entre las ruinas y el mar.',
        de: 'Tauchen Sie ein in die vulkanische Geschichte von Garachico, einer Stadt, die aus Lava zerstört und wiedergeboren wurde.',
        nl: 'Duik in de vulkanische geschiedenis van Garachico, een stad die is verwoest en herboren uit lava.',
        it: "Immergiti nella storia vulcanica di Garachico, una città distrutta e rinata dalla lava.",
      },
      short_desc: {
        en: 'Outdoor escape adventure through Garachico - 2h45',
        fr: 'Aventure escape en extérieur à Garachico - 2h45',
        es: 'Aventura escape al aire libre en Garachico - 2h45',
        de: 'Outdoor-Escape-Abenteuer durch Garachico - 2h45',
        nl: 'Outdoor escape avontuur door Garachico - 2h45',
        it: 'Avventura escape all\'aperto a Garachico - 2h45',
      },
      duration_minutes: 165,
      min_players: 2,
      max_players: 99,
      lane_type: 'escape',
      includes: ['map', 'clues', 'phone-support'],
      is_active: true,
      sort_order: 53,
      seo_title: { en: 'The Ashes of the Soul - Outdoor Escape Game Garachico', fr: "Les Cendres de l'Âme - Escape Game Extérieur Garachico", es: 'Las Cenizas del Alma - Escape Game Exterior Garachico' },
      seo_description: { en: 'Atmospheric outdoor escape game in volcanic Garachico. 2h45 of mystery.', fr: "Escape game atmosphérique en extérieur dans Garachico volcanique. 2h45 de mystère.", es: 'Escape game atmosférico al aire libre en Garachico volcánico. 2h45 de misterio.' },
    },
  ];

  // Try inserting
  const { data, error } = await supabase.from('offers').insert(escapeOffers).select('id, slug');

  if (error) {
    return NextResponse.json({
      error: error.message,
      details: error.details,
      hint: 'You need to run this SQL in Supabase Dashboard first: ALTER TABLE offers DROP CONSTRAINT IF EXISTS offers_lane_type_check; ALTER TABLE offers ADD CONSTRAINT offers_lane_type_check CHECK (lane_type IN (\'axe\', \'darts_pixels\', \'classic_darts\', \'escape\', \'quiz\'));'
    }, { status: 500 });
  }

  return NextResponse.json({ success: true, offers: data });
}
