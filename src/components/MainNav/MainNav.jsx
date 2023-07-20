import { NavLinkStyles } from "./MainNav.styled";

export const MainNav = () => {
  return (
    <nav>
       <NavLinkStyles to="/">Why us</NavLinkStyles>
       <NavLinkStyles to="examples">How it works</NavLinkStyles>
       <NavLinkStyles to="pricing">Pricing</NavLinkStyles>
    </nav>
  );
};
