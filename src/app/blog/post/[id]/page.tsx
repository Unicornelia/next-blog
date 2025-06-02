import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((post) => post.id === id);

  if (!id || !post) {
    // throw new Error("No post with id provided or missing post");
    return <p>No post with id provided or missing post</p>;
  }

  return (
    <>
      <h1 className="text-4xl text-cyan-800 font-bold mb-4">Post</h1>
      <Post {...post} />
    </>
  );
}
