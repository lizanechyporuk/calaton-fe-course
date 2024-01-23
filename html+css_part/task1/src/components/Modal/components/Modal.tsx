import styles from "./Modal.module.scss";

function Modal(): JSX.Element {
  return (
    <section className={styles.modal}>
      <p>Explore all our services.</p>
      <img src="/icons/shared/close.svg"></img>
    </section>
  );
}
export default Modal;
