import { DocumentTextIcon } from '@heroicons/react/24/outline';
import React from 'react';
export default function PostDetail({ post }) {
  if (!post) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 relative flex flex-col justify-center min-h-[220px]">
      <div className="absolute -top-8 left-6 bg-blue-100 rounded-full p-2 shadow">
        <DocumentTextIcon className="h-8 w-8 text-blue-500" />
      </div>
      <h2 className="text-2xl font-bold text-blue-800 mb-4 mt-4">{post.title}</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
    </div>
  );
}