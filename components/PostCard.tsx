import { useState } from 'react';
import { Heart, MessageCircle, Repeat, Bookmark } from 'lucide-react';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="bg-white dark:bg-surface p-4 rounded-2xl shadow-md border border-border">
      <header className="flex items-center gap-3 mb-3">
        <img src={post.user.avatar} alt={`Foto de ${post.user.name}`} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-bold text-text dark:text-white">{post.user.name}</h3>
          <p className="text-muted text-sm">@{post.user.handle} • {post.time}</p>
        </div>
        <button className="ml-auto text-muted hover:text-text">⋯</button>
      </header>
      <div className="text-text dark:text-white mb-3">
        <p>{post.content}</p>
        {post.media && (
          <figure className="mt-3">
            <img src={post.media.url} alt={post.media.alt} className="rounded-lg" />
          </figure>
        )}
      </div>
      <footer className="flex items-center justify-between text-muted text-sm">
        <button onClick={() => setLiked(!liked)} className="flex items-center gap-1 hover:text-brand">
          <Heart fill={liked ? '#FF3B3B' : 'none'} className="w-4 h-4" />
          {liked ? post.likes + 1 : post.likes}
        </button>
        <button className="flex items-center gap-1 hover:text-info">
          <MessageCircle className="w-4 h-4" />
          {post.comments}
        </button>
        <button className="flex items-center gap-1 hover:text-accent">
          <Repeat className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-1 hover:text-focus">
          <Bookmark className="w-4 h-4" />
        </button>
      </footer>
    </article>
  );
}
