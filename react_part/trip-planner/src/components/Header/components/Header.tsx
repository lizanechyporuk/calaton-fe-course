import { Link } from "react-router-dom";
import Container from "components/Container";
import styles from "./Header.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <img
            src="/icons/shared/logo.svg"
            height="60"
            width="40"
            alt="Logo"
          ></img>

          <nav className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/" className={`${styles.link} ${styles.active}`}>
                  Home
                </Link>
              </li>

              <li className={styles.item}>
                <Link to="/" className={styles.link}>
                  About
                </Link>
              </li>

              <li className={styles.item}>
                <Link to="/" className={styles.link}>
                  Contact Us
                </Link>
              </li>

              <li className={styles.item}>
                <Link to="/" className={styles.link}>
                  Blog
                </Link>
              </li>

              <li className={styles.item}>
                <Link to="/" className={styles.link}>
                  Found a bug? Let us know
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.accFeatures}>
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
