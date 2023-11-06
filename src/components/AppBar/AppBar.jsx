import { Logo } from "../Logo/Logo";
import { MainNav } from "../MainNav/MainNav";
import { AuthNav } from "../AuthNav/AuthNav";
import { Header } from "./AppBar.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const AppBar = ({currentLocale, handleChange}) => {
  return (
    <Header>
      <Logo />
      <MainNav currentLocale={currentLocale} handleChange={handleChange} />
      <AuthNav />
      <BurgerMenu />
    </Header>
  );
};
