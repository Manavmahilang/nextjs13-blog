'use client'
import Link from 'next/link';
import React from 'react';

type Post = {
  id: number;
  createdBy: string;
  createdOn: string;
  title: string;
  sDescription: string;
  content: string;
  image: string; 
};

type Props = {};

export default function BlogContainers({}: Props) {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data/posts.json');
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="object-cover h-48 w-full" src={post.image} alt={post.title} />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{post.title}</h3>
              <p className="text-gray-700 text-base">{post.sDescription}</p>
              <Link href={`/blog/${post.id}.tsx`} className="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
