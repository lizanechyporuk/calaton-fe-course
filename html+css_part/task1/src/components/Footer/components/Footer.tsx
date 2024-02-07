import styles from "./Footer.module.scss";
import Container from "../../Container/index";
import SocialLinkList from "../../SocialLinkList/index";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.footerContactsWrapper}>
            <img
              className={styles.image}
              src="/icons/shared/logo-white.svg"
              width="112"
              height="29"
              alt="Logo"
            ></img>

            <address className={styles.footerAddress}>
              <p className={styles.paragraphContacts}>Address:</p>
              <p className={styles.paragraphContacts}>
                Level 1, 12 Nikola Tesla street, Niš, Serbia
              </p>
            </address>

            <address className={styles.footerContact}>
              <p className={styles.paragraphContacts}>Contact:</p>
              <p className={styles.paragraphContacts}>1800 123 4567</p>
              <p className={styles.paragraphContacts}>info@startico.io</p>
            </address>
          </div>

          <div className={styles.footerLists}>
            <ul className={styles.footerList}>
              <li className={styles.footerListHeader}>Pages</li>
              <li className={styles.footerListItem}>Home v1</li>
              <li className={styles.footerListItem}>Home v2</li>
              <li className={styles.footerListItem}>Home v3</li>
              <li className={styles.footerListItem}>About v1</li>
              <li className={styles.footerListItem}>About v2</li>
              <li className={styles.footerListItem}>About v3</li>
              <li className={styles.footerListItem}>Contact v1</li>
              <li className={styles.footerListItem}>Contact v2</li>
              <li className={styles.footerListItem}>Contact v3</li>
              <li className={styles.footerListItem}>Blog</li>
              <li className={styles.footerListItem}>Pricing</li>
              <li className={styles.footerListItem}>Log in</li>
              <li className={styles.footerListItem}>Sign up</li>
            </ul>

            <ul className={styles.footerList}>
              <li className={styles.footerListHeader}>CMS pages</li>
              <li className={styles.footerListItem}>Blog Post</li>
              <li className={styles.footerListItem}>Blog Categories</li>
            </ul>

            <ul className={styles.footerList}>
              <li className={styles.footerListHeader}>Utility pages</li>
              <li className={styles.footerListItem}>Style guide</li>
              <li className={styles.footerListItem}>Licenses</li>
              <li className={styles.footerListItem}>Changelog</li>
              <li className={styles.footerListItem}>404</li>
              <li className={styles.footerListItem}>Password</li>
            </ul>
          </div>
        </div>

        <hr className={styles.hrDivider}></hr>

        <div className={styles.copyrightWrapper}>
          <p className={styles.paragraphCopyright}>
            © Startico by Minima Square. Powered by Webflow
          </p>

          <SocialLinkList />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
