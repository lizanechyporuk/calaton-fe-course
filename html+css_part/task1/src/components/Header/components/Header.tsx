import Button from "../../../ui/Button";
import Container from "../../Container";
import styles from "./Header.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <img
            src="/icons/shared/logo.svg"
            height="28"
            width="112"
            alt="Logo"
            className={styles.logoImg}
          ></img>

          <nav className={styles.navigationWrapper}>
            <ul className={styles.navigationList}>
              <li className={styles.navigationListItem}>
                <a className={styles.navigationLink}>Our Story</a>
              </li>

              <li className={styles.navigationListItem}>
                <a className={styles.navigationLink}>Blog</a>
              </li>

              <li className={styles.navigationListItem}>
                <a className={styles.navigationLink}>Contact</a>
              </li>

              <li className={styles.navigationListItem}>
                <a className={styles.navigationLink}>Pricing</a>
              </li>

              <div className={styles.buttonsContainer}>
                <Button classBtn="outlinedBtn" text="Log in" />

                <Button classBtn="filledBtnPrimary" text="Try for free" />
              </div>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
