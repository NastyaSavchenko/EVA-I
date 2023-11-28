import styled from "styled-components";

export const BenefitsText = styled.h4`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  color: var(--neutral-grey);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const Box = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

export const PlanSpan = styled.span`
  font-weight: 900;
  color: var(--main-white);
`;
