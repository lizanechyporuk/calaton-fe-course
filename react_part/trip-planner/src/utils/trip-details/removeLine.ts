import styles from "modules/TripDetailsSection/components/TripDetailsSection.module.scss";

const removeLine = () => {
  const existingLines = document.querySelectorAll(`.${styles.line}`);
  existingLines.forEach((line) => line.remove());
};

export { removeLine };
