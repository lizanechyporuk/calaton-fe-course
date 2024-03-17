import styles from "./Footer.module.scss";
import Container from "components/Container";
import FooterContacts from "components/FooterContactList";
import { lists } from "constants/footer-lists";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <FooterContacts />

          <hr className={styles.divider}></hr>

          <div className={styles.lists}>
            {lists.map((el, index) => (
              <ul className={styles.list} key={index}>
                <li className={styles.heading}>{el.heading}</li>
                {el.items.map((item, index) => (
                  <li className={styles.item} key={index}>
                    <a
                      className={
                        el.heading === "Social" ? `${styles.link}` : ""
                      }
                    >
                      {el.heading === "Social" && (
                        <>
                          <img
                            src={`/icons/Footer/social${item}.svg`}
                            height="20"
                            width="20"
                            className={styles.icon}
                            alt={item}
                          />
                          {item}
                        </>
                      )}
                      {el.heading !== "Social" && item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
