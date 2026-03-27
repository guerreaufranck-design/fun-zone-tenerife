'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gift, Check, ChevronRight, Users, Clock,
  Axe, Target, Gamepad2, Swords, Brain, MapIcon,
  PartyPopper, CircleDot, Briefcase, GlassWater,
  CreditCard, Minus, Plus, Loader2, Smartphone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createClient } from '@/lib/supabase/client';

function getIconForSlug(slug: string, laneType: string) {
  if (slug.includes('escape')) return MapIcon;
  if (slug.includes('quizzaboom') || slug.includes('quiz')) return Brain;
  if (slug.includes('ninja') || slug.includes('initiation')) return Swords;
  if (slug.includes('premium')) return Target;
  if (slug.includes('darts-pixels') || laneType === 'darts_pixels') return Gamepad2;
  if (slug.includes('classic-darts') || laneType === 'classic_darts') return CircleDot;
  if (slug.includes('team') || slug.includes('teambuilding')) return Briefcase;
  if (slug.includes('bachelor') || slug.includes('despedida')) return GlassWater;
  if (slug.includes('birthday')) return PartyPopper;
  return Axe;
}

function getColorForSlug(slug: string): string {
  if (slug.includes('escape')) return '#ff2d7b';
  if (slug.includes('quizzaboom') || slug.includes('quiz')) return '#a855f7';
  if (slug.includes('ninja') || slug.includes('initiation')) return '#8b5cf6';
  if (slug.includes('darts') || slug.includes('classic-darts')) return '#39ff14';
  if (slug.includes('premium') || slug.includes('despedida') || slug.includes('bachelor') || slug.includes('team') || slug.includes('birthday')) return '#ff6b00';
  return '#00d4ff';
}

interface GiftExperience {
  slug: string;
  title: string;
  duration: number;
  maxPlayers: number;
  fromPrice: number;
  isEscape: boolean;
  icon: typeof Axe;
  color: string;
}

const ESCAPE_PRICING = [
  { phones: 1, price: 25 },
  { phones: 2, price: 35 },
  { phones: 3, price: 45 },
];

