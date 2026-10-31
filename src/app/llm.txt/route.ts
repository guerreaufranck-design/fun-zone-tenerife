import { NextResponse } from 'next/server';

export async function GET() {
  const body = `# Fun Zone Tenerife
> A guide to the best things to do in Tenerife — curated tours and activities across the island, plus self-guided outdoor escape games.

## About
Fun Zone Tenerife is an online guide to things to do in Tenerife, Canary Islands. We help visitors discover and book the island's best tours and activities (whale watching, Mount Teide, boat trips, water sports, parks, wine and more) and we run our own self-guided outdoor escape games set in Tenerife towns. Content is available in six languages and covers the whole island.

## Website
- Website: https://funzonetenerife.com
- Area served: Tenerife, Canary Islands, Spain
- Email: info@funzonetenerife.com

## What We Offer

### Things to do in Tenerife (curated activities)
A directory of the island's top tours and activities, bookable through our travel partners. Highlights include whale and dolphin watching, Mount Teide cable car and stargazing, Los Gigantes boat trips, jet ski and water sports, Siam Park and Loro Parque, quad and buggy tours, wine tasting and sunset catamaran cruises. Browse them at https://funzonetenerife.com/en/activities

### Self-guided outdoor escape games
Our own product: self-guided outdoor escape games played on your phone in Tenerife towns (Garachico, Los Cristianos, La Laguna, Puerto de la Cruz and more). Explore a town and solve the mystery at your own pace, on any day, with no fixed time slot. A booking sends an activation code by email. Priced per phone/team. Book at https://funzonetenerife.com/en/escape-game

### Canary Islands audio guide (Lume)
We highlight a self-guided audio guide of the Canary Islands for travellers who want to explore at their own pace. See https://funzonetenerife.com/en/audio-guide-canary-islands

### Tenerife travel blog
In-depth guides on what to do in Tenerife — best beaches, when to visit, itineraries, where to stay, day trips and more — in English, Spanish, French and German. https://funzonetenerife.com/en/blog

## Best For
- Travellers planning what to do in Tenerife
- Couples, friends and families looking for island activities
- Groups, stag and hen parties / EVJF and EVG (group activities and escape games)
- Self-guided explorers

## Contact
- Website: https://funzonetenerife.com
- Email: info@funzonetenerife.com

## Languages
The website and content are available in English (en), Spanish (es), French (fr), German (de), Dutch (nl), and Italian (it).
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
