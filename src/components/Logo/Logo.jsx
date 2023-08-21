import LogoPlug from "../../assets/logo/LogoPlug.png";
import logo from "../../assets/logo/Logo.svg"
import { LogoImg, LogoWrapp, LogoName, LogoBox } from "./Logo.styled";

export const Logo = () => {
  return (
    <LogoBox>
      <a href="/">
        <LogoWrapp>
          <LogoImg src={logo} alt="EVA-I logo" />
          <LogoName>Name</LogoName>
        </LogoWrapp>
      </a>
    </LogoBox>
  );
};
