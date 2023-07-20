import { Logo } from "../Logo/Logo";
import { MainNav } from "../MainNav/MainNav";
import { AuthNav } from "../AuthNav/AuthNav";
import { MainBtn } from "../MainBtn/MainBtn";

export const AppBar = () => {
  return (
    <header>
      <Logo />
      <MainNav />
      <AuthNav />
      <MainBtn />
    </header>
  );
};
