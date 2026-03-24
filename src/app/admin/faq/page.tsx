'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, GripVertical, Edit, Save, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';

const locales = ['en', 'es', 'fr', 'de', 'nl', 'it'] as const;
const localeLabels: Record<string, string> = {
  en: 'English', es: 'Spanish', fr: 'French', de: 'German', nl: 'Dutch', it: 'Italian',
};

interface FaqItem {
  id: string;
  question: Record<string, string>;
  answer: Record<string, string>;
  is_active: boolean;
  sort_order: number;
}

export default function FaqPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFaq, setNewFaq] = useState<{ question: Record<string, string>; answer: Record<string, string> }>({
    question: { en: '', es: '', fr: '', de: '', nl: '', it: '' },
    answer: { en: '', es: '', fr: '', de: '', nl: '', it: '' },
  });

  useEffect(() => {
    fetchFaqs();
  }, []);

  async function fetchFaqs() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/faq');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setFaqs(data);
    } catch (err) {
      console.error('Error fetching FAQs:', err);
    } finally {
      setLoading(false);
    }
  }

  async function toggleActive(id: string, current: boolean) {
    try {
      const res = await fetch('/api/admin/faq', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_active: !current }),
      });
      if (!res.ok) throw new Error('Failed to update');
      const updated = await res.json();
      setFaqs((prev) => prev.map((f) => (f.id === id ? updated : f)));
    } catch (err) {
      console.error('Error toggling FAQ:', err);
    }
  }

  async function deleteFaq(id: string) {
    if (!confirm('Are you sure you want to delete this FAQ item?')) return;
    try {
      const res = await fetch(`/api/admin/faq?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      setFaqs((prev) => prev.filter((f) => f.id !== id));
    } catch (err) {
      console.error('Error deleting FAQ:', err);
    }
  }

  async function addFaq() {
    try {
      const res = await fetch('/api/admin/faq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: newFaq.question,
          answer: newFaq.answer,
          is_active: true,
          sort_order: faqs.length,
        }),
      });
      if (!res.ok) throw new Error('Failed to add');
      const created = await res.json();
      setFaqs((prev) => [...prev, created]);
      setNewFaq({
        question: { en: '', es: '', fr: '', de: '', nl: '', it: '' },
        answer: { en: '', es: '', fr: '', de: '', nl: '', it: '' },
      });
      setShowAddForm(false);
    } catch (err) {
      console.error('Error adding FAQ:', err);
    }
  }

  async function saveEdit(faq: FaqItem) {
    try {
      const res = await fetch('/api/admin/faq', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: faq.id, question: faq.question, answer: faq.answer }),
      });
      if (!res.ok) throw new Error('Failed to save');
      const updated = await res.json();
      setFaqs((prev) => prev.map((f) => (f.id === faq.id ? updated : f)));
      setEditingId(null);
    } catch (err) {
      console.error('Error saving FAQ:', err);
    }
  }

  async function moveUp(index: number) {
    if (index === 0) return;
    const next = [...faqs];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    const reordered = next.map((f, i) => ({ ...f, sort_order: i }));
    setFaqs(reordered);

    // Persist both updated sort_orders
    try {
      await Promise.all([
        fetch('/api/admin/faq', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: reordered[index].id, sort_order: reordered[index].sort_order }),
        }),
        fetch('/api/admin/faq', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: reordered[index - 1].id, sort_order: reordered[index - 1].sort_order }),
        }),
      ]);
    } catch (err) {
      console.error('Error reordering FAQs:', err);
    }
  }

  async function moveDown(index: number) {
    if (index === faqs.length - 1) return;
    const next = [...faqs];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    const reordered = next.map((f, i) => ({ ...f, sort_order: i }));
    setFaqs(reordered);

    // Persist both updated sort_orders
    try {
      await Promise.all([
        fetch('/api/admin/faq', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: reordered[index].id, sort_order: reordered[index].sort_order }),
        }),
        fetch('/api/admin/faq', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: reordered[index + 1].id, sort_order: reordered[index + 1].sort_order }),
        }),
      ]);
    } catch (err) {
      console.error('Error reordering FAQs:', err);
    }
  }

  function updateEditingFaq(field: 'question' | 'answer', locale: string, value: string) {
    setFaqs((prev) =>
      prev.map((f) =>
        f.id === editingId
          ? { ...f, [field]: { ...f[field], [locale]: value } }
          : f
      )
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold">FAQ Management</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage frequently asked questions in all languages
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Add FAQ
        </Button>
      </div>

      {/* Add new FAQ form */}
      {showAddForm && (
        <Card className="bg-[#111118] border-primary/20 shadow-[0_0_10px_rgba(0,212,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-base">New FAQ Item</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Label className="text-muted-foreground">Question</Label>
              {locales.map((locale) => (
                <div key={locale} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0">
                    {locale}
                  </span>
                  <Input
                    value={newFaq.question[locale] || ''}
                    onChange={(e) =>
                      setNewFaq((p) => ({
                        ...p,
                        question: { ...p.question, [locale]: e.target.value },
                      }))
                    }
                    placeholder={`Question in ${localeLabels[locale]}`}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <Label className="text-muted-foreground">Answer</Label>
              {locales.map((locale) => (
                <div key={locale} className="flex gap-3">
                  <span className="text-xs font-medium text-muted-foreground uppercase w-8 shrink-0 pt-2">
                    {locale}
                  </span>
                  <Textarea
                    value={newFaq.answer[locale] || ''}
                    onChange={(e) =>
                      setNewFaq((p) => ({
                        ...p,
                        answer: { ...p.answer, [locale]: e.target.value },
                      }))
                    }
                    placeholder={`Answer in ${localeLabels[locale]}`}
                    rows={2}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={addFaq} size="sm">
                Add FAQ
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* FAQ list */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <Card
            key={faq.id}
            className={`bg-[#111118] border-border/30 ${!faq.is_active ? 'opacity-50' : ''}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                {/* Drag handle + reorder buttons */}
                <div className="flex flex-col items-center gap-1 pt-1 shrink-0">
                  <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                  <button onClick={() => moveUp(index)} className="text-muted-foreground hover:text-foreground" disabled={index === 0}>
                    <ChevronUp className="h-3 w-3" />
                  </button>
                  <button onClick={() => moveDown(index)} className="text-muted-foreground hover:text-foreground" disabled={index === faqs.length - 1}>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {editingId === faq.id ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">Question</Label>
                        {locales.map((locale) => (
                          <div key={locale} className="flex items-center gap-2">
                            <span className="text-[10px] font-medium text-muted-foreground uppercase w-6 shrink-0">{locale}</span>
                            <Input
                              value={faq.question[locale] || ''}
                              onChange={(e) => updateEditingFaq('question', locale, e.target.value)}
                              className="text-sm"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">Answer</Label>
                        {locales.map((locale) => (
                          <div key={locale} className="flex gap-2">
                            <span className="text-[10px] font-medium text-muted-foreground uppercase w-6 shrink-0 pt-2">{locale}</span>
                            <Textarea
                              value={faq.answer[locale] || ''}
                              onChange={(e) => updateEditingFaq('answer', locale, e.target.value)}
                              rows={2}
                              className="text-sm"
                            />
                          </div>
                        ))}
                      </div>
                      <Button size="sm" onClick={() => saveEdit(faq)}>
                        <Save className="h-3 w-3 mr-1" />
                        Done
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm font-medium">{faq.question?.en || 'No question set'}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {faq.answer?.en || 'No answer set'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <Switch checked={faq.is_active} onCheckedChange={() => toggleActive(faq.id, faq.is_active)} />
                  {editingId !== faq.id && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setEditingId(faq.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => deleteFaq(faq.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {faqs.length === 0 && (
          <Card className="bg-[#111118] border-border/30">
            <CardContent className="py-12 text-center text-muted-foreground">
              No FAQ items yet. Click &quot;Add FAQ&quot; to create one.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
