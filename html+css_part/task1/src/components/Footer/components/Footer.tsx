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
              src="/icons/shared/logo-white.svg"
              width="112px"
              height="29px"
              alt="Logo"
            ></img>
            <address className={styles.footerAddress}>
              <p>Address:</p>
              <p>Level 1, 12 Nikola Tesla street, Niš, Serbia</p>
            </address>
            <address className={styles.footerContact}>
              <p>Contact:</p>
              <p>1800 123 4567</p>
              <p>info@startico.io</p>
            </address>
          </div>
          <div className={styles.footerLists}>
            <ul>
              <li>Pages</li>
              <li>Home v1</li>
              <li>Home v2</li>
              <li>Home v3</li>
              <li>About v1</li>
              <li>About v2</li>
              <li>About v3</li>
              <li>Contact v1</li>
              <li>Contact v2</li>
              <li>Contact v3</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Log in</li>
              <li>Sign up</li>
            </ul>
            <ul>
              <li>CMS pages</li>
              <li>Blog Post</li>
              <li>Blog Categories</li>
            </ul>
            <ul>
              <li>Utility pages</li>
              <li>Style guide</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>404</li>
              <li>Password</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className={styles.copyrightWrapper}>
          <p>© Startico by Minima Square. Powered by Webflow</p>
          <SocialLinkList />
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
