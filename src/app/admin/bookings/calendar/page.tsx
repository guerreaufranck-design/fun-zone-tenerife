'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, X, Loader2, Calendar, CalendarDays, Clock, Users, Phone, Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import type { Booking, MultilingualText, LaneType } from '@/lib/supabase/types';

type ViewMode = 'month' | 'week' | 'day';
type OfferMap = Record<string, { title: string; laneType: LaneType }>;

interface CalendarBooking {
  id: string;
  ref: string;
  customer: string;
  email: string;
  phone: string;
  time: string;
  endTime: string;
  experience: string;
  laneType: LaneType;
  players: number;
  lanesNeeded: number;
  status: string;
  paymentStatus: string;
  totalCents: number;
  notes: string | null;
}

const laneColors: Record<string, string> = {
  axe: 'bg-neon-blue/20 border-neon-blue/40 text-neon-blue',
  darts_pixels: 'bg-neon-violet/20 border-neon-violet/40 text-neon-violet',
  classic_darts: 'bg-neon-green/20 border-neon-green/40 text-neon-green',
};

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

function toDateStr(d: Date): string {
  return d.toISOString().split('T')[0];
}

export default function CalendarPage() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [viewMode, setViewMode] = useState<ViewMode>('month');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [offerMap, setOfferMap] = useState<OfferMap>({});
  const [loading, setLoading] = useState(true);

  const todayStr = toDateStr(now);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();

    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);
    const monthStartStr = toDateStr(monthStart);
    const monthEndStr = toDateStr(monthEnd);

    const [bookingsRes, offersRes] = await Promise.all([
      supabase
        .from('bookings')
        .select('*')
        .gte('booking_date', monthStartStr)
        .lte('booking_date', monthEndStr)
        .in('status', ['confirmed', 'manual', 'completed']),
      supabase.from('offers').select('id, title, lane_type'),
    ]);

    if (bookingsRes.data) {
      setBookings(bookingsRes.data as Booking[]);
    }

    if (offersRes.data) {
      const map: OfferMap = {};
      for (const offer of offersRes.data) {
        const title = offer.title as MultilingualText;
        map[offer.id] = {
          title: title.en || title.es || Object.values(title)[0] || 'Unknown',
          laneType: offer.lane_type as LaneType,
        };
      }
      setOfferMap(map);
    }

    setLoading(false);
  }, [year, month]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Group bookings by date
  const bookingsByDate = useMemo(() => {
    const grouped: Record<string, CalendarBooking[]> = {};
    for (const b of bookings) {
      const dateKey = b.booking_date;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      const offer = offerMap[b.offer_id];
      grouped[dateKey].push({
        id: b.id,
        ref: b.booking_ref,
        customer: b.customer_name,
        email: b.customer_email || '',
        phone: b.customer_phone || '',
        time: b.start_time?.slice(0, 5) || '',
        endTime: b.end_time?.slice(0, 5) || '',
        experience: offer?.title || 'Unknown',
        laneType: offer?.laneType || 'axe',
        players: b.players,
        lanesNeeded: b.lanes_needed || 1,
        status: b.status,
        paymentStatus: b.payment_status,
        totalCents: b.total_cents || 0,
        notes: b.notes || null,
      });
    }
    // Sort each day's bookings by time
    for (const key of Object.keys(grouped)) {
      grouped[key].sort((a, b) => a.time.localeCompare(b.time));
    }
    return grouped;
  }, [bookings, offerMap]);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const monthName = new Date(year, month).toLocaleString('en', { month: 'long' });

  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
    setSelectedDate(null);
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
    setSelectedDate(null);
  }

  function formatDateKey(day: number) {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }

  const selectedBookings = selectedDate ? bookingsByDate[selectedDate] || [] : [];

  // Week view helpers
  const selectedDateObj = selectedDate ? new Date(selectedDate + 'T12:00:00') : now;
  const weekStart = useMemo(() => {
    const d = new Date(selectedDateObj);
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day; // Monday start
    d.setDate(d.getDate() + diff);
    return d;
  }, [selectedDateObj.toISOString()]);

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      return toDateStr(d);
    });
  }, [weekStart]);

  function navigateDay(direction: number) {
    const d = selectedDate ? new Date(selectedDate + 'T12:00:00') : new Date();
    d.setDate(d.getDate() + direction);
    setSelectedDate(toDateStr(d));
    // Update month if needed
    setMonth(d.getMonth());
    setYear(d.getFullYear());
  }

  function navigateWeek(direction: number) {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + direction * 7);
    setSelectedDate(toDateStr(d));
    setMonth(d.getMonth());
    setYear(d.getFullYear());
  }

  // Hours for day/week timeline (10:00 to 22:00)
  const timelineHours = Array.from({ length: 13 }, (_, i) => i + 10);

  function selectDayAndSwitchView(dateKey: string) {
    setSelectedDate(dateKey);
    if (viewMode === 'month') return;
  }

  const statusColors: Record<string, string> = {
    confirmed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    manual: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const paymentColors: Record<string, string> = {
    paid: 'text-emerald-400',
    partial: 'text-amber-400',
    pending: 'text-red-400',
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Calculate session duration in minutes from HH:mm strings
  function getDuration(start: string, end: string): number {
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    return (eh * 60 + em) - (sh * 60 + sm);
  }

  function formatDuration(mins: number): string {
    if (mins < 60) return `${mins}min`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m > 0 ? `${h}h${m.toString().padStart(2, '0')}` : `${h}h`;
  }

  // Render a detailed booking card (used in week, day, and month side panel)
  function renderBookingCard(b: CalendarBooking, compact = false) {
    const duration = getDuration(b.time, b.endTime);
    return (
      <div
        key={b.id}
        className={`p-3 rounded-lg border ${laneColors[b.laneType] || laneColors.axe}`}
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold flex items-center gap-2">
            {b.time} - {b.endTime}
            <span className="text-[10px] font-normal opacity-70 flex items-center gap-0.5">
              <Clock className="h-3 w-3" /> {formatDuration(duration)}
            </span>
          </span>
          <div className="flex items-center gap-1.5">
            <Badge variant="secondary" className="text-[10px]">
              {b.players} players
            </Badge>
            <Badge className={`text-[10px] border ${statusColors[b.status] || ''}`}>
              {b.status}
            </Badge>
          </div>
        </div>
        <p className="text-sm font-medium text-foreground">{b.customer}</p>
        <p className="text-xs opacity-80">{b.experience}</p>
        {compact && (
          <div className="mt-2 space-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" /> {b.lanesNeeded} lane{b.lanesNeeded > 1 ? 's' : ''}
              </span>
              <span className={`font-medium ${paymentColors[b.paymentStatus] || ''}`}>
                €{(b.totalCents / 100).toFixed(2)} ({b.paymentStatus})
              </span>
            </div>
            {b.phone && (
              <div className="flex items-center gap-1.5">
                <Phone className="h-3 w-3" />
                <span>{b.phone}</span>
              </div>
            )}
            <p className="text-[10px] font-mono opacity-60 mt-1">{b.ref}</p>
          </div>
        )}
        {!compact && (
          <div className="mt-2 space-y-1 text-xs text-muted-foreground">
            {b.phone && (
              <div className="flex items-center gap-1.5">
                <Phone className="h-3 w-3" />
                <span>{b.phone}</span>
              </div>
            )}
            {b.email && (
              <div className="flex items-center gap-1.5">
                <Mail className="h-3 w-3" />
                <span>{b.email}</span>
              </div>
            )}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" /> {b.lanesNeeded} lane{b.lanesNeeded > 1 ? 's' : ''}
              </span>
              <span className={`font-medium ${paymentColors[b.paymentStatus] || ''}`}>
                €{(b.totalCents / 100).toFixed(2)} ({b.paymentStatus})
              </span>
            </div>
            {b.notes && (
              <div className="flex items-start gap-1.5 mt-1">
                <FileText className="h-3 w-3 mt-0.5" />
                <span className="italic">{b.notes}</span>
              </div>
            )}
            <p className="text-[10px] font-mono opacity-60 mt-1">{b.ref}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/admin/bookings">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Calendar</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* View mode toggle */}
          <div className="flex items-center bg-secondary/30 rounded-lg p-0.5">
            <button
              onClick={() => setViewMode('month')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${viewMode === 'month' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Month
            </button>
            <button
              onClick={() => { setViewMode('week'); if (!selectedDate) setSelectedDate(todayStr); }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${viewMode === 'week' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Week
            </button>
            <button
              onClick={() => { setViewMode('day'); if (!selectedDate) setSelectedDate(todayStr); }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${viewMode === 'day' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Day
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block w-3 h-3 rounded-sm bg-neon-blue/30 border border-neon-blue/50" />
            Axe
            <span className="inline-block w-3 h-3 rounded-sm bg-neon-violet/30 border border-neon-violet/50 ml-2" />
            Darts
            <span className="inline-block w-3 h-3 rounded-sm bg-neon-green/30 border border-neon-green/50 ml-2" />
            Classic
          </div>
        </div>
      </div>

      {/* ============ MONTH VIEW ============ */}
      {viewMode === 'month' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-[#111118] border-border/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <Button variant="ghost" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <CardTitle className="text-lg">{monthName} {year}</CardTitle>
              <Button variant="ghost" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-1">
                {DAYS.map((d) => (
                  <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }, (_, i) => (
                  <div key={`empty-${i}`} className="h-20 rounded-lg" />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const dateKey = formatDateKey(day);
                  const dayBookings = bookingsByDate[dateKey] || [];
                  const isToday = dateKey === todayStr;
                  const isSelected = selectedDate === dateKey;
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(dateKey)}
                      onDoubleClick={() => { setSelectedDate(dateKey); setViewMode('day'); }}
                      className={`h-20 rounded-lg border p-1 text-left transition-all ${
                        isSelected ? 'border-primary bg-primary/5 shadow-[0_0_10px_rgba(0,212,255,0.15)]'
                        : isToday ? 'border-primary/30 bg-primary/5'
                        : 'border-border/20 hover:border-border/50 hover:bg-secondary/20'
                      }`}
                    >
                      <span className={`text-xs font-medium ${isToday ? 'text-primary' : 'text-foreground'}`}>{day}</span>
                      <div className="mt-0.5 space-y-0.5">
                        {dayBookings.slice(0, 2).map((b) => (
                          <div key={b.id} className={`text-[10px] px-1 py-0.5 rounded border truncate ${laneColors[b.laneType] || laneColors.axe}`}>
                            {b.time} {b.experience}
                          </div>
                        ))}
                        {dayBookings.length > 2 && (
                          <span className="text-[10px] text-muted-foreground px-1">+{dayBookings.length - 2} more</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Side panel */}
          <Card className="bg-[#111118] border-border/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">
                {selectedDate
                  ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
                  : 'Select a day'}
              </CardTitle>
              {selectedDate && (
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="text-xs h-7" onClick={() => { setViewMode('day'); }}>
                    <CalendarDays className="h-3 w-3 mr-1" /> Day view
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setSelectedDate(null)}>
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {!selectedDate ? (
                <p className="text-sm text-muted-foreground text-center py-8">Click on a day to see bookings</p>
              ) : selectedBookings.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">No bookings</p>
              ) : (
                <div className="space-y-3">
                  {selectedBookings.map((b) => renderBookingCard(b, true))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============ WEEK VIEW ============ */}
      {viewMode === 'week' && (
        <Card className="bg-[#111118] border-border/30">
          <CardHeader className="flex flex-row items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigateWeek(-1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-lg">
              {new Date(weekDays[0] + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
              {' — '}
              {new Date(weekDays[6] + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => navigateWeek(1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-3">
              {weekDays.map((dateKey, i) => {
                const dayBookings = bookingsByDate[dateKey] || [];
                const isToday = dateKey === todayStr;
                const dayDate = new Date(dateKey + 'T12:00:00');
                return (
                  <div key={dateKey} className="min-h-[300px]">
                    <button
                      onClick={() => { setSelectedDate(dateKey); setViewMode('day'); }}
                      className={`w-full text-center py-2 rounded-t-lg text-sm font-medium transition-colors ${
                        isToday ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:bg-secondary/30'
                      }`}
                    >
                      <span className="block text-xs">{DAYS[i]}</span>
                      <span className="block text-lg">{dayDate.getDate()}</span>
                    </button>
                    <div className="space-y-2 mt-2">
                      {dayBookings.map((b) => (
                        <div
                          key={b.id}
                          className={`p-2 rounded-lg border text-xs ${laneColors[b.laneType] || laneColors.axe}`}
                        >
                          <div className="font-semibold">{b.time} - {b.endTime}</div>
                          <div className="font-medium text-foreground truncate">{b.customer}</div>
                          <div className="opacity-80 truncate">{b.experience}</div>
                          <div className="flex items-center justify-between mt-1">
                            <span>{b.players}p / {b.lanesNeeded}L</span>
                            <span className={`font-medium ${paymentColors[b.paymentStatus] || ''}`}>
                              €{(b.totalCents / 100).toFixed(0)}
                            </span>
                          </div>
                        </div>
                      ))}
                      {dayBookings.length === 0 && (
                        <p className="text-[10px] text-muted-foreground text-center py-4">—</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* ============ DAY VIEW ============ */}
      {viewMode === 'day' && selectedDate && (
        <Card className="bg-[#111118] border-border/30">
          <CardHeader className="flex flex-row items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigateDay(-1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-lg">
              {new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-GB', {
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
              })}
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => navigateDay(1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            {selectedBookings.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-12">No bookings on this day</p>
            ) : (
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground mb-4">
                  {selectedBookings.length} booking{selectedBookings.length > 1 ? 's' : ''} — {selectedBookings.reduce((acc, b) => acc + b.players, 0)} total players — {selectedBookings.reduce((acc, b) => acc + b.lanesNeeded, 0)} lanes used
                </div>
                {selectedBookings.map((b) => renderBookingCard(b, false))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
