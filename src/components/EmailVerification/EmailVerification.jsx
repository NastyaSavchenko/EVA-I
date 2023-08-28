import {
  Title,
  EmailBox,
  Box,
  Link,
  Container,
} from "./EmailVerification.styled";

export const EmailVerification = ({ userEmail }) => {
  return (
    <main>
      <Container>
        <Title>Verify your account</Title>
        <EmailBox>
          <p>We have sent a verification link to your email </p>
          <span>${userEmail}</span>
        </EmailBox>
        <Box>
          <p>If you can’t find the mail, please check your spam folder or</p>
          <Link to="/reset-password">Resend</Link>
        </Box>
        <Box>
          <p>Already have an account?</p>
          <Link to="/login">Sign in </Link>
        </Box>
      </Container>
    </main>
  );
};
