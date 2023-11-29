import { Logo } from "../Logo/Logo";
import { MainNav } from "../MainNav/MainNav";
import { AuthNav } from "../AuthNav/AuthNav";
import { Header, LeftSide } from "./AppBar.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Language_Option_switch } from "../Language_switcher/Language_Option_switch";
import { Language_switcher } from "../Language_switcher/Language_switcher";

export const AppBar = ({ currentLocale, handleChange, onSelect }) => {
  console.log(currentLocale)
  return (
    <Header>
      <Logo />
      <MainNav />
      <AuthNav
        currentLocale={currentLocale}
        handleChange={handleChange}
        onSelect={onSelect}
      />

      <LeftSide>
        <Language_switcher handleChange={handleChange} currentLocale={currentLocale}/>
        <Language_Option_switch onSelect={onSelect}  currentLocale={currentLocale}/>
        <BurgerMenu />
      </LeftSide>
    </Header>
  );
};
