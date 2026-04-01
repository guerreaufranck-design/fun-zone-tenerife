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

export interface IslandPassGame {
  gameName: string;
  city: string;
  estimatedDuration: string;
  code: string;
}

interface IslandPassEmailProps {
  customerName: string;
  games: IslandPassGame[];
  appUrl: string;
  language?: string;
}

const t = {
  en: {
    preview: "🏝️ Your Island Pass — 4 escape games are waiting for you!",
    greeting: "Hi",
    title: "🏝️ Your Island Pass is ready!",
    subtitle: "You have unlocked 4 outdoor escape game adventures across Tenerife. Each game has its own activation code below.",
    codeLabel: "Activation Code",
    cityLabel: "Location",
    durationLabel: "Duration",
    howTo: "How to start each adventure",
    step1: "Open the escape game app",
    step2: "Enter the activation code for the game you want to play",
    step3: "Choose your player name and start the adventure!",
    linkLabel: "Open the Escape Game App",
    important: "Important",
    expiry: "Each code is valid for 8 hours after first activation. You can activate each game whenever you want — they are valid for 12 months.",
    tips: "Wear comfortable walking shoes, bring water and sunscreen. Routes are not suitable for strollers.",
    contactText: "Questions? Contact us at",
    footer: "Fun Zone Tenerife — Island Pass",
  },
  fr: {
    preview: "🏝️ Votre Island Pass — 4 escape games vous attendent !",
    greeting: "Bonjour",
    title: "🏝️ Votre Island Pass est prêt !",
    subtitle: "Vous avez débloqué 4 aventures d'escape game en extérieur à travers Tenerife. Chaque jeu possède son propre code d'activation ci-dessous.",
    codeLabel: "Code d'Activation",
    cityLabel: "Lieu",
    durationLabel: "Durée",
    howTo: "Comment commencer chaque aventure",
    step1: "Ouvrez l'application escape game",
    step2: "Entrez le code d'activation du jeu que vous souhaitez jouer",
    step3: "Choisissez votre nom de joueur et lancez l'aventure !",
    linkLabel: "Ouvrir l'App Escape Game",
    important: "Important",
    expiry: "Chaque code est valable 8 heures après la première activation. Vous pouvez activer chaque jeu quand vous voulez — ils sont valides 12 mois.",
    tips: "Portez des chaussures de marche, prévoyez de l'eau et de la crème solaire. Les parcours ne sont pas adaptés aux poussettes.",
    contactText: "Des questions ? Contactez-nous à",
    footer: "Fun Zone Tenerife — Island Pass",
  },
  es: {
    preview: "🏝️ Tu Island Pass — ¡4 escape games te esperan!",
    greeting: "Hola",
    title: "🏝️ ¡Tu Island Pass está listo!",
    subtitle: "Has desbloqueado 4 aventuras de escape game al aire libre por Tenerife. Cada juego tiene su propio código de activación a continuación.",
    codeLabel: "Código de Activación",
    cityLabel: "Ubicación",
    durationLabel: "Duración",
    howTo: "Cómo empezar cada aventura",
    step1: "Abre la app de escape game",
    step2: "Introduce el código de activación del juego que quieres jugar",
    step3: "Elige tu nombre de jugador y ¡comienza la aventura!",
    linkLabel: "Abrir la App de Escape Game",
    important: "Importante",
    expiry: "Cada código es válido durante 8 horas después de la primera activación. Puedes activar cada juego cuando quieras — son válidos 12 meses.",
    tips: "Usa calzado cómodo, lleva agua y protección solar. Los recorridos no son aptos para cochecitos.",
    contactText: "¿Preguntas? Contáctanos en",
    footer: "Fun Zone Tenerife — Island Pass",
  },
  de: {
    preview: "🏝️ Ihr Island Pass — 4 Escape Games warten auf Sie!",
    greeting: "Hallo",
    title: "🏝️ Ihr Island Pass ist bereit!",
    subtitle: "Sie haben 4 Outdoor-Escape-Game-Abenteuer auf Teneriffa freigeschaltet. Jedes Spiel hat unten seinen eigenen Aktivierungscode.",
    codeLabel: "Aktivierungscode",
    cityLabel: "Standort",
    durationLabel: "Dauer",
    howTo: "So starten Sie jedes Abenteuer",
    step1: "Öffnen Sie die Escape Game App",
    step2: "Geben Sie den Aktivierungscode für das gewünschte Spiel ein",
    step3: "Wählen Sie Ihren Spielernamen und starten Sie das Abenteuer!",
    linkLabel: "Escape Game App öffnen",
    important: "Wichtig",
    expiry: "Jeder Code ist nach der ersten Aktivierung 8 Stunden lang gültig. Sie können jedes Spiel aktivieren, wann immer Sie möchten — 12 Monate gültig.",
    tips: "Bequeme Schuhe tragen, Wasser und Sonnencreme mitnehmen. Die Routen sind nicht für Kinderwagen geeignet.",
    contactText: "Fragen? Kontaktieren Sie uns unter",
    footer: "Fun Zone Tenerife — Island Pass",
  },
  it: {
    preview: "🏝️ Il tuo Island Pass — 4 escape game ti aspettano!",
    greeting: "Ciao",
    title: "🏝️ Il tuo Island Pass è pronto!",
    subtitle: "Hai sbloccato 4 avventure di escape game all'aperto in tutta Tenerife. Ogni gioco ha il proprio codice di attivazione qui sotto.",
    codeLabel: "Codice di Attivazione",
    cityLabel: "Luogo",
    durationLabel: "Durata",
    howTo: "Come iniziare ogni avventura",
    step1: "Apri l'app escape game",
    step2: "Inserisci il codice di attivazione del gioco che vuoi giocare",
    step3: "Scegli il tuo nome giocatore e inizia l'avventura!",
    linkLabel: "Apri l'App Escape Game",
    important: "Importante",
    expiry: "Ogni codice è valido per 8 ore dopo la prima attivazione. Puoi attivare ogni gioco quando vuoi — validi 12 mesi.",
    tips: "Indossa scarpe comode, porta acqua e crema solare. I percorsi non sono adatti ai passeggini.",
    contactText: "Domande? Contattaci a",
    footer: "Fun Zone Tenerife — Island Pass",
  },
};

