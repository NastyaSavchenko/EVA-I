import { NavLinkStyles, NavList, NavItem } from "./MainNav.styled";
import { Language_switcher } from "../Language_switcher/Language_switcher";

export const MainNav = ({currentLocale, handleChange}) => {
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
        {/* <Language_switcher currentLocale={currentLocale} handleChange={handleChange}/> */}
      </NavList>

      <Language_switcher currentLocale={currentLocale} handleChange={handleChange}/>

    </nav>
  );
};
