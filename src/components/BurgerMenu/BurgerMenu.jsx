import { BurgerIcon, BurgerMenuButton, BurgerMenuStyle } from "./BurgerMenu.styled";
import burger from "../../assets/icons/burger.svg";
import { useState } from "react";
import { HiddenMenu } from "../HiddenMenu/HiddenMenu";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
    document.documentElement.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.documentElement.style.overflow = 'auto'
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
