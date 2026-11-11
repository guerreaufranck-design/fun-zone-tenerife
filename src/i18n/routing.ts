import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'de', 'nl', 'it'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    // Audio tours use the same literal path in every locale (hreflang is built
    // by hand in the page); registering them here lets typed <Link> target them.
    '/canary-islands-audio-tour': '/canary-islands-audio-tour',
    '/tenerife-audio-tour': '/tenerife-audio-tour',
    '/tenerife-audio-tour/[city]': '/tenerife-audio-tour/[city]',
    '/gran-canaria-audio-tour': '/gran-canaria-audio-tour',
    '/gran-canaria-audio-tour/[city]': '/gran-canaria-audio-tour/[city]',
    '/lanzarote-audio-tour': '/lanzarote-audio-tour',
    '/lanzarote-audio-tour/[city]': '/lanzarote-audio-tour/[city]',
    '/fuerteventura-audio-tour': '/fuerteventura-audio-tour',
    '/fuerteventura-audio-tour/[city]': '/fuerteventura-audio-tour/[city]',
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
    '/activities': {
      en: '/activities',
      es: '/actividades',
      fr: '/activites',
      de: '/aktivitaeten',
      nl: '/activiteiten',
      it: '/attivita'
    },
    '/activities/[slug]': {
      en: '/activities/[slug]',
      es: '/actividades/[slug]',
      fr: '/activites/[slug]',
      de: '/aktivitaeten/[slug]',
      nl: '/activiteiten/[slug]',
      it: '/attivita/[slug]'
    },
    '/escape-game': '/escape-game',
    '/escape-game/[slug]': '/escape-game/[slug]',
    '/celebrations': {
      en: '/stag-hen-party-tenerife',
      es: '/despedidas-tenerife',
      fr: '/evjf-evg-tenerife',
      de: '/junggesellenabschied-teneriffa',
      nl: '/vrijgezellenfeest-tenerife',
      it: '/addio-nubilato-celibato-tenerife'
    },
    '/audio-guide-canaries': {
      en: '/audio-guide-canary-islands',
      es: '/audioguia-islas-canarias',
      fr: '/audioguide-iles-canaries',
      de: '/audioguide-kanaren',
      nl: '/audiogids-canarische-eilanden',
      it: '/audioguida-isole-canarie'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
