import styles from "./SocialLink.module.scss";

interface SocialLinkProps {
  socialMedia: string;
  alt: string;
}
function SocialLink({ socialMedia, alt }: SocialLinkProps): JSX.Element {
  return (
    <figure className={styles.socialLink}>
      <img src={socialMedia} alt={alt}></img>
    </figure>
  );
}
export default SocialLink;
