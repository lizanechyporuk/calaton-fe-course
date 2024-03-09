import FooterContact from "../FooterContact/FooterContact";
import styles from "./FooterContacts.module.scss";
import { contacts } from "constants/footer-contacts";

function FooterContacts(): JSX.Element {
  return (
    <div className={styles.footer_contacts}>
      {contacts.map((contact, index) => (
        <FooterContact
          key={index}
          src={`/icons/Footer/contact${contact.alt}.svg`}
          alt={contact.alt}
          text={contact.text}
        />
      ))}
    </div>
  );
}

export default FooterContacts;
