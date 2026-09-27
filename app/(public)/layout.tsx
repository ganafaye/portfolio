'use client';

import { Sidebar } from '@/components/public/Sidebar';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';

function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        'transition-[padding] duration-300 ease-out',
        // Mobile : pas de padding left, padding top pour le hamburger
        'pt-20 px-4',
        // Desktop : padding adaptatif selon l'état de la sidebar + padding top normal
        'lg:pt-6 lg:pr-6 lg:px-0',
        isCollapsed ? 'lg:pl-[112px]' : 'lg:pl-[292px]'
      )}
    >
      <main className="w-full bg-surface min-h-screen pb-6">{children}</main>
    </div>
  );
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </SidebarProvider>
  );
}