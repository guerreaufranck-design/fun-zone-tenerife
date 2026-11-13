'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

/**
 * Fires a GA4 `purchase` event once when an audio-tour order is confirmed.
 * `transactionId` (the Stripe session id) is passed as GA4's transaction_id so
 * a page refresh does not double-count the sale.
 */
export default function TrackPurchase({
  transactionId,
  value,
  city,
  quantity,
}: {
  transactionId: string;
  value: number;
  city: string;
  quantity: number;
}) {
  useEffect(() => {
    track('purchase', {
      transaction_id: transactionId,
      value,
      currency: 'EUR',
      items: [
        {
          item_name: `Audio tour: ${city}`,
          item_category: 'audio_tour',
          price: quantity > 0 ? value / quantity : value,
          quantity,
        },
      ],
    });
  }, [transactionId, value, city, quantity]);

  return null;
}
