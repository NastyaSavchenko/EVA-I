import { Logo } from "../Logo/Logo";
import { MainNav } from "../MainNav/MainNav";
import { AuthNav } from "../AuthNav/AuthNav";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <Logo />
      <MainNav />
      <AuthNav />
    </Header>
  );
};
