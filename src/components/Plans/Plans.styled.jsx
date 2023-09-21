import styled from "styled-components";

export const PricingInfo = styled.p`
  text-align: center;
  font-size: 28px;
  line-height: 1.42;
  margin-bottom: 40px;
  margin-top: 32px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 80px;
  }
`;

export const PlansList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    flex-direction: row;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
  }
`;

export const PlanItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border: 1px solid transparent;
  border-radius: 12px;
  border-image: var(--primary-gradient);
  border-image-slice: 1;

  @media (min-width: 1024px) {
  width: 100%;
  max-width: 406px;
  }
`;

export const PlanInfo = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  width: 100%;

  border-bottom: 1px solid transparent;
  border-image: var(--primary-gradient);
  border-image-slice: 1;
`;

export const PlanName = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;

  margin-bottom: 8px;

  @media (min-width: 768px) {
    line-height: 1.25;
  }
`;

export const PlanPrice = styled.span`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.25;

  background: var(--primary-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) and (max-width: 1024px) {
    line-height: 2;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    line-height: 2;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    line-height: 2;
  }

  @media (min-width: 1920px) {
    line-height: 2;
  }
`;

export const PlanBenefitsList = styled.ul`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BtnBox = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`;
