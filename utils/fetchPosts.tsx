{/*import postsData from '../data/posts.json';

type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
  createdBy: string;
  createdAt: string;
  authorId: number;
};

export function fetchPosts(role: string, userId?: number): Post[] {
  if (role === 'admin') {
    return postsData.posts;
  } else if (role === 'author') {
    return postsData.posts.filter((post) => post.authorId === userId);
  } else {
    return postsData.posts;
  }
}

export function addPost(
  post: Omit<Post, 'id' | 'createdAt'>
): Post | undefined {
  const newPost: Post = {
    ...post,
    id: Date.now(),
    createdAt: new Date().toISOString(),
    authorId: post.authorId,
  };
  postsData.posts.push(newPost);
  return newPost;
}

export function deletePost(id: number): void {
  const index = postsData.posts.findIndex((post) => post.id === id);
  if (index >= 0) {
    postsData.posts.splice(index, 1);
  }
}
*/}