import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavigationSmall.module.scss";
import { openNav } from "utils/nav-menu/openNav";
import { closeNav } from "utils/nav-menu/closeNav";
import Button from "ui/Button";
import { routes } from "constants/routes";

function NavigationSmall(): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLImageElement, MouseEvent>
  ) => {
    const id = e.currentTarget.dataset.targetId;

    if (id) {
      if (isNavOpen) {
        closeNav(id);
      } else {
        openNav(id);
      }
      setIsNavOpen(!isNavOpen);
    }
  };

  return (
    <div className={styles.menu_wrapper}>
      <img
        data-target-id="nav-menu"
        src="/icons/shared/menu.svg"
        width="24"
        height="24"
        alt="Menu"
        onClick={handleClick}
      ></img>

      <div className={styles.blur_container} id="blur"></div>

      <div id="nav-menu" className={styles.menu_content}>
        <img
          data-target-id="nav-menu"
          src="/icons/shared/close.svg"
          className={styles.close_btn}
          width="24"
          height="24"
          alt="Close"
          onClick={handleClick}
        ></img>

        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.active}`}>
              <Link to={routes.homepage} className={styles.link}>
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

        <Button
          text="Log Out"
          value="logout"
          onClick={null}
          classBtn="logoutBtn"
        />
      </div>
    </div>
  );
}

export default NavigationSmall;
