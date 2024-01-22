import styles from "./ArticlePercentage.module.scss";

interface ArticlePercentageProps {
  src: string;
  percent: string;
  text: string;
}

function ArticlePercentage({
  percent,
  text,
  src,
}: ArticlePercentageProps): JSX.Element {
  return (
    <div className={styles.articlePercentage}>
      <div>
        <h2>{percent}</h2>
        <p>{text}</p>
      </div>
      <div>
        <img src={src} alt="Icon"></img>
      </div>
    </div>
  );
}
export default ArticlePercentage;
