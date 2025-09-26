export default function GroupHeader({ group }) {
  return (
    <div className="bg-surface p-6 rounded-xl border border-border shadow-md">
      <h1 className="text-2xl font-bold text-text">{group.name}</h1>
      <p className="text-muted">{group.description}</p>
      <div className="mt-2 flex gap-2">
        {group.tags.map(tag => (
          <span key={tag} className="bg-muted text-xs px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted">Reglas: {group.rules}</p>
    </div>
  );
}
