import { Link } from "react-router-dom";
import styles from "./NavigationBig.module.scss";
import { routes } from "constants/routes";

function NavigationBig(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            to={routes.homepage}
            className={`${styles.link} ${styles.active}`}
          >
            Home
          </Link>
        </li>

        <li className={styles.item}>
          <Link to={routes.homepage} className={styles.link}>
            About
          </Link>
        </li>

        <li className={styles.item}>
          <Link to={routes.homepage} className={styles.link}>
            Contact Us
          </Link>
        </li>

        <li className={styles.item}>
          <Link to={routes.homepage} className={styles.link}>
            Blog
          </Link>
        </li>

        <li className={styles.item}>
          <Link to={routes.homepage} className={styles.link}>
            Found a bug? Let us know
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBig;
