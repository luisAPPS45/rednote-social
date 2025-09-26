export default function NotificationsPanel({ notifications }) {
  return (
    <div className="space-y-4">
      {notifications.map((n, i) => (
        <div key={i} className="bg-surface p-4 rounded-xl border border-border shadow-sm">
          <p className="text-text">{n.message}</p>
          <span className="text-muted text-xs">{n.time}</span>
        </div>
      ))}
    </div>
  );
}
