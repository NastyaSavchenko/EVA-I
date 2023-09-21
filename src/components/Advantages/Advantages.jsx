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
import { SectionTitle } from "../SectionTitle/SectionTitle";
import vector from "../../assets/icons/Vector.svg";
import smile from "../../assets/icons/smile.svg";
import clock from "../../assets/icons/clock.svg";

const AdvantageData = [
  {
    id: 1,
    icon: `${vector}`,
    alt: "icon-1",
    title: "Efficiency Boost",
    text: "Revolutionize workflows by automating intricate tasks, pavingthe way for unparalleled time and energy savings.",
  },
  {
    id: 2,
    icon: `${smile}`,
    alt: "icon-2",
    title: "Customer Delight",
    text: "Elevate customer interactions with personalized, prompt responses, cultivating enduring satisfaction and loyalty.",
  },
  {
    id: 3,
    icon: `${clock}`,
    alt: "icon-3",
    title: "Time Saver",
    text: "Get back precious hours by effortlessly entrusting routine tasks to your tireless AI assistant, unlocking a surge in productivity.",
  }
]

export const Advantages = () => {
  return (
    <section>
      <div className="container">
        <AdvantagesStyles>
          <AdvantagesTop>
            <AdvantagesSpan>Supercharge</AdvantagesSpan>
            <SectionTitle title={"Your Business"} />
          </AdvantagesTop>

          <AdvantagesContainer>
            {AdvantageData.map((advantage) => (
              <AdvantagesCard key={advantage.id}>
              <ImgContainer>
                <CardImg src={advantage.icon} alt={advantage.alt} />
              </ImgContainer>

              <CardTitle>{advantage.title}</CardTitle>

              <CardText>
                {advantage.text}
              </CardText>
            </AdvantagesCard>
            ))}
          </AdvantagesContainer>
        </AdvantagesStyles>
      </div>
    </section>
  );
};
