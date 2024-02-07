import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  classBtn: string;
}

function Button({ text, classBtn }: ButtonProps): JSX.Element {
  return (
    <button type="button" className={styles[classBtn]}>
      {text}
    </button>
  );
}

export default Button;
