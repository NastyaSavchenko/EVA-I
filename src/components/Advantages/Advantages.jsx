import {
  AdvantagesStyles,
  AdvantagesSpan,
  AdvantagesContainer,
  AdvantagesCard,
  CardImg,
  ImgContainer,
  CardTitle,
  CardText,
  AdvantagesTop,
} from "./Advantages.styled";
import { FormattedMessage } from "react-intl";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import vector from "../../assets/icons/Vector.svg";
import smile from "../../assets/icons/smile.svg";
import clock from "../../assets/icons/clock.svg";

const AdvantageData = [
  {
    id: 1,
    icon: `${vector}`,
    alt: "icon-1",
    title: <FormattedMessage id="advantage_title_1" />,
    text: <FormattedMessage id="advantage_text_1" />,
  },
  {
    id: 2,
    icon: `${smile}`,
    alt: "icon-2",
    title: <FormattedMessage id="advantage_title_2" />,
    text: <FormattedMessage id="advantage_text_2" />,
  },
  {
    id: 3,
    icon: `${clock}`,
    alt: "icon-3",
    title: <FormattedMessage id="advantage_title_3" />,
    text: <FormattedMessage id="advantage_text_3" />,
  },
];

export const Advantages = () => {
  return (
    <section>
      <div className="container">
        <AdvantagesStyles>
          <AdvantagesTop>
            <AdvantagesSpan>
              <FormattedMessage id="advantage_title_span" />
            </AdvantagesSpan>
            <SectionTitle title={<FormattedMessage id="advantage_title" />} />
          </AdvantagesTop>

          <AdvantagesContainer>
            {AdvantageData.map((advantage) => (
              <AdvantagesCard key={advantage.id}>
                <ImgContainer>
                  <CardImg src={advantage.icon} alt={advantage.alt} />
                </ImgContainer>

                <CardTitle>{advantage.title}</CardTitle>

                <CardText>{advantage.text}</CardText>
              </AdvantagesCard>
            ))}
          </AdvantagesContainer>
        </AdvantagesStyles>
      </div>
    </section>
  );
};
