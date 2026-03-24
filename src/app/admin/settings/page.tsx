'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Save, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface Setting {
  key: string;
  label: string;
  value: string;
  type?: string;
}

const settingDefinitions: Omit<Setting, 'value'>[] = [
  { key: 'site_name', label: 'Site Name' },
  { key: 'contact_email', label: 'Contact Email', type: 'email' },
  { key: 'contact_phone', label: 'Contact Phone', type: 'tel' },
  { key: 'address', label: 'Address' },
  { key: 'google_maps_url', label: 'Google Maps URL', type: 'url' },
  { key: 'instagram_url', label: 'Instagram', type: 'url' },
  { key: 'tiktok_url', label: 'TikTok', type: 'url' },
  { key: 'facebook_url', label: 'Facebook', type: 'url' },
  { key: 'tripadvisor_url', label: 'TripAdvisor', type: 'url' },
  { key: 'whatsapp_number', label: 'WhatsApp Number', type: 'tel' },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    try {
      setLoading(true);
      const supabase = createClient();
      const { data, error } = await supabase.from('site_settings').select('*');
      if (error) throw error;

      // Merge DB values with setting definitions
      const dbMap = new Map<string, string>();
      if (data) {
        for (const row of data) {
          dbMap.set(row.key, typeof row.value === 'string' ? row.value : (row.value as string) ?? '');
        }
      }

      const merged = settingDefinitions.map((def) => ({
        ...def,
        value: dbMap.get(def.key) ?? '',
      }));
      setSettings(merged);
    } catch (err) {
      console.error('Error fetching settings:', err);
      // Fall back to empty settings
      setSettings(settingDefinitions.map((def) => ({ ...def, value: '' })));
    } finally {
      setLoading(false);
    }
  }

  function updateSetting(key: string, value: string) {
    setSettings((prev) =>
      prev.map((s) => (s.key === key ? { ...s, value } : s))
    );
  }

  async function handleSave() {
    try {
      setSaving(true);
      const supabase = createClient();
      const { error } = await supabase
        .from('site_settings')
        .upsert(settings.map((s) => ({ key: s.key, value: s.value })));
      if (error) throw error;
    } catch (err) {
      console.error('Error saving settings:', err);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            General site configuration
          </p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Saving...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </span>
          )}
        </Button>
      </div>

      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">General</CardTitle>
          <CardDescription>
            Basic site information and contact details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {settings.slice(0, 5).map((setting) => (
            <div key={setting.key} className="space-y-2">
              <Label htmlFor={setting.key}>{setting.label}</Label>
              <Input
                id={setting.key}
                type={setting.type || 'text'}
                value={setting.value}
                onChange={(e) => updateSetting(setting.key, e.target.value)}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Social Links</CardTitle>
          <CardDescription>
            Social media profile URLs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {settings.slice(5).map((setting) => (
            <div key={setting.key} className="space-y-2">
              <Label htmlFor={setting.key}>{setting.label}</Label>
              <Input
                id={setting.key}
                type={setting.type || 'text'}
                value={setting.value}
                onChange={(e) => updateSetting(setting.key, e.target.value)}
                placeholder={`Enter ${setting.label.toLowerCase()} URL`}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
