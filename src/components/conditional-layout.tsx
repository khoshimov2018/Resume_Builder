'use client';

import { usePathname } from 'next/navigation';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/app-sidebar';

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isInfoPage = pathname === '/about' || pathname === '/how-it-works' || pathname === '/faq';

  if (isHomePage || isInfoPage) {
    // Home page and info pages - no sidebar
    return <>{children}</>;
  }

  // Other pages - with sidebar
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}

