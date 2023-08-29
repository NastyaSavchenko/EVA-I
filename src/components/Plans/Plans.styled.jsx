import styled from "styled-components";

export const Container = styled.div`
  margin: 0px 80px;
`;

export const PricingInfo = styled.p`
  text-align: center;
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 80px;
  margin-top: 28px;
`;

export const PlansList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const PlanItem = styled.li`
  padding: 32px;
  width: 406px;

  border: 1px solid transparent;
  border-radius: 12px;
  border-image: var(--primary-gradient);
  border-image-slice: 1; 
`;

export const PlanInfo = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid transparent;
  border-image: var(--primary-gradient);
  border-image-slice: 1;
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

  background: var(
    --primary-gradient,
    linear-gradient(90deg, #ed3984 0%, #ed3984 1.56%, #7452c8 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PlanBenefitsList = styled.ul`
  margin-bottom: 40px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  
`;
