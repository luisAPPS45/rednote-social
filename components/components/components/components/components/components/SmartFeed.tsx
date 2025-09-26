import { useState } from 'react';
import PostCard from './PostCard';

export default function SmartFeed({ posts }) {
  const [filter, setFilter] = useState('Todos');
  const filteredPosts = posts.filter(p => filter === 'Todos' || p.tags.includes(filter));

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {['Todos', 'Arte', 'Tech', 'Deportes'].map(tag => (
          <button key={tag} onClick={() => setFilter(tag)} className="px-3 py-1 rounded-full bg-muted text-text">
            {tag}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredPosts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </div>
  );
}
