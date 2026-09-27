import type { Metadata } from 'next';
import { Icon } from '@/components/ui/Icon';
import { ProjectSection } from '@/components/public/ProjectSection';
import { ArchitecturePatterns } from '@/components/public/ArchitecturePatterns';
import { Footer } from '@/components/public/Footer';
import { getWebProjects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projets Web & BDD · Gana FAYE',
  description:
    'Microservices, SOA, BDD distribuée 2PC, Spring Boot, Angular — projets web et bases de données de Gana FAYE.',
};

export default async function WebProjectsPage() {
  const projects = await getWebProjects();

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* === PAGE HEADER === */}
      <section className="flex flex-col gap-space-xs max-w-3xl">
        <div className="flex items-center gap-space-xs flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary text-label-code-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            SYSTÈMES DISTRIBUÉS &amp; DATA
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-label-code-sm font-semibold">
            {projects.length}+ Projets Web — microservices, SOA, BDD distribuée, Spring Boot, Angular
          </span>
        </div>
        <h1 className="text-headline-lg lg:text-4xl text-on-surface tracking-tight">
          Projets Web &amp; BDD
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Conception de systèmes distribués résilients, APIs Spring Boot, interfaces
          Angular et applications web complètes pour des besoins métier réels.
        </p>
      </section>

      {/* === PROJETS EMPILÉS === */}
      <div className="flex flex-col gap-space-lg">
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* === PATTERNS D'ARCHITECTURE === */}
      <ArchitecturePatterns />

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}