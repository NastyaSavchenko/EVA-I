import { MainBtn } from "../MainBtn/MainBtn.jsx";
import { GradientBackground, MainBtnBox } from "./TryBot.styled.jsx";
import { SectionTitle } from "../SectionTitle/SectionTitle.jsx";
import { FormattedMessage } from "react-intl";

export const TryBot = () => {
  return (
    <GradientBackground>
      <section id="specialBackground">
        <div className="container">
          <SectionTitle title={<FormattedMessage id="tryBot_main_title" />} />
          <MainBtnBox>
            <MainBtn title={<FormattedMessage id="tryForFree_button" />} />
          </MainBtnBox>
        </div>
      </section>
    </GradientBackground>
  );
};
