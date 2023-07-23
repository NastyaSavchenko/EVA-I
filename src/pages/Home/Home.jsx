import { Advantages } from "../../components/Advantages/Advantages.jsx";
import { Reviews } from "../../components/Reviews/Reviews.jsx";
import { TryBot } from "../../components/TryBot/TryBot";
import { FAQ } from "../../components/FAQ/FAQ.jsx";
import { BotBtn } from "../../components/BotBtn/BotBtn.jsx";
import { Benefits } from "../../components/Benefits/Benefits.jsx";
import { Header } from "../../components/Header/Header.jsx";


export const Home = () => {
  return (
    <main>
      <Header />
      <Advantages />
      <Benefits />
      <Reviews />
      <FAQ />
      <TryBot />
      <BotBtn />
    </main>
  );
};
