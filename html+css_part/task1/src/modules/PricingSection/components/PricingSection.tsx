import styles from "./PricingSection.module.scss";
import ArticleTag from "../../../components/ArticleTag";
import PricingCards from "../../../components/PricingCardList/components/PricingCards/PricingCards";
function PricingSection(): JSX.Element {
  return (
    <section className={styles.pricingSection}>
      <div>
        <ArticleTag text="Pricing" />
        <h2>Pricing plans</h2>
        <p>Suspendisse mattis porttitor gravida et malesuada fames.</p>
        <PricingCards />
      </div>
      <img className={styles.imgWaves} src="/icons/shared/waves.svg"></img>
    </section>
  );
}
export default PricingSection;
