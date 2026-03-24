import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Link,
  Hr,
  Button,
  Heading,
  Preview,
} from "@react-email/components";
import * as React from "react";

const translations = {
  en: {
    preview: "Your booking is confirmed!",
    greeting: "Hi",
    title: "Booking Confirmed",
    subtitle: "Your axe throwing session is booked and ready!",
    detailsTitle: "Booking Details",
    ref: "Reference",
    experience: "Experience",
    date: "Date",
    time: "Time",
    players: "Players",
    paymentTitle: "Payment",
    amountPaid: "Amount Paid",
    remainingBalance: "Remaining Balance",
    remainingNote: "Please pay the remaining balance on arrival.",
    fullPaid: "Fully paid - no further payment needed.",
    alreadyPaid: "Already Paid",
    alreadyPaidNote: "Payment has been processed. No further payment needed.",
    modifyTitle: "Need to change your booking?",
    modifyText: "Contact us to modify or cancel your booking:",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Location",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Spain",
    safetyTitle: "Safety Reminder",
    safetyText:
      "Closed-toe shoes are required. No open-toed sandals or flip-flops. Participants must not be under the influence of alcohol or drugs. Minimum age restrictions apply.",
    contactText: "Questions? Contact us at",
    footer: "Axe Throwing Tenerife",
  },
  es: {
    preview: "Tu reserva esta confirmada!",
    greeting: "Hola",
    title: "Reserva Confirmada",
    subtitle: "Tu sesion de lanzamiento de hacha esta reservada y lista!",
    detailsTitle: "Detalles de la Reserva",
    ref: "Referencia",
    experience: "Experiencia",
    date: "Fecha",
    time: "Hora",
    players: "Jugadores",
    paymentTitle: "Pago",
    amountPaid: "Importe Pagado",
    remainingBalance: "Saldo Pendiente",
    remainingNote: "Por favor, paga el saldo restante a tu llegada.",
    fullPaid: "Totalmente pagado - no se necesita mas pago.",
    alreadyPaid: "Ya Pagado",
    alreadyPaidNote: "El pago ha sido procesado. No se necesita mas pago.",
    modifyTitle: "Necesitas cambiar tu reserva?",
    modifyText: "Contactanos para modificar o cancelar tu reserva:",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Ubicacion",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Espana",
    safetyTitle: "Recordatorio de Seguridad",
    safetyText:
      "Se requiere calzado cerrado. No se permiten sandalias ni chancletas. Los participantes no deben estar bajo los efectos del alcohol o drogas. Se aplican restricciones de edad minima.",
    contactText: "Preguntas? Contactanos en",
    footer: "Axe Throwing Tenerife",
  },
  fr: {
    preview: "Votre reservation est confirmee !",
    greeting: "Bonjour",
    title: "Reservation Confirmee",
    subtitle: "Votre session de lancer de hache est reservee et prete !",
    detailsTitle: "Details de la Reservation",
    ref: "Reference",
    experience: "Experience",
    date: "Date",
    time: "Heure",
    players: "Joueurs",
    paymentTitle: "Paiement",
    amountPaid: "Montant Paye",
    remainingBalance: "Solde Restant",
    remainingNote: "Veuillez payer le solde restant a votre arrivee.",
    fullPaid: "Entierement paye - aucun paiement supplementaire necessaire.",
    alreadyPaid: "Deja Paye",
    alreadyPaidNote: "Le paiement a ete traite. Aucun paiement supplementaire necessaire.",
    modifyTitle: "Besoin de modifier votre reservation ?",
    modifyText: "Contactez-nous pour modifier ou annuler votre reservation :",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Adresse",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Espagne",
    safetyTitle: "Rappel de Securite",
    safetyText:
      "Des chaussures fermees sont obligatoires. Pas de sandales ouvertes ni de tongs. Les participants ne doivent pas etre sous l'influence d'alcool ou de drogues. Des restrictions d'age minimum s'appliquent.",
    contactText: "Des questions ? Contactez-nous a",
    footer: "Axe Throwing Tenerife",
  },
  de: {
    preview: "Ihre Buchung ist bestatigt!",
    greeting: "Hallo",
    title: "Buchung Bestatigt",
    subtitle: "Ihre Axtwurf-Session ist gebucht und bereit!",
    detailsTitle: "Buchungsdetails",
    ref: "Referenz",
    experience: "Erlebnis",
    date: "Datum",
    time: "Uhrzeit",
    players: "Spieler",
    paymentTitle: "Zahlung",
    amountPaid: "Bezahlter Betrag",
    remainingBalance: "Restbetrag",
    remainingNote: "Bitte zahlen Sie den Restbetrag bei Ankunft.",
    fullPaid: "Vollstandig bezahlt - keine weitere Zahlung erforderlich.",
    alreadyPaid: "Bereits Bezahlt",
    alreadyPaidNote: "Die Zahlung wurde verarbeitet. Keine weitere Zahlung erforderlich.",
    modifyTitle: "Mussen Sie Ihre Buchung andern?",
    modifyText: "Kontaktieren Sie uns, um Ihre Buchung zu andern oder zu stornieren:",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Standort",
    locationAddress: "Axe Throwing Tenerife, Teneriffa, Spanien",
    safetyTitle: "Sicherheitshinweis",
    safetyText:
      "Geschlossene Schuhe sind erforderlich. Keine offenen Sandalen oder Flip-Flops. Teilnehmer durfen nicht unter dem Einfluss von Alkohol oder Drogen stehen. Es gelten Mindestaltersbeschrankungen.",
    contactText: "Fragen? Kontaktieren Sie uns unter",
    footer: "Axe Throwing Tenerife",
  },
  nl: {
    preview: "Je boeking is bevestigd!",
    greeting: "Hallo",
    title: "Boeking Bevestigd",
    subtitle: "Je bijlwerpen sessie is geboekt en klaar!",
    detailsTitle: "Boekingsdetails",
    ref: "Referentie",
    experience: "Ervaring",
    date: "Datum",
    time: "Tijd",
    players: "Spelers",
    paymentTitle: "Betaling",
    amountPaid: "Betaald Bedrag",
    remainingBalance: "Resterend Saldo",
    remainingNote: "Betaal het resterende saldo bij aankomst.",
    fullPaid: "Volledig betaald - geen verdere betaling nodig.",
    alreadyPaid: "Al Betaald",
    alreadyPaidNote: "De betaling is verwerkt. Geen verdere betaling nodig.",
    modifyTitle: "Moet je je boeking wijzigen?",
    modifyText: "Neem contact met ons op om je boeking te wijzigen of te annuleren:",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Locatie",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Spanje",
    safetyTitle: "Veiligheidsherinnering",
    safetyText:
      "Gesloten schoenen zijn verplicht. Geen open sandalen of slippers. Deelnemers mogen niet onder invloed van alcohol of drugs zijn. Minimale leeftijdsbeperkingen zijn van toepassing.",
    contactText: "Vragen? Neem contact met ons op via",
    footer: "Axe Throwing Tenerife",
  },
};

