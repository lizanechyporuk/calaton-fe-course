import styles from "./QuoteSection.module.scss";
import Container from "../../../components/Container";
import Quote from "../../../components/Quote";

function QuoteSection(): JSX.Element {
  return (
    <div className={styles.quoteSection}>
      <Container>
        <Quote />
      </Container>
    </div>
  );
}

export default QuoteSection;
