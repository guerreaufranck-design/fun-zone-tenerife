'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Search, ChevronLeft, ChevronRight, Loader2, Eye, X, User, Mail, Phone, MapPin, Calendar, FileText, Pen, CheckCircle2, Circle } from 'lucide-react';

interface Waiver {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string | null;
  date_of_birth: string | null;
  waiver_ref: string | null;
  signature_data: string | null;
  address: string;
  signed_at: string;
  emergency_contact_name: string | null;
  emergency_contact_phone: string | null;
  accepted: boolean;
  reviewed: boolean;
  discovery_source: string | null;
  discovery_source_other: string | null;
  photo_consent: boolean | null;
  bookings: { booking_ref: string } | null;
}

export default function WaiversPage() {
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [page, setPage] = useState(1);
  const [waivers, setWaivers] = useState<Waiver[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedWaiver, setSelectedWaiver] = useState<Waiver | null>(null);
  const perPage = 10;

  const fetchWaivers = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({ page: String(page), perPage: String(perPage) });
      if (dateFilter) params.set('date', dateFilter);
      if (search) params.set('search', search);

      const res = await fetch(`/api/admin/waivers?${params}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      setWaivers(json.data || []);
      setTotal(json.total || 0);
    } catch (err) {
      console.error('Error fetching waivers:', err);
    } finally {
      setLoading(false);
    }
  }, [page, dateFilter, search]);

  useEffect(() => {
    fetchWaivers();
  }, [fetchWaivers]);

  const totalPages = Math.ceil(total / perPage);

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }

  function formatTime(dateStr: string) {
    return new Date(dateStr).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  async function toggleReviewed(e: React.MouseEvent, waiverId: string, currentValue: boolean) {
    e.stopPropagation();
    const newValue = !currentValue;
    setWaivers((prev) => prev.map((w) => w.id === waiverId ? { ...w, reviewed: newValue } : w));
    try {
      const res = await fetch(`/api/admin/waivers/${waiverId}/review`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reviewed: newValue }),
      });
      if (!res.ok) throw new Error('Failed to update');
    } catch {
      setWaivers((prev) => prev.map((w) => w.id === waiverId ? { ...w, reviewed: currentValue } : w));
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Waivers</h1>

      <Card className="bg-[#111118] border-border/30">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="pl-9"
              />
            </div>
            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => { setDateFilter(e.target.value); setPage(1); }}
              className="w-44"
              placeholder="Filter by date"
            />
            {dateFilter && (
              <Button variant="ghost" size="sm" onClick={() => setDateFilter('')}>
                Clear date
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-center py-3 px-2 text-muted-foreground font-medium w-10">OK</th>
                      <th className="text-left py-3 px-3 text-muted-foreground font-medium">Ref</th>
                      <th className="text-left py-3 px-3 text-muted-foreground font-medium">Date</th>
                      <th className="text-left py-3 px-3 text-muted-foreground font-medium">Time</th>
                      <th className="text-left py-3 px-3 text-muted-foreground font-medium">Name</th>
                      <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden sm:table-cell">Email</th>
                      <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">DOB</th>
                      <th className="text-left py-3 px-3 text-muted-foreground font-medium">Sig</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waivers.map((waiver) => (
                      <tr
                        key={waiver.id}
                        className={`border-b border-border/10 hover:bg-secondary/20 transition-colors cursor-pointer ${waiver.reviewed ? 'opacity-60' : ''}`}
                        onClick={() => setSelectedWaiver(waiver)}
                      >
                        <td className="py-3 px-2 text-center">
                          <button
                            onClick={(e) => toggleReviewed(e, waiver.id, waiver.reviewed)}
                            className="inline-flex items-center justify-center"
                          >
                            {waiver.reviewed ? (
                              <CheckCircle2 className="h-5 w-5 text-neon-green" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                            )}
                          </button>
                        </td>
                        <td className="py-3 px-3">
                          {waiver.waiver_ref ? (
                            <span className="font-mono text-xs text-primary">{waiver.waiver_ref}</span>
                          ) : (
                            <span className="text-xs text-muted-foreground">-</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-muted-foreground text-xs">{formatDate(waiver.signed_at)}</td>
                        <td className="py-3 px-3 text-muted-foreground text-xs">{formatTime(waiver.signed_at)}</td>
                        <td className="py-3 px-3">{waiver.first_name} {waiver.last_name}</td>
                        <td className="py-3 px-3 hidden sm:table-cell text-muted-foreground text-xs">
                          {waiver.email || '-'}
                        </td>
                        <td className="py-3 px-3 hidden md:table-cell text-muted-foreground text-xs">
                          {waiver.date_of_birth || '-'}
                        </td>
                        <td className="py-3 px-3">
                          {waiver.signature_data ? (
                            <Eye className="h-4 w-4 text-primary" />
                          ) : (
                            <span className="text-xs text-muted-foreground">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                    {waivers.length === 0 && (
                      <tr>
                        <td colSpan={8} className="py-8 text-center text-muted-foreground">
                          No waivers found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
                  <p className="text-xs text-muted-foreground">
                    Showing {(page - 1) * perPage + 1}-{Math.min(page * perPage, total)} of {total}
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
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      const pageNum = totalPages <= 5 ? i + 1 : Math.max(1, Math.min(page - 2, totalPages - 4)) + i;
                      return (
                        <Button
                          key={pageNum}
                          variant={page === pageNum ? 'default' : 'ghost'}
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setPage(pageNum)}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
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
            </>
          )}
        </CardContent>
      </Card>

      {/* Waiver Detail Modal */}
      {selectedWaiver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setSelectedWaiver(null)}>
          <div className="relative bg-card border border-border rounded-xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedWaiver(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold">{selectedWaiver.first_name} {selectedWaiver.last_name}</h3>
              {selectedWaiver.waiver_ref && (
                <span className="font-mono text-xs text-primary">{selectedWaiver.waiver_ref}</span>
              )}
            </div>

            {/* Details Grid */}
            <div className="space-y-4">
              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm">{selectedWaiver.email || '-'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm">{selectedWaiver.phone || '-'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Date of Birth</p>
                    <p className="text-sm">{selectedWaiver.date_of_birth || '-'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Address</p>
                    <p className="text-sm">{selectedWaiver.address || '-'}</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              {(selectedWaiver.emergency_contact_name || selectedWaiver.emergency_contact_phone) && (
                <div className="border-t border-border/20 pt-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Emergency Contact</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5">
                      <User className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Name</p>
                        <p className="text-sm">{selectedWaiver.emergency_contact_name || '-'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Phone className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="text-sm">{selectedWaiver.emergency_contact_phone || '-'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Booking & Signing Info */}
              <div className="border-t border-border/20 pt-3">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Waiver Info</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5">
                    <FileText className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Booking Ref</p>
                      <p className="text-sm font-mono text-primary">{selectedWaiver.bookings?.booking_ref || '-'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Signed At</p>
                      <p className="text-sm">{new Date(selectedWaiver.signed_at).toLocaleString('en-GB')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Pen className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Rules Accepted</p>
                      <p className="text-sm">{selectedWaiver.accepted ? '✅ Yes' : '❌ No'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discovery & Photo Consent */}
              {(selectedWaiver.discovery_source || selectedWaiver.photo_consent !== null) && (
                <div className="border-t border-border/20 pt-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Extra Info</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedWaiver.discovery_source && (
                      <div>
                        <p className="text-xs text-muted-foreground">Discovery Source</p>
                        <p className="text-sm capitalize">
                          {selectedWaiver.discovery_source.replace(/_/g, ' ')}
                          {selectedWaiver.discovery_source === 'other' && selectedWaiver.discovery_source_other
                            ? ` (${selectedWaiver.discovery_source_other})`
                            : ''}
                        </p>
                      </div>
                    )}
                    {selectedWaiver.photo_consent !== null && (
                      <div>
                        <p className="text-xs text-muted-foreground">Photo Consent</p>
                        <p className="text-sm">{selectedWaiver.photo_consent ? '✅ Yes' : '❌ No'}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Signature */}
              {selectedWaiver.signature_data && (
                <div className="border-t border-border/20 pt-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Signature</h4>
                  <div className="bg-[#0f0f14] rounded-lg p-3 border border-border">
                    <img
                      src={selectedWaiver.signature_data}
                      alt="Signature"
                      className="w-full h-auto max-h-32 object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
