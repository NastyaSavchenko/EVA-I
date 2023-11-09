import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import {
  Email,
  FieldEmail,
  ForgotStyles,
  FormStyles,
  Label,
  Link,
  LinkText,
  LinkTextResent,
  LogoContainer,
  Notification,
  SubTitle,
  SubTitleResent,
} from "./ForgotPassword.styled";
import { Formik } from "formik";
import Loader from "../../assets/images/loader_Input.svg";
import ErrorImg from "../../assets/images/error_input.svg";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import { forgotPassword } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { FormattedMessage, useIntl } from "react-intl";

export const ForgotPassword = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const dispatch = useDispatch();

  const intl = useIntl();

  return (
    <div>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      {!isSent ? (
        <ForgotStyles className="container">
          <SectionTitle title={<FormattedMessage id="forgotPass_forgot_password" />} />
          <SubTitle>
            <FormattedMessage id="forgotPass_subtext" />
          </SubTitle>

          <Formik
            initialValues={{
              email: "",
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

              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setEmailValue(values);
              setIsSent(true);
              console.log(values);
              dispatch(forgotPassword(values));
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ errors, handleSubmit }) => (
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
                    error={errors.email}
                  />
                  {emailFocused ? (
                    <Notification type={"Verification"}>
                      <>
                        <img src={Loader} alt="Loader" />
                        <FormattedMessage id="auth_verification" />
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

                <AuthBtn title={"Send"} handleSubmit={handleSubmit} />
              </FormStyles>
            )}
          </Formik>

          <LinkText>
            <FormattedMessage id="signIn_main_subtitle1" />{" "}
            <Link to="/registration">
              <FormattedMessage id="signIn_main_subtitle2" />
            </Link>
          </LinkText>
        </ForgotStyles>
      ) : (
        <ForgotStyles className="container">
          <SectionTitle title={<FormattedMessage id="forgotPass_reset" />} />
          <SubTitleResent>
            <FormattedMessage id="forgotPass_reset_subtitle" /> {emailValue}
          </SubTitleResent>
          <LinkTextResent>
            <FormattedMessage id="forgotPass_reset_subtext" />{" "}
            <Link to="/reset-password">
              <FormattedMessage id="forgotPass_resend" />
            </Link>
          </LinkTextResent>

          <Link to="/login">
            <FormattedMessage id="forgotPass_remember" />
          </Link>
        </ForgotStyles>
      )}
    </div>
  );
};
