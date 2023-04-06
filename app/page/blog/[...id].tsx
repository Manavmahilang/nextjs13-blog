import React from 'react';
import { useRouter } from 'next/router';

type Post = {
  id: number;
  createdBy: string;
  createdOn: string;
  title: string;
  sDescription: string;
  content: string;
};

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="h-48 w-full object-cover" src="https://via.placeholder.com/300x200" alt={post.title} />
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">{post.title}</h3>
          <p className="text-gray-700 text-base">{post.sDescription}</p>
          <p className="text-gray-700 text-base">{`Created by: ${post.createdBy}`}</p>
          <p className="text-gray-700 text-base">{`Created on: ${post.createdOn}`}</p>
          <p className="text-gray-700 text-base">{post.content}</p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch('data/posts.json');
  const data = await response.json();

  const paths = data.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const response = await fetch('data/posts.json');
  const data = await response.json();

  const post = data.find((post: Post) => post.id === parseInt(params.id));

  return { props: { post } };
}

