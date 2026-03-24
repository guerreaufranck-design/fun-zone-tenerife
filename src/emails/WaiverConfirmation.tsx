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
  Heading,
  Preview,
  Img,
} from "@react-email/components";
import * as React from "react";

const translations = {
  en: {
    preview: "Your waiver has been signed successfully",
    greeting: "Hi",
    title: "Waiver Signed",
    subtitle: "Your liability waiver has been recorded",
    detailsTitle: "Waiver Details",
    ref: "Reference",
    dateOfBirth: "Date of Birth",
    signedAt: "Signed At",
    safetyTitle: "Safety Rules Summary",
    rule1: "Always follow staff instructions and never throw without supervision",
    rule2: "Closed-toe shoes required - no sandals or flip-flops",
    rule3: "No alcohol or drugs before or during the session",
    rule4: "Stay behind the throwing line at all times",
    rule5: "Only throw axes at designated targets when instructed",
    liabilityText:
      "By signing this waiver, you acknowledge the inherent risks of axe throwing and agree to follow all safety guidelines. You confirm that you are physically able to participate and accept full responsibility for your actions during the session.",
    signatureTitle: "Your Signature",
    keepEmail:
      "Please keep this email as proof of your signed waiver. You may be asked to present it upon arrival.",
    contactText: "Questions? Contact us at",
    footer: "Axe Throwing Tenerife",
  },
  es: {
    preview: "Tu exencion de responsabilidad ha sido firmada",
    greeting: "Hola",
    title: "Exencion Firmada",
    subtitle: "Tu exencion de responsabilidad ha sido registrada",
    detailsTitle: "Detalles de la Exencion",
    ref: "Referencia",
    dateOfBirth: "Fecha de Nacimiento",
    signedAt: "Firmado el",
    safetyTitle: "Resumen de Reglas de Seguridad",
    rule1: "Sigue siempre las instrucciones del personal y nunca lances sin supervision",
    rule2: "Calzado cerrado obligatorio - no se permiten sandalias ni chancletas",
    rule3: "Prohibido el alcohol o drogas antes o durante la sesion",
    rule4: "Permanece detras de la linea de lanzamiento en todo momento",
    rule5: "Solo lanza hachas a los objetivos designados cuando se te indique",
    liabilityText:
      "Al firmar esta exencion, reconoces los riesgos inherentes del lanzamiento de hachas y aceptas seguir todas las normas de seguridad. Confirmas que estas fisicamente capacitado para participar y aceptas la plena responsabilidad de tus acciones durante la sesion.",
    signatureTitle: "Tu Firma",
    keepEmail:
      "Guarda este correo como prueba de tu exencion firmada. Puede que te lo pidan a tu llegada.",
    contactText: "Preguntas? Contactanos en",
    footer: "Axe Throwing Tenerife",
  },
  fr: {
    preview: "Votre decharge de responsabilite a ete signee",
    greeting: "Bonjour",
    title: "Decharge Signee",
    subtitle: "Votre decharge de responsabilite a ete enregistree",
    detailsTitle: "Details de la Decharge",
    ref: "Reference",
    dateOfBirth: "Date de Naissance",
    signedAt: "Signe le",
    safetyTitle: "Resume des Regles de Securite",
    rule1: "Suivez toujours les instructions du personnel et ne lancez jamais sans supervision",
    rule2: "Chaussures fermees obligatoires - pas de sandales ni de tongs",
    rule3: "Pas d'alcool ni de drogues avant ou pendant la session",
    rule4: "Restez derriere la ligne de lancer a tout moment",
    rule5: "Ne lancez les haches que sur les cibles designees et uniquement sur instruction",
    liabilityText:
      "En signant cette decharge, vous reconnaissez les risques inherents au lancer de hache et acceptez de suivre toutes les consignes de securite. Vous confirmez etre physiquement apte a participer et acceptez l'entiere responsabilite de vos actions pendant la session.",
    signatureTitle: "Votre Signature",
    keepEmail:
      "Conservez cet email comme preuve de votre decharge signee. Il pourra vous etre demande a votre arrivee.",
    contactText: "Des questions ? Contactez-nous a",
    footer: "Axe Throwing Tenerife",
  },
  de: {
    preview: "Ihre Haftungsverzichtserklarung wurde unterzeichnet",
    greeting: "Hallo",
    title: "Verzichtserklarung Unterzeichnet",
    subtitle: "Ihre Haftungsverzichtserklarung wurde erfasst",
    detailsTitle: "Details der Verzichtserklarung",
    ref: "Referenz",
    dateOfBirth: "Geburtsdatum",
    signedAt: "Unterzeichnet am",
    safetyTitle: "Zusammenfassung der Sicherheitsregeln",
    rule1: "Befolgen Sie stets die Anweisungen des Personals und werfen Sie nie ohne Aufsicht",
    rule2: "Geschlossene Schuhe erforderlich - keine Sandalen oder Flip-Flops",
    rule3: "Kein Alkohol oder Drogen vor oder wahrend der Session",
    rule4: "Bleiben Sie jederzeit hinter der Wurflinie",
    rule5: "Werfen Sie Axte nur auf die vorgesehenen Ziele und nur auf Anweisung",
    liabilityText:
      "Mit der Unterzeichnung dieser Verzichtserklarung erkennen Sie die mit dem Axtwerfen verbundenen Risiken an und verpflichten sich, alle Sicherheitsrichtlinien zu befolgen. Sie bestatigen, dass Sie korperlich in der Lage sind teilzunehmen, und ubernehmen die volle Verantwortung fur Ihre Handlungen wahrend der Session.",
    signatureTitle: "Ihre Unterschrift",
    keepEmail:
      "Bitte bewahren Sie diese E-Mail als Nachweis Ihrer unterzeichneten Verzichtserklarung auf. Sie kann bei Ankunft verlangt werden.",
    contactText: "Fragen? Kontaktieren Sie uns unter",
    footer: "Axe Throwing Tenerife",
  },
  nl: {
    preview: "Je aansprakelijkheidsverklaring is ondertekend",
    greeting: "Hallo",
    title: "Verklaring Ondertekend",
    subtitle: "Je aansprakelijkheidsverklaring is geregistreerd",
    detailsTitle: "Details van de Verklaring",
    ref: "Referentie",
    dateOfBirth: "Geboortedatum",
    signedAt: "Ondertekend op",
    safetyTitle: "Samenvatting Veiligheidsregels",
    rule1: "Volg altijd de instructies van het personeel en gooi nooit zonder toezicht",
    rule2: "Gesloten schoenen verplicht - geen sandalen of slippers",
    rule3: "Geen alcohol of drugs voor of tijdens de sessie",
    rule4: "Blijf te allen tijde achter de werplijn",
    rule5: "Gooi alleen bijlen naar aangewezen doelen en alleen op instructie",
    liabilityText:
      "Door deze verklaring te ondertekenen, erken je de inherente risico's van bijlwerpen en ga je akkoord met het volgen van alle veiligheidsrichtlijnen. Je bevestigt dat je fysiek in staat bent om deel te nemen en aanvaardt de volledige verantwoordelijkheid voor je acties tijdens de sessie.",
    signatureTitle: "Je Handtekening",
    keepEmail:
      "Bewaar deze e-mail als bewijs van je ondertekende verklaring. Het kan worden gevraagd bij aankomst.",
    contactText: "Vragen? Neem contact met ons op via",
    footer: "Axe Throwing Tenerife",
  },
};

