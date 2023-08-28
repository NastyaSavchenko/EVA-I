import { MainBtn } from "../MainBtn/MainBtn.jsx";
import { GradientBackground, MainBtnBox } from "./TryBot.styled.jsx";
import { SectionTitle } from "../SectionTitle/SectionTitle.jsx";

export const TryBot = () => {
  return (
    <GradientBackground>
      <section id="specialBackground">
        <div className="container">
          <SectionTitle title={"Ready to Experience the Future? Try for free today!"} />
          <MainBtnBox>
            <MainBtn title={"Try for free"} />
          </MainBtnBox>
        </div>
      </section>
    </GradientBackground>
  );
};
