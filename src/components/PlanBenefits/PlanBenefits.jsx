import { nanoid } from "nanoid";
import { AiOutlineCheck } from "react-icons/ai";
import { BenefitsItem, Box, PlanSpan } from "./PlanBenefits.styled";
import { useIntl } from "react-intl";

export const PlanBenefits = ({ benefits }) => {
  const intl = useIntl();
  const currentLocale = intl.locale;

  const modifiedBenefits = benefits.benefits.map((benefit, index) => {
    if (index === 0 && benefits.benefits.length >= 6) {
      if (currentLocale === "ukr-UA") {
        return (
          <div>
            {benefit} <PlanSpan>{benefits.span}</PlanSpan>
          </div>
        );
      } else {
        return (
          <div>
            All <PlanSpan>{benefits.span}</PlanSpan> {benefit}
          </div>
        );
      }
    }
    return  benefit;
  });

  return (
    <>
      {modifiedBenefits.map((benefit) => (
        <BenefitsItem key={nanoid()}>
          <Box>
            <AiOutlineCheck style={{ width: "32px", height: "32px" }} />
          </Box>
          {benefit}
        </BenefitsItem>
      ))}
    </>
  );
};
