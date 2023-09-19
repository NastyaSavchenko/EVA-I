import { MainBtn } from "../MainBtn/MainBtn";
import { AuthNavStyle, LoginLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <LoginLink to="login">Login</LoginLink>
      <MainBtn title={'Try for free'}/>
    </AuthNavStyle>
  );
};
