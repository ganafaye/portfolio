import type { Metadata } from 'next';
import { Icon } from '@/components/ui/Icon';
import { MobileAppSection } from '@/components/public/MobileAppSection';
import { Footer } from '@/components/public/Footer';
import { getMobileApps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Applications Mobiles · Gana FAYE',
  description:
    'Applications Flutter — MaSanté+, CampusPulse, Mes Depenses. Performance, résilience réseau, offline-first.',
};

export default async function MobileProjectsPage() {
  const apps = await getMobileApps();

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* === PAGE HEADER === */}
      <section className="flex flex-col gap-space-xs max-w-3xl">
        <div className="flex items-center gap-space-xs flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary text-label-code-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            ÉCOSYSTÈME MOBILE
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-label-code-sm font-semibold">
            {apps.length} Applications Flutter
          </span>
        </div>
        <h1 className="text-headline-lg lg:text-4xl text-on-surface tracking-tight">
          Applications Mobiles
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Solutions mobiles cross-platform développées avec Flutter &amp; Dart,
          orientées performance, résilience réseau et architecture offline-first.
        </p>
      </section>

      {/* === APPLICATIONS === */}
      <div className="flex flex-col gap-space-xl">
        {apps.map((app, index) => (
          <MobileAppSection key={app.id} app={app} index={index} />
        ))}
      </div>

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}