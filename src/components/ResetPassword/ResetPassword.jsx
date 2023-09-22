import {
  LinkText,
  FormStyles,
  Label,
  PasswordWrapper,
  Password,
  FieldPass,
  VisibilityBtn,
  Notification,
  LogoContainer,
  ResetStyles,
  Subtitle,
} from "./ResetPassword.styled";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import ErrorImg from "../../assets/images/error_input.svg";
import Loader from "../../assets/images/loader_Input.svg";

import { AuthBtn } from "../AuthBtn/AuthBtn";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { resetPassword } from "../../redux/auth/operations";

export const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      {!isCreated ? (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <ResetStyles className="container">
            <SectionTitle title={"Create new password"} />

            <LinkText>
              Password must contain at least 8 characters, including at least 1
              uppercase letter, 1 number and 1 symbol
            </LinkText>

            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.password) {
                  errors.password = "Password is required";
                } else if (values.password.length < 8) {
                  errors.password =
                    "Password must be at least 8 characters long";
                } else if (!/[A-Z]/.test(values.password)) {
                  errors.password =
                    "Password must contain at least 1 uppercase letter";
                } else if (!/\d/.test(values.password)) {
                  errors.password = "Password must contain at least 1 number";
                } else if (
                  !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\//-]/.test(values.password)
                ) {
                  errors.password = "Password must contain at least 1 symbol";
                }

                if (!values.confirmPassword) {
                  errors.password = "Confirm Password is required";
                } else if (values.password !== values.confirmPassword) {
                  errors.password = "Passwords do not match";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                if (values.password !== values.confirmPassword) {
                  setConfirmPasswordError("Passwords do not match");
                } else {
                  setConfirmPasswordError("");
                  dispatch(resetPassword({ password: values.password }));
                  setIsCreated(true);
                  resetForm();
                  setSubmitting(false);
                }
              }}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <FormStyles onSubmit={handleSubmit}>
                  <Password>
                    <Label htmlFor="password">Enter new password</Label>
                    <PasswordWrapper>
                      <FieldPass
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        error={errors.password}
                      />
                      <VisibilityBtn
                        type="button"
                        onClick={handlePasswordVisibility}
                        hasError={errors.password ? "true" : "false"}
                      >
                        {showPassword ? (
                          <MdOutlineVisibility
                            style={{ width: "32px", height: "32px" }}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            style={{ width: "32px", height: "32px" }}
                          />
                        )}
                      </VisibilityBtn>
                    </PasswordWrapper>

                    {passwordFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          Verification...
                        </>
                      </Notification>
                    ) : errors.password ? (
                      <Notification type={"error"}>
                        <>
                          <img src={ErrorImg} alt="Error" />
                          {errors.password}
                        </>
                      </Notification>
                    ) : null}
                  </Password>

                  <Password>
                    <Label htmlFor="confirmPassword">
                      Confirm new password
                    </Label>
                    <PasswordWrapper>
                      <FieldPass
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="current-password"
                        placeholder="Password"
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        error={errors.password}
                      />
                      <VisibilityBtn
                        type="button"
                        onClick={handlePasswordVisibility}
                        hasError={errors.password ? "true" : "false"}
                      >
                        {showPassword ? (
                          <MdOutlineVisibility
                            style={{ width: "32px", height: "32px" }}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            style={{ width: "32px", height: "32px" }}
                          />
                        )}
                      </VisibilityBtn>
                    </PasswordWrapper>

                    {passwordFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          Verification...
                        </>
                      </Notification>
                    ) : errors.password ? (
                      <Notification type={"error"}>
                        <>
                          <img src={ErrorImg} alt="Error" />
                          {errors.password}
                        </>
                      </Notification>
                    ) : null}
                  </Password>

                  <AuthBtn
                    title={"Reset password"}
                    handleSubmit={handleSubmit}
                  />
                </FormStyles>
              )}
            </Formik>
          </ResetStyles>
        </>
      ) : (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <ResetStyles>
            <SectionTitle title={"Horay!"} />
            <Subtitle>You have successfully created new password</Subtitle>

            <Link to="/login">
              <AuthBtn title={"Log in"} />
            </Link>
          </ResetStyles>
        </>
      )}
    </div>
  );
};
