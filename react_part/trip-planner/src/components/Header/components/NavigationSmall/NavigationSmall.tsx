import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavigationSmall.module.scss";
import { openNav } from "utils/nav-menu/openNav";
import { closeNav } from "utils/nav-menu/closeNav";
import Button from "ui/Button";
import Links from "../Links/Links";
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
    <div className={styles.menu__wrapper}>
      <img
        data-target-id="nav-menu"
        src="/icons/shared/menu.svg"
        width="24"
        height="24"
        alt="Menu"
        onClick={handleClick}
      ></img>

      <div className={styles.blur__container} id="blur"></div>

      <div id="nav-menu" className={styles.menu__content}>
        <img
          data-target-id="nav-menu"
          src="/icons/shared/close.svg"
          className={styles.close__btn}
          width="24"
          height="24"
          alt="Close"
          onClick={handleClick}
        ></img>

        <Links
          navStyle={styles.navigation}
          navList={styles.list}
          navItem={styles.item}
          navActive={styles.active}
          navLink={styles.link}
        />

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