const ui: Record<string, Record<string, string>> = {
  title: { en: 'Gift Voucher', fr: 'Bon Cadeau', es: 'Tarjeta Regalo', de: 'Geschenkgutschein', it: 'Buono Regalo' },
  subtitle: {
    en: 'Give the gift of an unforgettable experience at Fun Zone Tenerife!',
    fr: 'Offrez une expérience inoubliable à Fun Zone Tenerife !',
    es: '¡Regala una experiencia inolvidable en Fun Zone Tenerife!',
    de: 'Schenken Sie ein unvergessliches Erlebnis bei Fun Zone Tenerife!',
    it: 'Regala un\'esperienza indimenticabile a Fun Zone Tenerife!',
  },
  chooseExp: { en: 'Choose experience', fr: 'Choisir l\'expérience', es: 'Elegir experiencia', de: 'Erlebnis wählen', it: 'Scegli esperienza' },
  details: { en: 'Details', fr: 'Détails', es: 'Detalles', de: 'Details', it: 'Dettagli' },
  recipient: { en: 'Recipient', fr: 'Destinataire', es: 'Destinatario', de: 'Empfänger', it: 'Destinatario' },
  players: { en: 'players', fr: 'joueurs', es: 'jugadores', de: 'Spieler', it: 'giocatori' },
  player: { en: 'player', fr: 'joueur', es: 'jugador', de: 'Spieler', it: 'giocatore' },
  teams: { en: 'teams (phones)', fr: 'équipes (téléphones)', es: 'equipos (teléfonos)', de: 'Teams (Handys)', it: 'squadre (telefoni)' },
  team: { en: 'team (phone)', fr: 'équipe (téléphone)', es: 'equipo (teléfono)', de: 'Team (Handy)', it: 'squadra (telefono)' },
  howMany: { en: 'How many?', fr: 'Combien ?', es: '¿Cuántos?', de: 'Wie viele?', it: 'Quanti?' },
  recipientName: { en: 'Recipient name', fr: 'Nom du destinataire', es: 'Nombre del destinatario', de: 'Name des Empfängers', it: 'Nome del destinatario' },
  recipientEmail: { en: 'Recipient email', fr: 'Email du destinataire', es: 'Email del destinatario', de: 'E-Mail des Empfängers', it: 'Email del destinatario' },
  message: { en: 'Personal message (optional)', fr: 'Message personnel (optionnel)', es: 'Mensaje personal (opcional)', de: 'Persönliche Nachricht (optional)', it: 'Messaggio personale (opzionale)' },
  from: { en: 'From', fr: 'À partir de', es: 'Desde', de: 'Ab', it: 'Da' },
  perPerson: { en: '/pp', fr: '/pers.', es: '/pers.', de: '/Pers.', it: '/pers.' },
  perTeam: { en: '/team', fr: '/équipe', es: '/equipo', de: '/Team', it: '/squadra' },
  pay: { en: 'Pay', fr: 'Payer', es: 'Pagar', de: 'Bezahlen', it: 'Pagare' },
  back: { en: 'Back', fr: 'Retour', es: 'Volver', de: 'Zurück', it: 'Indietro' },
  next: { en: 'Next', fr: 'Suivant', es: 'Siguiente', de: 'Weiter', it: 'Avanti' },
  voucherPreview: { en: 'Voucher Preview', fr: 'Aperçu du bon', es: 'Vista previa', de: 'Gutschein-Vorschau', it: 'Anteprima buono' },
  validFor: { en: 'Valid for 12 months', fr: 'Valable 12 mois', es: 'Válido 12 meses', de: 'Gültig für 12 Monate', it: 'Valido 12 mesi' },
  selectExp: { en: 'Select an experience', fr: 'Sélectionnez une expérience', es: 'Selecciona una experiencia', de: 'Wählen Sie ein Erlebnis', it: 'Seleziona un\'esperienza' },
  totalValue: { en: 'Total Value', fr: 'Valeur Totale', es: 'Valor Total', de: 'Gesamtwert', it: 'Valore Totale' },
  comingSoon: { en: 'Payment coming soon — contact us to purchase!', fr: 'Paiement bientôt disponible — contactez-nous pour acheter !', es: '¡Pago próximamente — contáctenos para comprar!', de: 'Zahlung bald verfügbar — kontaktieren Sie uns!', it: 'Pagamento in arrivo — contattateci per acquistare!' },
};

