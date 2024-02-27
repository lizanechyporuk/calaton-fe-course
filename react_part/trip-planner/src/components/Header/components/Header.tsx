import Container from "../../Container";
import styles from "./Header.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <img
            src="/icons/shared/logo.svg"
            height="60"
            width="40"
            alt="Logo"
          ></img>

          <nav className={styles.navigationWrapper}>
            <ul className={styles.navigationList}>
              <li className={styles.navigationListItem}>
                <a className={`${styles.navigationLink} ${styles.active}`}>
                  Home
                </a>
              </li>

              <li className={styles.navigationListItem}>
                <a className={styles.navigationLink}>About</a>
              </li>

              <li className={styles.navigationListItem}>
                <a className={styles.navigationLink}>Contact Us</a>
              </li>

              <li className={styles.navigationListItem}>
                <a className={styles.navigationLink}>Blog</a>
              </li>

              <li className={styles.navigationListItem}>
                <a className={styles.navigationLink}>
                  Found a bug? Let us know
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.accFeaturesWrapper}>
            <a>
              <img
                src="/icons/Header/favourites_empty.svg"
                height="24"
                width="24"
                alt="Favourites"
              ></img>
            </a>

            <a>
              <img
                src="/icons/Header/account.svg"
                height="32"
                width="32"
                alt="Account"
              ></img>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
