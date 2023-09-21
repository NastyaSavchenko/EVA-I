import {
  Link,
  LinkText,
  FormStyles,
  Email,
  Label,
  FieldEmail,
  PasswordWrapper,
  Password,
  FieldPass,
  VisibilityBtn,
  Notification,
  ForgotLink,
} from "./SignIn.styled";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import ErrorImg from "../../assets/images/error_input.svg";
import Loader from "../../assets/images/loader_Input.svg";

import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Divider from "@mui/material/Divider";
import { logIn } from "../../redux/auth/operations";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <SectionTitle title={"Sign in"} />

      <LinkText>
        Don’t have an account? <Link to="/registration">&nbsp;Create an account</Link>
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
          dispatch(logIn(values));
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting  }) => (
          <FormStyles  onSubmit={handleSubmit}>
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

            <ForgotLink to="/forgot-password">Forgot password?</ForgotLink>

            <AuthBtn title={"Log in"} handleSubmit={handleSubmit}/>

            <Divider
              sx={{
                marginBottom: "50px",
                marginTop: "50px",
                color: "var(--light-grey)",
                "&.MuiDivider-root": {
                  fontSize: "16px",
                  lineHeight: "1.25",
                },
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
            <GoogleBtn title={"Sign in with Google"} />
          </FormStyles>
        )}
      </Formik>
    </div>
  );
};
