{/*import { useState, useEffect } from 'react';
import { fetchPosts, addPost, deletePost } from '../../utils/fetchPosts';

type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
  createdBy: string;
  createdAt: string;
  authorId: number;
};

type Role = 'admin' | 'author' | 'reader';

type Session = {
  role: Role;
  userId?: number;
};

export default function BlogPage({ session }: { session: Session }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(fetchPosts(session.role, session.userId));
  }, [session]);

  function handleAddPost() {
    const newPost = addPost({
      title: 'New Post',
      image: '/images/default.jpg',
      content: 'Lorem ipsum dolor sit amet.',
      createdBy: 'John Doe',
      authorId: session.userId ?? 0,
    });
    if (newPost) {
      setPosts((prevPosts) => [...prevPosts, newPost]);
    }
  }

  function handleDeletePost(id: number) {
    deletePost(id);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  }

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>
              Created by {post.createdBy} on{' '}
              {new Date(post.createdAt).toLocaleString()}
            </p>
            {(session.role === 'admin' ||
              (session.role === 'author' && post.authorId === session.userId)) && (
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
      {session.role === 'admin' || session.role === 'author' ? (
        <button onClick={handleAddPost}>Add Post</button>
      ) : null}
    </div>
  );
}
*/}