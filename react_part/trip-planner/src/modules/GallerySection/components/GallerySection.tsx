import styles from "./GallerySection.module.scss";
import Container from "components/Container";
import PhotoGallery from "components/PhotoGallery";
import TripDetailsCard from "components/TripDetailsCard";
import Button from "ui/Button";

interface GallerySectionProps {
  cityData: any;
}

function GallerySection({ cityData }: GallerySectionProps): JSX.Element {
  return (
    <section className={styles.gallery__section}>
      <Container>
        <div className={styles.content}>
          <PhotoGallery photos={cityData.gallery} />

          <TripDetailsCard cityData={cityData} />

          <Button
            text="Book Now"
            value="bookNow"
            onClick={null}
            classBtn="bigBtn"
          />
        </div>
      </Container>
    </section>
  );
}

export default GallerySection;
