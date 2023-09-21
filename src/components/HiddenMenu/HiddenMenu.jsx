import { Logo } from "../Logo/Logo";
import close from "../../assets/icons/close.svg";
import { CloseBtn, CloseIcon, MenuNav, MenuStyles, MenuTop, NavItem, NavLinkStyles, NavList } from "./HiddenMenu.styled";
import { LoginLink } from "../AuthNav/AuthNav.styled";
import { MainBtn } from "../MainBtn/MainBtn";

export const HiddenMenu = ({ isOpen, onClose }) => {
  return (
    <div>
      <MenuStyles isOpen={isOpen}>
        <MenuTop>
          <Logo />

          <CloseBtn onClick={onClose}>
            <CloseIcon src={close} alt="close cross" />
          </CloseBtn>
        </MenuTop>

        <MenuNav>
          <NavList>
            <NavItem>
              <NavLinkStyles to="/" onClick={onClose}>Why us</NavLinkStyles>
            </NavItem>
            <NavItem>
              <NavLinkStyles to="examples" onClick={onClose}>How it works</NavLinkStyles>
            </NavItem>
            <NavItem>
              <NavLinkStyles to="pricing" onClick={onClose}>Pricing</NavLinkStyles>
            </NavItem>
            <NavItem>
              <LoginLink to="login" onClick={onClose}>Login</LoginLink>
            </NavItem>
            <NavItem>
              <MainBtn title={'Try for free'} onClick={onClose} />
            </NavItem>
          </NavList>
        </MenuNav>
      </MenuStyles>
    </div>

  );
};
