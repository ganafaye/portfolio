'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  isCollapsed: boolean;   // version "safe" pour le rendu (après hydration)
  mounted: boolean;
  // Mobile drawer
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
  toggleMobile: () => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed, mounted] = useLocalStorage(
    'sidebar-collapsed',
    false
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const value: SidebarContextValue = {
    collapsed,
    setCollapsed,
    isCollapsed: mounted && collapsed,
    mounted,
    mobileOpen,
    setMobileOpen,
    toggleMobile: () => setMobileOpen((v) => !v),
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error('useSidebar doit être utilisé dans un SidebarProvider');
  }
  return ctx;
}