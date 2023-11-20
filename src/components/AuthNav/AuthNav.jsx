import { Language_switcher } from "../Language_switcher/Language_switcher";
import { MainBtn } from "../MainBtn/MainBtn";
import { AuthNavStyle, LoginLink } from "./AuthNav.styled";

export const AuthNav = ({currentLocale, handleChange}) => {
  return (
    <AuthNavStyle>
      <Language_switcher currentLocale={currentLocale} handleChange={handleChange}/>
      <LoginLink to="login">Login</LoginLink>
      <MainBtn title={'Try for free'}/>
    </AuthNavStyle>
  );
};
