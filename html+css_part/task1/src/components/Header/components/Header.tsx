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
            height="28px"
            width="112px"
            alt="Logo"
          ></img>
          <nav>
            <ul>
              <li>
                <a>Our Story</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <Button classBtn="outlinedBtn" text="Log in" />
              <Button classBtn="filledBtnPrimary" text="Try for free" />
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
export default Header;
