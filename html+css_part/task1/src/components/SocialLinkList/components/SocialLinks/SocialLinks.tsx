import styles from "./SocialLinks.module.scss";
import "../SocialLink/SocialLink";
import SocialLink from "../SocialLink/SocialLink";

function SocialLinks(): JSX.Element {
  const imageNames = ["linkedin", "twitter", "facebook"];
  return (
    <ul className={styles.socialLinks}>
      {imageNames.map((name, index) => (
        <li key={index} className={styles.socialLinksItems}>
          <SocialLink
            socialMedia={`/icons/shared/${name}.svg`}
            alt={`${name}`}
          />
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
