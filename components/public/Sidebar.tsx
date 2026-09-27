'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { DarkModeToggle } from './DarkModeToggle';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/contexts/SidebarContext';

const NAV_ITEMS = [
  { href: '/', label: 'Accueil', icon: 'home' },
  { href: '/projets/mobile', label: 'Applications Mobiles', icon: 'smartphone' },
  { href: '/projets/web', label: 'Projets Web & BDD', icon: 'database' },
  { href: '/laboratoires', label: 'Laboratoires', icon: 'science' },
  { href: '/blog', label: 'Rapports & Publications', icon: 'newspaper' },
  { href: '/certifications', label: 'Certifications', icon: 'workspace_premium' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
];

export function Sidebar() {
  const pathname = usePathname();
  const {
    collapsed,
    setCollapsed,
    isCollapsed,
    mobileOpen,
    setMobileOpen,
  } = useSidebar();

  // Fermer le drawer mobile au changement de page
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, setMobileOpen]);

  // Bloquer le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ============ BOUTON HAMBURGER (mobile only) ============ */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Ouvrir le menu"
        className="lg:hidden fixed top-4 left-4 z-[70] w-12 h-12 rounded-2xl bg-surface-container-lowest shadow-lg border border-outline-variant/40 flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors"
      >
        <Icon name="menu" size={24} />
      </button>

      {/* ============ OVERLAY (mobile only) ============ */}
      <div
        onClick={() => setMobileOpen(false)}
        className={cn(
          'lg:hidden fixed inset-0 z-[65] bg-inverse-surface/60 backdrop-blur-sm transition-opacity duration-300',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
      />

      {/* ============ BOUTON TOGGLE (desktop only) ============ */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={isCollapsed ? 'Déplier la sidebar' : 'Replier la sidebar'}
        className={cn(
          'hidden lg:flex fixed top-7 z-[60] w-7 h-7 rounded-full',
          'bg-primary text-on-primary shadow-lg',
          'items-center justify-center',
          'hover:bg-primary-container hover:scale-110',
          'transition-all duration-300 ease-out',
          'ring-2 ring-surface-container-lowest',
          isCollapsed ? 'left-[84px]' : 'left-[268px]'
        )}
      >
        <Icon name={isCollapsed ? 'chevron_right' : 'chevron_left'} size={18} />
      </button>

      {/* ============ SIDEBAR / DRAWER ============ */}
      <aside
        className={cn(
          // Base
          'fixed z-[66] flex flex-col overflow-hidden',
          'bg-surface-container-lowest shadow-lg',
          'border border-outline-variant/40',

          // Mobile : drawer plein écran qui glisse
          'left-0 top-0 bottom-0 w-[280px] rounded-none rounded-r-2xl',
          'transition-transform duration-300 ease-out',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',

          // Desktop : toujours visible, largeur variable, position flottante
          'lg:left-4 lg:top-4 lg:bottom-4 lg:rounded-2xl lg:translate-x-0 lg:z-50',
          'lg:transition-[width] lg:duration-300',
          isCollapsed ? 'lg:w-[80px]' : 'lg:w-[260px]'
        )}
      >
        {/* === BOUTON FERMER (mobile only) === */}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Fermer le menu"
          className="lg:hidden absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors z-10"
        >
          <Icon name="close" size={20} />
        </button>

        {/* === HAUT : Photo + Nom + CV === */}
        <div
          className={cn(
            'flex flex-col border-b border-outline-variant/40 flex-shrink-0 transition-all duration-300',
            // Mobile : toujours visible
            'p-5 gap-4',
            // Desktop : adaptatif
            isCollapsed
              ? 'lg:p-3 lg:gap-3 lg:items-center'
              : 'lg:p-5 lg:gap-4'
          )}
        >
          <div className="flex justify-center">
            <div
              className={cn(
                'rounded-full overflow-hidden shadow-md ring-2 ring-primary/30 transition-all duration-300',
                // Mobile : taille moyenne
                'w-20 h-20',
                // Desktop : adaptatif
                isCollapsed ? 'lg:w-12 lg:h-12' : 'lg:w-24 lg:h-24'
              )}
            >
              <Image
                src="/images/pp/pp.jpeg"
                alt="Photo de profil de Gana FAYE"
                width={96}
                height={96}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>

          <div
            className={cn(
              'flex flex-col gap-1 overflow-hidden transition-all duration-300',
              // Mobile : toujours visible
              'max-h-40 opacity-100',
              // Desktop : caché si replié
              isCollapsed
                ? 'lg:max-h-0 lg:opacity-0 lg:pointer-events-none'
                : 'lg:max-h-40 lg:opacity-100'
            )}
          >
            <h2 className="text-headline-md font-bold leading-tight text-on-surface truncate">
              Gana FAYE
            </h2>
            <p className="text-body-sm text-on-surface-variant leading-snug truncate">
              Ingénieur SI &amp; Sec SI | Data | IA
            </p>
            <span className="text-label-code-sm text-primary font-medium mt-0.5 truncate">
              Master 2 · UADB
            </span>
          </div>

          <a
            href="/assets/cv/Gana-FAYE-CV.pdf"
            download
            title="Télécharger le CV"
            className={cn(
              'flex items-center justify-center gap-2 rounded-lg',
              'border border-outline-variant/40 hover:bg-surface-container-low hover:border-outline-variant',
              'transition-colors',
              // Mobile : pleine largeur
              'py-2 px-3 w-full',
              // Desktop : adaptatif
              isCollapsed && 'lg:p-2'
            )}
          >
            <Icon name="download" size={18} className="text-on-surface shrink-0" />
            <span
              className={cn(
                'text-body-sm text-on-surface font-medium truncate',
                isCollapsed && 'lg:hidden'
              )}
            >
              Télécharger le CV
            </span>
          </a>
        </div>

        {/* === NAVIGATION === */}
        <nav
          className={cn(
            'flex-1 overflow-y-auto flex flex-col gap-1 min-h-0 transition-all duration-300',
            // Mobile
            'px-3 py-3',
            // Desktop
            isCollapsed ? 'lg:px-2 lg:py-3' : 'lg:px-3 lg:py-3'
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href ||
                  pathname.startsWith(item.href + '/');

            return (
              <Link
                key={item.href}
                href={item.href}
                title={isCollapsed ? item.label : undefined}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'group relative flex items-center rounded-lg transition-all duration-200 flex-shrink-0',
                  // Mobile : toujours avec label
                  'gap-2.5 px-3 py-2',
                  // Desktop : adaptatif
                  isCollapsed && 'lg:justify-center lg:p-2.5',
                  isActive
                    ? 'bg-surface-container-high text-primary font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                )}
              >
                <span
                  className={cn(
                    'absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full bg-primary transition-all duration-300',
                    isActive ? 'h-5 opacity-100' : 'h-0 opacity-0'
                  )}
                />
                <Icon
                  name={item.icon}
                  size={20}
                  className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                />
                <span
                  className={cn(
                    'text-body-sm truncate',
                    isCollapsed && 'lg:hidden'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* === BAS : Dark Mode + Copyright === */}
        <div
          className={cn(
            'border-t border-outline-variant/40 flex flex-col gap-2 flex-shrink-0 transition-all duration-300',
            // Mobile
            'p-3',
            // Desktop
            isCollapsed ? 'lg:p-2' : 'lg:p-3'
          )}
        >
          {isCollapsed ? (
            <>
              {/* Desktop replié : bouton compact */}
              <button
                type="button"
                onClick={() => setCollapsed(false)}
                title="Dark mode (déplier la sidebar)"
                className="hidden lg:flex items-center justify-center p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors"
              >
                <Icon name="dark_mode" size={18} />
              </button>
              {/* Mobile : toggle complet */}
              <div className="lg:hidden">
                <DarkModeToggle />
              </div>
            </>
          ) : (
            <DarkModeToggle />
          )}

          <p
            className={cn(
              'text-body-sm text-on-surface-variant/60 text-center leading-tight',
              isCollapsed && 'lg:hidden'
            )}
          >
            © 2026 · Gana FAYE
          </p>
        </div>
      </aside>
    </>
  );
}