import styles from "./Input.module.scss";
interface InputProps {
  text: string;
}

function Input({ text }: InputProps): JSX.Element {
  return <input className={styles.formInput} placeholder={text}></input>;
}
export default Input;