type TranslationKey = keyof typeof translations;

export interface BookingConfirmationProps {
  bookingRef: string;
  customerName: string;
  experienceName: string;
  date: string;
  time: string;
  players: number;
  totalPrice: string;
  depositPaid: string;
  remainingBalance?: string;
  paymentType: "deposit" | "full";
  language?: string;
  alreadyPaid?: boolean;
}

export function BookingConfirmation({
  bookingRef = "AXT-2026-XXXXX",
  customerName = "Guest",
  experienceName = "Axe Throwing",
  date = "17 March 2026",
  time = "18:00",
  players = 2,
  totalPrice = "50.00 EUR",
  depositPaid = "10.00 EUR",
  remainingBalance = "40.00 EUR",
  paymentType = "full",
  language = "en",
  alreadyPaid = false,
}: BookingConfirmationProps) {
  const t = translations[(language as TranslationKey)] ?? translations.en;

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={logo}>AXE THROWING TENERIFE</Heading>
          </Section>

          {/* Title */}
          <Section style={heroSection}>
            <Heading style={h1}>{t.title}</Heading>
            <Text style={subtitle}>{t.subtitle}</Text>
          </Section>

          <Hr style={divider} />

          {/* Greeting */}
          <Section style={contentSection}>
            <Text style={text}>
              {t.greeting} {customerName},
            </Text>
          </Section>

          {/* Booking Details */}
          <Section style={contentSection}>
            <Heading as="h2" style={h2}>
              {t.detailsTitle}
            </Heading>
            <Section style={detailsTable}>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.ref}</Column>
                <Column style={detailValue}>{bookingRef}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.experience}</Column>
                <Column style={detailValue}>{experienceName}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.date}</Column>
                <Column style={detailValue}>{date}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.time}</Column>
                <Column style={detailValue}>{time}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.players}</Column>
                <Column style={detailValue}>{players}</Column>
              </Row>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Payment Info */}
          <Section style={contentSection}>
            <Heading as="h2" style={h2}>
              {t.paymentTitle}
            </Heading>
            {alreadyPaid ? (
              <>
                <Section style={detailsTable}>
                  <Row style={detailRow}>
                    <Column style={detailLabel}>{t.paymentTitle}</Column>
                    <Column style={detailValueHighlight}>
                      {t.alreadyPaid}
                    </Column>
                  </Row>
                </Section>
                <Text style={noteText}>{t.alreadyPaidNote}</Text>
              </>
            ) : (
              <>
                <Section style={detailsTable}>
                  <Row style={detailRow}>
                    <Column style={detailLabel}>{t.amountPaid}</Column>
                    <Column style={detailValueHighlight}>
                      {paymentType === "deposit" ? depositPaid : totalPrice}
                    </Column>
                  </Row>
                  {paymentType === "deposit" && (
                    <Row style={detailRow}>
                      <Column style={detailLabel}>{t.remainingBalance}</Column>
                      <Column style={detailValue}>{remainingBalance}</Column>
                    </Row>
                  )}
                </Section>
                <Text style={noteText}>
                  {paymentType === "deposit" ? t.remainingNote : t.fullPaid}
                </Text>
              </>
            )}
          </Section>

          <Hr style={divider} />

          {/* Modify / Contact */}
          <Section style={contentSection}>
            <Heading as="h2" style={h2}>
              {t.modifyTitle}
            </Heading>
            <Text style={text}>{t.modifyText}</Text>
            <Text style={text}>
              <Link href="mailto:info@axethrowingtenerife.com" style={link}>
                info@axethrowingtenerife.com
              </Link>
            </Text>
            <Text style={text}>
              <Link href="https://wa.me/34623362229" style={link}>
                WhatsApp: {t.modifyPhone}
              </Link>
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Location */}
          <Section style={contentSection}>
            <Heading as="h2" style={h2}>
              {t.locationTitle}
            </Heading>
            <Text style={text}>{t.locationAddress}</Text>
            <Link
              href="https://maps.google.com/?q=Axe+Throwing+Tenerife"
              style={link}
            >
              Google Maps
            </Link>
          </Section>

          <Hr style={divider} />

          {/* Safety */}
          <Section style={safetySection}>
            <Heading as="h2" style={h2}>
              {t.safetyTitle}
            </Heading>
            <Text style={safetyText}>{t.safetyText}</Text>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer_}>
            <Text style={footerText}>
              {t.contactText}{" "}
              <Link href="mailto:info@axethrowingtenerife.com" style={link}>
                info@axethrowingtenerife.com
              </Link>
            </Text>
            <Text style={footerBrand}>{t.footer}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default BookingConfirmation;

