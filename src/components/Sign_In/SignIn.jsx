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
  Error,
  ForgotLink,
} from "./SignIn.styled";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

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
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div>
      <SectionTitle title={"Sign in"} />

      <LinkText>
        Don’t have an account? <Link to="/registration">Create an account</Link>
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
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormStyles>
            <Email>
              <Label htmlFor="email">Email</Label>
              <FieldEmail
                type="email"
                id="email"
                name="email"
                autoComplete="username"
              />
              {errors.email && touched.email && <Error>{errors.email}</Error>}
            </Email>

            <Password>
              <Label htmlFor="password">Password</Label>
              <PasswordWrapper>
                <FieldPass
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                />
                <VisibilityBtn type="button" onClick={handlePasswordVisibility}>
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

              {errors.password && touched.password && (
                <Error>{errors.password}</Error>
              )}
            </Password>

            <ForgotLink href="">Forgot password?</ForgotLink>

            <AuthBtn title={"Log in"} />

            <Divider
              sx={{
                marginBottom: "50px",
                marginTop: "50px",
                "&.MuiDivider-root": { fontSize: "16px", lineHeight: "1.25" },
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
