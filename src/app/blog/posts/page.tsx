import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl text-cyan-800 font-bold mb-4">Blog Posts</h1>
      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </>
  );
}
