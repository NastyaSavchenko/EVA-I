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

export const WaitList = () => {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [socialFocused, setSocialFocused] = useState(false);
  const [joindError, setJoindError] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {!isJoined ? (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <WaitListStyles className="container">
            <Topper>
              <SectionTitle title={"Join the"} />
              <TitleSpan>&nbsp;waiting list for EVA-I</TitleSpan>
            </Topper>

            <p>
              Leave your email and we will inform you as soon as EVA-I is ready
              to try
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
                  errors.name = "Name is required";
                }

                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.phoneNumber) {
                  errors.phoneNumber = "Phone number is required";
                } else if (!/^[0-9+]*$/i.test(values.phoneNumber)) {
                  errors.phoneNumber = "Invalid phone number";
                }

                if (!values.socialLink) {
                  errors.socialLink = "Social link is required";
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
                    <Label htmlFor="name">Name Surname</Label>
                    <FieldForm
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name Surname"
                      onFocus={() => setNameFocused(true)}
                      onBlur={() => setNameFocused(false)}
                      error={errors.name}
                    />
                    {nameFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          Verification...
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
                    <Label htmlFor="email">Email</Label>
                    <FieldForm
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="username"
                      placeholder="Email"
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                      error={errors.email || joindError}
                    />
                    {emailFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          Verification...
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
                    <Label htmlFor="phoneNumber">Phone Number (optional)</Label>
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
                          Verification...
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
                    <Label htmlFor="socialLink">Social Link (optional)</Label>
                    <FieldForm
                      id="socialLink"
                      name="socialLink"
                      placeholder="Social Link/URL"
                      onFocus={() => setSocialFocused(true)}
                      onBlur={() => setSocialFocused(false)}
                      error={errors.socialLink}
                    />
                    {socialFocused ? (
                      <Notification type={"Verification"}>
                        <>
                          <img src={Loader} alt="Loader" />
                          Verification...
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
                    <AuthBtn title={"Join"} handleSubmit={handleSubmit} />
                    <PolicyText>
                      <span>
                        By clicking Continue, you agree with the&nbsp;{" "}
                      </span>
                      <a
                        href="https://reply.io/terms-of-service/"
                        target="_blank"
                      >
                        Terms of Service
                      </a>
                      <span> &nbsp;and&nbsp; </span>
                      <a
                        href="https://reply.io/privacy-policy/"
                        target="_blank"
                      >
                        Privacy Policy
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
