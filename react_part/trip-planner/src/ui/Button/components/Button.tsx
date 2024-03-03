import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  classBtn: any;
  value: string;
  onClick: any;
}

function Button({ text, classBtn, value, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      value={value}
      type="button"
      className={styles[classBtn]}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
