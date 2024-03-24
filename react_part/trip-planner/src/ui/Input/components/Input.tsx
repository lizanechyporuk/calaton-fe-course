import React, { useEffect } from "react";
import styles from "./Input.module.scss";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  autoComplete: string;
  placeholder: string;
  classInput: any;
  type?: "text" | "password";
  maxLength?: number;
  fieldName: string;
  register: UseFormRegister<any>;
  rules: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoComplete,
      placeholder,
      classInput,
      type,
      maxLength,
      fieldName,
      register,
      rules,
    }: InputProps,
    ref
  ) => {
    useEffect(() => {
      register(fieldName, rules);
    }, [register, fieldName, rules]);
    return (
      <>
        <input
          className={styles[classInput]}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          maxLength={maxLength}
          {...register(fieldName)}
          ref={ref}
        />
      </>
    );
  }
);

export default Input;
