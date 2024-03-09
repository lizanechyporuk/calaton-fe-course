import styles from "./HotTrip.module.scss";
import { useWindowWidth } from "utils/window-resize/useWindowWidth";

interface HotTipProps {
  src: string;
  captionTitle: string;
  captionText: string;
}

function HotTrip({ src, captionTitle, captionText }: HotTipProps): JSX.Element {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.hot_trip}>
      <figure className={styles.wrapper}>
        <img
          src={src}
          width={windowWidth <= 900 ? "140" : "400"}
          height={windowWidth <= 900 ? "180" : "490"}
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
