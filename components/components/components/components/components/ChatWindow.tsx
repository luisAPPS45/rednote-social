export default function ChatWindow({ messages }) {
  return (
    <div className="flex flex-col space-y-2 p-4 bg-surface rounded-xl border border-border">
      {messages.map((msg, i) => (
        <div key={i} className={`p-2 rounded-lg ${msg.fromMe ? 'bg-brand text-white self-end' : 'bg-muted text-text'}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
}
