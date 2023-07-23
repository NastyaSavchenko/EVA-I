import styled from "styled-components";

export const PlansList = styled.ul`
  display: flex;
  gap: 32px;
`;

export const PlanItem = styled.li`
  padding: 32px;
  border-radius: 8px;
  border: 1px solid #a6a6a6;
`;

export const PlanInfo = styled.div`
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 24px;
  margin-bottom: 24px;
`;

export const PlanName = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.7;

  margin-bottom: 8px;
`;

export const PlanPrice = styled.span`
font-size: 40px;
font-weight: 600;
line-height: 1.5;
`
export const PlanBenefitsList = styled.ul`
  margin-bottom: 40px;
`