import styles from "./VideoIntro.module.scss";
import Button from "../../../ui/Button";

function VideoIntro(): JSX.Element {
  return (
    <section className={styles.videoIntro}>
      <Button classBtn="filledBtnSecondaryBigger" text="Watch Introduction" />
    </section>
  );
}
export default VideoIntro;
