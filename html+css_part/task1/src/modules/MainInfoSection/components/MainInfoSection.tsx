import styles from "./MainInfoSection.module.scss";
import Container from "../../../components/Container/index";
import Button from "../../../ui/Button";
import MainInfoCardList from "../../../components/MainInfoCardList";

function MainInfoSection(): JSX.Element {
  return (
    <section className={styles.mainInfoSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2>
            Building your very own Startup has <br></br> never been simpler
          </h2>
          <p className={styles.paragraphText}>
            Aenean dui justo, tempus sed odio ut, convallis accumsan nunc.
            Phasellus mauris <br></br> sem, porta eu turpis vel, maximus
            condimentum turpis.
          </p>
          <MainInfoCardList />
          <p className={styles.paragraphButtons}>
            <Button classBtn="outlinedBtnBigger" text="Get started" />
            <Button classBtn="arrowBtnSmallDark" text="Try for free" />
          </p>
        </div>
        <img
          className={styles.absoluteImg}
          width="180px"
          height="134px"
          src="/images/MainInfoSection/image1.svg"
        ></img>
      </Container>
    </section>
  );
}
export default MainInfoSection;
