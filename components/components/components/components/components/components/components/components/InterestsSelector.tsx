export default function InterestsSelector({ interests, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {interests.map((interest, i) => (
        <button
          key={i}
          onClick={() => onSelect(interest)}
          className="bg-muted px-4 py-2 rounded-lg text-text hover:bg-brand hover:text-white"
        >
          {interest}
        </button>
      ))}
    </div>
  );
}
