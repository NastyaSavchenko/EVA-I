import { Logo } from "../Logo/Logo";
import { MainNav } from "../MainNav/MainNav";
import { AuthNav } from "../AuthNav/AuthNav";
import { Header } from "./AppBar.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const AppBar = () => {
  return (
    <Header>
      <Logo />
      <MainNav />
      <AuthNav />
      <BurgerMenu />
    </Header>
  );
};
