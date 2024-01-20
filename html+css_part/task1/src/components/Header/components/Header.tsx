import Button from "../../../ui/Button";
import "./Header.module.scss";

function Header(): JSX.Element {
  return (
    <header>
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
          <Button text="Log in" className="first" />
          <Button text="Try for free" className="last" />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
