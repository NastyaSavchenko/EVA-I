<<<<<<< HEAD
import { FormattedMessage } from "react-intl";
=======
import { Language_switcher } from "../Language_switcher/Language_switcher";
>>>>>>> 9ec4405f90fcb5526203d9f222e8f90184acb231
import { MainBtn } from "../MainBtn/MainBtn";
import { AuthNavStyle, LoginLink } from "./AuthNav.styled";

export const AuthNav = ({currentLocale, handleChange}) => {
  return (
    <AuthNavStyle>
<<<<<<< HEAD
      <LoginLink to="login">
        <FormattedMessage id="authLink_1" />
      </LoginLink>
      <MainBtn title={<FormattedMessage id="auth_MainBtn" />} />
=======
      <Language_switcher currentLocale={currentLocale} handleChange={handleChange}/>
      <LoginLink to="login">Login</LoginLink>
      <MainBtn title={'Try for free'}/>
>>>>>>> 9ec4405f90fcb5526203d9f222e8f90184acb231
    </AuthNavStyle>
  );
};
