import styles from "./HotTrips.module.scss";
import HotTrip from "../HotTrip/HotTrip";
import { hotTrips } from "constants/hot-trips";
import { useWindowWidth } from "utils/window-resize/useWindowWidth";

function HotTrips(): JSX.Element {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.hot_trips}>
      <div className={styles.content}>
        {hotTrips.map((hotTrip, index) => (
          <HotTrip
            key={index}
            src={
              windowWidth <= 900
                ? `/images/HotTrips/hotTrip_small-${index + 1}.png`
                : `/images/HotTrips/hotTrip-${index + 1}.png`
            }
            captionTitle={hotTrip.captionTitle}
            captionText={hotTrip.captionText}
          />
        ))}
      </div>
    </div>
  );
}

export default HotTrips;
