import styles from "./SocialLinks.module.scss";
import "../SocialLink/SocialLink";
import SocialLink from "../SocialLink/SocialLink";

function SocialLinks(): JSX.Element {
  return (
    <ul className={styles.socialLinks}>
      <li>
        <SocialLink socialMedia="/icons/shared/linkedin.svg" alt="LinkedIn" />
      </li>
      <li>
        <SocialLink socialMedia="/icons/shared/twitter.svg" alt="Twitter" />
      </li>
      <li>
        <SocialLink socialMedia="/icons/shared/facebook.svg" alt="Facebook" />
      </li>
    </ul>
  );
}
export default SocialLinks;
