import { FormattedMessage } from "react-intl";
import { Language_switcher } from "../Language_switcher/Language_switcher";
import { MainBtn } from "../MainBtn/MainBtn";
import { AuthNavStyle, LoginLink } from "./AuthNav.styled";

export const AuthNav = ({ currentLocale, handleChange }) => {
  return (
    <AuthNavStyle>
      <Language_switcher
        currentLocale={currentLocale}
        handleChange={handleChange}
      />
      <LoginLink to="login">
        <FormattedMessage id="authLink_1" />
      </LoginLink>
      <MainBtn title={<FormattedMessage id="auth_MainBtn" />} />
    </AuthNavStyle>
  );
};
