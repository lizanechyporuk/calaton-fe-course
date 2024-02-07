import styles from "./MainInfoSection.module.scss";
import Container from "../../../components/Container/index";
import Button from "../../../ui/Button";
import MainInfoCardList from "../../../components/MainInfoCardList";

function MainInfoSection(): JSX.Element {
  return (
    <section className={styles.mainInfoSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className={styles.header}>
            Building your very own Startup has <br></br> never been simpler
          </h2>

          <p className={styles.paragraphText}>
            Aenean dui justo, tempus sed odio ut, convallis accumsan nunc.
            Phasellus mauris <br></br> sem, porta eu turpis vel, maximus
            condimentum turpis.
          </p>

          <MainInfoCardList />

          <p className={styles.paragraphButtons}>
            <Button classBtn="outlinedBtnBiggerBold" text="Get started" />
            <Button classBtn="arrowBtnSmallDarkBold" text="Try for free" />
          </p>
        </div>

        <img
          className={styles.absoluteImg}
          width="180"
          height="134"
          src="/images/MainInfoSection/image1.svg"
          alt="Decor Image"
        ></img>
      </Container>
    </section>
  );
}

export default MainInfoSection;
