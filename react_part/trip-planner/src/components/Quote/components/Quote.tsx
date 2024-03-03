import styles from "./Quote.module.scss";

function Quote(): JSX.Element {
  return (
    <div className={styles.quoteWrapper}>
      <blockquote>
        <div className={styles.content}>
          <img
            src="/icons/QuoteSection/quote_start.svg"
            width="32"
            height="32"
            alt="Quote start"
            className={styles.start}
          ></img>

          <p className={styles.text}>
            Embark on
            <span className={styles.textHighlight}> extraordinary </span>
            journeys with us. Our
            <span className={styles.textHighlight}> travel experiences </span>
            are meticulously crafted, ensuring seamless
            <span className={styles.quoteTextHighlight}> adventures </span>
            tailored just for you. Discover
            <span className={styles.quoteTextHighlight}> unparalleled </span>
            service, <span> attention </span> to detail, and a commitment to
            making every moment
            <span className={styles.quoteTextHighlight}> unforgettable </span>.
            Choose us for a travel experience beyond the
            <span className={styles.quoteTextHighlight}> ordinary </span>
          </p>

          <img
            src="/icons/QuoteSection/quote_end.svg"
            width="32"
            height="32"
            alt="Quote end"
            className={styles.end}
          ></img>
        </div>

        <div className={styles.author}>
          <abbr title="Chief Executive Officer" className={styles.abbr}>
            CEO:
          </abbr>{" "}
          Jane Cooper
        </div>
      </blockquote>
    </div>
  );
}

export default Quote;
