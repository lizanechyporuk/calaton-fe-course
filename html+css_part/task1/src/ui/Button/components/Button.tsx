import styles from "./Button.module.scss";
interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps): JSX.Element {
  return <button>{text}</button>;
}
export default Button;
