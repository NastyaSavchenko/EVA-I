import { PlanBenefits } from "../PlanBenefits/PlanBenefits";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { MainBtn } from "../MainBtn/MainBtn";
import {
  PlansList,
  PlanItem,
  PlanInfo,
  PlanName,
  PlanPrice,
  PlanBenefitsList,
  BtnBox,
  PricingInfo,
  Container,
} from "./Plans.styled";

const pracingData = [
  {
    plan: "Starter",
    price: 19,
    benefits: ["value", "value", "value", "value", "value", "value"],
  },
  {
    plan: "Pro",
    price: 79,
    benefits: ["value", "value", "value", "value", "value"],
  },
  {
    plan: "Premium",
    price: 199,
    benefits: ["value", "value", "value", "value", "value"],
  },
];

export const Plans = () => {
  return (
    <section>
      <Container>
        <SectionTitle title={"Pricing & Plans"} />
        <PricingInfo>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
        </PricingInfo>
        <PlansList>
          {pracingData.map((plan) => {
            return (
              <PlanItem key={plan.plan}>
                <PlanInfo>
                  <PlanName>{plan.plan}</PlanName>
                  <PlanPrice>${plan.price}/mo</PlanPrice>
                </PlanInfo>
                <PlanBenefitsList>
                  <PlanBenefits benefits={plan} />
                </PlanBenefitsList>
                <BtnBox>
                  <MainBtn title={"button"} styles={"pay"} />
                </BtnBox>
              </PlanItem>
            );
          })}
        </PlansList>
      </Container>
    </section>
  );
};
