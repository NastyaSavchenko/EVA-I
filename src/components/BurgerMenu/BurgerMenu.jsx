import { BurgerIcon, BurgerMenuButton, BurgerMenuStyle } from "./BurgerMenu.styled";
import burger from "../../assets/icons/burger.svg";
import { useState } from "react";
import { HiddenMenu } from "../HiddenMenu/HiddenMenu";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <BurgerMenuStyle>
      <BurgerMenuButton
          type="button"
          aria-label="burgerButton"
          onClick={openMenu}
        >
          <BurgerIcon src={burger} alt="burger menu" />
        </BurgerMenuButton>

        {isOpen && <HiddenMenu onClose={closeMenu} isOpen={isOpen} />}
    </BurgerMenuStyle>
  );
};
