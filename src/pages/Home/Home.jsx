import { Advantages } from "../../components/Advantages/Advantages.jsx";
import { Reviews } from "../../components/Reviews/Reviews.jsx";
import { TryBot } from "../../components/TryBot/TryBot";
import { FAQ } from "../../components/FAQ/FAQ.jsx";

export const Home = () => {
  return (
    <main>
      <Advantages />
      <Reviews />
      <FAQ />
      <TryBot />
    </main>
  );
};
