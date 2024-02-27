import styles from "./Footer.module.scss";
import Container from "../../Container/index";
import FooterContacts from "../../FooterContactList/components/FooterContacts/FooterContacts";

function Footer(): JSX.Element {
  const socialMedias = [
    {
      text: "Instagram",
    },
    {
      text: "Facebook",
    },
    {
      text: "Twitch",
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <FooterContacts />

          <hr className={styles.footerDivider}></hr>

          <div className={styles.footerLists}>
            <ul className={styles.footerList}>
              <li className={styles.footerListHeader}>About</li>
              <li className={styles.footerListItem}>
                <a>Our Story</a>
              </li>
              <li className={styles.footerListItem}>
                <a>Awards</a>
              </li>
              <li className={styles.footerListItem}>
                <a>Our Team</a>
              </li>
              <li className={styles.footerListItem}>
                <a>Career</a>
              </li>
            </ul>

            <ul className={styles.footerList}>
              <li className={styles.footerListHeader}>Company</li>
              <li className={styles.footerListItem}>
                <a>Our Services</a>
              </li>
              <li className={styles.footerListItem}>
                <a>Contact</a>
              </li>
              <li className={styles.footerListItem}>
                <a>Clients</a>
              </li>
            </ul>

            <ul className={styles.footerList}>
              <li className={styles.footerListHeader}>Resources</li>
              <li className={styles.footerListItem}>
                <a>Blog</a>
              </li>
              <li className={styles.footerListItem}>
                <a>Newsletter</a>
              </li>
              <li className={styles.footerListItem}>
                <a>Privacy Policy</a>
              </li>
            </ul>

            <ul className={styles.footerList}>
              <li className={styles.footerListHeader}>Social</li>
              {socialMedias.map((el, index) => (
                <li key={index} className={styles.footerListItem}>
                  <a className={styles.socialLink}>
                    <img
                      src={`/icons/Footer/social${el.text}.svg`}
                      height="20"
                      width="20"
                      className={styles.socialIcon}
                      alt={el.text}
                    ></img>
                    {el.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
