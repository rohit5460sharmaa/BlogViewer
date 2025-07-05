// components/PostList.js
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

import React from 'react';
export default function PostList({ posts, onSelectPost }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => onSelectPost(post)}
          className="bg-white shadow-md rounded-lg p-3 cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-200 border border-blue-100 group relative"
        >
          <h2 className="text-xl font-bold mb-2 text-blue-700 group-hover:underline transition">{post.title}</h2>
          {post.summary && (
            <p className="text-gray-600 mb-2">{post.summary}</p>
          )}
          <div className="flex items-center mt-2">
            <span className="text-xs text-gray-400">Click for details</span>
          </div>
        </div>
      ))}
      {posts.length === 0 && (
        <div className="col-span-full text-center text-gray-500 py-8">
          No posts found.
        </div>
      )}
    </div>
  );
}