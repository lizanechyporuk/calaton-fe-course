import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  classBtn: any;
  value: string;
  onClick: any;
  type?: "button";
}

function Button({
  text,
  classBtn,
  value,
  onClick,
  type,
}: ButtonProps): JSX.Element {
  return (
    <button
      value={value}
      type={type}
      className={styles[classBtn]}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
