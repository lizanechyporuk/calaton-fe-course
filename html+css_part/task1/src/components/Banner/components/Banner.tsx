import styles from "./Banner.module.scss";

function Banner(): JSX.Element {
  return (
    <div className={styles.banner}>
      <p className={styles.paragraph}>Explore all our services.</p>
      <img
        className={styles.image}
        src="/icons/shared/close.svg"
        width="32"
        height="32"
        alt="Close"
      ></img>
    </div>
  );
}

export default Banner;
