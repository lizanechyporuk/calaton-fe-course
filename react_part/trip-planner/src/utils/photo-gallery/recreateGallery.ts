const recreateGallery = (prevImages: string[], index: number) => {
  const newImages = [...prevImages];
  [newImages[0], newImages[index]] = [newImages[index], newImages[0]];

  return newImages;
};

export { recreateGallery };
