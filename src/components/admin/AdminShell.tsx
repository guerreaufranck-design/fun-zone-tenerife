'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Calendar,
  Package,
  TrendingUp,
  BarChart3,
  Clock,
  HelpCircle,
  FileText,
  Play,
  Shield,
  Receipt,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  Map,
} from 'lucide-react';
import type { User } from '@supabase/supabase-js';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/escape-sales', label: 'Escape Sales', icon: Map },
  { href: '/admin/bookings', label: 'Bookings', icon: Calendar },
  { href: '/admin/offers', label: 'Offers', icon: Package },
  { href: '/admin/pricing', label: 'Dynamic Pricing', icon: TrendingUp },
  { href: '/admin/hours', label: 'Hours', icon: Clock },
  { href: '/admin/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/admin/blog', label: 'Blog', icon: FileText },
  { href: '/admin/tiktok', label: 'TikTok', icon: Play },
  { href: '/admin/waivers', label: 'Waivers', icon: Shield },
  { href: '/admin/invoices', label: 'Invoices', icon: Receipt },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

interface AdminShellProps {
  user: User | null;
  children: React.ReactNode;
}

export function AdminShell({ user, children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If on login or print page, render children directly without shell
  if (pathname === '/admin/login' || pathname.endsWith('/print')) {
    return <>{children}</>;
  }

  // If not authenticated and not on login page, redirect to login
  if (!user) {
    if (typeof window !== 'undefined') {
      router.push('/admin/login');
    }
    return null;
  }

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  function isActive(href: string) {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  }

  return (
    <div className="min-h-screen bg-[#0d0d14] text-foreground">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#0a0a0f] border-r border-border/50 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border/50">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary neon-glow">AXT</span>
            <span className="text-sm text-muted-foreground">Admin</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(0,212,255,0.1)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-border/50 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-muted-foreground hover:text-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/admin" className="hover:text-foreground">
                Admin
              </Link>
              {pathname !== '/admin' && (
                <>
                  <ChevronLeft className="h-3 w-3 rotate-180" />
                  <span className="text-foreground capitalize">
                    {pathname.split('/').pop()?.replace(/-/g, ' ')}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:block">
              {user.email}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline ml-1">Logout</span>
            </Button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
