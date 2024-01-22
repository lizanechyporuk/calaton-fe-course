import styles from "./MainInfoCard.module.scss";

interface MainInfoCardProps {
  src: string;
  header: string;
  text: string;
}

function MainInfoCard({ src, header, text }: MainInfoCardProps): JSX.Element {
  return (
    <div className={styles.mainInfoCard}>
      <img src={src}></img>
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
}
export default MainInfoCard;
