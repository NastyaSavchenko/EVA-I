import { MainBtn } from "../MainBtn/MainBtn.jsx";
import { MainBtnBox } from "./TryBot.styled.jsx";
import { SectionTitle } from "../SectionTitle/SectionTitle.jsx";

export const TryBot = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={"Encouragement to press CTA"} />
        <MainBtnBox>
        <MainBtn title={"button cta"} />
        </MainBtnBox>
      </div>
    </section>
  );
};
