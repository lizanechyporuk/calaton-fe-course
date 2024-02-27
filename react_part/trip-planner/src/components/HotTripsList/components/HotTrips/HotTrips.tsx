import styles from "./HotTrips.module.scss";
import HotTrip from "../HotTrip/HotTrip";

function HotTrips(): JSX.Element {
  const hotTrips = [
    {
      captionTitle: "Forest Hike",
      captionText: "United Kindom, London",
    },
    {
      captionTitle: "Polar Ray",
      captionText: "United Kindom, London",
    },
    {
      captionTitle: "Yosemite Falls",
      captionText: "United States, California",
    },
  ];

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
