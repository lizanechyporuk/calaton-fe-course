import styles from "./HotTrip.module.scss";

interface HotTipProps {
  src: string;
  captionTitle: string;
  captionText: string;
}

function HotTrip({ src, captionTitle, captionText }: HotTipProps): JSX.Element {
  return (
    <div className={styles.hotTrip}>
      <figure className={styles.wrapper}>
        <img
          src={src}
          width="400"
          height="490"
          alt={captionTitle}
          className={styles.img}
        ></img>
        <figcaption className={styles.caption}>
          {captionTitle}
          <p className={styles.text}>{captionText}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default HotTrip;
