import { NavLinkStyles, NavList, NavItem } from "./MainNav.styled";

export const MainNav = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLinkStyles to="/">Why us</NavLinkStyles>
        </NavItem>
        <NavItem>
          <NavLinkStyles to="examples">How it works</NavLinkStyles>
        </NavItem>
        <NavItem>
          <NavLinkStyles to="pricing">Pricing</NavLinkStyles>
        </NavItem>
      </NavList>
    </nav>
  );
};
