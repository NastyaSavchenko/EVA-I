import { BotBtnStyles, BotContainer } from "./BotBtn.styled";
import logo from "../../assets/logo/Logo.svg";

export const BotBtn = () => {
  return (
    // <BotBtnStyles type="button" aria-label="Click this button to try bot">
    //   <BotContainer>
    //     <img src={logo} alt="EVA-I logo" />
    //   </BotContainer>
    // </BotBtnStyles>
    <BotBtnStyles to="wait-list">
    <BotContainer>
      <img src={logo} alt="EVA-I logo" />
    </BotContainer>
  </BotBtnStyles>
  );
};
