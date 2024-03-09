import Container from "components/Container";
import NavigationBig from "./NavigationBig/NavigationBig";
import NavigationSmall from "./NavigationSmall/NavigationSmall";
import styles from "./Header.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <NavigationSmall />

          <picture>
            <source
              media="(max-width: 899px)"
              srcSet="/icons/shared/logo_small.svg"
              width="40"
              height="31"
            />
            <source
              media="(min-width: 900px)"
              srcSet="/icons/shared/logo.svg"
              width="40"
              height="60"
            />
            <img src="/icons/shared/logo.svg" alt="Logo"></img>
          </picture>

          <NavigationBig />

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
              <picture>
                <source
                  media="(max-width: 899px)"
                  srcSet="/icons/Header/account_small.svg"
                  width="24"
                  height="24"
                />
                <source
                  media="(min-width: 900px)"
                  srcSet="/icons/Header/account.svg"
                  width="32"
                  height="32"
                />
                <img src="/icons/Header/account.svg" alt="Account"></img>
              </picture>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
