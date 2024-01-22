import styles from "./HeroSection.module.scss";
import Button from "../../../ui/Button";
import VideoIntro from "../../../components/VideoIntro";

function HeroSection(): JSX.Element {
  return (
    <section className={styles.heroSection}>
      <div>
        <h1>
          Head start your business<br></br> today!
        </h1>
        <p>
          Consectetur adipiscing elit. Integer sagittis quam magna, quis
          sollicitudin<br></br> lorem ornare ut. Nulla et scelerisque mauris.
        </p>
        <p>
          <Button text="Get started" />
          <Button text="Try for free" />
          <span className={styles.moreBtn}>
            <img src="/icons/shared/btn-more.svg" alt="More"></img>
          </span>
        </p>
        <p>
          <img src="/icons/HeroSection/logoipsum1.svg" alt="Logoipsum"></img>
          <img src="/icons/HeroSection/logoipsum2.svg" alt="Logoipsum"></img>
          <img src="/icons/HeroSection/logoipsum3.svg" alt="Logoipsum"></img>
          <img src="/icons/HeroSection/logoipsum4.svg" alt="Logoipsum"></img>
        </p>
      </div>
      <img src="/images/HeroSection/image1.png" alt="Image 1"></img>
      <img src="/images/HeroSection/image2.png" alt="Image 2"></img>
      <img src="/images/HeroSection/image3.png" alt="Image 3"></img>
      <div></div>
      <div>
        <VideoIntro />
      </div>
    </section>
  );
}
export default HeroSection;
