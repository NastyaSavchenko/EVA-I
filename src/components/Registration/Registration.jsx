import { useState } from "react";
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
import { FormattedMessage, useIntl } from "react-intl";

export const Registration = ({ setUserEmail, setRegistrationStatus }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const intl = useIntl();

  return (
    <div>
      <SectionTitle title={<FormattedMessage id="register_main_title" />} />
      <LinkText>
        <FormattedMessage id="register_already_have" />
        <Link to="/login">&nbsp;<FormattedMessage id="signIn_main_title" /></Link>
      </LinkText>

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
            errors.password =
              <FormattedMessage id="auth_pass_width" />;
          } else if (!/[A-Z]/.test(values.password)) {
            errors.password =
              <FormattedMessage id="auth_pass_upperCase" />;
          } else if (!/\d/.test(values.password)) {
            errors.password =
              <FormattedMessage id="auth_pass_containNumb" />;
          } else if (
            !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\//-]/.test(values.password)
          ) {
            errors.password = <FormattedMessage id="auth_pass_length" />;
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await dispatch(register(values));
            if (response.type === 'auth/register/fulfilled') {
              setRegistrationStatus(201);
              setUserEmail(values.email);
              resetForm();
            } else if (response.type === 'auth/register/rejected') {
              setRegistrationError(response.payload);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ errors, touched, handleSubmit }) => (
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
                error={errors.email || registrationError}
              />
              {emailFocused ? (
                <Notification type={"Verification"}>
                  <>
                    <img src={Loader} alt="Loader" />
                    <FormattedMessage id="auth_verification" />
                  </>
                </Notification>
              ) : errors.email || registrationError ? (
                <Notification type={"error"}>
                  <>
                    <img src={ErrorImg} alt="Error" />
                    {errors.email || registrationError}
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
                    <FormattedMessage id="auth_verification" />
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

            <AuthBtn title={<FormattedMessage id="auth_continue" />} handleSubmit={handleSubmit} />

            <PolicyText>
              <span><FormattedMessage id="register_by_clicking" />&nbsp;</span>
              <a href="https://reply.io/terms-of-service/" target="_blank">
                <FormattedMessage id="register_terms_of_service" />
              </a>
              <span>&nbsp;<FormattedMessage id="register_and" />&nbsp;</span>
              <a href="https://reply.io/privacy-policy/" target="_blank">
                <FormattedMessage id="register_privacy_policy" />
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
              <FormattedMessage id="auth_or" />
            </Divider>

            <GoogleBtn title={<FormattedMessage id="register_continue_Google" />} />
          </FormStyles>
        )}
      </Formik>
    </div>
  );
};
