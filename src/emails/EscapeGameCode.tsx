import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Hr,
  Heading,
  Preview,
} from "@react-email/components";
import * as React from "react";

const translations = {
  en: {
    preview: "Your Escape Game code is ready!",
    greeting: "Hi",
    title: "Your Escape Game Adventure Awaits!",
    subtitle: "Here is your activation code for the outdoor escape game:",
    codeLabel: "Your Activation Code",
    gameLabel: "Escape Game",
    cityLabel: "Location",
    durationLabel: "Estimated Duration",
    howTo: "How to start",
    step1: "Open the app using the link below",
    step2: "Enter your activation code",
    step3: "Choose your player name and start the adventure!",
    linkLabel: "Open the Escape Game App",
    important: "Important",
    expiry: "Your code is valid for 8 hours after first activation. Once activated, the timer starts!",
    tips: "Wear comfortable walking shoes, bring water and sunscreen. The route is not suitable for strollers.",
    contactText: "Questions? Contact us at",
    footer: "Fun Zone Tenerife - Escape Games",
  },
  es: {
    preview: "Tu codigo de Escape Game esta listo!",
    greeting: "Hola",
    title: "Tu aventura de Escape Game te espera!",
    subtitle: "Aqui esta tu codigo de activacion para el escape game al aire libre:",
    codeLabel: "Tu Codigo de Activacion",
    gameLabel: "Escape Game",
    cityLabel: "Ubicacion",
    durationLabel: "Duracion Estimada",
    howTo: "Como empezar",
    step1: "Abre la app usando el enlace de abajo",
    step2: "Introduce tu codigo de activacion",
    step3: "Elige tu nombre de jugador y comienza la aventura!",
    linkLabel: "Abrir la App de Escape Game",
    important: "Importante",
    expiry: "Tu codigo es valido durante 8 horas despues de la primera activacion. Una vez activado, el cronometro empieza!",
    tips: "Usa calzado comodo, lleva agua y proteccion solar. El recorrido no es apto para cochecitos de bebe.",
    contactText: "Preguntas? Contactanos en",
    footer: "Fun Zone Tenerife - Escape Games",
  },
  fr: {
    preview: "Votre code Escape Game est pret !",
    greeting: "Bonjour",
    title: "Votre aventure Escape Game vous attend !",
    subtitle: "Voici votre code d'activation pour l'escape game en exterieur :",
    codeLabel: "Votre Code d'Activation",
    gameLabel: "Escape Game",
    cityLabel: "Lieu",
    durationLabel: "Duree Estimee",
    howTo: "Comment commencer",
    step1: "Ouvrez l'app avec le lien ci-dessous",
    step2: "Entrez votre code d'activation",
    step3: "Choisissez votre nom de joueur et lancez l'aventure !",
    linkLabel: "Ouvrir l'App Escape Game",
    important: "Important",
    expiry: "Votre code est valable 8 heures apres la premiere activation. Une fois active, le chrono demarre !",
    tips: "Portez des chaussures de marche confortables, prevoyez de l'eau et de la creme solaire. Le parcours n'est pas adapte aux poussettes.",
    contactText: "Des questions ? Contactez-nous a",
    footer: "Fun Zone Tenerife - Escape Games",
  },
  de: {
    preview: "Ihr Escape Game Code ist bereit!",
    greeting: "Hallo",
    title: "Ihr Escape Game Abenteuer wartet!",
    subtitle: "Hier ist Ihr Aktivierungscode fur das Outdoor-Escape-Game:",
    codeLabel: "Ihr Aktivierungscode",
    gameLabel: "Escape Game",
    cityLabel: "Standort",
    durationLabel: "Geschatzte Dauer",
    howTo: "So starten Sie",
    step1: "Offnen Sie die App uber den Link unten",
    step2: "Geben Sie Ihren Aktivierungscode ein",
    step3: "Wahlen Sie Ihren Spielernamen und starten Sie das Abenteuer!",
    linkLabel: "Escape Game App offnen",
    important: "Wichtig",
    expiry: "Ihr Code ist 8 Stunden nach der ersten Aktivierung gultig. Nach der Aktivierung startet der Timer!",
    tips: "Tragen Sie bequeme Wanderschuhe, bringen Sie Wasser und Sonnencreme mit. Die Route ist nicht fur Kinderwagen geeignet.",
    contactText: "Fragen? Kontaktieren Sie uns unter",
    footer: "Fun Zone Tenerife - Escape Games",
  },
  it: {
    preview: "Il tuo codice Escape Game e pronto!",
    greeting: "Ciao",
    title: "La tua avventura Escape Game ti aspetta!",
    subtitle: "Ecco il tuo codice di attivazione per l'escape game all'aperto:",
    codeLabel: "Il Tuo Codice di Attivazione",
    gameLabel: "Escape Game",
    cityLabel: "Luogo",
    durationLabel: "Durata Stimata",
    howTo: "Come iniziare",
    step1: "Apri l'app usando il link qui sotto",
    step2: "Inserisci il tuo codice di attivazione",
    step3: "Scegli il tuo nome giocatore e inizia l'avventura!",
    linkLabel: "Apri l'App Escape Game",
    important: "Importante",
    expiry: "Il tuo codice e valido per 8 ore dopo la prima attivazione. Una volta attivato, il timer parte!",
    tips: "Indossa scarpe comode da camminata, porta acqua e crema solare. Il percorso non e adatto ai passeggini.",
    contactText: "Domande? Contattaci a",
    footer: "Fun Zone Tenerife - Escape Games",
  },
};

