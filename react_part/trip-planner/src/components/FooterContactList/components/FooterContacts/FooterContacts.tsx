import FooterContact from "../FooterContact/FooterContact";
import styles from "./FooterContacts.module.scss";

function FooterContacts(): JSX.Element {
  const contacts = [
    {
      alt: "Phone",
      text: "+123 45 678 901",
    },
    {
      alt: "Email",
      text: "somemail@gmail.com",
    },
    {
      alt: "Location",
      text: "Avenue St. 432 , New York",
    },
  ];

  return (
    <div className={styles.footerContactsContainer}>
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
