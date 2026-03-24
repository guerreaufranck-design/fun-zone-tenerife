'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  DollarSign,
  Users,
  Package,
  Plus,
  CalendarDays,
  Clock,
  Loader2,
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import type { MultilingualText, BookingStatus } from '@/lib/supabase/types';

type TodayBooking = {
  booking_ref: string;
  customer_name: string;
  offer_id: string;
  start_time: string;
  players: number;
  status: BookingStatus;
  offerName: string;
};

type StatItem = {
  title: string;
  value: string;
  prefix?: string;
  change: string;
  icon: typeof Calendar;
  color: string;
};

const statusColors: Record<string, 'neonGreen' | 'destructive' | 'neonBlue' | 'neonOrange'> = {
  pending: 'neonOrange',
  confirmed: 'neonGreen',
  cancelled: 'destructive',
  completed: 'neonBlue',
  manual: 'neonOrange',
};

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<StatItem[]>([]);
  const [todaysBookings, setTodaysBookings] = useState<TodayBooking[]>([]);

  useEffect(() => {
    async function fetchDashboardData() {
      const supabase = createClient();

      // Date helpers
      const today = new Date();
      const todayStr = today.toISOString().split('T')[0];
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - today.getDay() + 1); // Monday
      const weekStartStr = weekStart.toISOString().split('T')[0];
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6); // Sunday
      const weekEndStr = weekEnd.toISOString().split('T')[0];

      // Fetch all data in parallel
      const [
        todayCountRes,
        weekRevenueRes,
        totalCountRes,
        activeOffersRes,
        todayListRes,
        offersRes,
      ] = await Promise.all([
        // Today's bookings count
        supabase
          .from('bookings')
          .select('id', { count: 'exact', head: true })
          .eq('booking_date', todayStr)
          .in('status', ['confirmed', 'manual']),
        // This week's revenue
        supabase
          .from('bookings')
          .select('total_cents')
          .gte('booking_date', weekStartStr)
          .lte('booking_date', weekEndStr)
          .in('status', ['confirmed', 'completed']),
        // Total bookings count
        supabase
          .from('bookings')
          .select('id', { count: 'exact', head: true }),
        // Active offers count
        supabase
          .from('offers')
          .select('id', { count: 'exact', head: true })
          .eq('is_active', true),
        // Today's bookings list
        supabase
          .from('bookings')
          .select('booking_ref, customer_name, offer_id, start_time, players, status')
          .eq('booking_date', todayStr)
          .order('start_time'),
        // All offers for name mapping
        supabase
          .from('offers')
          .select('id, title'),
      ]);

      // Build offer name map
      const offerMap: Record<string, string> = {};
      if (offersRes.data) {
        for (const offer of offersRes.data) {
          const title = offer.title as unknown as MultilingualText;
          offerMap[offer.id] = title?.en || title?.es || Object.values(title || {})[0] || 'Unknown';
        }
      }

      // Calculate week revenue
      const weekRevenue = (weekRevenueRes.data ?? []).reduce(
        (sum, b) => sum + (b.total_cents ?? 0),
        0
      );
      const weekRevenueEuros = (weekRevenue / 100).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      // Build stats
      const todayCount = todayCountRes.count ?? 0;
      const totalCount = totalCountRes.count ?? 0;
      const activeOffers = activeOffersRes.count ?? 0;

      setStats([
        {
          title: "Today's Bookings",
          value: todayCount.toLocaleString(),
          change: `${todayStr}`,
          icon: Calendar,
          color: 'text-neon-blue',
        },
        {
          title: 'This Week Revenue',
          value: weekRevenueEuros,
          prefix: '\u20AC',
          change: `${weekStartStr} \u2013 ${weekEndStr}`,
          icon: DollarSign,
          color: 'text-neon-green',
        },
        {
          title: 'Total Bookings',
          value: totalCount.toLocaleString(),
          change: 'All time',
          icon: Users,
          color: 'text-neon-violet',
        },
        {
          title: 'Active Offers',
          value: activeOffers.toLocaleString(),
          change: 'Currently published',
          icon: Package,
          color: 'text-neon-orange',
        },
      ]);

      // Build today's bookings list
      const bookings: TodayBooking[] = (todayListRes.data ?? []).map((b) => ({
        booking_ref: b.booking_ref,
        customer_name: b.customer_name,
        offer_id: b.offer_id,
        start_time: b.start_time,
        players: b.players,
        status: b.status as BookingStatus,
        offerName: offerMap[b.offer_id] ?? 'Unknown',
      }));

      setTodaysBookings(bookings);
      setLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {new Date().toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="bg-[#111118] border-border/30">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold">
                  {stat.prefix}
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick actions + Upcoming bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick actions */}
        <Card className="bg-[#111118] border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start" variant="secondary">
              <Link href="/admin/bookings/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Manual Booking
              </Link>
            </Button>
            <Button asChild className="w-full justify-start" variant="secondary">
              <Link href="/admin/bookings/calendar">
                <CalendarDays className="h-4 w-4 mr-2" />
                View Calendar
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Today's bookings */}
        <Card className="lg:col-span-2 bg-[#111118] border-border/30">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Today&apos;s Upcoming Bookings</CardTitle>
            <Button asChild variant="ghost" size="sm">
              <Link href="/admin/bookings">View all</Link>
            </Button>
          </CardHeader>
          <CardContent>
            {todaysBookings.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No bookings for today.
              </p>
            ) : (
              <div className="space-y-3">
                {todaysBookings.map((booking) => (
                  <div
                    key={booking.booking_ref}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[50px]">
                        <p className="text-sm font-semibold text-primary">
                          {booking.start_time.slice(0, 5)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{booking.customer_name}</p>
                        <p className="text-xs text-muted-foreground">
                          {booking.offerName} &middot; {booking.players} players &middot;{' '}
                          <span className="text-muted-foreground/70">{booking.booking_ref}</span>
                        </p>
                      </div>
                    </div>
                    <Badge variant={statusColors[booking.status] ?? 'default'}>
                      {booking.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
