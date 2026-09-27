import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { JsonLd } from '@/components/public/JsonLd';
import { HeroCarousel } from '@/components/public/HeroCarousel';
import { Typewriter } from '@/components/public/Typewriter';
import { HeroDate } from '@/components/public/HeroDate';
import { StatsCards } from '@/components/public/StatsCards';
import { EducationTimeline } from '@/components/public/EducationTimeline';
import { AboutSection } from '@/components/public/AboutSection';
import { StackSection } from '@/components/public/StackSection';
import { SkillCard } from '@/components/public/SkillCard';
import { CertificationCard } from '@/components/public/CertificationCard';
import { Footer } from '@/components/public/Footer';
import {
  getEducations,
  getFeaturedCertifications,
  getSkillDomains,
  getSkills,
} from '@/lib/data';

export default async function HomePage() {
  const [educations, certifications, skills, skillDomains] = await Promise.all([
    getEducations(),
    getFeaturedCertifications(),
    getSkills(),
    getSkillDomains(),
  ]);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gana FAYE',
    url: 'https://gana-faye.vercel.app',
    image: 'https://gana-faye.vercel.app/images/pp/pp.jpeg',
    jobTitle: "Ingénieur Systèmes d'Information, DevOps, Data & IA",
    description:
      "Ingénieur SI & DevOps (Master 2 UADB Bambey). Spécialisé en développement Web/Mobile, Data Science, Cloud, DevOps et Cybersécurité.",
    worksFor: {
      '@type': 'Organization',
      name: 'UADB — Université Alioune Diop de Bambey',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Université Alioune Diop de Bambey',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bambey',
      addressRegion: 'Diourbel',
      addressCountry: 'SN',
    },
    knowsAbout: [
      'DevOps',
      'Cloud Computing',
      'Data Science',
      'Machine Learning',
      'Intelligence Artificielle',
      'Cybersecurity',
      'Flutter',
      'Spring Boot',
      'Kubernetes',
      'Docker',
      'Next.js',
      'Python',
      'Angular',
      'PostgreSQL',
      'MySQL',
    ],
    sameAs: [
      'https://github.com/ganafaye',
      'https://www.linkedin.com/in/gana-faye/',
    ],
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <div className="flex flex-col w-full gap-space-xl">
        {/* ============================================
            SECTION 1 : HERO
            ============================================ */}
        <section className="relative w-full rounded-2xl overflow-hidden h-[70vh] min-h-[500px] max-h-[800px]">
          <HeroCarousel />
          <HeroDate />
          <div className="absolute bottom-6 left-6 right-6 z-10 max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug drop-shadow-2xl min-h-[60px]">
              <Typewriter />
            </h1>
          </div>
        </section>

        {/* ============================================
            SECTION 2 : STATS
            ============================================ */}
        <StatsCards />

        {/* ============================================
            SECTION 3 : PARCOURS
            ============================================ */}
        <EducationTimeline educations={educations} />

        {/* ============================================
            SECTION 4 : À PROPOS + STACK
            ============================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          <AboutSection />
          <StackSection skills={skills} />
        </section>

        {/* ============================================
            SECTION 5 : COMPÉTENCES
            ============================================ */}
        <section className="flex flex-col gap-space-lg">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-space-xs">
              <Icon name="verified" size={24} className="text-primary" />
              <h2 className="text-headline-lg text-on-surface">
                Compétences Clés par Domaine
              </h2>
            </div>
            <p className="text-body-md text-on-surface-variant">
              Technologies et compétences maîtrisées à travers mes projets
              académiques et personnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg">
            {skillDomains.map((domain) => (
              <SkillCard key={domain.id} domain={domain} />
            ))}
          </div>
        </section>

        {/* ============================================
            SECTION 6 : CERTIFICATIONS
            ============================================ */}
        <section className="flex flex-col gap-space-lg">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-space-xs">
                <Icon
                  name="workspace_premium"
                  size={24}
                  className="text-secondary"
                />
                <h2 className="text-headline-lg text-on-surface">
                  Certifications Reconnues
                </h2>
              </div>
              <p className="text-body-md text-on-surface-variant">
                Accréditations validant mes compétences auprès d&apos;Oracle,
                AWS, IBM et Coursera.
              </p>
            </div>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-1 text-body-md text-primary font-medium hover:underline"
            >
              <span>Toutes les certifications (17)</span>
              <Icon name="arrow_forward" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>

        {/* ============================================
            FOOTER
            ============================================ */}
        <Footer />
      </div>
    </>
  );
}