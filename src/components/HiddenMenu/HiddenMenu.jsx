import { Logo } from "../Logo/Logo";
import close from "../../assets/icons/close.svg";
import {
  CloseBtn,
  CloseIcon,
  MenuNav,
  MenuStyles,
  MenuTop,
  NavItem,
  NavLinkStyles,
  NavList,
} from "./HiddenMenu.styled";
import { LoginLink } from "../AuthNav/AuthNav.styled";
import { MainBtn } from "../MainBtn/MainBtn";
import { FormattedMessage } from "react-intl";

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
              <NavLinkStyles to="/" onClick={onClose}>
                <FormattedMessage id="navLink_1" />
              </NavLinkStyles>
            </NavItem>
            <NavItem>
              <NavLinkStyles to="examples" onClick={onClose}>
                <FormattedMessage id="navLink_2" />
              </NavLinkStyles>
            </NavItem>
            <NavItem>
              <NavLinkStyles to="pricing" onClick={onClose}>
                <FormattedMessage id="navLink_3" />
              </NavLinkStyles>
            </NavItem>
            <NavItem>
              <LoginLink to="login" onClick={onClose}>
                <FormattedMessage id="authLink_1" />
              </LoginLink>
            </NavItem>
            <NavItem>
              <MainBtn
                title={<FormattedMessage id="auth_MainBtn" />}
                onClick={onClose}
              />
            </NavItem>
          </NavList>
        </MenuNav>
      </MenuStyles>
    </div>
  );
};
