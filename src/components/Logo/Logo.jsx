import LogoPlug from "../../assets/logo/LogoPlug.png";
import { LogoImg, LogoWrapp, LogoName, LogoBox } from "./Logo.styled";

export const Logo = () => {
  return (
    <LogoBox>
      <a href="/">
        <LogoWrapp>
          <LogoImg src={LogoPlug} alt="EVA-I logo" />
          <LogoName>Name</LogoName>
        </LogoWrapp>
      </a>
    </LogoBox>
  );
};
