import React, { useState, useEffect } from "react";
import styles from "./PhotoGallery.module.scss";
import { recreateGallery } from "utils/photo-gallery/recreateGallery";

interface PhotoGalleryProps {
  photos: string[];
}

function PhotoGallery({ photos }: PhotoGalleryProps): JSX.Element {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(photos);
  }, [photos]);

  const handleSmallImageClick = (index: number) => {
    setImages(recreateGallery(images, index));
  };

  return (
    <div className={styles.gallery}>
      {images?.length > 0 && (
        <img
          src={images[0]}
          alt="Big"
          width="331"
          height="207"
          className={styles.big__photo}
        />
      )}

      <div className={styles.small__photos}>
        {images?.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Small`}
            width="86"
            height="54.65"
            onClick={() => handleSmallImageClick(index + 1)}
            className={styles.small__photo}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
