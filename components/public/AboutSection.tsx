import { Icon } from '@/components/ui/Icon';

export function AboutSection() {
  return (
    <div className="lg:col-span-2 flex flex-col gap-space-lg p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-space-sm pb-2">
        <div className="p-2 rounded-lg bg-surface-container-low text-primary">
          <Icon name="badge" size={24} />
        </div>
        <div>
          <h2 className="text-headline-lg text-on-surface">À Propos de Moi</h2>
          <span className="text-label-code-sm text-primary">
            Profil &amp; Philosophie de travail
          </span>
        </div>
      </div>

      {/* Textes */}
      <div className="flex flex-col gap-space-md">
        <div>
          <h3 className="text-headline-md text-on-surface">Mon parcours</h3>
          <p className="text-body-md text-on-surface-variant mt-1 leading-relaxed">
            Passionné par la robustesse des systèmes et l&apos;automatisation
            logicielle, mon cursus à l&apos;UADB m&apos;a permis de développer une
            double compétence rare : la rigueur de l&apos;architecture de données
            institutionnelle combinée à l&apos;agilité des pratiques DevOps modernes.
          </p>
        </div>
        <div>
          <h3 className="text-headline-md text-on-surface">Ma vision</h3>
          <p className="text-body-md text-on-surface-variant mt-1 leading-relaxed">
            Je considère que l&apos;ingénierie des systèmes ne se limite pas à
            l&apos;écriture de code : elle consiste à concevoir des architectures
            résilientes, mesurables et capables d&apos;évoluer en intégrant
            harmonieusement des modèles de données et d&apos;intelligence
            artificielle au service des usagers.
          </p>
        </div>
      </div>

      {/* 3 mini-cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-2">
        <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
          <Icon name="domain" size={24} className="text-primary" />
          <span className="text-headline-sm text-on-surface">UADB / SI</span>
          <span className="text-label-code-sm text-on-surface-variant">
            Master 2 SI Bambey
          </span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-high flex flex-col gap-1">
          <Icon name="all_inclusive" size={24} className="text-secondary" />
          <span className="text-headline-sm text-on-surface">DevOps</span>
          <span className="text-label-code-sm text-on-surface-variant">
            K8s · Docker · CI/CD
          </span>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
          <Icon name="psychology" size={24} className="text-tertiary" />
          <span className="text-headline-sm text-on-surface">Data / IA</span>
          <span className="text-label-code-sm text-on-surface-variant">
            ML · Scikit · LLM API
          </span>
        </div>
      </div>
    </div>
  );
}