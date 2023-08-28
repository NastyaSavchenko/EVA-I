import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import {
  Link,
  LinkText,
  Label,
  FormStyles,
  Email,
  Password,
  PasswordWrapper,
  FieldPass,
  FieldEmail,
  VisibilityBtn,
  Notification,
  PolicyText,
} from "./Registration.styled.jsx";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import Divider from "@mui/material/Divider";
import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import ErrorImg from "../../assets/images/error_input.svg";
import Loader from "../../assets/images/loader_Input.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <SectionTitle title={"Create an account"} />
      <LinkText>
        Already have an account? <Link to="/login"> Sign in</Link>
      </LinkText>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          dispatch(register(values));
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting }) => (
          <FormStyles onSubmit={handleSubmit}>
            <Email>
              <Label htmlFor="email">Email</Label>
              <FieldEmail
                type="email"
                id="email"
                name="email"
                autoComplete="username"
                placeholder="Email"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                error={errors.email}
              />
              {emailFocused ? (
                <Notification type={"Verification"}>
                  <>
                    <img src={Loader} alt="Loader" />
                    Verification...
                  </>
                </Notification>
              ) : errors.email ? (
                <Notification type={"error"}>
                  <>
                    <img src={ErrorImg} alt="Error" />
                    {errors.email}
                  </>
                </Notification>
              ) : null}
            </Email>

            <Password>
              <Label htmlFor="password">Password</Label>
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
                  hasError={
                    errors.password ? "true" : "false"
                  }
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

            <AuthBtn title={"Continue"} disabled={isSubmitting} />

            <PolicyText>
              <span>By clicking Continue, you agree with the </span>
              <a href="https://reply.io/terms-of-service/" target="_blank">
                Terms of Service
              </a>
              <span> and </span>
              <a href="https://reply.io/privacy-policy/" target="_blank">
                Privacy Policy
              </a>
            </PolicyText>

            <Divider
              sx={{
                marginBottom: "50px",
                color: "var(--light-grey)",
                "&.MuiDivider-root": { fontSize: "16px", lineHeight: "1.25" },
                "&.MuiDivider-root::after": {
                  borderTop: "thin solid var(--light-grey)",
                },
                "&.MuiDivider-root::before": {
                  borderTop: "thin solid var(--light-grey)",
                },
              }}
            >
              or
            </Divider>

            <GoogleBtn title={"Continue with Google"} />
          </FormStyles>
        )}
      </Formik>
    </div>
  );
};
