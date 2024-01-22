import styles from "./SpeedArticleSection.module.scss";
import ArticlePercentage from "../../../components/ArticlePercentage";
import ArticleTag from "../../../components/ArticleTag";
import Button from "../../../ui/Button";
function SpeedArticleSection(): JSX.Element {
  return (
    <section className={styles.speedArticleSection}>
      <div>
        <img
          src="/images/SpeedArticleSection/image.png"
          alt="Speed image"
        ></img>
      </div>
      <div>
        <ArticleTag text="Speed" />
        <h2>Faster than ever before</h2>
        <p>
          Morbi tristique cursus diam, at viverra felis malesuada eu. Duis
          iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi eget
          varius. Phasellus rutrum pellentesque lectus pulvinar dapibus aenean
          dui justro, tempus sed oido.
        </p>
        <p>
          <Button text="Get started" />
          <Button text="Try for free" />
          <span className={styles.moreBtn}>
            <img src="/icons/shared/btn-more-dark.svg" alt="More"></img>
          </span>
        </p>
      </div>
      <img
        className={styles.imgWave}
        src="/icons/shared/waves.svg"
        alt="Wave"
      ></img>
      <ArticlePercentage
        percent="86%"
        text="Increased in sales"
        src="/icons/SpeedArticleSection/iconPercent1.png"
      />
    </section>
  );
}
export default SpeedArticleSection;
