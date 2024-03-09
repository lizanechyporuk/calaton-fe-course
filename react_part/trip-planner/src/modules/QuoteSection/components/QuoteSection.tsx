import styles from "./QuoteSection.module.scss";
import Container from "components/Container";
import Quote from "components/Quote";

function QuoteSection(): JSX.Element {
  return (
    <section className={styles.quote_section}>
      <Container>
        <Quote />
      </Container>
    </section>
  );
}

export default QuoteSection;
