'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Trash2, Loader2 } from 'lucide-react';

interface PricingRule {
  id: string;
  day_of_week: number;
  start_hour: string;
  end_hour: string;
  modifier_type: string;
  modifier_value: number;
  label: { en?: string; es?: string } | string;
  is_active: boolean;
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayOptions = [
  { value: '1', label: 'Monday' },
  { value: '2', label: 'Tuesday' },
  { value: '3', label: 'Wednesday' },
  { value: '4', label: 'Thursday' },
  { value: '5', label: 'Friday' },
  { value: '6', label: 'Saturday' },
  { value: '0', label: 'Sunday' },
];

function getDisplayLabel(label: PricingRule['label']): string {
  if (typeof label === 'string') return label;
  return label?.en || '';
}

export default function PricingPage() {
  const [rules, setRules] = useState<PricingRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newRule, setNewRule] = useState({
    day_of_week: '1',
    start_hour: '10:00',
    end_hour: '22:00',
    modifier_type: 'percentage',
    modifier_value: 0,
    label: '',
  });

  useEffect(() => {
    fetchRules();
  }, []);

  async function fetchRules() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/pricing');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setRules(data);
    } catch (err) {
      console.error('Error fetching pricing rules:', err);
    } finally {
      setLoading(false);
    }
  }

  async function toggleActive(id: string, current: boolean) {
    try {
      const res = await fetch('/api/admin/pricing', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_active: !current }),
      });
      if (!res.ok) throw new Error('Failed to update');
      const updated = await res.json();
      setRules((prev) => prev.map((r) => (r.id === id ? updated : r)));
    } catch (err) {
      console.error('Error toggling rule:', err);
    }
  }

  async function deleteRule(id: string) {
    try {
      const res = await fetch(`/api/admin/pricing?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      setRules((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error('Error deleting rule:', err);
    }
  }

  async function addRule() {
    try {
      const res = await fetch('/api/admin/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          day_of_week: parseInt(newRule.day_of_week),
          start_hour: newRule.start_hour,
          end_hour: newRule.end_hour,
          modifier_type: newRule.modifier_type,
          modifier_value: newRule.modifier_value,
          label: { en: newRule.label },
          is_active: true,
        }),
      });
      if (!res.ok) throw new Error('Failed to add');
      const created = await res.json();
      setRules((prev) => [...prev, created]);
      setNewRule({
        day_of_week: '1',
        start_hour: '10:00',
        end_hour: '22:00',
        modifier_type: 'percentage',
        modifier_value: 0,
        label: '',
      });
      setShowAddForm(false);
    } catch (err) {
      console.error('Error adding rule:', err);
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
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dynamic Pricing</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Set price modifiers based on day of week and time
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Rule
        </Button>
      </div>

      {/* Add new rule form */}
      {showAddForm && (
        <Card className="bg-[#111118] border-primary/20 shadow-[0_0_10px_rgba(0,212,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-base">New Pricing Rule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Day of Week</Label>
                <Select value={newRule.day_of_week} onValueChange={(v) => setNewRule((p) => ({ ...p, day_of_week: v }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {dayOptions.map((d) => (
                      <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Start Time</Label>
                <Input
                  type="time"
                  value={newRule.start_hour}
                  onChange={(e) => setNewRule((p) => ({ ...p, start_hour: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label>End Time</Label>
                <Input
                  type="time"
                  value={newRule.end_hour}
                  onChange={(e) => setNewRule((p) => ({ ...p, end_hour: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label>Modifier Type</Label>
                <Select value={newRule.modifier_type} onValueChange={(v) => setNewRule((p) => ({ ...p, modifier_type: v }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage (%)</SelectItem>
                    <SelectItem value="fixed">Fixed (EUR)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Réduction</Label>
                <Input
                  type="number"
                  min="0"
                  value={newRule.modifier_value}
                  onChange={(e) => setNewRule((p) => ({ ...p, modifier_value: parseFloat(e.target.value) || 0 }))}
                  placeholder={newRule.modifier_type === 'percentage' ? 'ex: 5 pour -5%' : 'ex: 2 pour -2 EUR'}
                />
              </div>

              <div className="space-y-2">
                <Label>Label</Label>
                <Input
                  value={newRule.label}
                  onChange={(e) => setNewRule((p) => ({ ...p, label: e.target.value }))}
                  placeholder="e.g. Weekend Premium"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Button onClick={addRule} size="sm">
                Add Rule
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Rules table */}
      <Card className="bg-[#111118] border-border/30">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Label</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden sm:table-cell">Day</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">Time</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Modifier</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Active</th>
                  <th className="text-right py-3 px-3 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rules.map((rule) => (
                  <tr
                    key={rule.id}
                    className="border-b border-border/10 hover:bg-secondary/20 transition-colors"
                  >
                    <td className="py-3 px-3 font-medium">{getDisplayLabel(rule.label)}</td>
                    <td className="py-3 px-3 hidden sm:table-cell text-muted-foreground">
                      {dayNames[rule.day_of_week] ?? rule.day_of_week}
                    </td>
                    <td className="py-3 px-3 hidden md:table-cell text-muted-foreground">
                      {rule.start_hour} - {rule.end_hour}
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-mono text-neon-green">
                        -{rule.modifier_value}
                        {rule.modifier_type === 'percentage' ? '%' : ' EUR'}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <Switch
                        checked={rule.is_active}
                        onCheckedChange={() => toggleActive(rule.id, rule.is_active)}
                      />
                    </td>
                    <td className="py-3 px-3 text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => deleteRule(rule.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
                {rules.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-muted-foreground">
                      No pricing rules configured
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
