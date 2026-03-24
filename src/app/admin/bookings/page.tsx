'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Plus,
  Search,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Loader2,
  CalendarDays,
  X,
  Pencil,
  Trash2,
  User,
  Mail,
  Phone,
  Clock,
  Users,
  CreditCard,
  FileText,
  Save,
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import type { Booking, BookingStatus, MultilingualText, LaneType, BusinessHours } from '@/lib/supabase/types';
import { calculateLanesNeeded } from '@/lib/booking/lane-allocation';

type OfferRow = {
  id: string;
  title: MultilingualText;
  lane_type: LaneType;
  duration_minutes: number;
  max_players: number;
  slot_interval_minutes: number | null;
  backoffice_only: boolean;
};

type OfferMap = Record<string, string>;

const statusVariants: Record<BookingStatus, 'neonGreen' | 'destructive' | 'neonBlue' | 'neonOrange'> = {
  pending: 'neonOrange',
  confirmed: 'neonGreen',
  cancelled: 'destructive',
  completed: 'neonBlue',
  manual: 'neonOrange',
  modified: 'neonGreen',
  no_show: 'destructive',
};

function formatCents(cents: number): string {
  return new Intl.NumberFormat('en-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);
}

function toDateStr(d: Date): string {
  return d.toISOString().split('T')[0];
}

function calculateEndTime(startTime: string, durationMinutes: number): string {
  const [h, m] = startTime.split(':').map(Number);
  const totalMinutes = h * 60 + m + durationMinutes;
  const endH = Math.floor(totalMinutes / 60);
  const endM = totalMinutes % 60;
  return `${endH.toString().padStart(2, '0')}:${endM.toString().padStart(2, '0')}`;
}

function generateTimeSlots(
  openTime: string,
  closeTime: string,
  intervalMinutes: number,
  durationMinutes: number
): string[] {
  const [openH, openM] = openTime.split(':').map(Number);
  const [closeH, closeM] = closeTime.split(':').map(Number);
  const openTotal = openH * 60 + openM;
  const closeTotal = closeH * 60 + closeM;

  const slots: string[] = [];
  for (let t = openTotal; t + durationMinutes <= closeTotal; t += intervalMinutes) {
    const h = Math.floor(t / 60);
    const m = t % 60;
    slots.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
  }
  return slots;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [offerMap, setOfferMap] = useState<OfferMap>({});
  const [offers, setOffers] = useState<OfferRow[]>([]);
  const [businessHours, setBusinessHours] = useState<BusinessHours[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('all');
  const [page, setPage] = useState(1);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const perPage = 8;

  // Detail panel state
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  // Edit form state
  const [editForm, setEditForm] = useState({
    offer_id: '',
    players: '',
    booking_date: '',
    start_time: '',
    notes: '',
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();

    const [bookingsRes, offersRes, hoursRes] = await Promise.all([
      supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false }),
      supabase
        .from('offers')
        .select('id, title, lane_type, duration_minutes, max_players, slot_interval_minutes, backoffice_only')
        .eq('is_active', true)
        .order('sort_order'),
      supabase.from('business_hours').select('*'),
    ]);

    if (bookingsRes.data) {
      setBookings(bookingsRes.data as Booking[]);
    }

    if (offersRes.data) {
      const map: OfferMap = {};
      const offerRows: OfferRow[] = [];
      for (const offer of offersRes.data) {
        const title = offer.title as MultilingualText;
        map[offer.id] = title.en || title.es || Object.values(title)[0] || 'Unknown';
        offerRows.push(offer as OfferRow);
      }
      setOfferMap(map);
      setOffers(offerRows);
    }

    if (hoursRes.data) {
      setBusinessHours(hoursRes.data as BusinessHours[]);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Open detail panel
  function openDetail(booking: Booking) {
    setSelectedBooking(booking);
    setEditing(false);
  }

  // Start editing
  function startEditing() {
    if (!selectedBooking) return;
    setEditForm({
      offer_id: selectedBooking.offer_id,
      players: String(selectedBooking.players),
      booking_date: selectedBooking.booking_date,
      start_time: selectedBooking.start_time?.slice(0, 5) || '',
      notes: selectedBooking.notes || '',
    });
    setEditing(true);
  }

  // Save changes
  async function handleSave() {
    if (!selectedBooking) return;
    setSaving(true);

    try {
      const res = await fetch(`/api/admin/bookings/${selectedBooking.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offer_id: editForm.offer_id,
          players: parseInt(editForm.players),
          booking_date: editForm.booking_date,
          start_time: editForm.start_time,
          notes: editForm.notes || null,
        }),
      });

      if (res.ok) {
        const updated = await res.json();
        setBookings((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
        setSelectedBooking(updated);
        setEditing(false);
      } else {
        const data = await res.json();
        alert('Failed to save: ' + (data.error || 'Unknown error'));
      }
    } catch {
      alert('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  }

  async function handleCancel(bookingId: string) {
    const booking = bookings.find((b) => b.id === bookingId);
    const isManual = booking?.status === 'manual';
    const msg = isManual
      ? 'Delete this manual booking? This cannot be undone.'
      : 'Are you sure you want to cancel this booking?';
    if (!confirm(msg)) return;

    setCancellingId(bookingId);
    const supabase = createClient();

    if (isManual) {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

      if (error) {
        alert('Failed to delete booking: ' + error.message);
      } else {
        setBookings((prev) => prev.filter((b) => b.id !== bookingId));
        if (selectedBooking?.id === bookingId) setSelectedBooking(null);
      }
    } else {
      const { error } = await supabase
        .from('bookings')
        .update({ status: 'cancelled' })
        .eq('id', bookingId);

      if (error) {
        alert('Failed to cancel booking: ' + error.message);
      } else {
        setBookings((prev) =>
          prev.map((b) => (b.id === bookingId ? { ...b, status: 'cancelled' as BookingStatus } : b))
        );
        if (selectedBooking?.id === bookingId) {
          setSelectedBooking((prev) => prev ? { ...prev, status: 'cancelled' as BookingStatus } : null);
        }
      }
    }
    setCancellingId(null);
  }

  // Time slots for edit form
  const editOffer = useMemo(
    () => offers.find((o) => o.id === editForm.offer_id),
    [offers, editForm.offer_id]
  );

  const editTimeSlots = useMemo(() => {
    if (!editForm.booking_date || !editOffer) return [];
    const dateObj = new Date(editForm.booking_date + 'T12:00:00');
    const dayOfWeek = dateObj.getDay();
    const hours = businessHours.find((h) => h.day_of_week === dayOfWeek);
    if (!hours || hours.is_closed) return [];
    const interval = editOffer.slot_interval_minutes ?? 60;
    return generateTimeSlots(hours.open_time, hours.close_time, interval, editOffer.duration_minutes);
  }, [editForm.booking_date, editOffer, businessHours]);

  const now = new Date();
  const todayStr = toDateStr(now);
  const weekEnd = new Date(now);
  weekEnd.setDate(weekEnd.getDate() + (7 - weekEnd.getDay()));
  const weekEndStr = toDateStr(weekEnd);

  const filtered = bookings.filter((b) => {
    if (search) {
      const q = search.toLowerCase();
      if (
        !b.booking_ref.toLowerCase().includes(q) &&
        !b.customer_name.toLowerCase().includes(q) &&
        !b.customer_email.toLowerCase().includes(q)
      ) {
        return false;
      }
    }
    if (tab === 'today') return b.booking_date === todayStr;
    if (tab === 'week') return b.booking_date >= todayStr && b.booking_date <= weekEndStr;
    if (tab === 'upcoming') return b.booking_date >= todayStr;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/admin/bookings/calendar">
              <CalendarDays className="h-4 w-4 mr-2" />
              Calendar
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/bookings/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Manual Booking
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Table */}
        <Card className={`bg-[#111118] border-border/30 ${selectedBooking ? 'flex-1 min-w-0' : 'w-full'}`}>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Tabs value={tab} onValueChange={(v) => { setTab(v); setPage(1); }}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="week">This Week</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search ref, name, email..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Ref</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Customer</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">Experience</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Date</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden sm:table-cell">Time</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden lg:table-cell">Players</th>
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">Status</th>
                    {!selectedBooking && (
                      <>
                        <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">Total</th>
                        <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">Paid</th>
                        <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">Due</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {paged.map((booking) => (
                    <tr
                      key={booking.id}
                      className={`border-b border-border/10 hover:bg-secondary/20 transition-colors cursor-pointer ${
                        selectedBooking?.id === booking.id ? 'bg-secondary/30' : ''
                      }`}
                      onClick={() => openDetail(booking)}
                    >
                      <td className="py-3 px-3 font-mono text-xs text-primary">
                        {booking.booking_ref}
                      </td>
                      <td className="py-3 px-3">
                        <div>
                          <p className="font-medium">{booking.customer_name}</p>
                          <p className="text-xs text-muted-foreground">{booking.customer_email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-3 hidden md:table-cell">
                        {offerMap[booking.offer_id] || 'Unknown'}
                      </td>
                      <td className="py-3 px-3">{booking.booking_date}</td>
                      <td className="py-3 px-3 hidden sm:table-cell">{booking.start_time?.slice(0, 5)}</td>
                      <td className="py-3 px-3 hidden lg:table-cell">{booking.players}</td>
                      <td className="py-3 px-3">
                        <Badge variant={statusVariants[booking.status] || 'secondary'}>
                          {booking.status}
                        </Badge>
                      </td>
                      {!selectedBooking && (
                        <>
                          <td className="py-3 px-3 hidden md:table-cell">
                            {formatCents(booking.total_cents)}
                          </td>
                          <td className="py-3 px-3 hidden md:table-cell">
                            {(() => {
                              const paid = booking.payment_status === 'paid'
                                ? booking.total_cents
                                : booking.payment_status === 'partial'
                                  ? (booking.deposit_cents || 0)
                                  : 0;
                              return (
                                <span className={`text-xs font-medium ${paid > 0 ? 'text-neon-green' : 'text-muted-foreground'}`}>
                                  {paid > 0 ? formatCents(paid) : '—'}
                                </span>
                              );
                            })()}
                          </td>
                          <td className="py-3 px-3 hidden md:table-cell">
                            {(() => {
                              const paid = booking.payment_status === 'paid'
                                ? booking.total_cents
                                : booking.payment_status === 'partial'
                                  ? (booking.deposit_cents || 0)
                                  : 0;
                              const due = booking.total_cents - paid;
                              return (
                                <span className={`text-xs font-semibold ${due > 0 ? 'text-neon-orange' : 'text-neon-green'}`}>
                                  {due > 0 ? formatCents(due) : '✓'}
                                </span>
                              );
                            })()}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                  {paged.length === 0 && (
                    <tr>
                      <td colSpan={selectedBooking ? 7 : 10} className="py-8 text-center text-muted-foreground">
                        No bookings found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
                <p className="text-xs text-muted-foreground">
                  Showing {(page - 1) * perPage + 1}-{Math.min(page * perPage, filtered.length)} of {filtered.length}
                </p>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i + 1}
                      variant={page === i + 1 ? 'default' : 'ghost'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Detail / Edit Panel */}
        {selectedBooking && (
          <Card className="w-[420px] shrink-0 bg-[#111118] border-border/30 self-start sticky top-4">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <div>
                <p className="font-mono text-sm text-primary font-bold">{selectedBooking.booking_ref}</p>
                <Badge variant={statusVariants[selectedBooking.status] || 'secondary'} className="mt-1">
                  {selectedBooking.status}
                </Badge>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setSelectedBooking(null); setEditing(false); }}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {!editing ? (
                <>
                  {/* View mode */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <User className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{selectedBooking.customer_name}</p>
                      </div>
                    </div>
                    {selectedBooking.customer_email && (
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                        <p className="text-sm text-muted-foreground">{selectedBooking.customer_email}</p>
                      </div>
                    )}
                    {selectedBooking.customer_phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                        <p className="text-sm text-muted-foreground">{selectedBooking.customer_phone}</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border/20 pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="font-medium text-right max-w-[200px] truncate">{offerMap[selectedBooking.offer_id] || 'Unknown'}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Players</span>
                      <span className="font-medium">{selectedBooking.players}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> Date</span>
                      <span className="font-medium">{selectedBooking.booking_date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Time</span>
                      <span className="font-medium">{selectedBooking.start_time?.slice(0, 5)} - {selectedBooking.end_time?.slice(0, 5)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lanes</span>
                      <span className="font-medium">{selectedBooking.lanes_needed}</span>
                    </div>
                  </div>

                  <div className="border-t border-border/20 pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1.5"><CreditCard className="h-3.5 w-3.5" /> Total</span>
                      <span className="font-bold">{formatCents(selectedBooking.total_cents)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Paid</span>
                      {(() => {
                        const paid = selectedBooking.payment_status === 'paid'
                          ? selectedBooking.total_cents
                          : selectedBooking.payment_status === 'partial'
                            ? (selectedBooking.deposit_cents || 0)
                            : 0;
                        return <span className={`font-medium ${paid > 0 ? 'text-neon-green' : 'text-muted-foreground'}`}>{paid > 0 ? formatCents(paid) : '—'}</span>;
                      })()}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Due</span>
                      {(() => {
                        const paid = selectedBooking.payment_status === 'paid'
                          ? selectedBooking.total_cents
                          : selectedBooking.payment_status === 'partial'
                            ? (selectedBooking.deposit_cents || 0)
                            : 0;
                        const due = selectedBooking.total_cents - paid;
                        return <span className={`font-semibold ${due > 0 ? 'text-neon-orange' : 'text-neon-green'}`}>{due > 0 ? formatCents(due) : '✓'}</span>;
                      })()}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Payment</span>
                      <span className="font-medium capitalize">{selectedBooking.payment_type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Source</span>
                      <span className="font-medium capitalize">{selectedBooking.source || '—'}</span>
                    </div>
                  </div>

                  {selectedBooking.notes && (
                    <div className="border-t border-border/20 pt-3">
                      <div className="flex items-start gap-1.5 text-sm">
                        <FileText className="h-3.5 w-3.5 text-muted-foreground mt-0.5 shrink-0" />
                        <p className="text-muted-foreground italic">{selectedBooking.notes}</p>
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  {selectedBooking.status !== 'cancelled' && selectedBooking.status !== 'completed' && (
                    <div className="border-t border-border/20 pt-4 flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={startEditing}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Modify
                      </Button>
                      <Button
                        variant="destructive"
                        className="flex-1"
                        disabled={cancellingId === selectedBooking.id}
                        onClick={() => handleCancel(selectedBooking.id)}
                      >
                        {cancellingId === selectedBooking.id ? (
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        ) : (
                          selectedBooking.status === 'manual' ? (
                            <Trash2 className="h-4 w-4 mr-2" />
                          ) : (
                            <XCircle className="h-4 w-4 mr-2" />
                          )
                        )}
                        {selectedBooking.status === 'manual' ? 'Delete' : 'Cancel'}
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Edit mode */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Experience</Label>
                      <Select
                        value={editForm.offer_id}
                        onValueChange={(v) => setEditForm((prev) => ({ ...prev, offer_id: v, start_time: '' }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {offers.map((offer) => (
                            <SelectItem key={offer.id} value={offer.id}>
                              {offer.title.en || offer.title.es || Object.values(offer.title)[0]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Players</Label>
                      <Input
                        type="number"
                        min="1"
                        max={editOffer?.max_players ?? 20}
                        value={editForm.players}
                        onChange={(e) => setEditForm((prev) => ({ ...prev, players: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Input
                        type="date"
                        value={editForm.booking_date}
                        onChange={(e) => setEditForm((prev) => ({ ...prev, booking_date: e.target.value, start_time: '' }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Time</Label>
                      <Select
                        value={editForm.start_time}
                        onValueChange={(v) => setEditForm((prev) => ({ ...prev, start_time: v }))}
                        disabled={editTimeSlots.length === 0}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              !editForm.booking_date
                                ? 'Select a date first'
                                : editTimeSlots.length === 0
                                  ? 'Closed on this day'
                                  : 'Select time'
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {editTimeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot} - {editOffer ? calculateEndTime(slot, editOffer.duration_minutes) : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Notes</Label>
                      <Textarea
                        value={editForm.notes}
                        onChange={(e) => setEditForm((prev) => ({ ...prev, notes: e.target.value }))}
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1" disabled={saving || !editForm.start_time} onClick={handleSave}>
                        {saving ? (
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        ) : (
                          <Save className="h-4 w-4 mr-2" />
                        )}
                        {saving ? 'Saving...' : 'Save Changes'}
                      </Button>
                      <Button variant="ghost" className="flex-1" onClick={() => setEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
