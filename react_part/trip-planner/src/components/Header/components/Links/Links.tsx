import { Link } from "react-router-dom";
import { routes } from "constants/routes";

interface LinksProps {
  navStyle: string;
  navList: string;
  navItem: string;
  navLink: string;
  navActive: string;
}

function Links({
  navStyle,
  navList,
  navItem,
  navLink,
  navActive,
}: LinksProps): JSX.Element {
  return (
    <nav className={navStyle}>
      <ul className={navList}>
        <li className={`${navItem} ${navActive}`}>
          <Link to={routes.homepage} className={`${navLink} ${navActive}`}>
            Home
          </Link>
        </li>

        <li className={navItem}>
          <Link to={routes.homepage} className={navLink}>
            About
          </Link>
        </li>

        <li className={navItem}>
          <Link to={routes.homepage} className={navLink}>
            Contact Us
          </Link>
        </li>

        <li className={navItem}>
          <Link to={routes.homepage} className={navLink}>
            Blog
          </Link>
        </li>

        <li className={navItem}>
          <Link to={routes.homepage} className={navLink}>
            Found a bug? Let us know
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Links;
