import styles from "./ArticleTag.module.scss";

interface ArticleTagProps {
  text: string;
}

function ArticleTag({ text }: ArticleTagProps): JSX.Element {
  return <span className={styles.articleTag}>{text}</span>;
}
export default ArticleTag;
