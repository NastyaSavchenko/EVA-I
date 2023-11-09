import {
  Title,
  EmailBox,
  Box,
  Link,
  Container,
} from "./EmailVerification.styled";
import { verificationCode } from "../../redux/auth/operations";
import { FormattedMessage } from "react-intl";

export const EmailVerification = ({ userEmail }) => {
  verificationCode();
  return (
    <main>
      <Container>
        <Title><FormattedMessage id="emailVarification_verify" /></Title>
        <EmailBox>
          <p><FormattedMessage id="emailVarification_subtitle" /> </p>
          <span>{userEmail}</span>
        </EmailBox>
        <Box>
          <p><FormattedMessage id="emailVarification_cant_find_letter" /></p>
          <Link to="/reset-password">
            <FormattedMessage id="forgotPass_resend" />
          </Link>
        </Box>
        <Box>
          <p><FormattedMessage id="register_already_have" /></p>
          <Link to="/login"><FormattedMessage id="auth_log_in" /></Link>
        </Box>
      </Container>
    </main>
  );
};
