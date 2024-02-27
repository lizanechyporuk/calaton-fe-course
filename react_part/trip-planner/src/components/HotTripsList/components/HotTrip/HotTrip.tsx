import styles from "./HotTrip.module.scss";

interface HotTipProps {
  src: string;
  captionTitle: string;
  captionText: string;
}

function HotTrip({ src, captionTitle, captionText }: HotTipProps): JSX.Element {
  return (
    <div className={styles.hotTrip}>
      <figure className={styles.hotTripWrapper}>
        <img
          src={src}
          width="400"
          height="490"
          alt={captionTitle}
          className={styles.hotTripImg}
        ></img>
        <figcaption className={styles.hotTripCaption}>
          {captionTitle}
          <p className={styles.hotTripCaptionText}>{captionText}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default HotTrip;
