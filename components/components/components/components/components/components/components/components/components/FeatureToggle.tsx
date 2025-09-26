export default function FeatureToggle({ feature, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border">
      <span className="text-text">{feature}</span>
      <button
        onClick={onToggle}
        className={`px-3 py-1 rounded-lg ${enabled ? 'bg-brand text-white' : 'bg-muted text-text'}`}
      >
        {enabled ? 'Activo' : 'Inactivo'}
      </button>
    </div>
  );
}
