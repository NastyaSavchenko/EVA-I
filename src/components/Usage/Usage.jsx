import {
  CardIcon,
  CardImg,
  CardInfo,
  CardText,
  CardTitle,
  CardTop,
  UsageCard,
  UsageCards,
} from "./Usage.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import bg from "../../assets/images/icon.svg";

const ExamplesData = [
  {
    id: "Step 1",
    img: "/",
    alt: "PHOTO/VIDEO 1",
    icon: `${bg}`,
    title: "Step 1",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, nconsectetur, adipisci velit, sed qu",
  },
  {
    id: "Step 2",
    img: "/",
    alt: "PHOTO/VIDEO 2",
    icon: `${bg}`,
    title: "Step 2",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, nconsectetur, adipisci velit, sed qu",
  },
  {
    id: "Step 3",
    img: "/",
    alt: "PHOTO/VIDEO 3",
    icon: `${bg}`,
    title: "Step 3",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, nconsectetur, adipisci velit, sed qu",
  },
  {
    id: "Step 4",
    img: "/",
    alt: "PHOTO/VIDEO 4",
    icon: `${bg}`,
    title: "Step 4",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, nconsectetur, adipisci velit, sed qu",
  },
];

export const Usage = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={"Check out how it works"} />
        <UsageCards>
          {ExamplesData.map((example) => {
            return (
              <UsageCard key={example.id}>
                <CardImg>
                  <img src={example.img} alt={example.alt} />
                </CardImg>
                <CardInfo>
                  <CardTop>
                    <CardIcon bg={example.icon} />
                    <CardTitle>{example.title}</CardTitle>
                  </CardTop>
                  <CardText>{example.text}</CardText>
                </CardInfo>
              </UsageCard>
            );
          })}
        </UsageCards>
      </div>
    </section>
  );
};
