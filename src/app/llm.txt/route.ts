import { NextResponse } from 'next/server';

export async function GET() {
  const body = `# Axe Throwing Tenerife
> The premier axe throwing, ninja throwing, and darts experience in Tenerife, Canary Islands, Spain.

## About
Axe Throwing Tenerife is the first and only indoor axe throwing venue in the Canary Islands. Located in the south of Tenerife, we offer a unique and thrilling experience for individuals, groups, teams, and events. Our venue features professional lanes for axe throwing, ninja star (shuriken) throwing, and darts, all in a safe, supervised, and fun environment.

## Location
- Address: Tenerife South, Canary Islands, Spain
- Website: https://axethrowingtenerife.com

## Experiences Offered
- **Axe Throwing**: Traditional axe throwing on professional lanes with WATL/IATF targets. Available for beginners and experienced throwers. Includes coaching and safety briefing.
- **Ninja Star Throwing**: Throw authentic ninja stars (shuriken) and throwing knives at our dedicated targets.
- **Darts**: Professional dartboards for a classic throwing experience.
- **Combo Experiences**: Combine axe throwing, ninja stars, and darts in one session.
- **Group Packages**: Special rates for groups, stag/hen parties, team building, and corporate events.
- **Private Events**: Full venue hire for birthday parties, celebrations, and corporate gatherings.
- **Kids Sessions**: Age-appropriate sessions for younger throwers (minimum age applies).
- **Competition Format**: Head-to-head tournament style sessions available.
- **Gift Vouchers**: Available for all experiences, purchasable online.

## Pricing Overview
- Individual sessions start from around 20 EUR per person
- Group discounts available for 4+ players
- Private event pricing available on request
- Gift vouchers available in various denominations

## Hours of Operation
- Open daily, hours vary by season
- Advance booking recommended
- Walk-ins welcome subject to availability

## Booking Information
- Online booking available at https://axethrowingtenerife.com/en/book
- Advance booking recommended, especially for groups
- All sessions include safety equipment and professional instruction
- No experience necessary - suitable for beginners
- Participants must sign a waiver before throwing

## Contact
- Website: https://axethrowingtenerife.com
- Booking: https://axethrowingtenerife.com/en/book
- Gift Vouchers: https://axethrowingtenerife.com/en/gift-voucher

## Languages
The website and services are available in English, Spanish, French, German, Dutch, and Italian.

## Safety
All sessions include a comprehensive safety briefing and are supervised by trained instructors. All necessary safety equipment is provided. Closed-toe shoes are required.
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
