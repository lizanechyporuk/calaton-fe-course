import styles from "./Banner.module.scss";

function Banner(): JSX.Element {
  return (
    <div className={styles.banner}>
      <p>Explore all our services.</p>
      <img src="/icons/shared/close.svg" width="32px" height="32px"></img>
    </div>
  );
}
export default Banner;
