import { BotBtnStyles, BotContainer } from "./BotBtn.styled";
import logo from "../../assets/logo/Logo.svg";
import logo_white from "../../assets/logo/logo_white.svg";
import logoPath from "../../assets/icons/logo_infinity.svg";

export const BotBtn = () => {
  return (
    // <BotBtnStyles type="button" aria-label="Click this button to try bot">
    //   <BotContainer>
    //     <img src={logo} alt="EVA-I logo" />
    //   </BotContainer>
    // </BotBtnStyles>
    <BotBtnStyles to="wait-list">
      <BotContainer>
        <img src={logo_white} alt="EVA-I logo" />
      </BotContainer>
    </BotBtnStyles>
  );
};
