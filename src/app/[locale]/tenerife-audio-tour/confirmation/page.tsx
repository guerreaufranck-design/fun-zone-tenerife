import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Headphones, CheckCircle2, Clock, ArrowRight, Mail } from 'lucide-react';
import { getStripe } from '@/lib/stripe';
import { getCityMeta, AUDIO_TOUR_PRICE } from '@/lib/audio-tour';
import { createLumeOrder, audioTourExternalOrderId, LUME_ACTIVATE_URL } from '@/lib/lume';
import TrackPurchase from '@/components/analytics/TrackPurchase';

// Confirmation is per-order and must never be prerendered or indexed.
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { robots: { index: false, follow: false } };

interface Copy {
  deliveredTitle: string;
  deliveredIntro: string;
  buildingTitle: string;
  buildingIntro: string;
  codeLabel: string;
  activate: string;
  emailNote: string;
  pendingTitle: string;
  pendingIntro: string;
  back: string;
}

const COPY: Record<string, Copy> = {
  en: {
    deliveredTitle: 'Your audio tour is ready',
    deliveredIntro: 'Payment confirmed. Here is your activation code. Tap to open it, or use the link we just emailed you.',
    buildingTitle: 'Your code is ready, the tour is being prepared',
    buildingIntro: 'Payment confirmed. Your code works right now; the narration is finishing generating and the email arrives within a few minutes.',
    codeLabel: 'Activation code',
    activate: 'Open my tour',
    emailNote: 'We have also emailed your code and a ready-to-use link.',
    pendingTitle: 'Finalising your order',
    pendingIntro: 'We could not confirm the payment on this page yet. If you completed payment, your code is on its way by email. Please refresh in a moment.',
    back: 'Back to the tours',
  },
  fr: {
    deliveredTitle: 'Votre visite audio est prête',
    deliveredIntro: 'Paiement confirmé. Voici votre code d’activation. Appuyez pour l’ouvrir, ou utilisez le lien que nous venons de vous envoyer par e-mail.',
    buildingTitle: 'Votre code est prêt, la visite se prépare',
    buildingIntro: 'Paiement confirmé. Votre code fonctionne déjà ; la narration finit de se générer et l’e-mail arrive dans quelques minutes.',
    codeLabel: 'Code d’activation',
    activate: 'Ouvrir ma visite',
    emailNote: 'Nous vous avons aussi envoyé votre code et un lien prêt à l’emploi par e-mail.',
    pendingTitle: 'Finalisation de votre commande',
    pendingIntro: 'Nous n’avons pas encore pu confirmer le paiement sur cette page. Si vous avez payé, votre code arrive par e-mail. Rafraîchissez dans un instant.',
    back: 'Retour aux visites',
  },
  es: {
    deliveredTitle: 'Tu audioguía está lista',
    deliveredIntro: 'Pago confirmado. Aquí tienes tu código de activación: toca para abrirlo o usa el enlace que te acabamos de enviar por correo.',
    buildingTitle: 'Tu código está listo, el tour se está preparando',
    buildingIntro: 'Pago confirmado. Tu código ya funciona; la narración está terminando de generarse y el correo llega en unos minutos.',
    codeLabel: 'Código de activación',
    activate: 'Abrir mi tour',
    emailNote: 'También te hemos enviado tu código y un enlace listo para usar por correo.',
    pendingTitle: 'Finalizando tu pedido',
    pendingIntro: 'Todavía no hemos podido confirmar el pago en esta página. Si has pagado, tu código va en camino por correo. Actualiza en un momento.',
    back: 'Volver a los tours',
  },
  de: {
    deliveredTitle: 'Ihre Audiotour ist bereit',
    deliveredIntro: 'Zahlung bestätigt. Hier ist Ihr Aktivierungscode. Tippen Sie zum Öffnen oder nutzen Sie den soeben gesendeten E-Mail-Link.',
    buildingTitle: 'Ihr Code ist bereit, die Tour wird vorbereitet',
    buildingIntro: 'Zahlung bestätigt. Ihr Code funktioniert bereits; die Erzählung wird noch fertig generiert und die E-Mail kommt in wenigen Minuten.',
    codeLabel: 'Aktivierungscode',
    activate: 'Meine Tour öffnen',
    emailNote: 'Wir haben Ihnen Ihren Code und einen gebrauchsfertigen Link auch per E-Mail geschickt.',
    pendingTitle: 'Ihre Bestellung wird abgeschlossen',
    pendingIntro: 'Wir konnten die Zahlung auf dieser Seite noch nicht bestätigen. Falls Sie bezahlt haben, ist Ihr Code per E-Mail unterwegs. Bitte in einem Moment aktualisieren.',
    back: 'Zurück zu den Touren',
  },
  it: {
    deliveredTitle: 'La tua audioguida è pronta',
    deliveredIntro: 'Pagamento confermato. Ecco il tuo codice di attivazione: toccalo per aprirlo oppure usa il link che ti abbiamo appena inviato via e-mail.',
    buildingTitle: 'Il tuo codice è pronto, il tour si sta preparando',
    buildingIntro: 'Pagamento confermato. Il tuo codice funziona già; la narrazione sta finendo di generarsi e l’e-mail arriva entro pochi minuti.',
    codeLabel: 'Codice di attivazione',
    activate: 'Apri il mio tour',
    emailNote: 'Ti abbiamo inviato anche il codice e un link pronto all’uso via e-mail.',
    pendingTitle: 'Stiamo completando il tuo ordine',
    pendingIntro: 'Non siamo ancora riusciti a confermare il pagamento su questa pagina. Se hai pagato, il codice sta arrivando via e-mail. Aggiorna tra un istante.',
    back: 'Torna ai tour',
  },
  nl: {
    deliveredTitle: 'Je audiotour is klaar',
    deliveredIntro: 'Betaling bevestigd. Hier is je activeringscode. Tik om te openen, of gebruik de link die we je zojuist per e-mail stuurden.',
    buildingTitle: 'Je code is klaar, de tour wordt voorbereid',
    buildingIntro: 'Betaling bevestigd. Je code werkt al; de vertelling wordt nog gegenereerd en de e-mail komt binnen enkele minuten.',
    codeLabel: 'Activeringscode',
    activate: 'Open mijn tour',
    emailNote: 'We hebben je code en een kant-en-klare link ook per e-mail gestuurd.',
    pendingTitle: 'Je bestelling wordt afgerond',
    pendingIntro: 'We konden de betaling op deze pagina nog niet bevestigen. Als je hebt betaald, is je code onderweg per e-mail. Vernieuw zo meteen.',
    back: 'Terug naar de tours',
  },
};

