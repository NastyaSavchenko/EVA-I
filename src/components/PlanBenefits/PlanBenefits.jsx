import { nanoid } from "nanoid";
import { AiOutlineCheck } from "react-icons/ai";
import { BenefitsItem, BenefitsText, Box } from "./PlanBenefits.styled";
import { FormattedMessage } from "react-intl";

export const PlanBenefits = ({ benefits }) => {
  return (
    <>
      {benefits.plan === "plan_pro" && (
        <BenefitsText>
          <FormattedMessage id="plans_pro_plus"/>
        </BenefitsText>
      )}
      {benefits.plan === "plan_premium" && (
        <BenefitsText>
          <FormattedMessage id="plans_premium_plus"/>
        </BenefitsText>
      )}
      {benefits.benefits.map((benefit) => {
        return (
          <BenefitsItem key={nanoid()}>
            <Box>
            <AiOutlineCheck
              style={{ width: "32px", height: "32px" }}
            />
            </Box>

            <FormattedMessage id={benefit}/>
          </BenefitsItem>
        );
      })}
    </>
  );
};
