import "./Button.module.scss";
interface ButtonProps {
  text: string;
  className?: string;
}

function Button({ text, className }: ButtonProps): JSX.Element {
  return <button className={className}>{text}</button>;
}
export default Button;