type Lang = keyof typeof translations;

interface EscapeGameCodeProps {
  customerName: string;
  code: string;
  gameName: string;
  city: string;
  estimatedDuration: string;
  appUrl: string;
  language?: string;
}

export function EscapeGameCode({
  customerName,
  code,
  gameName,
  city,
  estimatedDuration,
  appUrl,
  language = "en",
}: EscapeGameCodeProps) {
  const t = translations[(language as Lang)] || translations.en;

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>
              🏴‍☠️ Escape Game Outdoor
            </Heading>
          </Section>

          {/* Greeting */}
          <Section style={content}>
            <Text style={greeting}>
              {t.greeting} {customerName},
            </Text>
            <Text style={subtitle}>{t.title}</Text>
            <Text style={text}>{t.subtitle}</Text>

            {/* Code box */}
            <Section style={codeBox}>
              <Text style={codeLabel}>{t.codeLabel}</Text>
              <Text style={codeValue}>{code.match(/.{1,4}/g)?.join('-') || code}</Text>
            </Section>

            {/* Game details */}
            <Section style={detailsBox}>
              <Text style={detailRow}>
                <strong>{t.gameLabel}:</strong> {gameName}
              </Text>
              <Text style={detailRow}>
                <strong>{t.cityLabel}:</strong> {city}
              </Text>
              <Text style={detailRow}>
                <strong>{t.durationLabel}:</strong> {estimatedDuration}
              </Text>
            </Section>

            <Hr style={divider} />

            {/* How to start */}
            <Text style={sectionTitle}>{t.howTo}</Text>
            <Text style={stepText}>1. {t.step1}</Text>
            <Text style={stepText}>2. {t.step2}</Text>
            <Text style={stepText}>3. {t.step3}</Text>

            {/* CTA Button */}
            <Section style={{ textAlign: "center" as const, margin: "24px 0" }}>
              <Link href={appUrl} style={ctaButton}>
                {t.linkLabel}
              </Link>
            </Section>

            <Hr style={divider} />

            {/* Important notice */}
            <Text style={importantTitle}>⚠️ {t.important}</Text>
            <Text style={importantText}>{t.expiry}</Text>
            <Text style={importantText}>{t.tips}</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              {t.contactText}{" "}
              <Link href="mailto:contact@funzonetenerife.com" style={link}>
                contact@funzonetenerife.com
              </Link>
            </Text>
            <Text style={footerBrand}>{t.footer}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#0f172a",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  maxWidth: "560px",
};

const header = {
  backgroundColor: "#065f46",
  padding: "24px",
  textAlign: "center" as const,
  borderRadius: "8px 8px 0 0",
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "24px",
  margin: "0",
};

const content = {
  backgroundColor: "#1e293b",
  padding: "32px 24px",
};

const greeting = {
  color: "#94a3b8",
  fontSize: "16px",
  margin: "0 0 8px",
};

const subtitle = {
  color: "#f1f5f9",
  fontSize: "22px",
  fontWeight: "bold" as const,
  margin: "0 0 12px",
};

const text = {
  color: "#94a3b8",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 24px",
};

const codeBox = {
  backgroundColor: "#0f172a",
  border: "2px dashed #10b981",
  borderRadius: "12px",
  padding: "20px",
  textAlign: "center" as const,
  margin: "0 0 24px",
};

const codeLabel = {
  color: "#10b981",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "2px",
  margin: "0 0 8px",
};

const codeValue = {
  color: "#ffffff",
  fontSize: "32px",
  fontFamily: "monospace",
  fontWeight: "bold" as const,
  letterSpacing: "4px",
  margin: "0",
};

const detailsBox = {
  backgroundColor: "#0f172a",
  borderRadius: "8px",
  padding: "16px",
  margin: "0 0 24px",
};

const detailRow = {
  color: "#cbd5e1",
  fontSize: "14px",
  margin: "4px 0",
};

const divider = {
  borderColor: "#334155",
  margin: "24px 0",
};

const sectionTitle = {
  color: "#10b981",
  fontSize: "16px",
  fontWeight: "bold" as const,
  margin: "0 0 12px",
};

const stepText = {
  color: "#cbd5e1",
  fontSize: "14px",
  margin: "4px 0",
  paddingLeft: "8px",
};

const ctaButton = {
  backgroundColor: "#10b981",
  color: "#ffffff",
  padding: "14px 32px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  display: "inline-block",
};

const importantTitle = {
  color: "#fbbf24",
  fontSize: "14px",
  fontWeight: "bold" as const,
  margin: "0 0 8px",
};

const importantText = {
  color: "#94a3b8",
  fontSize: "13px",
  lineHeight: "1.5",
  margin: "0 0 8px",
};

const footer = {
  backgroundColor: "#0f172a",
  padding: "24px",
  textAlign: "center" as const,
  borderRadius: "0 0 8px 8px",
};

const footerText = {
  color: "#64748b",
  fontSize: "12px",
  margin: "0 0 8px",
};

const footerBrand = {
  color: "#475569",
  fontSize: "11px",
  margin: "0",
};

const link = {
  color: "#10b981",
  textDecoration: "underline",
};

export default EscapeGameCode;
