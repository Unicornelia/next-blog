import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

type Params = { params: { id: string } };

export default async function Page({ params }: Promise<Params>) {
  const { id } = await params;
  const post = posts.find((post) => post.id === id);
  return (
    <>
      <h1 className="text-4xl text-cyan-800 font-bold mb-4">Post</h1>
      <Post {...post} />
    </>
  );
}
