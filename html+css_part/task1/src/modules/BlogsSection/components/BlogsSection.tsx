import styles from "./BlogsSection.module.scss";
import ArticleTag from "../../../components/ArticleTag";
import Button from "../../../ui/Button";
import BlogCards from "../../../components/BlogCardList";
function BlogSection(): JSX.Element {
  return (
    <section className={styles.blogsSection}>
      <ArticleTag text="Blog" />
      <h2>Our latest blogs</h2>
      <p>Accumsan semper euismod dolor vitae metus.</p>
      <BlogCards />
      <Button text="View all" />
    </section>
  );
}
export default BlogSection;
