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
    preview: "Your booking has been modified",
    greeting: "Hi",
    title: "Booking Modified",
    subtitle: "Your booking details have been updated successfully.",
    detailsTitle: "Updated Booking Details",
    ref: "Reference",
    experience: "Experience",
    players: "Players",
    changeTitle: "What Changed",
    oldDate: "Previous Date",
    newDate: "New Date",
    oldTime: "Previous Time",
    newTime: "New Time",
    modifyTitle: "Need to make further changes?",
    modifyText: "Contact us to modify your booking:",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Location",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Spain",
    contactText: "Questions? Contact us at",
    footer: "Axe Throwing Tenerife",
  },
  es: {
    preview: "Tu reserva ha sido modificada",
    greeting: "Hola",
    title: "Reserva Modificada",
    subtitle: "Los detalles de tu reserva se han actualizado correctamente.",
    detailsTitle: "Detalles Actualizados de la Reserva",
    ref: "Referencia",
    experience: "Experiencia",
    players: "Jugadores",
    changeTitle: "Que ha cambiado",
    oldDate: "Fecha Anterior",
    newDate: "Nueva Fecha",
    oldTime: "Hora Anterior",
    newTime: "Nueva Hora",
    modifyTitle: "Necesitas hacer mas cambios?",
    modifyText: "Contactanos para modificar tu reserva:",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Ubicacion",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Espana",
    contactText: "Preguntas? Contactanos en",
    footer: "Axe Throwing Tenerife",
  },
  fr: {
    preview: "Votre reservation a ete modifiee",
    greeting: "Bonjour",
    title: "Reservation Modifiee",
    subtitle: "Les details de votre reservation ont ete mis a jour avec succes.",
    detailsTitle: "Details de Reservation Mis a Jour",
    ref: "Reference",
    experience: "Experience",
    players: "Joueurs",
    changeTitle: "Ce qui a change",
    oldDate: "Date Precedente",
    newDate: "Nouvelle Date",
    oldTime: "Heure Precedente",
    newTime: "Nouvelle Heure",
    modifyTitle: "Besoin d'apporter d'autres modifications ?",
    modifyText: "Contactez-nous pour modifier votre reservation :",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Adresse",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Espagne",
    contactText: "Des questions ? Contactez-nous a",
    footer: "Axe Throwing Tenerife",
  },
  de: {
    preview: "Ihre Buchung wurde geandert",
    greeting: "Hallo",
    title: "Buchung Geandert",
    subtitle: "Ihre Buchungsdetails wurden erfolgreich aktualisiert.",
    detailsTitle: "Aktualisierte Buchungsdetails",
    ref: "Referenz",
    experience: "Erlebnis",
    players: "Spieler",
    changeTitle: "Was sich geandert hat",
    oldDate: "Vorheriges Datum",
    newDate: "Neues Datum",
    oldTime: "Vorherige Uhrzeit",
    newTime: "Neue Uhrzeit",
    modifyTitle: "Mussen Sie weitere Anderungen vornehmen?",
    modifyText: "Kontaktieren Sie uns, um Ihre Buchung zu andern:",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Standort",
    locationAddress: "Axe Throwing Tenerife, Teneriffa, Spanien",
    contactText: "Fragen? Kontaktieren Sie uns unter",
    footer: "Axe Throwing Tenerife",
  },
  nl: {
    preview: "Je boeking is gewijzigd",
    greeting: "Hallo",
    title: "Boeking Gewijzigd",
    subtitle: "Je boekingsdetails zijn succesvol bijgewerkt.",
    detailsTitle: "Bijgewerkte Boekingsdetails",
    ref: "Referentie",
    experience: "Ervaring",
    players: "Spelers",
    changeTitle: "Wat is er veranderd",
    oldDate: "Vorige Datum",
    newDate: "Nieuwe Datum",
    oldTime: "Vorige Tijd",
    newTime: "Nieuwe Tijd",
    modifyTitle: "Moet je meer wijzigingen aanbrengen?",
    modifyText: "Neem contact met ons op om je boeking te wijzigen:",
    modifyPhone: "+34 623 362 229",
    locationTitle: "Locatie",
    locationAddress: "Axe Throwing Tenerife, Tenerife, Spanje",
    contactText: "Vragen? Neem contact met ons op via",
    footer: "Axe Throwing Tenerife",
  },
};

type TranslationKey = keyof typeof translations;

export interface BookingModifiedProps {
  bookingRef: string;
  customerName: string;
  experienceName: string;
  players: number;
  oldDate: string;
  newDate: string;
  oldTime: string;
  newTime: string;
  language?: string;
}

export function BookingModified({
  bookingRef = "AXT-2026-XXXXX",
  customerName = "Guest",
  experienceName = "Axe Throwing",
  players = 2,
  oldDate = "17 March 2026",
  newDate = "19 March 2026",
  oldTime = "18:00",
  newTime = "20:00",
  language = "en",
}: BookingModifiedProps) {
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

          {/* What Changed */}
          <Section style={contentSection}>
            <Heading as="h2" style={h2}>
              {t.changeTitle}
            </Heading>
            <Section style={changeTable}>
              <Row style={changeRow}>
                <Column style={changeLabel}>{t.oldDate}</Column>
                <Column style={oldValue}>{oldDate}</Column>
              </Row>
              <Row style={changeRow}>
                <Column style={changeLabel}>{t.newDate}</Column>
                <Column style={newValue}>{newDate}</Column>
              </Row>
              <Row style={changeRowSpacer}>
                <Column>&nbsp;</Column>
              </Row>
              <Row style={changeRow}>
                <Column style={changeLabel}>{t.oldTime}</Column>
                <Column style={oldValue}>{oldTime}</Column>
              </Row>
              <Row style={changeRow}>
                <Column style={changeLabel}>{t.newTime}</Column>
                <Column style={newValue}>{newTime}</Column>
              </Row>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Updated Booking Details */}
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
                <Column style={detailLabel}>{t.newDate}</Column>
                <Column style={detailValue}>{newDate}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.newTime}</Column>
                <Column style={detailValue}>{newTime}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.players}</Column>
                <Column style={detailValue}>{players}</Column>
              </Row>
            </Section>
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

export default BookingModified;

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

const changeTable = {
  width: "100%",
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
  padding: "8px 0",
};

const changeRow = {
  padding: "6px 16px",
};

const changeRowSpacer = {
  padding: "2px 16px",
};

const changeLabel = {
  color: "#a0a0a0",
  fontSize: "14px",
  width: "40%",
  verticalAlign: "top" as const,
};

const oldValue = {
  color: "#888888",
  fontSize: "14px",
  fontWeight: "500" as const,
  textDecoration: "line-through" as const,
  width: "60%",
  verticalAlign: "top" as const,
};

const newValue = {
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

const link = {
  color: "#00b4d8",
  textDecoration: "underline",
  fontSize: "14px",
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
