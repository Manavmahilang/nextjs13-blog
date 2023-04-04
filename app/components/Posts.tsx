{/*import { useState, useEffect } from 'react'
import { fetchPosts, addPost, deletePost } from '../../utils/fetchPosts'

type Post = {
  id: number
  title: string
  image: string
  content: string
  createdBy: string
  createdAt: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    setPosts(fetchPosts())
  }, [])

  function handleAddPost() {
    const newPost = addPost({
      id: 0,
      title: 'New Post',
      image: '/images/default.jpg',
      content: 'Lorem ipsum dolor sit amet.',
      createdBy: 'John Doe',
      createdAt: '',
    })
    setPosts((prevPosts) => [...prevPosts, newPost])
  }

  function handleDeletePost(id: number) {
    deletePost(id)
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
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
            <p>Created by {post.createdBy} on {new Date(post.createdAt).toLocaleString()}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  )
}
*/}