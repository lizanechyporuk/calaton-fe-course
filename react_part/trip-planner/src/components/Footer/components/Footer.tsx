import styles from "./Footer.module.scss";
import Container from "components/Container";
import FooterContacts from "components/FooterContactList";

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
        <div className={styles.content}>
          <FooterContacts />

          <hr className={styles.divider}></hr>

          <div className={styles.lists}>
            <ul className={styles.list}>
              <li className={styles.heading}>About</li>
              <li className={styles.item}>
                <a>Our Story</a>
              </li>
              <li className={styles.item}>
                <a>Awards</a>
              </li>
              <li className={styles.item}>
                <a>Our Team</a>
              </li>
              <li className={styles.item}>
                <a>Career</a>
              </li>
            </ul>

            <ul className={styles.list}>
              <li className={styles.heading}>Company</li>
              <li className={styles.item}>
                <a>Our Services</a>
              </li>
              <li className={styles.item}>
                <a>Contact</a>
              </li>
              <li className={styles.item}>
                <a>Clients</a>
              </li>
            </ul>

            <ul className={styles.list}>
              <li className={styles.heading}>Resources</li>
              <li className={styles.item}>
                <a>Blog</a>
              </li>
              <li className={styles.item}>
                <a>Newsletter</a>
              </li>
              <li className={styles.item}>
                <a>Privacy Policy</a>
              </li>
            </ul>

            <ul className={styles.list}>
              <li className={styles.heading}>Social</li>
              {socialMedias.map((el, index) => (
                <li key={index} className={styles.item}>
                  <a className={styles.link}>
                    <img
                      src={`/icons/Footer/social${el.text}.svg`}
                      height="20"
                      width="20"
                      className={styles.icon}
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
