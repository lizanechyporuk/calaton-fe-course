import styles from "./FooterContact.module.scss";
import { useWindowWidth } from "utils/window-resize/useWindowWidth";

interface FooterContactProps {
  src: string;
  alt: string;
  text: string;
}

function FooterContact({ src, alt, text }: FooterContactProps): JSX.Element {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.contact}>
      <img
        src={src}
        width={windowWidth <= 900 ? "40" : "68"}
        height={windowWidth <= 900 ? "40" : "68"}
        alt={alt}
      ></img>

      <address className={styles.info}>{text}</address>
    </div>
  );
}

export default FooterContact;
