import { FormattedMessage } from "react-intl";
import { NavLinkStyles, NavList, NavItem } from "./MainNav.styled";
// import { Language_switcher } from "../Language_switcher/Language_switcher";

export const MainNav = ({ currentLocale, handleChange }) => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLinkStyles to="/">
            <FormattedMessage id="navLink_1" />
          </NavLinkStyles>
        </NavItem>
        <NavItem>
          <NavLinkStyles to="examples">
            <FormattedMessage id="navLink_2" />
          </NavLinkStyles>
        </NavItem>
        <NavItem>
          <NavLinkStyles to="pricing">
            <FormattedMessage id="navLink_3" />
          </NavLinkStyles>
        </NavItem>
      </NavList>

      <Language_switcher
        currentLocale={currentLocale}
        handleChange={handleChange}
      />
    </nav>
  );
};
