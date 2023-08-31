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
    SubTitleResent
} from "./ForgotPassword.styled";
import { Formik } from "formik";
import Loader from "../../assets/images/loader_Input.svg";
import ErrorImg from "../../assets/images/error_input.svg";
import { AuthBtn } from "../AuthBtn/AuthBtn";

export const ForgotPassword = () => {
    const [emailFocused, setEmailFocused] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [emailValue, setEmailValue] = useState("");

    return (
        <div>
            <LogoContainer>
                <Logo />
            </LogoContainer>

            {!isSent ? (
                <ForgotStyles className="container">
                    <SectionTitle title={"Forgot password"} />
                    <SubTitle>
                        Enter the email address associated with your account and we`ll send you a link to reset your password
                    </SubTitle>

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
                            // dispatch(logIn(values));
                            setEmailValue(values.email);
                            setIsSent(true);
                            console.log('sent');
                            resetForm();
                            setSubmitting(false);
                        }}
                    >
                        {({ errors, handleSubmit }) => (
                            <FormStyles onSubmit={handleSubmit}>
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


                                <AuthBtn title={"Send"} handleSubmit={handleSubmit} />
                            </FormStyles>

                        )}
                    </Formik>

                    <LinkText>
                        Don’t have an account? <Link to="/registration">Create an account</Link>
                    </LinkText>
                </ForgotStyles>
            ) : (
                <ForgotStyles className="container">
                    <SectionTitle title={"Reset your password"} />
                    <SubTitleResent>
                        We have sent a link to reset you password to your email {emailValue}
                    </SubTitleResent>
                    <LinkTextResent>
                        If you can’t find the mail, please check your spam folder or <Link to="/reset-password">Resend</Link>
                    </LinkTextResent>

                    <Link to="/login">Remember your password?</Link>
                </ForgotStyles>
            )}


        </div>
    )
};
