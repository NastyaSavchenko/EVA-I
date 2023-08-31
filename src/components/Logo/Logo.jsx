import LogoPlug from "../../assets/logo/LogoPlug.png";
import logo from "../../assets/logo/Logo.svg"
import { LogoImg, LogoWrapp, LogoName, LogoBox } from "./Logo.styled";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <LogoBox>
      <NavLink to="/">
        <LogoWrapp>
          <LogoImg src={logo} alt="EVA-I logo" />
          <LogoName>Eva-I</LogoName>
        </LogoWrapp>
      </NavLink>
    </LogoBox>
  );
};
