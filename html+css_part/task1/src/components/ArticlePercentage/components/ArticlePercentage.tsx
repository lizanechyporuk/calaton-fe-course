import styles from "./ArticlePercentage.module.scss";

interface ArticlePercentageProps {
  classCustom?: string;
  src: string;
  percent: string;
  text: string;
}

function ArticlePercentage({
  classCustom,
  percent,
  text,
  src,
}: ArticlePercentageProps): JSX.Element {
  return (
    <div
      className={`${styles.articlePercentage} ${
        classCustom ? classCustom : ""
      }`}
    >
      <div className={styles.textWrapper}>
        <h2>{percent}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={src} height="72px" width="72px" alt="Icon"></img>
      </div>
    </div>
  );
}
export default ArticlePercentage;
