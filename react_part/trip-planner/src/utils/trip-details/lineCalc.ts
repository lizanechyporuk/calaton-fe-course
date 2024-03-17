import styles from "modules/TripDetailsSection/components/TripDetailsSection.module.scss";

const createLine = (points: HTMLElement[]) => {
  points.forEach((point: HTMLElement, index: number) => {
    const currentHeight = point.offsetHeight;
    const nextPoint = points[index + 1];
    if (nextPoint) {
      const nextHeight = nextPoint.offsetHeight;
      const gap = window.innerWidth >= 900 ? 48 : 20;
      const lineHeight = currentHeight / 2 + nextHeight / 2 + gap;
      const line = document.createElement("div");
      line.classList.add(styles.line);
      line.style.height = `${lineHeight}px`;
      point.appendChild(line);
    }
  });
};

export { createLine };
