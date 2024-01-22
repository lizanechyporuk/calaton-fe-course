import Button from "../../../ui/Button";
import styles from "./Header.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src="/icons/shared/logo.svg" alt="Logo"></img>
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
          <Button text="Log in" />
          <Button text="Try for free" />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
