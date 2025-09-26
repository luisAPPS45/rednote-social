import { useState } from 'react';

export default function QuickEditor() {
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);

  return (
    <div className="bg-surface p-4 rounded-2xl shadow-sm border border-border">
      <textarea
        placeholder="¿Qué está pasando hoy?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full bg-transparent text-text dark:text-white resize-none"
      />
      {media && <img src={URL.createObjectURL(media)} className="mt-2 rounded-lg" />}
      <div className="flex justify-between mt-3">
        <input type="file" onChange={(e) => setMedia(e.target.files[0])} />
        <button className="bg-brand text-white px-4 py-2 rounded-xl">Publicar</button>
      </div>
    </div>
  );
}
