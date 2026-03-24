import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Preview,
  Button,
} from "@react-email/components";
import * as React from "react";

const GOOGLE_REVIEW_URL =
  "https://g.page/r/CX4W8jcTgFqHEAE/review";

const translations = {
  en: {
    preview: "How was your axe throwing experience?",
    greeting: "Hey",
    title: "You survived! Now throw us a review",
    subtitle:
      "Yesterday you proved you can throw axes like a Viking. Now we need your help with something much easier...",
    body: "A quick Google review means the world to us! It takes less than a minute and helps other adventurers find us.",
    cta: "Leave a Review",
    thanks: "Thanks a million, you legend!",
    ps: "P.S. We promise no axes will be thrown at you for leaving an honest review.",
    footer: "Axe Throwing Tenerife",
  },
  es: {
    preview: "Como fue tu experiencia de lanzamiento de hacha?",
    greeting: "Hey",
    title: "Sobreviviste! Ahora lanzanos una resena",
    subtitle:
      "Ayer demostraste que puedes lanzar hachas como un vikingo. Ahora necesitamos tu ayuda con algo mucho mas facil...",
    body: "Una resena rapida en Google significa muchisimo para nosotros! Tarda menos de un minuto y ayuda a otros aventureros a encontrarnos.",
    cta: "Dejar una Resena",
    thanks: "Mil gracias, eres una leyenda!",
    ps: "P.D. Prometemos que no te lanzaremos hachas por dejar una resena honesta.",
    footer: "Axe Throwing Tenerife",
  },
  fr: {
    preview: "Comment etait votre experience de lancer de hache ?",
    greeting: "Hey",
    title: "Vous avez survecu ! Maintenant lancez-nous un avis",
    subtitle:
      "Hier vous avez prouve que vous pouvez lancer des haches comme un Viking. Maintenant on a besoin de votre aide pour quelque chose de beaucoup plus facile...",
    body: "Un petit avis sur Google represente enormement pour nous ! Ca prend moins d'une minute et aide d'autres aventuriers a nous trouver.",
    cta: "Laisser un Avis",
    thanks: "Merci mille fois, vous etes une legende !",
    ps: "P.S. On promet de ne pas vous lancer de haches pour un avis honnete.",
    footer: "Axe Throwing Tenerife",
  },
  de: {
    preview: "Wie war Ihr Axtwurf-Erlebnis?",
    greeting: "Hey",
    title: "Du hast uberlebt! Jetzt wirf uns eine Bewertung",
    subtitle:
      "Gestern hast du bewiesen, dass du Axte wie ein Wikinger werfen kannst. Jetzt brauchen wir deine Hilfe bei etwas viel Einfacherem...",
    body: "Eine kurze Google-Bewertung bedeutet uns die Welt! Es dauert weniger als eine Minute und hilft anderen Abenteurern, uns zu finden.",
    cta: "Bewertung Abgeben",
    thanks: "Tausend Dank, du Legende!",
    ps: "P.S. Wir versprechen, keine Axte auf dich zu werfen fur eine ehrliche Bewertung.",
    footer: "Axe Throwing Tenerife",
  },
  nl: {
    preview: "Hoe was je bijlwerp-ervaring?",
    greeting: "Hey",
    title: "Je hebt het overleefd! Gooi ons nu een review",
    subtitle:
      "Gisteren bewees je dat je bijlen kunt gooien als een Viking. Nu hebben we je hulp nodig bij iets veel makkelijkers...",
    body: "Een snelle Google review betekent enorm veel voor ons! Het kost minder dan een minuut en helpt andere avonturiers ons te vinden.",
    cta: "Laat een Review Achter",
    thanks: "Duizendmaal dank, jij legende!",
    ps: "P.S. We beloven geen bijlen naar je te gooien voor een eerlijke review.",
    footer: "Axe Throwing Tenerife",
  },
};

type Lang = keyof typeof translations;

export interface ReviewRequestProps {
  signerName: string;
  language?: string;
}

export function ReviewRequest({
  signerName = "Adventurer",
  language = "en",
}: ReviewRequestProps) {
  const t = translations[(language as Lang)] ?? translations.en;

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={headerEmoji}>🪓</Text>
            <Heading as="h1" style={h1}>
              {t.title}
            </Heading>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={greeting}>
              {t.greeting} {signerName}! 👋
            </Text>

            <Text style={text}>{t.subtitle}</Text>

            <Text style={text}>{t.body}</Text>

            {/* Stars decoration */}
            <Section style={starsSection}>
              <Text style={stars}>⭐⭐⭐⭐⭐</Text>
            </Section>

            {/* CTA Button */}
            <Section style={buttonContainer}>
              <Button style={button} href={GOOGLE_REVIEW_URL}>
                {t.cta} →
              </Button>
            </Section>

            <Text style={thanksText}>{t.thanks} 🙏</Text>

            <Text style={psText}>{t.ps} 🪓😄</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>{t.footer}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const body = {
  backgroundColor: "#0d0d14",
  fontFamily: "Arial, Helvetica, sans-serif",
  margin: "0",
  padding: "0",
};

const container = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "20px 0",
};

const header = {
  backgroundColor: "#111118",
  borderRadius: "12px 12px 0 0",
  padding: "32px 24px",
  textAlign: "center" as const,
  borderBottom: "2px solid #00d4ff",
};

const headerEmoji = {
  fontSize: "48px",
  margin: "0 0 8px 0",
};

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "800" as const,
  margin: "0",
  lineHeight: "1.3",
};

const content = {
  backgroundColor: "#111118",
  padding: "32px 24px",
};

const greeting = {
  color: "#00d4ff",
  fontSize: "18px",
  fontWeight: "700" as const,
  margin: "0 0 16px 0",
};

const text = {
  color: "#d1d5db",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const starsSection = {
  textAlign: "center" as const,
  padding: "8px 0 16px 0",
};

const stars = {
  fontSize: "32px",
  margin: "0",
  letterSpacing: "4px",
};

const buttonContainer = {
  textAlign: "center" as const,
  padding: "8px 0 24px 0",
};

const button = {
  backgroundColor: "#00d4ff",
  color: "#000000",
  padding: "14px 32px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "800" as const,
  textDecoration: "none",
  display: "inline-block" as const,
};

const thanksText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600" as const,
  textAlign: "center" as const,
  margin: "0 0 16px 0",
};

const psText = {
  color: "#9ca3af",
  fontSize: "13px",
  fontStyle: "italic" as const,
  textAlign: "center" as const,
  margin: "0",
};

const footer = {
  backgroundColor: "#111118",
  borderRadius: "0 0 12px 12px",
  padding: "16px 24px",
  textAlign: "center" as const,
  borderTop: "1px solid #1f2937",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  margin: "0",
};
