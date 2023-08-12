import { MainBtn } from "../MainBtn/MainBtn";
import { LoginLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <LoginLink to="auth">Login</LoginLink>
      <MainBtn title={'button cta'}/>
    </div>
  );
};