// ---------- Styles ----------

const main = {
  backgroundColor: "#0f0f0f",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
};

const header = {
  padding: "20px 30px",
  textAlign: "center" as const,
};

const logo = {
  color: "#00b4d8",
  fontSize: "24px",
  fontWeight: "800" as const,
  letterSpacing: "3px",
  margin: "0",
};

const heroSection = {
  padding: "10px 30px 20px",
  textAlign: "center" as const,
};

const h1 = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700" as const,
  margin: "0 0 8px",
};

const subtitle = {
  color: "#a0a0a0",
  fontSize: "16px",
  margin: "0",
};

const h2 = {
  color: "#00b4d8",
  fontSize: "18px",
  fontWeight: "600" as const,
  margin: "0 0 12px",
};

const contentSection = {
  padding: "16px 30px",
};

const text = {
  color: "#d0d0d0",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 12px",
};

const noteText = {
  color: "#a0a0a0",
  fontSize: "13px",
  fontStyle: "italic" as const,
  margin: "8px 0 0",
};

const detailsTable = {
  width: "100%",
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
  padding: "4px 0",
};

const detailRow = {
  padding: "8px 16px",
};

const detailLabel = {
  color: "#a0a0a0",
  fontSize: "14px",
  width: "40%",
  verticalAlign: "top" as const,
};

const detailValue = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600" as const,
  width: "60%",
  verticalAlign: "top" as const,
};

const detailValueHighlight = {
  color: "#00b4d8",
  fontSize: "14px",
  fontWeight: "700" as const,
  width: "60%",
  verticalAlign: "top" as const,
};

const divider = {
  borderColor: "#2a2a2a",
  margin: "8px 30px",
};

const buttonContainer = {
  textAlign: "center" as const,
  padding: "8px 0",
};

const button = {
  backgroundColor: "#00b4d8",
  borderRadius: "6px",
  color: "#000000",
  fontSize: "15px",
  fontWeight: "700" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 30px",
  display: "inline-block",
};

const link = {
  color: "#00b4d8",
  textDecoration: "underline",
  fontSize: "14px",
};

const safetySection = {
  padding: "16px 30px",
  backgroundColor: "#1a1a0f",
  borderLeft: "3px solid #f59e0b",
  margin: "0 30px",
  borderRadius: "4px",
};

const safetyText = {
  color: "#d4a017",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0",
};

const footer_ = {
  padding: "20px 30px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#666666",
  fontSize: "13px",
  margin: "0 0 8px",
};

const footerBrand = {
  color: "#444444",
  fontSize: "12px",
  fontWeight: "600" as const,
  letterSpacing: "2px",
  margin: "0",
};
