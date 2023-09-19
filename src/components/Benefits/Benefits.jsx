import { MainBtn } from "../MainBtn/MainBtn";
import {
  BenefitCard,
  BenefitsStyles,
  CardImg1,
  CardImg2,
  CardImg3,
  CardImgContainer,
  CardInfo,
  CardInfoText,
  CardInfoTitle,
} from "./Benefits.styled";

export const Benefits = () => {
  return (
    <section>
      <div className="container">
        <h2 className="hidden-title">Benefits</h2>
        <BenefitsStyles>
          <BenefitCard>
          <CardImgContainer>
              <CardImg1 />
          </CardImgContainer>

            <CardInfo>
              <CardInfoTitle>
                Boost Sales Through Chat Conversations
              </CardInfoTitle>

              <CardInfoText>
                Transform chats into purchases with tailored product suggestions, real-time stock updates, and timely promotions. Showcase your offerings non-stop, across all platforms, and at any volume.
              </CardInfoText>

              <MainBtn title={"Try for free"} styles={"outline"} />
            </CardInfo>
          </BenefitCard>

          <BenefitCard>
            <CardImgContainer style={{order: 1}}>
            <CardImg2 />
            </CardImgContainer>

            <CardInfo style={{order: 2}}>
              <CardInfoTitle>
                Elevate Your Team with AI Assistance
              </CardInfoTitle>

              <CardInfoText>
                Manage customer messages, enable order tracking, and automate FAQs. Let your team concentrate on important inquiries as EVA-I takes care of the rest.
              </CardInfoText>

              <MainBtn title={"Try for free"} styles={"outline"} />
            </CardInfo>
          </BenefitCard>

          <BenefitCard>
          <CardImgContainer>
              <CardImg3 />
            </CardImgContainer>

            <CardInfo>
              <CardInfoTitle>
                Master Your Chatbot's Performance
              </CardInfoTitle>

              <CardInfoText>
                You wield full authority over training, knowledge base, persona, and user experience, crafting a customized chatbot solution that's uniquely yours.
              </CardInfoText>

              <MainBtn title={"Try for free"} styles={"outline"} />
            </CardInfo>
          </BenefitCard>
        </BenefitsStyles>
      </div>
    </section>
  );
};
