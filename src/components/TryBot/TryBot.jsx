import { MainBtn } from "../MainBtn/MainBtn.jsx";
import { GradientBackground, MainBtnBox } from "./TryBot.styled.jsx";
import { SectionTitle } from "../SectionTitle/SectionTitle.jsx";

export const TryBot = () => {
  return (
    <GradientBackground>
      <section id="specialBackground">
        <div className="container">
          <SectionTitle title={"Encouragement to press CTA"} />
          <MainBtnBox>
            <MainBtn title={"Button"} />
          </MainBtnBox>
        </div>
      </section>
    </GradientBackground>
  );
};
