'use client';

import { useState, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, Axe, Target, Users, Heart, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SignaturePad from '@/components/SignaturePad';

export default function WaiverPage() {
  const t = useTranslations('waiver');
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [signatureData, setSignatureData] = useState<string | null>(null);
  const [waiverRef, setWaiverRef] = useState<string>('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const [discoverySource, setDiscoverySource] = useState<string>('');
  const [discoverySourceOther, setDiscoverySourceOther] = useState('');
  const [photoConsent, setPhotoConsent] = useState<boolean | null>(null);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    dateOfBirth: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSignatureChange = useCallback((dataUrl: string | null) => {
    setSignatureData(dataUrl);
    if (dataUrl && errors.signature) {
      setErrors(prev => ({ ...prev, signature: false }));
    }
  }, [errors.signature]);

  const validateAge = (dob: string): boolean => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age >= 12;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, boolean> = {};
    if (!form.firstName.trim()) newErrors.firstName = true;
    if (!form.lastName.trim()) newErrors.lastName = true;
    if (!form.address.trim()) newErrors.address = true;
    if (!form.phone.trim()) newErrors.phone = true;
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = true;
    if (!form.dateOfBirth) newErrors.dateOfBirth = true;
    else if (!validateAge(form.dateOfBirth)) newErrors.ageRestriction = true;
    if (!accepted) newErrors.accepted = true;
    if (!signatureData) newErrors.signature = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/waiver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          address: form.address,
          phone: form.phone,
          email: form.email,
          dateOfBirth: form.dateOfBirth,
          signatureData,
          accepted: true,
          language: locale,
          discoverySource: discoverySource || undefined,
          discoverySourceOther: discoverySource === 'other' ? discoverySourceOther : undefined,
          photoConsent: photoConsent ?? undefined,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setWaiverRef(data.waiverRef || '');
        setSubmittedEmail(form.email);
        setSubmitted(true);
      }
    } catch {
      // handle error silently
    } finally {
      setLoading(false);
    }
  };

  const copyRef = () => {
    navigator.clipboard.writeText(waiverRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#00ff88]" />
          </div>
          <h1 className="text-3xl font-heading font-bold mb-4 neon-glow">{t('thankYou')}</h1>
          <p className="text-muted-foreground text-lg mb-6">{t('submitted')}</p>

          {/* Reference Number */}
          {waiverRef && (
            <div className="bg-card border border-border rounded-xl p-4 mb-4">
              <p className="text-xs text-muted-foreground mb-1">{t('referenceNumber')}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-heading font-bold text-primary">{waiverRef}</span>
                <button onClick={copyRef} className="text-muted-foreground hover:text-primary transition-colors">
                  {copied ? <Check className="h-4 w-4 text-[#00ff88]" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Email confirmation */}
          {submittedEmail && (
            <p className="text-sm text-muted-foreground">
              {t('emailConfirmation')} <span className="text-foreground font-medium">{submittedEmail}</span>
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  const rules = [
    { key: 'rule1', icon: Users, title: t('rule1Title') },
    { key: 'rule2', icon: Target, title: t('rule2Title') },
    { key: 'rule3', icon: Axe, title: t('rule3Title') },
    { key: 'rule4', icon: AlertTriangle, title: t('rule4Title') },
    { key: 'rule5', icon: Heart, title: t('rule5Title') },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold mb-3 neon-glow">{t('title')}</h1>
          <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t('firstName')} *</Label>
                  <Input
                    id="firstName"
                    value={form.firstName}
                    onChange={e => handleChange('firstName', e.target.value)}
                    className={errors.firstName ? 'border-red-500' : ''}
                  />
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{t('required')}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">{t('lastName')} *</Label>
                  <Input
                    id="lastName"
                    value={form.lastName}
                    onChange={e => handleChange('lastName', e.target.value)}
                    className={errors.lastName ? 'border-red-500' : ''}
                  />
                  {errors.lastName && <p className="text-red-400 text-sm mt-1">{t('required')}</p>}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">{t('email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    placeholder={t('emailPlaceholder')}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{t('emailInvalid')}</p>}
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">{t('dateOfBirth')} *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={form.dateOfBirth}
                    onChange={e => handleChange('dateOfBirth', e.target.value)}
                    className={errors.dateOfBirth || errors.ageRestriction ? 'border-red-500' : ''}
                  />
                  {errors.dateOfBirth && <p className="text-red-400 text-sm mt-1">{t('required')}</p>}
                  {errors.ageRestriction && <p className="text-red-400 text-sm mt-1">{t('ageRestriction')}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">{t('phone')} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{t('required')}</p>}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="address">{t('address')} *</Label>
                  <Input
                    id="address"
                    value={form.address}
                    onChange={e => handleChange('address', e.target.value)}
                    className={errors.address ? 'border-red-500' : ''}
                  />
                  {errors.address && <p className="text-red-400 text-sm mt-1">{t('required')}</p>}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Discovery Source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading neon-glow">
                  {t('discoveryTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {(['tiktok', 'instagram', 'walking_by', 'get_your_guide', 'internet', 'other'] as const).map((source) => {
                    const labelKey = {
                      tiktok: 'discoveryTikTok',
                      instagram: 'discoveryInstagram',
                      walking_by: 'discoveryWalkingBy',
                      get_your_guide: 'discoveryGetYourGuide',
                      internet: 'discoveryInternet',
                      other: 'discoveryOther',
                    }[source] as 'discoveryTikTok' | 'discoveryInstagram' | 'discoveryWalkingBy' | 'discoveryGetYourGuide' | 'discoveryInternet' | 'discoveryOther';
                    return (
                      <button
                        key={source}
                        type="button"
                        onClick={() => setDiscoverySource(discoverySource === source ? '' : source)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                          discoverySource === source
                            ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(0,212,255,0.2)]'
                            : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                        }`}
                      >
                        {t(labelKey)}
                      </button>
                    );
                  })}
                </div>
                {discoverySource === 'other' && (
                  <Input
                    className="mt-3"
                    placeholder={t('discoveryOtherPlaceholder')}
                    value={discoverySourceOther}
                    onChange={(e) => setDiscoverySourceOther(e.target.value)}
                  />
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Safety Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading neon-glow">
                  {t('safetyRulesTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {rules.map(({ key, icon: Icon, title }) => (
                  <div key={key} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(key as 'rule1' | 'rule2' | 'rule3' | 'rule4' | 'rule5')}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Liability Waiver */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className={errors.accepted ? 'border-red-500' : ''}>
              <CardContent className="pt-6">
                <div className="bg-muted/50 rounded-lg p-4 mb-6 border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('acceptText')}
                  </p>
                </div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={e => {
                      setAccepted(e.target.checked);
                      if (errors.accepted) setErrors(prev => ({ ...prev, accepted: false }));
                    }}
                    className="mt-1 w-5 h-5 rounded border-border bg-muted accent-[#00d4ff]"
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {t('accept')}
                  </span>
                </label>
                {errors.accepted && (
                  <p className="text-red-400 text-sm mt-2">{t('mustAccept')}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Photo Consent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.33 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading neon-glow">
                  {t('photoConsentTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{t('photoConsentText')}</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setPhotoConsent(true)}
                    className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                      photoConsent === true
                        ? 'bg-[#00ff88]/10 border-[#00ff88] text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                        : 'border-border text-muted-foreground hover:border-[#00ff88]/40'
                    }`}
                  >
                    {t('photoConsentYes')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPhotoConsent(false)}
                    className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                      photoConsent === false
                        ? 'bg-red-500/10 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                        : 'border-border text-muted-foreground hover:border-red-500/40'
                    }`}
                  >
                    {t('photoConsentNo')}
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Card className={errors.signature ? 'border-red-500' : ''}>
              <CardHeader>
                <CardTitle className="text-xl font-heading neon-glow">
                  {t('signatureTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SignaturePad onChange={handleSignatureChange} error={!!errors.signature} />
                {errors.signature && (
                  <p className="text-red-400 text-sm mt-2">{t('signatureRequired')}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              type="submit"
              variant="neon"
              size="xl"
              className="w-full"
              disabled={loading}
            >
              {loading ? '...' : t('submit')}
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