export default async function AudioTourConfirmationPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { session_id: sessionId } = await searchParams;
  const c = COPY[locale] ?? COPY.en;

  let codes: string[] = [];
  let status: 'delivered' | 'building' | null = null;
  let cityName = '';
  let paid = false;

  if (sessionId) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(sessionId);
      if (session.payment_status === 'paid' && session.metadata?.type === 'audio_tour') {
        const meta = getCityMeta(session.metadata.citySlug || '');
        const email = session.customer_details?.email || session.customer_email || '';
        const language = (session.metadata.language || 'en').toLowerCase();
        const quantity = Math.max(1, Math.min(6, parseInt(session.metadata.quantity || '1', 10)));

        if (meta && email) {
          paid = true;
          cityName = meta.displayName;
          // Idempotent: the webhook already (or will) call Lume with the same
          // externalOrderId, so this returns the same codes without re-issuing.
          const result = await createLumeOrder({
            externalOrderId: audioTourExternalOrderId(session.id, meta.fulfilmentSlug),
            citySlug: meta.fulfilmentSlug,
            email,
            language,
            quantity,
            name: session.customer_details?.name || undefined,
          });
          codes = result.codes;
          status = result.status;
        }
      }
    } catch (err) {
      console.error('Audio tour confirmation: could not resolve order:', err);
    }
  }

  const hasCodes = paid && codes.length > 0;
  const building = status === 'building';

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-4 pt-28 pb-20 text-white sm:px-6">
      {hasCodes && sessionId && (
        <TrackPurchase
          transactionId={sessionId}
          value={AUDIO_TOUR_PRICE * codes.length}
          city={cityName}
          quantity={codes.length}
        />
      )}
      <div className="mx-auto max-w-xl">
        <div className="rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#00d4ff]/5 to-[#111118] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-[#00d4ff]">
              {hasCodes ? (building ? <Clock size={22} /> : <CheckCircle2 size={22} />) : <Headphones size={22} />}
            </span>
            <div>
              <h1 className="text-xl font-bold leading-tight">
                {hasCodes ? (building ? c.buildingTitle : c.deliveredTitle) : c.pendingTitle}
              </h1>
              {cityName && <p className="text-sm text-white/55">{cityName}</p>}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {hasCodes ? (building ? c.buildingIntro : c.deliveredIntro) : c.pendingIntro}
          </p>

          {hasCodes && (
            <div className="mt-6 space-y-3">
              {codes.map((code) => (
                <div key={code} className="rounded-xl border border-border/60 bg-[#0a0a0f] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00d4ff]/70">
                    {c.codeLabel}
                  </p>
                  <p className="mt-1 font-mono text-lg font-bold tracking-wider text-white">{code}</p>
                  <a
                    href={`${LUME_ACTIVATE_URL}?code=${encodeURIComponent(code)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#00d4ff] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0f] transition-all hover:bg-[#33ddff]"
                  >
                    {c.activate} <ArrowRight size={14} />
                  </a>
                </div>
              ))}
              <p className="flex items-center gap-2 pt-1 text-xs text-white/45">
                <Mail size={13} className="text-[#00d4ff]" /> {c.emailNote}
              </p>
            </div>
          )}

          <div className="mt-7">
            <Link href="/" className="text-sm font-semibold text-[#00d4ff] hover:text-[#33ddff]">
              {c.back}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
