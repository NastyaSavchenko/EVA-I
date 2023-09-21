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
  WaitListStyles
} from "./WaitList.styled";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";

export const WaitList = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  return (
    <div>
      {!isJoined ? (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <WaitListStyles className="container">
            <Topper>
              <SectionTitle title={'Join the'} />
              <TitleSpan>
                &nbsp;waiting list for EVA-I
              </TitleSpan>
            </Topper>

            <p>Leave your email and we will inform you as soon as EVA-I is ready to try</p>

            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                social: "",
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

                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values);
                setIsJoined(true)
                resetForm();
                setSubmitting(false);
              }}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <FormStyles onSubmit={handleSubmit}>
                  <Box>
                    <Label htmlFor="firstName">Name Surname</Label>
                    <FieldForm
                      id="firstName"
                      name="firstName"
                      placeholder="Name Surname"
                      required
                    />
                  </Box>

                  <Box>
                    <Label htmlFor="email">Email</Label>
                    <FieldForm
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
                  </Box>

                  <Box>
                    <Label htmlFor="phoneNumber">Phone Number (optional)</Label>
                    <FieldForm
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="+12 3456 7890"
                    />
                  </Box>

                  <Box>
                    <Label htmlFor="social">Social Link (optional)</Label>
                    <FieldForm
                      id="social"
                      name="social"
                      placeholder="Social Link/URL"
                    />
                  </Box>
                </FormStyles>
              )}
            </Formik>

            <Bottom>
              <AuthBtn title={"Join"} />
              <PolicyText>
                <span>By clicking Continue, you agree with the&nbsp; </span>
                <a href="https://reply.io/terms-of-service/" target="_blank">
                  Terms of Service
                </a>
                <span> &nbsp;and&nbsp; </span>
                <a href="https://reply.io/privacy-policy/" target="_blank">
                  Privacy Policy
                </a>
              </PolicyText>
            </Bottom>

          </WaitListStyles>
        </>
      ) : (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <CongratsStyles>
            <SectionTitle title={"Congrats!"} />
            <Subtitle>
              You have been successfully added to the waiting list
            </Subtitle>

            <Link to="/">
              <AuthBtn title={"Back"} />
            </Link>
          </CongratsStyles>
        </>
      )}
    </div>
  );
};
