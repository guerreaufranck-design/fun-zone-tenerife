import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { AdminShell } from '@/components/admin/AdminShell';

export const metadata = {
  title: 'Admin | Axe Throwing Tenerife',
  robots: 'noindex, nofollow',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Allow access to login page without auth
  // The login page is rendered inside this layout, so we check the path
  // If no user and not on login page, redirect
  if (!user) {
    // We need to allow the login page to render
    // This layout wraps all /admin/* routes including /admin/login
    // We'll handle this by checking in the client shell component
  }

  return (
    <AdminShell user={user}>
      {children}
    </AdminShell>
  );
}
