import styles from "./HotTrips.module.scss";
import HotTrip from "../HotTrip/HotTrip";
import { hotTrips } from "constants/hot-trips";

function HotTrips(): JSX.Element {
  return (
    <div className={styles.hotTrips}>
      {hotTrips.map((hotTrip, index) => (
        <HotTrip
          key={index}
          src={`/images/HotTrips/hotTrip-${index + 1}.png`}
          captionTitle={hotTrip.captionTitle}
          captionText={hotTrip.captionText}
        />
      ))}
    </div>
  );
}

export default HotTrips;
