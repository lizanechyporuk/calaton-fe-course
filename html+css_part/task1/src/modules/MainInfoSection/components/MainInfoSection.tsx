import styles from "./MainInfoSection.module.scss";
import Button from "../../../ui/Button";
import MainInfoCardList from "../../../components/MainInfoCardList";

function MainInfoSection(): JSX.Element {
  return (
    <section className={styles.mainInfoSection}>
      <div>
        <h2>
          Building your very own Startup has <br></br> never been simpler
        </h2>
        <p>
          Aenean dui justo, tempus sed odio ut, convallis accumsan nunc.
          Phasellus mauris <br></br> sem, porta eu turpis vel, maximus
          condimentum turpis.
        </p>
        <MainInfoCardList />
        <p>
          <Button text="Get started" />
          <Button text="Try for free" />
          <span className={styles.moreBtn}>
            <img src="/icons/shared/btn-more-dark.svg" alt="More"></img>
          </span>
        </p>
      </div>
      <img
        className={styles.absoluteImg}
        src="/images/MainInfoSection/image1.svg"
      ></img>
    </section>
  );
}
export default MainInfoSection;
