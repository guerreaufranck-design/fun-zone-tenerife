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
    preview: "Your axe throwing session is tomorrow!",
    greeting: "Hi",
    title: "Your Session is Tomorrow!",
    subtitle: "Get ready to throw some axes!",
    detailsTitle: "Booking Details",
    ref: "Reference",
    experience: "Experience",
    date: "Date",
    time: "Time",
    players: "Players",
    locationTitle: "Location",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Spain",
    viewMap: "View on Google Maps",
    safetyTitle: "Safety Rules",
    safetyRules: [
      "Wear closed-toe shoes (no sandals or flip-flops)",
      "No alcohol or drugs before or during the session",
      "Follow all instructor guidelines at all times",
      "Participants must meet minimum age requirements",
      "Arrive 10 minutes early for your safety briefing",
    ],
    modifyTitle: "Need to make changes?",
    modifyText: "Contact us to modify your booking:",
    modifyPhone: "+34 623 362 229",
    contactText: "Questions? Contact us at",
    footer: "Axe Throwing Tenerife",
    seeYou: "See you tomorrow!",
  },
  es: {
    preview: "Tu sesion de lanzamiento de hacha es manana!",
    greeting: "Hola",
    title: "Tu Sesion es Manana!",
    subtitle: "Preparate para lanzar hachas!",
    detailsTitle: "Detalles de la Reserva",
    ref: "Referencia",
    experience: "Experiencia",
    date: "Fecha",
    time: "Hora",
    players: "Jugadores",
    locationTitle: "Ubicacion",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Espana",
    viewMap: "Ver en Google Maps",
    safetyTitle: "Reglas de Seguridad",
    safetyRules: [
      "Usa calzado cerrado (no sandalias ni chancletas)",
      "No alcohol ni drogas antes o durante la sesion",
      "Sigue las indicaciones del instructor en todo momento",
      "Los participantes deben cumplir los requisitos de edad minima",
      "Llega 10 minutos antes para el briefing de seguridad",
    ],
    modifyTitle: "Necesitas hacer cambios?",
    modifyText: "Contactanos para modificar tu reserva:",
    modifyPhone: "+34 623 362 229",
    contactText: "Preguntas? Contactanos en",
    footer: "Axe Throwing Tenerife",
    seeYou: "Nos vemos manana!",
  },
  fr: {
    preview: "Votre session de lancer de hache est demain !",
    greeting: "Bonjour",
    title: "Votre Session est Demain !",
    subtitle: "Preparez-vous a lancer des haches !",
    detailsTitle: "Details de la Reservation",
    ref: "Reference",
    experience: "Experience",
    date: "Date",
    time: "Heure",
    players: "Joueurs",
    locationTitle: "Adresse",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Espagne",
    viewMap: "Voir sur Google Maps",
    safetyTitle: "Regles de Securite",
    safetyRules: [
      "Portez des chaussures fermees (pas de sandales ou tongs)",
      "Pas d'alcool ni de drogues avant ou pendant la session",
      "Suivez les consignes de l'instructeur a tout moment",
      "Les participants doivent respecter l'age minimum requis",
      "Arrivez 10 minutes en avance pour le briefing securite",
    ],
    modifyTitle: "Besoin de faire des changements ?",
    modifyText: "Contactez-nous pour modifier votre reservation :",
    modifyPhone: "+34 623 362 229",
    contactText: "Des questions ? Contactez-nous a",
    footer: "Axe Throwing Tenerife",
    seeYou: "A demain !",
  },
  de: {
    preview: "Ihre Axtwurf-Session ist morgen!",
    greeting: "Hallo",
    title: "Ihre Session ist Morgen!",
    subtitle: "Machen Sie sich bereit zum Axtwerfen!",
    detailsTitle: "Buchungsdetails",
    ref: "Referenz",
    experience: "Erlebnis",
    date: "Datum",
    time: "Uhrzeit",
    players: "Spieler",
    locationTitle: "Standort",
    locationAddress: "Axe Throwing Tenerife, Teneriffa, Spanien",
    viewMap: "Auf Google Maps anzeigen",
    safetyTitle: "Sicherheitsregeln",
    safetyRules: [
      "Tragen Sie geschlossene Schuhe (keine Sandalen oder Flip-Flops)",
      "Kein Alkohol oder Drogen vor oder wahrend der Session",
      "Befolgen Sie jederzeit die Anweisungen des Instruktors",
      "Teilnehmer mussen die Mindestaltersanforderungen erfullen",
      "Kommen Sie 10 Minuten fruher fur das Sicherheitsbriefing",
    ],
    modifyTitle: "Mussen Sie Anderungen vornehmen?",
    modifyText: "Kontaktieren Sie uns, um Ihre Buchung zu andern:",
    modifyPhone: "+34 623 362 229",
    contactText: "Fragen? Kontaktieren Sie uns unter",
    footer: "Axe Throwing Tenerife",
    seeYou: "Bis morgen!",
  },
  nl: {
    preview: "Je bijlwerpen sessie is morgen!",
    greeting: "Hallo",
    title: "Je Sessie is Morgen!",
    subtitle: "Maak je klaar om bijlen te gooien!",
    detailsTitle: "Boekingsdetails",
    ref: "Referentie",
    experience: "Ervaring",
    date: "Datum",
    time: "Tijd",
    players: "Spelers",
    locationTitle: "Locatie",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Spanje",
    viewMap: "Bekijk op Google Maps",
    safetyTitle: "Veiligheidsregels",
    safetyRules: [
      "Draag gesloten schoenen (geen sandalen of slippers)",
      "Geen alcohol of drugs voor of tijdens de sessie",
      "Volg te allen tijde de instructies van de instructeur",
      "Deelnemers moeten voldoen aan de minimale leeftijdsvereisten",
      "Kom 10 minuten eerder voor de veiligheidsbriefing",
    ],
    modifyTitle: "Moet je wijzigingen aanbrengen?",
    modifyText: "Neem contact met ons op om je boeking te wijzigen:",
    modifyPhone: "+34 623 362 229",
    contactText: "Vragen? Neem contact met ons op via",
    footer: "Axe Throwing Tenerife",
    seeYou: "Tot morgen!",
  },
};

