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
import Inputloader from "../../assets/images/loader_Input.svg";

import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Divider from "@mui/material/Divider";
import { logIn } from "../../redux/auth/operations";
import { FormattedMessage, useIntl } from "react-intl";
import { Loader } from "../Loader/Loader";

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const intl = useIntl();

  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <SectionTitle title={<FormattedMessage id="signIn_main_title" />} />

      {isLoading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = <FormattedMessage id="auth_mail_required" />;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = <FormattedMessage id="auth_mail_err" />;
            }

            if (!values.password) {
              errors.password = <FormattedMessage id="auth_pass_required" />;
            } else if (values.password.length < 8) {
              errors.password = <FormattedMessage id="auth_pass_width" />;
            } else if (!/[A-Z]/.test(values.password)) {
              errors.password = <FormattedMessage id="auth_pass_upperCase" />;
            } else if (!/\d/.test(values.password)) {
              errors.password = <FormattedMessage id="auth_pass_containNumb" />;
            } else if (
              !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\//-]/.test(values.password)
            ) {
              errors.password = <FormattedMessage id="auth_pass_length" />;
            }

            return errors;
          }}
          onSubmit={async (values, { resetForm }) => {
            setIsLoading(true);

            try {
              const response = await dispatch(logIn(values));

              if (response.type === "auth/login/rejected") {
                response.payload === "Wrong password"
                  ? setPasswordError(response.payload)
                  : setLoginError(response.payload);
              }
            } catch (error) {
              console.log(error);
            } finally {
              setIsLoading(false);
              resetForm();
            }
          }}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <FormStyles onSubmit={handleSubmit}>
              <Email>
                <Label htmlFor="email">
                  <FormattedMessage id="auth_email" />
                </Label>
                <FieldEmail
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="username"
                  placeholder={intl.formatMessage({ id: "auth_email" })}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  error={errors.email || loginError}
                />
                {emailFocused ? (
                  <Notification type={"Verification"}>
                    <>
                      <img src={Inputloader} alt="Loader" />
                      <FormattedMessage id="auth_verification" />
                    </>
                  </Notification>
                ) : errors.email || loginError ? (
                  <Notification type={"error"}>
                    <>
                      <img src={ErrorImg} alt="Error" />
                      {errors.email || loginError}
                    </>
                  </Notification>
                ) : null}
              </Email>

              <Password>
                <Label htmlFor="password">
                  <FormattedMessage id="auth_password" />
                </Label>
                <PasswordWrapper>
                  <FieldPass
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder={intl.formatMessage({ id: "auth_password" })}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    error={errors.password || passwordError}
                  />
                  <VisibilityBtn
                    type="button"
                    onClick={handlePasswordVisibility}
                    hasError={
                      errors.password || passwordError ? "true" : "false"
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
                      <img src={Inputloader} alt="Loader" />
                      <FormattedMessage id="auth_verification" />
                    </>
                  </Notification>
                ) : errors.password || passwordError ? (
                  <Notification type={"error"}>
                    <>
                      <img src={ErrorImg} alt="Error" />
                      {errors.password || passwordError}
                    </>
                  </Notification>
                ) : null}
              </Password>

              <ForgotLink to="/forgot-password">
                <FormattedMessage id="forgotPass_forgot_password" />
              </ForgotLink>

              <AuthBtn
                title={<FormattedMessage id="auth_log_in" />}
                handleSubmit={handleSubmit}
              />

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
                <FormattedMessage id="auth_or" />
              </Divider>
              <GoogleBtn title={<FormattedMessage id="signIn_Google" />} />
              
              <LinkText>
                <FormattedMessage id="signIn_main_subtitle1" />{" "}
                <Link to="/registration">
                  &nbsp;
                  <FormattedMessage id="signIn_main_subtitle2" />
                </Link>
              </LinkText>
            </FormStyles>
          )}
        </Formik>
      )}
    </div>
  );
};
