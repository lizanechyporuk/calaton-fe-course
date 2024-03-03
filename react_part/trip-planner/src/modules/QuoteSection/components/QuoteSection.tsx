import styles from "./QuoteSection.module.scss";
import Container from "components/Container";
import Quote from "components/Quote";

function QuoteSection(): JSX.Element {
  return (
    <section className={styles.quoteSection}>
      <Container>
        <Quote />
      </Container>
    </section>
  );
}

export default QuoteSection;
