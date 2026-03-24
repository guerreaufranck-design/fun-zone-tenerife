import { redirect } from 'next/navigation';

// This page only exists as a fallback. The middleware handles
// redirecting "/" to the default locale ("/en").
export default function RootPage() {
  redirect('/en');
}
