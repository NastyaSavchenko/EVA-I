import { BotBtnStyles, BotContainer, BotImg } from "./BotBtn.styled";
import logo from "../../assets/logo/Logo.svg"

export const BotBtn = () => {
  return <BotBtnStyles type="button">
    <BotContainer>
      <BotImg src={logo} alt="EVA-I logo" />
    </BotContainer>
  </BotBtnStyles>;
};
