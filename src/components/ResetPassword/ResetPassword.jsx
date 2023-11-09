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
import { FormattedMessage, useIntl } from "react-intl";

export const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const intl = useIntl();

  return (
    <div>
      {!isCreated ? (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <ResetStyles className="container">
            <SectionTitle title={<FormattedMessage id="createNewPass" />} />

            <LinkText>
            <FormattedMessage id="createNewPass_subtext" />
            </LinkText>

            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              validate={(values) => {
                const errors = {};

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

                if (!values.confirmPassword) {
                  errors.password = <FormattedMessage id="createNewPass_confirm_required" />;
                } else if (values.password !== values.confirmPassword) {
                  errors.password = <FormattedMessage id="createNewPass_pass_notMatch" />;
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                if (values.password !== values.confirmPassword) {
                  setConfirmPasswordError(<FormattedMessage id="createNewPass_pass_notMatch" />);
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
                    <Label htmlFor="password">
                    <FormattedMessage id="createNewPass_enterNewPass" />
                    </Label>
                    <PasswordWrapper>
                      <FieldPass
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder={intl.formatMessage({id: "auth_password"}) }
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

                  <Password>
                    <Label htmlFor="confirmPassword">
                    <FormattedMessage id="createNewPass_confirmNewPass" />
                    </Label>
                    <PasswordWrapper>
                      <FieldPass
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="current-password"
                        placeholder={intl.formatMessage({id: "auth_password"}) }
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

                  <AuthBtn
                    title={<FormattedMessage id="createNewPass_reset" />}
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
            <SectionTitle title={<FormattedMessage id="createNewPass_horay" />} />
            <Subtitle><FormattedMessage id="createNewPass_success" /></Subtitle>

            <Link to="/login">
              <AuthBtn title={<FormattedMessage id="auth_log_in" />} />
            </Link>
          </ResetStyles>
        </>
      )}
    </div>
  );
};
