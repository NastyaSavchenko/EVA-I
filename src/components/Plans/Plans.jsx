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
    id: 1,
    plan: "Starter",
    price: 19,
    benefits: [
      "No-Code builder",
      "Access to templates",
      "Basic analytics",
      "Deploy on Web",
      "Automate up to 30% of your workflow"
    ],
  },
  {
    id: 2,
    plan: "Pro",
    price: 79,
    benefits: [
      "Integrate with your systems & apps",
      "Collaborate with your team members",
      "Multilingual support",
      "Advanced analytics",
      "Automate up to 60% of your workflow"
    ],
  },
  {
    id: 3,
    plan: "Premium",
    price: 199,
    benefits: [
      "Advanced out of the box integrations",
      "User Flow analytics",
      "Intent based pop-ups",
      "Proactive messaging campaigns",
      "Automate up to 80% of your workflow"
    ],
  },
];

export const Plans = () => {
  return (
    <section>
      <Container>
        <SectionTitle title={"Pricing & Plans"} />
        <PricingInfo>
          For personal, team, or client use, we've got the perfect package.
        </PricingInfo>
        <PlansList>
          {pracingData.map((plan) => {
            return (
              <PlanItem key={plan.id} tabIndex={0}>
                <PlanInfo>
                  <PlanName>{plan.plan}</PlanName>
                  <PlanPrice>${plan.price}/mo</PlanPrice>
                </PlanInfo>
                <PlanBenefitsList>
                  <PlanBenefits benefits={plan} />
                </PlanBenefitsList>
                <BtnBox>
                  <MainBtn title={"Get plan"} styles={"pay"} />
                </BtnBox>
              </PlanItem>
            );
          })}
        </PlansList>
      </Container>
    </section>
  );
};
