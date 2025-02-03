import { CardPost } from "@/components/CardPost";
import styles from "./page.module.css";

interface Params {
  slug: string;
}

async function getPostBySlug(slug: any) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);

  const data = await response.json();
  if (data.length === 0) {
    return {};
  }
  const post = data[0];
  return post;
}

const PagePost = async ({ params }: { params: Params }) => {
  const post = await getPostBySlug(params.slug);
  return (
    <div>
      <CardPost post={post} />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};

export default PagePost;
