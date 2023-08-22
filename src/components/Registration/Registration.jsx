import { useState } from "react";
import { Formik } from "formik";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import Divider from "@mui/material/Divider";
import { GoogleBtn } from "../GoogleBtn/GoogleBtn";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

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
  Error,
  PolicyText,
} from "./Registration.styled.jsx";

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(register(values));
    resetForm();
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
                placeholder="Email"
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
                  placeholder="Password"
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

            <AuthBtn title={"Continue"} />
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
