import { MainBtn } from "../MainBtn/MainBtn";
import { LoginLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <LoginLink type="button">Login</LoginLink>
      <MainBtn />
    </div>
  );
};
