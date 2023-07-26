import { MainBtn } from "../MainBtn/MainBtn";
import { HeroStyles, HeroTitle } from "./Hero.styled";

export const Hero = () => {
  return (
    <section>
      <div className="container">
      <HeroStyles>
        <HeroTitle>Headline Clearly Positioning The Primary USP</HeroTitle>
        <MainBtn title={"button cta"} />
      </HeroStyles>
      </div>
    </section>
  );
};
