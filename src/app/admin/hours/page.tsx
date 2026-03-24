'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Save, Plus, Trash2 } from 'lucide-react';

interface DayHours {
  day: string;
  dayOfWeek: number;
  open: string;
  close: string;
  closed: boolean;
}

interface ClosedDate {
  id: string;
  date: string;
  reason: string;
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function stripSeconds(time: string): string {
  // "HH:MM:SS" -> "HH:MM"
  if (!time) return '';
  const parts = time.split(':');
  return `${parts[0]}:${parts[1]}`;
}

export default function HoursPage() {
  const [hours, setHours] = useState<DayHours[]>([]);
  const [closedDates, setClosedDates] = useState<ClosedDate[]>([]);
  const [newClosedDate, setNewClosedDate] = useState('');
  const [newClosedReason, setNewClosedReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchData = useCallback(async () => {
    setFetching(true);
    try {
      const res = await fetch('/api/admin/hours');
      if (!res.ok) throw new Error('Failed to fetch hours');
      const data = await res.json();

      const mappedHours: DayHours[] = (data.hours as Array<{
        day_of_week: number;
        open_time: string;
        close_time: string;
        is_closed: boolean;
      }>).map((h) => ({
        day: dayNames[h.day_of_week],
        dayOfWeek: h.day_of_week,
        open: stripSeconds(h.open_time),
        close: stripSeconds(h.close_time),
        closed: h.is_closed,
      }));

      const mappedClosed: ClosedDate[] = (data.closedDates as Array<{
        id: string;
        date: string;
        reason: string;
      }>).map((cd) => ({
        id: cd.id,
        date: cd.date,
        reason: cd.reason || '',
      }));

      setHours(mappedHours);
      setClosedDates(mappedClosed);
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Failed to load data' });
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function showMessage(type: 'success' | 'error', text: string) {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  }

  function updateHours(index: number, field: keyof DayHours, value: string | boolean) {
    setHours((prev) =>
      prev.map((h, i) => (i === index ? { ...h, [field]: value } : h))
    );
  }

  async function addClosedDate() {
    if (!newClosedDate) return;
    try {
      const res = await fetch('/api/admin/hours/closed-dates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: newClosedDate, reason: newClosedReason }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to add closed date');
      }
      const created = await res.json();
      setClosedDates((prev) => [...prev, { id: created.id, date: created.date, reason: created.reason || '' }]);
      setNewClosedDate('');
      setNewClosedReason('');
      showMessage('success', 'Closed date added');
    } catch (err) {
      showMessage('error', err instanceof Error ? err.message : 'Failed to add closed date');
    }
  }

  async function removeClosedDate(id: string) {
    try {
      const res = await fetch('/api/admin/hours/closed-dates', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to remove closed date');
      }
      setClosedDates((prev) => prev.filter((d) => d.id !== id));
      showMessage('success', 'Closed date removed');
    } catch (err) {
      showMessage('error', err instanceof Error ? err.message : 'Failed to remove closed date');
    }
  }

  async function handleSave() {
    setLoading(true);
    try {
      const payload = hours.map((h) => ({
        day_of_week: h.dayOfWeek,
        open_time: h.open,
        close_time: h.close,
        is_closed: h.closed,
      }));
      const res = await fetch('/api/admin/hours', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hours: payload }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save hours');
      }
      showMessage('success', 'Business hours saved successfully');
    } catch (err) {
      showMessage('error', err instanceof Error ? err.message : 'Failed to save hours');
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return (
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold">Business Hours</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Configure opening hours and closed dates
          </p>
        </div>
        <div className="flex items-center justify-center py-12">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span className="ml-3 text-sm text-muted-foreground">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold">Business Hours</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Configure opening hours and closed dates
          </p>
        </div>
        <Button onClick={handleSave} disabled={loading}>
          {loading ? (
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

      {/* Feedback message */}
      {message && (
        <div
          className={`px-4 py-3 rounded-lg text-sm ${
            message.type === 'success'
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Weekly hours */}
      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {hours.map((day, index) => (
              <div
                key={day.day}
                className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${
                  day.closed
                    ? 'border-border/10 bg-secondary/10 opacity-60'
                    : 'border-border/20 bg-secondary/20'
                }`}
              >
                <span className="w-28 text-sm font-medium shrink-0">{day.day}</span>

                <div className="flex items-center gap-3 flex-1">
                  <Input
                    type="time"
                    value={day.open}
                    onChange={(e) => updateHours(index, 'open', e.target.value)}
                    disabled={day.closed}
                    className="w-32"
                  />
                  <span className="text-muted-foreground text-sm">to</span>
                  <Input
                    type="time"
                    value={day.close}
                    onChange={(e) => updateHours(index, 'close', e.target.value)}
                    disabled={day.closed}
                    className="w-32"
                  />
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Label className="text-xs text-muted-foreground">Closed</Label>
                  <Switch
                    checked={day.closed}
                    onCheckedChange={(v) => updateHours(index, 'closed', v)}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Closed dates */}
      <Card className="bg-[#111118] border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Closed Dates</CardTitle>
          <CardDescription>
            Specific dates when the venue is closed
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add form */}
          <div className="flex items-end gap-3 mb-6">
            <div className="space-y-2 flex-1">
              <Label className="text-xs">Date</Label>
              <Input
                type="date"
                value={newClosedDate}
                onChange={(e) => setNewClosedDate(e.target.value)}
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label className="text-xs">Reason</Label>
              <Input
                value={newClosedReason}
                onChange={(e) => setNewClosedReason(e.target.value)}
                placeholder="e.g. Public holiday"
              />
            </div>
            <Button onClick={addClosedDate} size="sm" variant="secondary">
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>

          {/* List */}
          <div className="space-y-2">
            {closedDates.map((cd) => (
              <div
                key={cd.id}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 border border-border/20"
              >
                <div>
                  <p className="text-sm font-medium">{cd.date}</p>
                  <p className="text-xs text-muted-foreground">{cd.reason || 'No reason specified'}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive"
                  onClick={() => removeClosedDate(cd.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {closedDates.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-6">
                No closed dates configured
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
