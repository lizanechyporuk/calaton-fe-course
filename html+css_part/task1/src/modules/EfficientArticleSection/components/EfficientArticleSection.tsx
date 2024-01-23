import styles from "./EfficientArticleSection.module.scss";
import ArticlePercentage from "../../../components/ArticlePercentage";
import ArticleTag from "../../../components/ArticleTag";
import Button from "../../../ui/Button";
function EfficientArticleSection(): JSX.Element {
  return (
    <section className={styles.efficientArticleSection}>
      <div>
        <ArticleTag text="Efficient" />
        <h2>Straight to the point</h2>
        <p>
          Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed
          urna. Aenean consequat risus tortor, quis porta.
        </p>
        <div className={styles.efficientCards}>
          <div>
            <img src="/icons/EfficientArticleSection/icon1.png"></img>
            <h3>No meetings</h3>
            <p>
              Porta non eros. Ut finibus viverra neque, sed vestibulum tellus
              volutpat ac cras at massa.
            </p>
          </div>
          <div>
            <img src="/icons/EfficientArticleSection/icon2.png"></img>
            <h3>24/7 customer support</h3>
            <p>
              Praesent consequat erat in orci lobortis, in accumsan orci
              vestibulum nam et dictum.
            </p>
          </div>
        </div>
        <p>
          <Button text="Get started" />
          <Button text="Try for free" />
          <span className={styles.moreBtn}>
            <img src="/icons/shared/btn-more-dark.svg" alt="More"></img>
          </span>
        </p>
      </div>
      <div>
        <img
          src="/images/EfficientArticleSection/image.png"
          alt="Speed image"
        ></img>
      </div>
      <ArticlePercentage
        percent="74%"
        text="Increased in productivity"
        src="/icons/EfficientArticleSection/iconPercent2.png"
      />
    </section>
  );
}
export default EfficientArticleSection;
