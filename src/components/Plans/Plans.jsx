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
} from "./Plans.styled";
import { FormattedMessage } from "react-intl";

const pracingData = [
  {
    id: 1,
    plan: <FormattedMessage id="plan_starter" />,
    price: 19,
    span: '',
    benefits: [
      <FormattedMessage id="plans_starter_1" />,
      <FormattedMessage id="plans_starter_2" />,
      <FormattedMessage id="plans_starter_3" />,
      <FormattedMessage id="plans_starter_4" />,
      <FormattedMessage id="plans_starter_5" />,
    ],
  },
  {
    id: 2,
    plan: <FormattedMessage id="plan_pro" />,
    price: 79,
    span: <FormattedMessage id="plan_pro_span" />,
    benefits: [
      <FormattedMessage id="plans_pro_0" />,
      <FormattedMessage id="plans_pro_1" />,
      <FormattedMessage id="plans_pro_2" />,
      <FormattedMessage id="plans_pro_3" />,
      <FormattedMessage id="plans_pro_4" />,
      <FormattedMessage id="plans_pro_5" />,
    ],
  },
  {
    id: 3,
    plan: <FormattedMessage id="plan_premium" />,
    price: 199,
    span: <FormattedMessage id="plan_premium_span" />,
    benefits: [
      <FormattedMessage id="plans_premium_0" />,
      <FormattedMessage id="plans_premium_1" />,
      <FormattedMessage id="plans_premium_2" />,
      <FormattedMessage id="plans_premium_3" />,
      <FormattedMessage id="plans_premium_4" />,
      <FormattedMessage id="plans_premium_5" />,
    ],
  },
];

export const Plans = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={<FormattedMessage id="pricing_main_title" />} />
        <PricingInfo>
          <FormattedMessage id="pricing_main_subtitle" />
        </PricingInfo>

        <PlansList>
          {pracingData.map((plan) => {
            return (
              <PlanItem key={plan.id} tabIndex={0}>
                <PlanInfo>
                  <PlanName>{plan.plan}</PlanName>

                  <PlanPrice>
                    ${plan.price}/<FormattedMessage id="pricing_month" />
                  </PlanPrice>
                </PlanInfo>

                <PlanBenefitsList>
                  <PlanBenefits benefits={plan} />
                </PlanBenefitsList>

                <BtnBox>
                  <MainBtn
                    title={<FormattedMessage id="pricing_get_button" />}
                    styles={"pay"}
                  />
                </BtnBox>
              </PlanItem>
            );
          })}
        </PlansList>
      </div>
    </section>
  );
};
