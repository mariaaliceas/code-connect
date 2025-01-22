import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";

async function getPostsBySlug(slug: any) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);

  const data = await response.json();
  if (data.length === 0) {
    return {};
  }
  return data[0];
}
