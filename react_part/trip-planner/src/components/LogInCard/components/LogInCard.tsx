import React, { useState } from "react";
import styles from "./LogInCard.module.scss";
import { useForm } from "react-hook-form";
import Button from "ui/Button";
import Input from "ui/Input";
import { fieldRules } from "constants/registration-data";

interface LogInCardForm {
  login: string;
  password: string;
  logged: string;
}

interface LogInCardProps {
  toggleCard: () => void;
}

function LogInCard({ toggleCard }: LogInCardProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInCardForm>();

  const onSubmit = (data: LogInCardForm) => {
    alert(JSON.stringify(data));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={styles.log__in__card}>
      <p className={styles.heading}>Welcome Back</p>

      <Button
        value="googleLogIn"
        text="Log In with Google"
        classBtn="googleBtn"
        onClick={null}
      />

      <div className={styles.divider}>
        <hr className={styles.line}></hr>
        <p>Or</p>
        <hr className={styles.line}></hr>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          classInput="inputText"
          placeholder="Your Login"
          autoComplete="current-username"
          fieldName="login"
          register={register}
          rules={fieldRules.login}
          {...register("login", fieldRules.login)}
        />

        {errors?.login && (
          <p className={styles.error}>{errors.login.message}</p>
        )}

        <div className={styles.input__wrapper}>
          <Input
            classInput="inputText"
            type={showPassword ? "text" : "password"}
            maxLength={25}
            placeholder="Your Password"
            autoComplete="current-password"
            fieldName="password"
            register={register}
            rules={fieldRules.firstName}
            {...register("password", fieldRules.password)}
          />

          <img
            src={`/icons/shared/${showPassword ? "shown" : "hidden"}.svg`}
            width="20"
            height="20"
            alt="Hidden"
            className={styles.btn}
            onClick={togglePasswordVisibility}
          ></img>
        </div>

        {errors?.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        <div className={styles.features}>
          <div>
            <input
              type="checkbox"
              className={styles.checkbox}
              {...register("logged", fieldRules.checkbox)}
              name="logged"
            ></input>
            <label className={styles.checkbox__label} htmlFor="logged">
              Keep me logged in
            </label>
          </div>
          <a className={styles.link}>Forgot password?</a>
        </div>

        {errors?.logged && (
          <p className={styles.error}>{errors.logged.message}</p>
        )}

        <Button
          value="logIn"
          text="Log In"
          classBtn="bigBtn"
          onClick={handleSubmit(onSubmit)}
        />
      </form>

      <hr className={styles.divider__bottom}></hr>

      <a className={styles.references} onClick={toggleCard}>
        Don’t have account yet?{" "}
        <span className={styles.highlight}>Sign up</span>
      </a>
    </div>
  );
}

export default LogInCard;
