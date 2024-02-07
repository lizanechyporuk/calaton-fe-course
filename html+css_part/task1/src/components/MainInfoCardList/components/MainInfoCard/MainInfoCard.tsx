import styles from "./MainInfoCard.module.scss";

interface MainInfoCardProps {
  src: string;
  header: string;
  text: string;
}

function MainInfoCard({ src, header, text }: MainInfoCardProps): JSX.Element {
  return (
    <div className={styles.mainInfoCard}>
      <img
        className={styles.image}
        width="101"
        height="100"
        src={src}
        alt="Main Info Photo"
      ></img>

      <h3 className={styles.header}>{header}</h3>

      <p className={styles.paragraphText}>{text}</p>
    </div>
  );
}

export default MainInfoCard;