type TranslationKey = keyof typeof translations;

export interface BookingReminderProps {
  bookingRef: string;
  customerName: string;
  experienceName: string;
  date: string;
  time: string;
  players: number;
  language?: string;
}

export function BookingReminder({
  bookingRef = "AXT-2026-XXXXX",
  customerName = "Guest",
  experienceName = "Axe Throwing",
  date = "18 March 2026",
  time = "18:00",
  players = 2,
  language = "en",
}: BookingReminderProps) {
  const t = translations[(language as TranslationKey)] ?? translations.en;

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={logoStyle}>AXE THROWING TENERIFE</Heading>
          </Section>

          {/* Title */}
          <Section style={heroSection}>
            <Heading style={h1}>{t.title}</Heading>
            <Text style={subtitle_}>{t.subtitle}</Text>
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
              {t.viewMap}
            </Link>
          </Section>

          <Hr style={divider} />

          {/* Safety Rules */}
          <Section style={safetySection}>
            <Heading as="h2" style={h2}>
              {t.safetyTitle}
            </Heading>
            {t.safetyRules.map((rule, index) => (
              <Text key={index} style={safetyRule}>
                {index + 1}. {rule}
              </Text>
            ))}
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

          {/* See you */}
          <Section style={contentSection}>
            <Text style={seeYouStyle}>{t.seeYou}</Text>
          </Section>

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

export default BookingReminder;

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

const logoStyle = {
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

const subtitle_ = {
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

const divider = {
  borderColor: "#2a2a2a",
  margin: "8px 30px",
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

const safetyRule = {
  color: "#d4a017",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0 0 6px",
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

const seeYouStyle = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "700" as const,
  textAlign: "center" as const,
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
