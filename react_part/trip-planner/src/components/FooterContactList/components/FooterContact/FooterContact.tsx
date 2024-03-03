import styles from "./FooterContact.module.scss";

interface FooterContactProps {
  src: string;
  alt: string;
  text: string;
}

function FooterContact({ src, alt, text }: FooterContactProps): JSX.Element {
  return (
    <div className={styles.contact}>
      <img src={src} width="68" height="68" alt={alt}></img>

      <address className={styles.info}>{text}</address>
    </div>
  );
}

export default FooterContact;
