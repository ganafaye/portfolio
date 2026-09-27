export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-surface-container-high border-t-primary animate-spin" />
        <p className="text-body-sm text-on-surface-variant">Chargement...</p>
      </div>
    </div>
  );
}