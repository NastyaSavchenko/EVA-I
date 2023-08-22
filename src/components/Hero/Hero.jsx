import { MainBtn } from "../MainBtn/MainBtn";
import { HeroStyles, HeroSubTitle, HeroTitle } from "./Hero.styled";

export const Hero = () => {
  return (
    <section>
      <div className="container">
      <HeroStyles>
        <HeroTitle>
          Headline Clearly Positioning
          <HeroSubTitle>
            The Primary USP
          </HeroSubTitle>
        </HeroTitle>
        <MainBtn title={"Button"} />
      </HeroStyles>
      </div>
    </section>
  );
};
