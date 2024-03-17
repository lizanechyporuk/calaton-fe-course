import Container from "components/Container";
import NavigationBig from "./NavigationBig/NavigationBig";
import NavigationSmall from "./NavigationSmall/NavigationSmall";
import { useWindowWidth } from "utils/window-resize/useWindowWidth";
import styles from "./Header.module.scss";

function Header(): JSX.Element {
  const windowWidth = useWindowWidth();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <NavigationSmall />

          <img
            src="/icons/shared/logo.svg"
            width={windowWidth <= 900 ? "31" : "60"}
            height="60"
            alt="Logo"
          ></img>

          <NavigationBig />

          <div className={styles.acc__features}>
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
                width={windowWidth <= 900 ? "24" : "32"}
                height={windowWidth <= 900 ? "24" : "32"}
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
