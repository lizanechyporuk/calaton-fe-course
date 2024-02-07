import styles from "./HeroSection.module.scss";
import Container from "../../../components/Container/index";
import Button from "../../../ui/Button";
import VideoIntro from "../../../components/VideoIntro";

function HeroSection(): JSX.Element {
  const imageLogoNumbers = [1, 2, 3, 4];

  const imageAbsoluteNumbers = [1, 2, 3];

  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.header}>
            Head start your business<br></br> today!
          </h1>

          <p className={styles.paragraphText}>
            Consectetur adipiscing elit. Integer sagittis quam magna, quis
            sollicitudin<br></br> lorem ornare ut. Nulla et scelerisque mauris.
          </p>

          <p className={styles.paragraphButtons}>
            <Button classBtn="filledBtnSecondaryBold" text="Get started" />
            <Button classBtn="arrowBtnSmallBold" text="Try for free" />
          </p>

          <p className={styles.paragraphImages}>
            {imageLogoNumbers.map((number) => (
              <img
                key={number}
                className={styles[`logoImage${number}`]}
                src={`/icons/HeroSection/logoipsum${number}.svg`}
                alt={`Logoipsum ${number}`}
              />
            ))}
          </p>
        </div>

        {imageAbsoluteNumbers.map((number) => (
          <img
            className={styles[`absoluteImg${number}`]}
            key={number}
            src={`/images/HeroSection/image${number}.png`}
            alt={`Decor Image ${number}`}
          />
        ))}

        <div className={styles.filledDiv}></div>

        <div className={styles.videoWrapper}>
          <VideoIntro />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