type TranslationKey = keyof typeof translations;

export interface WaiverConfirmationProps {
  waiverRef: string;
  signerName: string;
  email: string;
  dateOfBirth: string;
  signedAt: string;
  signatureDataUrl: string;
  language?: string;
}

export function WaiverConfirmation({
  waiverRef = "WVR-2026-XXXXX",
  signerName = "Guest",
  email = "guest@example.com",
  dateOfBirth = "01/01/1990",
  signedAt = "17 March 2026, 14:30",
  signatureDataUrl = "",
  language = "en",
}: WaiverConfirmationProps) {
  const t = translations[language as TranslationKey] ?? translations.en;

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
              {t.greeting} {signerName},
            </Text>
          </Section>

          {/* Waiver Details */}
          <Section style={contentSection}>
            <Heading as="h2" style={h2}>
              {t.detailsTitle}
            </Heading>
            <Section style={detailsTable}>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.ref}</Column>
                <Column style={detailValue}>{waiverRef}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.dateOfBirth}</Column>
                <Column style={detailValue}>{dateOfBirth}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>{t.signedAt}</Column>
                <Column style={detailValue}>{signedAt}</Column>
              </Row>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Safety Rules */}
          <Section style={safetySection}>
            <Heading as="h2" style={h2Safety}>
              {t.safetyTitle}
            </Heading>
            <Text style={ruleText}>1. {t.rule1}</Text>
            <Text style={ruleText}>2. {t.rule2}</Text>
            <Text style={ruleText}>3. {t.rule3}</Text>
            <Text style={ruleText}>4. {t.rule4}</Text>
            <Text style={ruleText}>5. {t.rule5}</Text>
          </Section>

          <Hr style={divider} />

          {/* Liability */}
          <Section style={contentSection}>
            <Text style={liabilityStyle}>{t.liabilityText}</Text>
          </Section>

          <Hr style={divider} />

          {/* Signature */}
          <Section style={contentSection}>
            <Heading as="h2" style={h2}>
              {t.signatureTitle}
            </Heading>
            <Section style={signatureContainer}>
              <Img
                src={signatureDataUrl}
                width="300"
                height="100"
                alt="Signature"
                style={signatureImage}
              />
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Keep Email Note */}
          <Section style={contentSection}>
            <Text style={noteText}>{t.keepEmail}</Text>
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

export default WaiverConfirmation;

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

const h2Safety = {
  color: "#f59e0b",
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

const divider = {
  borderColor: "#2a2a2a",
  margin: "8px 30px",
};

const safetySection = {
  padding: "16px 30px",
  backgroundColor: "#1a1a0f",
  borderLeft: "3px solid #f59e0b",
  margin: "0 30px",
  borderRadius: "4px",
};

const ruleText = {
  color: "#d4a017",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0 0 6px",
};

const liabilityStyle = {
  color: "#a0a0a0",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0",
};

const signatureContainer = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "12px",
  textAlign: "center" as const,
};

const signatureImage = {
  margin: "0 auto",
};

const link = {
  color: "#00b4d8",
  textDecoration: "underline",
  fontSize: "14px",
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
