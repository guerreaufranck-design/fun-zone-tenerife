'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Upload } from 'lucide-react';

const locales = ['en', 'es', 'fr', 'de', 'nl', 'it'] as const;
const localeLabels: Record<string, string> = {
  en: 'English', es: 'Spanish', fr: 'French', de: 'German', nl: 'Dutch', it: 'Italian',
};

export default function BlogEditorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [published, setPublished] = useState(false);

  const [title, setTitle] = useState<Record<string, string>>({
    en: 'Top 5 Tips for Your First Axe Throwing Session',
    es: '', fr: '', de: '', nl: '', it: '',
  });
  const [content, setContent] = useState<Record<string, string>>({
    en: 'New to axe throwing? Here are our top tips to help you hit the bullseye on your first visit.\n\n1. Relax your grip\n2. Follow through\n3. Focus on the target\n4. Use your hips\n5. Have fun!',
    es: '', fr: '', de: '', nl: '', it: '',
  });
  const [excerpt, setExcerpt] = useState<Record<string, string>>({
    en: 'New to axe throwing? Here are our top tips to help you hit the bullseye on your first visit.',
    es: '', fr: '', de: '', nl: '', it: '',
  });
  const [seoTitle, setSeoTitle] = useState<Record<string, string>>({
    en: 'Top 5 Axe Throwing Tips for Beginners | Axe Throwing Tenerife',
    es: '', fr: '', de: '', nl: '', it: '',
  });
  const [seoDescription, setSeoDescription] = useState<Record<string, string>>({
    en: 'First time throwing axes? Read our top 5 tips to improve your technique and have the best experience.',
    es: '', fr: '', de: '', nl: '', it: '',
  });

  function updateMultilingual(
    setter: React.Dispatch<React.SetStateAction<Record<string, string>>>,
    locale: string,
    value: string
  ) {
    setter((prev) => ({ ...prev, [locale]: value }));
  }

  async function handleSave(asDraft: boolean = false) {
    setLoading(true);
    if (asDraft) setPublished(false);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/admin/blog">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Edit Post</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Label className="text-sm text-muted-foreground">Published</Label>
            <Switch checked={published} onCheckedChange={setPublished} />
          </div>
          <Button variant="secondary" onClick={() => handleSave(true)} disabled={loading}>
            Save Draft
          </Button>
          <Button onClick={() => handleSave()} disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Saving...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Title */}
      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Title</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {locales.map((locale) => (
            <div key={locale} className="flex items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0">
                {locale}
              </span>
              <Input
                value={title[locale] || ''}
                onChange={(e) => updateMultilingual(setTitle, locale, e.target.value)}
                placeholder={`Title in ${localeLabels[locale]}`}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Content */}
      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {locales.map((locale) => (
            <div key={locale} className="flex gap-3">
              <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0 pt-2">
                {locale}
              </span>
              <Textarea
                value={content[locale] || ''}
                onChange={(e) => updateMultilingual(setContent, locale, e.target.value)}
                placeholder={`Content in ${localeLabels[locale]}`}
                rows={8}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Excerpt */}
      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Excerpt</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {locales.map((locale) => (
            <div key={locale} className="flex gap-3">
              <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0 pt-2">
                {locale}
              </span>
              <Textarea
                value={excerpt[locale] || ''}
                onChange={(e) => updateMultilingual(setExcerpt, locale, e.target.value)}
                placeholder={`Excerpt in ${localeLabels[locale]}`}
                rows={2}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Cover Image */}
      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Cover Image</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border/30 rounded-lg p-8 text-center">
            <Upload className="h-8 w-8 mx-auto mb-3 text-muted-foreground opacity-50" />
            <p className="text-sm text-muted-foreground">
              Click or drag an image to upload
            </p>
            <Button variant="secondary" size="sm" className="mt-3">
              Choose File
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* SEO */}
      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">SEO</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-muted-foreground">SEO Title</Label>
            {locales.map((locale) => (
              <div key={locale} className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0">
                  {locale}
                </span>
                <Input
                  value={seoTitle[locale] || ''}
                  onChange={(e) => updateMultilingual(setSeoTitle, locale, e.target.value)}
                  placeholder={`SEO title in ${localeLabels[locale]}`}
                />
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <Label className="text-muted-foreground">SEO Description</Label>
            {locales.map((locale) => (
              <div key={locale} className="flex gap-3">
                <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0 pt-2">
                  {locale}
                </span>
                <Textarea
                  value={seoDescription[locale] || ''}
                  onChange={(e) => updateMultilingual(setSeoDescription, locale, e.target.value)}
                  placeholder={`SEO description in ${localeLabels[locale]}`}
                  rows={2}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
