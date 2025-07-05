import { useState } from 'react';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [search, setSearch] = useState('');

  // Filter posts based on search input
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      (post.summary && post.summary.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center drop-shadow-lg">Blog Posts</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full md:w-1/2 px-4 py-2 border border-blue-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white text-gray-900"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className={`flex-1 transition-all duration-300 ${selectedPost ? 'md:w-1/2' : 'md:w-full'}`}>
          <PostList posts={filteredPosts} onSelectPost={setSelectedPost} />
        </div>
        {selectedPost && (
          <div className="flex-1 animate-fade-in">
            <PostDetail post={selectedPost} />
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setSelectedPost(null)}
            >
              Back to List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}