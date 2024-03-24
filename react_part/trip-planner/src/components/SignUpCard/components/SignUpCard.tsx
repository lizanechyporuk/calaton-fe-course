import React, { useState } from "react";
import styles from "./SignUpCard.module.scss";
import { useForm } from "react-hook-form";
import Button from "ui/Button";
import Input from "ui/Input";
import { fieldRules } from "constants/registration-data";

interface SignUpCardInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  login: string;
  password: string;
  gender: string;
  logged: string;
}

interface SignUpCardProps {
  toggleCard: () => void;
}

function SignUpCard({ toggleCard }: SignUpCardProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpCardInput>();

  const onSubmit = (data: SignUpCardInput) => {
    alert(JSON.stringify(data));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={styles.sign__up__card}>
      <p className={styles.heading}>Welcome</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          classInput="inputText"
          placeholder="First Name"
          autoComplete="current-firstname"
          fieldName="firstName"
          register={register}
          rules={fieldRules.firstName}
          {...register("firstName", fieldRules.firstName)}
        />

        {errors?.firstName && (
          <p className={styles.error}>{errors.firstName.message}</p>
        )}

        <Input
          classInput="inputText"
          placeholder="Last Name"
          autoComplete="current-lastname"
          fieldName="lastName"
          register={register}
          rules={fieldRules.firstName}
          {...register("lastName", fieldRules.lastName)}
        />

        {errors.lastName && (
          <p className={styles.error}>{errors.lastName.message}</p>
        )}

        <Input
          classInput="inputText"
          placeholder="Phone Number"
          autoComplete="current-phonenumber"
          fieldName="phoneNumber"
          register={register}
          rules={fieldRules.firstName}
          {...register("phoneNumber", fieldRules.phoneNumber)}
        />

        {errors.phoneNumber && (
          <p className={styles.error}>{errors.phoneNumber.message}</p>
        )}

        <Input
          classInput="inputText"
          placeholder="Your Email"
          autoComplete="current-username"
          fieldName="login"
          register={register}
          rules={fieldRules.firstName}
          {...register("login", fieldRules.login)}
        />

        {errors.login && <p className={styles.error}>{errors.login.message}</p>}

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

        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        <select
          defaultValue=""
          className={styles.select}
          {...register("gender", fieldRules.gender)}
        >
          <option value="" disabled hidden>
            Your gender
          </option>
          <option value="1">Female</option>
          <option value="2">Male</option>
          <option value="3">Other</option>
        </select>

        {errors?.gender && (
          <p className={styles.error}>{errors.gender.message}</p>
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
              Accept our privacy policy
            </label>
          </div>
        </div>

        {errors?.logged && (
          <p className={styles.error}>{errors.logged.message}</p>
        )}

        <Button
          value="signUp"
          text="Sign Up"
          classBtn="bigBtn"
          onClick={handleSubmit(onSubmit)}
        />
      </form>

      <hr className={styles.divider}></hr>

      <a className={styles.references} onClick={toggleCard}>
        Already have an account?{" "}
        <span className={styles.highlight}>Log In</span>
      </a>
    </div>
  );
}

export default SignUpCard;
