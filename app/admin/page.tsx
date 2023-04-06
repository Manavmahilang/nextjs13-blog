'use client'
import { useState } from 'react';

type Blog = {
  id: number;
  title: string;
  content: string;
  createdBy: string;
  createdOn: string;
  sDescription: string;
  image: string;
};

const defaultBlogs: Blog[] = [
  {
    id: 1,
    title: 'Blog Title 1',
    content: 'Lorem ipsum dolor sit amet',
    createdBy: 'John Doe',
    createdOn: '2022-01-01',
    sDescription: 'A short description of the blog',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Blog Title 2',
    content: 'Lorem ipsum dolor sit amet',
    createdBy: 'Jane Doe',
    createdOn: '2022-01-02',
    sDescription: 'A short description of the blog',
    image: 'https://via.placeholder.com/300x200',
  },
];

export default function AdminPage() {
  const [blogs, setBlogs] = useState<Blog[]>(defaultBlogs);

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs &&
          blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img className="object-cover h-48 w-full" src={blog.image} alt={blog.title} />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
                <p className="text-gray-700 text-base">{blog.sDescription}</p>
                <div className="flex mt-4">
                  <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400" onClick={() => handleDelete(blog.id)}>
                    Delete
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400">Edit</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
