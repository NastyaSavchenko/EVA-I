import {
  SignInStyles,
  SubtitleLink,
  SubtitleSpan,
  Title,
  SignInForm,
  FormInput,
  InpWrapper,
  StyledSpan,
  StyledParagraph,
  SpanDiv,
  FormLabel,
  ForgotLink
} from "./SignIn.styled";

import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import { AuthBtn } from "../AuthBtn/AuthBtn";

export const SignIn = () => {
  return (
    <SignInStyles>
      <Title>Sign in</Title>
      <SubtitleSpan>
        Don’t have an account?
        <SubtitleLink to="/registration"> Create an account</SubtitleLink>
      </SubtitleSpan>

      <SignInForm action="" method="POST">
        <InpWrapper>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput
            type="email"
            name="email"
            id="email"
            required
          />
 
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            required
          />
        </InpWrapper>

        <ForgotLink href="">Forgot password?</ForgotLink>

        <AuthBtn title={'Log in'} />

        <SpanDiv>
          <StyledSpan />
          <StyledParagraph>or</StyledParagraph>
          <StyledSpan />
        </SpanDiv>
        <GoogleBtn/>

      </SignInForm>

    </SignInStyles>
  );
};
