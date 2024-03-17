import styles from "./NavigationBig.module.scss";
import Links from "../Links/Links";

function NavigationBig(): JSX.Element {
  return (
    <Links
      navStyle={styles.navigation}
      navList={styles.list}
      navItem={styles.item}
      navActive={styles.active}
      navLink={styles.link}
    />
  );
}

export default NavigationBig;
