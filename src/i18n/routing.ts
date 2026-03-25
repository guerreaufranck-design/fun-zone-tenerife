import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'de', 'nl', 'it'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/experiences': {
      en: '/experiences',
      es: '/experiencias',
      fr: '/experiences',
      de: '/erlebnisse',
      nl: '/ervaringen',
      it: '/esperienze'
    },
    '/experiences/[slug]': {
      en: '/experiences/[slug]',
      es: '/experiencias/[slug]',
      fr: '/experiences/[slug]',
      de: '/erlebnisse/[slug]',
      nl: '/ervaringen/[slug]',
      it: '/esperienze/[slug]'
    },
    '/book': {
      en: '/book',
      es: '/reservar',
      fr: '/reserver',
      de: '/buchen',
      nl: '/boeken',
      it: '/prenota'
    },
    '/book/checkout': {
      en: '/book/checkout',
      es: '/reservar/pago',
      fr: '/reserver/paiement',
      de: '/buchen/kasse',
      nl: '/boeken/afrekenen',
      it: '/prenota/pagamento'
    },
    '/book/success': {
      en: '/book/success',
      es: '/reservar/exito',
      fr: '/reserver/succes',
      de: '/buchen/erfolg',
      nl: '/boeken/succes',
      it: '/prenota/successo'
    },
    '/book/cancel': {
      en: '/book/cancel',
      es: '/reservar/cancelado',
      fr: '/reserver/annule',
      de: '/buchen/abgebrochen',
      nl: '/boeken/geannuleerd',
      it: '/prenota/annullato'
    },
    '/waiver': {
      en: '/waiver',
      es: '/descargo',
      fr: '/decharge',
      de: '/haftungsausschluss',
      nl: '/vrijwaring',
      it: '/liberatoria'
    },
    '/faq': '/faq',
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/contact': {
      en: '/contact',
      es: '/contacto',
      fr: '/contact',
      de: '/kontakt',
      nl: '/contact',
      it: '/contatto'
    },
    '/about': {
      en: '/about',
      es: '/sobre-nosotros',
      fr: '/a-propos',
      de: '/ueber-uns',
      nl: '/over-ons',
      it: '/chi-siamo'
    },
    '/gift-voucher': {
      en: '/gift-voucher',
      es: '/tarjeta-regalo',
      fr: '/bon-cadeau',
      de: '/geschenkgutschein',
      nl: '/cadeaubon',
      it: '/buono-regalo'
    },
    '/booking/[ref]/modify': {
      en: '/booking/[ref]/modify',
      es: '/reserva/[ref]/modificar',
      fr: '/reservation/[ref]/modifier',
      de: '/buchung/[ref]/aendern',
      nl: '/boeking/[ref]/wijzigen',
      it: '/prenotazione/[ref]/modifica'
    },
    '/axe-throwing': '/axe-throwing',
    '/quiz-room': '/quiz-room',
    '/darts': '/darts',
    '/escape-game': '/escape-game'
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
