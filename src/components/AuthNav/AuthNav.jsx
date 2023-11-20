import { FormattedMessage } from "react-intl";
import { MainBtn } from "../MainBtn/MainBtn";
import { AuthNavStyle, LoginLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <LoginLink to="login">
        <FormattedMessage id="authLink_1" />
      </LoginLink>
      <MainBtn title={<FormattedMessage id="auth_MainBtn" />} />
    </AuthNavStyle>
  );
};
