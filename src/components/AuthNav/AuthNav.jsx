import { MainBtn } from "../MainBtn/MainBtn";
import { LoginLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <LoginLink to="login">Login</LoginLink>
      <MainBtn title={'Try for free'}/>
    </div>
  );
};
