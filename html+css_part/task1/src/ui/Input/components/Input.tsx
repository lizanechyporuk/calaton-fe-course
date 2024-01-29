import styles from "./Input.module.scss";
interface InputProps {
  text: string;
  type: string;
}

function Input({ text, type }: InputProps): JSX.Element {
  return (
    <input className={styles.formInput} placeholder={text} type={type}></input>
  );
}
export default Input;
