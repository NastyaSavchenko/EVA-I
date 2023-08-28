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
    title: "Empower with relevant knowledge",
    text: "Simply upload files or import content via URLs to equip your chatbot with the information it needs to excel in its role.",
  },
  {
    id: "Step 2",
    img: "/",
    alt: "PHOTO/VIDEO 2",
    icon: `${bg}`,
    title: "Craft unique versions",
    text: "Customize chatbots for diverse roles, settings, and user experiences.",
  },
  {
    id: "Step 3",
    img: "/",
    alt: "PHOTO/VIDEO 3",
    icon: `${bg}`,
    title: "Spread across teams and customers",
    text: "Effortlessly integrate your chatbot with shareable links, inline embeds, or popup windows, granting smooth access to employees and customers alike.",
  },
  {
    id: "Step 4",
    img: "/",
    alt: "PHOTO/VIDEO 4",
    icon: `${bg}`,
    title: "Test EVA-I by yourself",
    text: "Interact with your chatbot by simply asking questions on the chat screen to instantly receive accurate and relevant answers.",
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
