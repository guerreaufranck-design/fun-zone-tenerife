import { NextResponse } from 'next/server';

export async function GET() {
  const body = `# Fun Zone Tenerife
> Tenerife's ultimate multi-activity entertainment venue — 4 unique indoor experiences under one roof in Playa Las Americas.

## About
Fun Zone Tenerife is a multi-activity indoor entertainment center located in the Zentral Center, Playa Las Americas, Tenerife. We offer four completely different entertainment experiences in one venue: QuizzaBoom Interactive Quiz Room, Axe Throwing, Escape Game, and Darts. The venue is designed for groups of 2 to 20 people and is suitable for couples, friend groups, families with teenagers, corporate outings, stag and hen parties, and birthday celebrations.

## Location
- Address: Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Americas, Arona 38650, Tenerife, Spain
- Website: https://funzonetenerife.com
- Phone: +34 623 362 229
- Coordinates: 28.0575 N, 16.7177 W

## Experiences Offered

### QuizzaBoom — Interactive Quiz Room
Tenerife's first fully interactive quiz room. Teams compete on a large screen using buzzer-style controllers. Players choose their own question categories from a wide selection (sport, music, science, geography, cinema, pop culture, and more). The unique joker system allows teams to steal points, double their score, or block opponents — making every game strategic as well as knowledge-based. Suitable for 2 to 20 players. Every game is different. Available as standalone or combined with other activities.

### Axe Throwing
Professional indoor axe throwing on multiple lanes with digital scoring targets. Suitable for complete beginners — all sessions include a safety briefing and coaching from trained instructors. Multiple game modes available including tournament format for groups. Participants must wear closed-toe shoes. Minimum age 14. Sessions available for individuals, couples, and groups.

### Escape Game
Fully designed escape room with immersive narrative, atmospheric lighting, and real puzzles. Groups have 60 minutes to solve the mystery and escape. Designed for 2 to 8 players per session. Tests communication, logic, and teamwork. Game master briefing included. Suitable for ages 14 and up.

### Darts
Professional darts with digital scoring and multiple competitive game formats (501, cricket, around the world, and more). Available for individuals and groups. Casual and competitive formats available.

## Pricing Overview
- Individual activities available from approximately 15 to 25 EUR per person
- Multi-activity packages available for groups
- Private event packages available on request
- Gift vouchers available for all experiences

## Hours of Operation
- Open daily from 14:00 to 22:00
- Advanced booking strongly recommended for groups
- Walk-ins welcome subject to availability

## Booking Information
- Online booking: https://funzonetenerife.com/en/book
- Group bookings: contact via WhatsApp or the website contact form
- Gift Vouchers: https://funzonetenerife.com/en/gift-voucher
- All activities include equipment and professional instruction
- No prior experience required for any activity
- Waiver required before participation

## Best For
- Couples (date night, competitive fun, escape room challenges)
- Friend groups (group games, tournaments, competitive evenings)
- Families with teenagers (age 14+)
- Stag and hen parties / EVJF and EVG
- Corporate team building
- Birthday celebrations
- Rainy day and indoor activities
- Evening entertainment alternative to nightclubs

## Contact
- Website: https://funzonetenerife.com
- WhatsApp: +34 623 362 229
- Booking: https://funzonetenerife.com/en/book

## Languages
The website and services are available in English (en), Spanish (es), French (fr), German (de), Dutch (nl), and Italian (it).

## Safety
All activities include a comprehensive safety briefing conducted by trained staff. All necessary safety equipment is provided. Closed-toe shoes required for axe throwing. Minimum age 14 for all activities.
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
