import { getAllPosts } from "@/api/backend";
import { CardPost } from "@/components/CardPost";
import "./globals.css";
import Link from "next/link";

export default async function Home({ searchParams }: any) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main className="app-body">
      {posts.map((post: any) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className="pagesLink">
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