export default function GiftVoucherPage() {
  const locale = useLocale();
  const t = (key: string) => ui[key]?.[locale] || ui[key]?.['en'] || key;

  const [experiences, setExperiences] = useState<GiftExperience[]>([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  useEffect(() => {
    async function fetchOffers() {
      const supabase = createClient();
      const [offersRes, pricingRes] = await Promise.all([
        supabase.from('offers').select('id, slug, title, duration_minutes, min_players, max_players, lane_type, is_active, sort_order').eq('is_active', true).neq('backoffice_only', true).order('sort_order'),
        supabase.from('offer_pricing').select('offer_id, players, price_cents'),
      ]);
      if (!offersRes.data || !pricingRes.data) { setLoadingExperiences(false); return; }

      const pricingByOffer = new Map<string, { players: number; price_cents: number }[]>();
      for (const p of pricingRes.data) {
        if (!pricingByOffer.has(p.offer_id)) pricingByOffer.set(p.offer_id, []);
        pricingByOffer.get(p.offer_id)!.push(p);
      }

      const mapped: GiftExperience[] = offersRes.data.map((offer) => {
        const pricing = pricingByOffer.get(offer.id) || [];
        const isEscape = offer.slug.includes('escape');
        let minPrice = 0;
        if (isEscape) {
          minPrice = 25;
        } else if (pricing.length > 0) {
          if (offer.lane_type === 'classic_darts') {
            minPrice = pricing[0].price_cents / 100;
          } else {
            minPrice = Math.min(...pricing.map((p) => p.price_cents / p.players / 100));
          }
        }
        const titleObj = offer.title as Record<string, string>;
        return {
          slug: offer.slug,
          title: titleObj[locale] || titleObj['en'] || offer.slug,
          duration: offer.duration_minutes,
          maxPlayers: offer.max_players,
          fromPrice: Math.round(minPrice),
          isEscape,
          icon: getIconForSlug(offer.slug, offer.lane_type),
          color: getColorForSlug(offer.slug),
        };
      });
      setExperiences(mapped);
      setLoadingExperiences(false);
    }
    fetchOffers();
  }, [locale]);

  const [step, setStep] = useState(1);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(2);
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');

  const selected = experiences.find((e) => e.slug === selectedSlug);
  const isEscape = selected?.isEscape ?? false;

  const totalPrice = (() => {
    if (!selected) return 0;
    if (isEscape) {
      return ESCAPE_PRICING.find((p) => p.phones === quantity)?.price ?? 25;
    }
    return selected.fromPrice * quantity;
  })();

  const maxQty = isEscape ? 3 : (selected?.maxPlayers || 9);
  const minQty = isEscape ? 1 : 1;

  // Reset quantity when switching between escape/non-escape
  useEffect(() => {
    if (isEscape && quantity > 3) setQuantity(1);
  }, [isEscape, quantity]);

  const formatDuration = (minutes: number) => minutes >= 60 ? `${minutes / 60}h` : `${minutes}min`;

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedSlug;
      case 2: return quantity >= minQty;
      case 3: return recipientName.trim().length > 0 && recipientEmail.trim().length > 0;
      default: return false;
    }
  };

  const steps = [
    { number: 1, label: t('chooseExp') },
    { number: 2, label: t('details') },
    { number: 3, label: t('recipient') },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/5 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10">
            <Gift className="h-8 w-8 text-[#8b5cf6]" />
          </div>
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl">{t('title')}</h1>
          <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
        </div>
      </section>

      {/* Step indicators */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between">
            {steps.map((s, index) => (
              <div key={s.number} className="flex flex-1 items-center">
                <button onClick={() => { if (s.number < step) setStep(s.number); }} className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
                    step >= s.number ? 'border border-neon-orange/50 bg-neon-orange/10 text-neon-orange shadow-[0_0_10px_rgba(255,140,0,0.2)]' : 'border border-border/50 bg-[#111118] text-muted-foreground'
                  }`}>
                    {step > s.number ? <Check className="h-4 w-4" /> : s.number}
                  </div>
                  <span className={`hidden text-sm font-medium sm:block ${step >= s.number ? 'text-white' : 'text-muted-foreground'}`}>{s.label}</span>
                </button>
                {index < steps.length - 1 && <div className={`mx-3 h-px flex-1 transition-all ${step > s.number ? 'bg-neon-orange/40' : 'bg-border/30'}`} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <h2 className="mb-6 text-xl font-bold text-white">{t('chooseExp')}</h2>
                    {loadingExperiences ? (
                      <div className="flex items-center justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-neon-orange" /></div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {experiences.map((exp) => {
                          const Icon = exp.icon;
                          const isSel = selectedSlug === exp.slug;
                          return (
                            <button key={exp.slug} onClick={() => setSelectedSlug(exp.slug)}
                              className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition-all ${
                                isSel ? 'border-neon-orange/50 bg-neon-orange/5 shadow-[0_0_20px_rgba(255,140,0,0.1)]' : 'border-border/50 bg-[#111118] hover:border-border'
                              }`}
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border" style={{ borderColor: `${exp.color}30`, backgroundColor: `${exp.color}10` }}>
                                <Icon className="h-5 w-5" style={{ color: exp.color }} />
                              </div>
                              <div className="flex-1">
                                <h3 className="mb-1 font-semibold text-white">{exp.title}</h3>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{formatDuration(exp.duration)}</span>
                                  {!exp.isEscape && <span className="flex items-center gap-1"><Users className="h-3 w-3" />1-{exp.maxPlayers}</span>}
                                  {exp.isEscape && <span className="flex items-center gap-1"><Smartphone className="h-3 w-3" />1-3 teams</span>}
                                </div>
                                <div className="mt-1 text-sm font-bold" style={{ color: exp.color }}>
                                  {t('from')} €{exp.fromPrice}{exp.isEscape ? t('perTeam') : t('perPerson')}
                                </div>
                              </div>
                              {isSel && <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neon-orange"><Check className="h-4 w-4 text-black" /></div>}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="mb-6 text-xl font-bold text-white">{t('howMany')}</h2>
                    <Card className="border-border/50 bg-[#111118]">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center gap-6">
                          {isEscape ? (
                            /* Escape: choose phones/teams */
                            <div className="grid w-full grid-cols-3 gap-3">
                              {ESCAPE_PRICING.map((tier) => (
                                <button key={tier.phones} onClick={() => setQuantity(tier.phones)}
                                  className={`rounded-xl border p-5 text-center transition-all ${
                                    quantity === tier.phones ? 'border-[#ff2d7b]/50 bg-[#ff2d7b]/10 shadow-[0_0_20px_rgba(255,45,123,0.15)]' : 'border-border/50 bg-[#0a0a0f]'
                                  }`}
                                >
                                  <div className="mb-2 flex items-center justify-center gap-1">
                                    {Array.from({ length: tier.phones }).map((_, i) => <Smartphone key={i} size={18} className="text-[#ff2d7b]" />)}
                                  </div>
                                  <p className="text-xs text-muted-foreground">{tier.phones} {tier.phones === 1 ? t('team') : t('teams')}</p>
                                  <p className="mt-1 text-2xl font-bold text-white">{tier.price}<span className="text-sm text-muted-foreground">€</span></p>
                                </button>
                              ))}
                            </div>
                          ) : (
                            /* Regular: choose players */
                            <div className="flex items-center gap-6">
                              <button onClick={() => setQuantity(Math.max(minQty, quantity - 1))} className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-[#0a0a0f] text-white transition-all hover:border-neon-orange/30 hover:text-neon-orange disabled:opacity-30" disabled={quantity <= minQty}>
                                <Minus className="h-5 w-5" />
                              </button>
                              <div className="text-center">
                                <div className="neon-glow text-5xl font-bold text-neon-orange">{quantity}</div>
                                <div className="mt-1 text-sm text-muted-foreground">{quantity === 1 ? t('player') : t('players')}</div>
                              </div>
                              <button onClick={() => setQuantity(Math.min(maxQty, quantity + 1))} className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-[#0a0a0f] text-white transition-all hover:border-neon-orange/30 hover:text-neon-orange" disabled={quantity >= maxQty}>
                                <Plus className="h-5 w-5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="mb-6 text-xl font-bold text-white">{t('recipient')}</h2>
                    <Card className="border-border/50 bg-[#111118]">
                      <CardContent className="space-y-5 pt-6">
                        <div>
                          <Label htmlFor="rn">{t('recipientName')} *</Label>
                          <Input id="rn" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} placeholder="John Doe" className="mt-1.5" />
                        </div>
                        <div>
                          <Label htmlFor="re">{t('recipientEmail')} *</Label>
                          <Input id="re" type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} placeholder="john@example.com" className="mt-1.5" />
                        </div>
                        <div>
                          <Label htmlFor="pm">{t('message')}</Label>
                          <Textarea id="pm" value={personalMessage} onChange={(e) => setPersonalMessage(e.target.value)} placeholder="Happy birthday!" className="mt-1.5" rows={4} />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Nav buttons */}
              <div className="mt-6 flex items-center justify-between">
                <Button variant="ghost" onClick={() => setStep(Math.max(1, step - 1))} className={step === 1 ? 'invisible' : ''}>{t('back')}</Button>
                {step < 3 ? (
                  <Button variant="neon" onClick={() => setStep(step + 1)} disabled={!canProceed()}>
                    {t('next')} <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="neon" size="lg" disabled={!canProceed()} onClick={() => {
                    // TODO: integrate Stripe for gift vouchers
                    window.location.href = `mailto:axethrowingtenerife@gmail.com?subject=Gift Voucher Request&body=Experience: ${selected?.title}%0AQuantity: ${quantity}%0ARecipient: ${recipientName}%0AEmail: ${recipientEmail}%0AMessage: ${personalMessage}%0ATotal: €${totalPrice}`;
                  }}>
                    <CreditCard className="mr-2 h-5 w-5" />
                    {t('pay')} €{totalPrice}
                  </Button>
                )}
              </div>
            </div>

            {/* Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">{t('voucherPreview')}</h3>
                <div className="relative overflow-hidden rounded-2xl border border-border/50">
                  <div className="relative bg-gradient-to-br from-[#111118] via-[#1a1a2e] to-[#0d0d1a] p-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-orange/10 via-transparent to-[#8b5cf6]/10" />
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-neon-orange/40 via-transparent to-[#8b5cf6]/40" />
                    <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-[#8b5cf6]/40 via-transparent to-neon-orange/40" />
                    <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-neon-orange/40 via-transparent to-[#8b5cf6]/40" />
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#8b5cf6]/40 via-transparent to-neon-orange/40" />

                    <div className="relative">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-orange/30 bg-neon-orange/10">
                          <Gift className="h-5 w-5 text-neon-orange" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-neon-orange">{t('title')}</p>
                          <p className="text-sm font-bold text-white">Fun Zone Tenerife</p>
                        </div>
                      </div>

                      {selected ? (
                        <div className="mb-4 rounded-lg border border-border/30 bg-[#0a0a0f]/50 p-3">
                          <p className="text-xs text-muted-foreground">Experience</p>
                          <p className="font-bold text-white">{selected.title}</p>
                          <div className="mt-1 flex gap-2">
                            <Badge variant="neonBlue" className="text-[10px]"><Clock className="mr-1 h-3 w-3" />{formatDuration(selected.duration)}</Badge>
                            <Badge variant="neonViolet" className="text-[10px]">
                              {isEscape ? <><Smartphone className="mr-1 h-3 w-3" />{quantity} {quantity === 1 ? t('team') : t('teams')}</> : <><Users className="mr-1 h-3 w-3" />{quantity} {quantity === 1 ? t('player') : t('players')}</>}
                            </Badge>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-4 rounded-lg border border-dashed border-border/30 bg-[#0a0a0f]/30 p-3">
                          <p className="text-center text-xs text-muted-foreground">{t('selectExp')}</p>
                        </div>
                      )}

                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground">For</p>
                        <p className="font-semibold text-white">{recipientName || '...'}</p>
                      </div>

                      {personalMessage && (
                        <div className="mb-4 rounded-lg bg-[#0a0a0f]/30 p-3">
                          <p className="text-xs italic text-muted-foreground">&ldquo;{personalMessage}&rdquo;</p>
                        </div>
                      )}

                      <div className="flex items-end justify-between border-t border-border/30 pt-4">
                        <div>
                          <p className="text-xs text-muted-foreground">{t('totalValue')}</p>
                          <p className="neon-glow text-3xl font-bold text-neon-orange">€{totalPrice}</p>
                        </div>
                        <p className="text-right text-[10px] text-muted-foreground">{t('validFor')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
