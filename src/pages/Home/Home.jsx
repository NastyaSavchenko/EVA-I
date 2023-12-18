import { Advantages } from "../../components/Advantages/Advantages.jsx";
import { Reviews } from "../../components/Reviews/Reviews.jsx";
import { TryBot } from "../../components/TryBot/TryBot";
import { FAQ } from "../../components/FAQ/FAQ.jsx";
import { Benefits } from "../../components/Benefits/Benefits.jsx";
import { Hero } from "../../components/Hero/Hero.jsx";
import { Сustomers } from "../../components/Сustomers/Сustomers.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Сustomers /> */}
      <Advantages />
      <Benefits />
      <Reviews />
      <FAQ />
      <TryBot />
    </main>
  );
};

export default Home;
