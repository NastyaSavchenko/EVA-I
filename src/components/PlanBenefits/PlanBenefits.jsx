import { nanoid } from "nanoid";
import { AiOutlineCheck } from "react-icons/ai";
import { BenefitsItem, BenefitsText } from "./PlanBenefits.styled";

export const PlanBenefits = ({ benefits }) => {
  return (
    <>
      {benefits.plan === "Pro" && (
        <BenefitsText>Everything in Starter, plus</BenefitsText>
      )}
      {benefits.plan === "Premium" && (
        <BenefitsText>Everything in Pro, plus</BenefitsText>
      )}
      {benefits.benefits.map((benefit) => {
        return (
          <BenefitsItem key={nanoid()}>
            <AiOutlineCheck
              style={{ width: "32px", height: "32px", marginRight: "16px" }}
            />
            {benefit}
          </BenefitsItem>
        );
      })}
    </>
  );
};
