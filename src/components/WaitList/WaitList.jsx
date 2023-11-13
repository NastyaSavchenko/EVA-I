import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Formik } from "formik";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import Loader from "../../assets/images/loader_Input.svg";
import ErrorImg from "../../assets/images/error_input.svg";
import {
  Bottom,
  Box,
  CongratsStyles,
  FieldForm,
  FormStyles,
  Label,
  LogoContainer,
  Notification,
  PolicyText,
  Subtitle,
  TitleSpan,
  Topper,
  WaitListStyles,
} from "./WaitList.styled";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { waitList } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { FormattedMessage, useIntl } from "react-intl";

export const WaitList = () => {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [socialFocused, setSocialFocused] = useState(false);
  const [joindError, setJoindError] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const dispatch = useDispatch();

  const intl = useIntl();

  return (
    <div>
      {!isJoined ? (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <WaitListStyles className="container">
            <Topper>
              <SectionTitle title={<FormattedMessage id="waitList_join_the" />} />
              <TitleSpan>&nbsp;<FormattedMessage id="waitList_list" /></TitleSpan>
            </Topper>

            <p>
              <FormattedMessage id="waitList_subtext" />
            </p>

            <Formik
              initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
                socialLink: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.name) {
                  errors.name = <FormattedMessage id="waitList_name_required" />;
                }

                if (!values.email) {
                  errors.email =
                    <FormattedMessage id="auth_mail_required" />;
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = <FormattedMessage id="auth_mail_err" />;
                }

                if (!values.phoneNumber) {
                  errors.phoneNumber = <FormattedMessage id="waitList_phone_required" />;
                } else if (!/^[0-9+]*$/i.test(values.phoneNumber)) {
                  errors.phoneNumber = <FormattedMessage id="waitList_phone_invalid" />;
                }

                if (!values.socialLink) {
                  errors.socialLink = <FormattedMessage id="waitList_social_link_required" />;
                }

                return errors;
              }}
              onSubmit={async (values, { resetForm }) => {
                try {
                  const response = await dispatch(waitList(values));
                  console.log(response);
                  if (response.type === "auth/waitlist/add/fulfilled") {
                    setIsJoined(true);
                    resetForm();
                  } else if (response.type === "auth/waitlist/add/rejected") {
                    setJoindError(response.payload);
                  }
                } catch (error) {
                  console.error(error.message);
                }
              }}
            >
              {({ errors, handleSubmit }) => (
                <FormStyles onSubmit={handleSubmit}>
                  <Box>
                    <Label htmlFor="name">
                      <FormattedMessage id="waitList_name_surname" />
                    </Label>
                    <FieldForm
                      type="text"
                      id="name"
                      name="name"
                      placeholder={intl.formatMessage({ id: "waitList_name_surname" })}
                      onFocus={() => setNameFocused(true)}
                      onBlur={() => setNameFocused(false)}
                      error={errors.name}
                    />
                    {nameFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          <FormattedMessage id="auth_verification" />
                        </>
                      </Notification>
                    ) : errors.name ? (
                      <Notification type={"error"}>
                        <>
                          <img src={ErrorImg} alt="Error" />
                          {errors.name}
                        </>
                      </Notification>
                    ) : null}
                  </Box>

                  <Box>
                    <Label htmlFor="email">
                      <FormattedMessage id="auth_email" />
                    </Label>
                    <FieldForm
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="username"
                      placeholder={intl.formatMessage({ id: "auth_email" })}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                      error={errors.email || joindError}
                    />
                    {emailFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          <FormattedMessage id="auth_verification" />
                        </>
                      </Notification>
                    ) : errors.email || joindError ? (
                      <Notification type={"error"}>
                        <>
                          <img src={ErrorImg} alt="Error" />
                          {errors.email || joindError}
                        </>
                      </Notification>
                    ) : null}
                  </Box>

                  <Box>
                    <Label htmlFor="phoneNumber">
                      <FormattedMessage id="waitList_phone_number" />
                      (<FormattedMessage id="waitList_optional" />)
                    </Label>
                    <FieldForm
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="+12 3456 7890"
                      onFocus={() => setPhoneFocused(true)}
                      onBlur={() => setPhoneFocused(false)}
                      error={errors.phoneNumber}
                    />
                    {phoneFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          <FormattedMessage id="auth_verification" />
                        </>
                      </Notification>
                    ) : errors.phoneNumber ? (
                      <Notification type={"error"}>
                        <>
                          <img src={ErrorImg} alt="Error" />
                          {errors.phoneNumber}
                        </>
                      </Notification>
                    ) : null}
                  </Box>

                  <Box>
                    <Label htmlFor="socialLink">
                    <FormattedMessage id="waitList_social_link" /> 
                      (<FormattedMessage id="waitList_optional" />)
                    </Label>
                    <FieldForm
                      id="socialLink"
                      name="socialLink"
                      placeholder={intl.formatMessage({ id: "waitList_social_link_URL" })}
                      onFocus={() => setSocialFocused(true)}
                      onBlur={() => setSocialFocused(false)}
                      error={errors.socialLink}
                    />
                    {socialFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          <FormattedMessage id="auth_verification" />
                        </>
                      </Notification>
                    ) : errors.socialLink ? (
                      <Notification type={"error"}>
                        <>
                          <img src={ErrorImg} alt="Error" />
                          {errors.socialLink}
                        </>
                      </Notification>
                    ) : null}
                  </Box>
                  <Bottom>
                    <AuthBtn title={<FormattedMessage id="waitList_join" />} handleSubmit={handleSubmit} />
                    <PolicyText>
                      <span>
                      <FormattedMessage id="register_by_clicking" />&nbsp;{" "}
                      </span>
                      <a
                        href="https://reply.io/terms-of-service/"
                        target="_blank"
                      >
                        <FormattedMessage id="register_terms_of_service" />
                      </a>
                      <span> &nbsp;<FormattedMessage id="register_and" />&nbsp; </span>
                      <a
                        href="https://reply.io/privacy-policy/"
                        target="_blank"
                      >
                        <FormattedMessage id="register_privacy_policy" />
                      </a>
                    </PolicyText>
                  </Bottom>
                </FormStyles>
              )}
            </Formik>
          </WaitListStyles>
        </>
      ) : (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <CongratsStyles>
            <SectionTitle title={<FormattedMessage id="waitList_congrats" />} />
            <Subtitle>
            <FormattedMessage id="waitList_success_added" />
            </Subtitle>

            <Link to="/">
              <AuthBtn title={<FormattedMessage id="waitList_back_btn" />} />
            </Link>
          </CongratsStyles>
        </>
      )}
    </div>
  );
};