type Lang = keyof typeof t;

const gameColors = [
  { bg: '#1a0f2e', border: '#7c3aed', accent: '#a78bfa' }, // violet — Los Cristianos
  { bg: '#0f1f1a', border: '#059669', accent: '#34d399' }, // vert — La Laguna
  { bg: '#1a0f0a', border: '#d97706', accent: '#fbbf24' }, // orange — Puerto
  { bg: '#1a0a12', border: '#e11d48', accent: '#fb7185' }, // rouge — Garachico
];

export default function IslandPassEmail({
  customerName,
  games,
  appUrl,
  language = 'en',
}: IslandPassEmailProps) {
  const lang = (language in t ? language : 'en') as Lang;
  const tr = t[lang];

  return (
    <Html>
      <Head />
      <Preview>{tr.preview}</Preview>
      <Body style={{ backgroundColor: '#0a0a0f', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>

          {/* Header */}
          <Section style={{ backgroundColor: '#111118', borderRadius: '16px', padding: '32px', marginBottom: '16px', border: '1px solid #ff2d7b40', textAlign: 'center' }}>
            <Text style={{ fontSize: '36px', margin: '0 0 8px', lineHeight: 1 }}>🏝️</Text>
            <Heading style={{ color: '#ffffff', fontSize: '24px', margin: '0 0 8px', fontWeight: 'bold' }}>
              {tr.title}
            </Heading>
            <Text style={{ color: '#ff2d7b', fontSize: '14px', fontWeight: 'bold', margin: '0 0 16px', letterSpacing: '0.05em' }}>
              ISLAND PASS
            </Text>
            <Text style={{ color: '#aaaaaa', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
              {tr.greeting} {customerName}, {tr.subtitle}
            </Text>
          </Section>

          {/* 4 Game Codes */}
          {games.map((game, idx) => {
            const colors = gameColors[idx] ?? gameColors[0];
            return (
              <Section
                key={idx}
                style={{
                  backgroundColor: colors.bg,
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '12px',
                  border: `1px solid ${colors.border}`,
                }}
              >
                {/* Game header */}
                <Text style={{ color: colors.accent, fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.1em', margin: '0 0 4px', textTransform: 'uppercase' }}>
                  {String(idx + 1).padStart(2, '0')} / 04
                </Text>
                <Heading style={{ color: '#ffffff', fontSize: '18px', margin: '0 0 4px', fontWeight: 'bold' }}>
                  {game.gameName}
                </Heading>
                <Text style={{ color: '#888888', fontSize: '13px', margin: '0 0 16px' }}>
                  📍 {game.city} &nbsp;·&nbsp; ⏱ {game.estimatedDuration}
                </Text>

                {/* Code box */}
                <Section style={{ backgroundColor: '#000000', borderRadius: '8px', padding: '16px', textAlign: 'center', border: `1px solid ${colors.border}` }}>
                  <Text style={{ color: '#888888', fontSize: '11px', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {tr.codeLabel}
                  </Text>
                  <Text style={{ color: colors.accent, fontSize: '28px', fontWeight: 'bold', letterSpacing: '0.15em', margin: 0, fontFamily: 'monospace' }}>
                    {game.code}
                  </Text>
                </Section>
              </Section>
            );
          })}

          {/* How to start */}
          <Section style={{ backgroundColor: '#111118', borderRadius: '12px', padding: '24px', marginBottom: '12px', border: '1px solid #333333' }}>
            <Heading style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 16px', fontWeight: 'bold' }}>
              {tr.howTo}
            </Heading>
            <Text style={{ color: '#cccccc', fontSize: '14px', margin: '0 0 8px' }}>1. {tr.step1}</Text>
            <Text style={{ color: '#cccccc', fontSize: '14px', margin: '0 0 8px' }}>2. {tr.step2}</Text>
            <Text style={{ color: '#cccccc', fontSize: '14px', margin: 0 }}>3. {tr.step3}</Text>

            <Section style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link
                href={appUrl}
                style={{ backgroundColor: '#ff2d7b', color: '#ffffff', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}
              >
                {tr.linkLabel}
              </Link>
            </Section>
          </Section>

          {/* Important */}
          <Section style={{ backgroundColor: '#1a1000', borderRadius: '12px', padding: '20px', marginBottom: '12px', border: '1px solid #d9770640' }}>
            <Text style={{ color: '#fbbf24', fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px' }}>
              ⚠️ {tr.important}
            </Text>
            <Text style={{ color: '#cccccc', fontSize: '13px', margin: '0 0 8px', lineHeight: 1.6 }}>
              {tr.expiry}
            </Text>
            <Text style={{ color: '#cccccc', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
              {tr.tips}
            </Text>
          </Section>

          {/* Footer */}
          <Hr style={{ borderColor: '#333333', margin: '16px 0' }} />
          <Text style={{ color: '#555555', fontSize: '12px', textAlign: 'center', margin: 0 }}>
            {tr.contactText}{' '}
            <Link href="mailto:contact@funzonetenerife.com" style={{ color: '#ff2d7b' }}>
              contact@funzonetenerife.com
            </Link>
          </Text>
          <Text style={{ color: '#333333', fontSize: '11px', textAlign: 'center', margin: '8px 0 0' }}>
            {tr.footer}
          </Text>

        </Container>
      </Body>
    </Html>
  );
}
