import React, { useState } from 'react';
import { FORUM_POSTS } from '../constants';
import { ForumPost } from '../types';

const PeerSupport: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);

  if (selectedPost) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
        <button onClick={() => setSelectedPost(null)} className="text-primary font-semibold mb-6 hover:underline">
          &larr; Back to All Posts
        </button>
        <div className="border-b pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedPost.title}</h2>
            <div className="flex items-center text-sm text-gray-500">
                <span>Posted by {selectedPost.author}</span>
                <span className="mx-2">&bull;</span>
                <span>{selectedPost.timestamp}</span>
            </div>
            <p className="mt-4 text-gray-700">{selectedPost.content}</p>
        </div>

        <h3 className="text-lg font-bold text-gray-700 mb-4">{selectedPost.comments.length} Replies</h3>
        <div className="space-y-4">
            {selectedPost.comments.map(comment => (
                <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="font-semibold text-gray-700">{comment.author}</span>
                        <span className="mx-2">&bull;</span>
                        <span>{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                </div>
            ))}
             <div className="pt-4">
                <textarea className="w-full p-2 border rounded-md" rows={3} placeholder="Write a supportive reply..."></textarea>
                <button className="mt-2 bg-secondary text-white px-4 py-2 rounded-md hover:bg-emerald-600">Post Reply</button>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Peer Support Forum</h2>
            <p className="text-gray-500">Connect with fellow students in a moderated, safe space.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 w-full sm:w-auto">
            Create New Post
        </button>
      </div>
      
      <div className="space-y-4">
        {FORUM_POSTS.map(post => (
          <div
            key={post.id}
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => setSelectedPost(post)}
          >
            <h3 className="text-lg font-bold text-primary mb-1">{post.title}</h3>
            <div className="flex items-center text-sm text-gray-500 flex-wrap">
              <span>Posted by {post.author}</span>
              <span className="mx-2 hidden sm:inline">&bull;</span>
              <span className="block sm:inline w-full sm:w-auto mt-1 sm:mt-0">{post.timestamp}</span>
              <span className="mx-2 hidden sm:inline">&bull;</span>
              <span>{post.replies} replies</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeerSupport;
