import { FormattedMessage } from "react-intl";
import { NavLinkStyles, NavList, NavItem } from "./MainNav.styled";

export const MainNav = () => {
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

    </nav>
  );
};
