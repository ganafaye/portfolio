export function Footer() {
  return (
    <footer className="mt-4 pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant">
      <div className="flex items-center gap-2">
        <span className="text-label-code-sm">Statut :</span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low text-tertiary text-label-code-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-tertiary" />
          Ouvert aux opportunités (Stage &amp; CDI)
        </span>
      </div>
      <div className="text-body-sm text-center sm:text-right">
        Conçu &amp; développé par{' '}
        <strong className="text-on-surface font-medium">Gana FAYE</strong> · © 2026 ·
        UADB Bambey
      </div>
    </footer>
  );
}