import styled from 'styled-components';

export const BenefitsStyles = styled.ul`
display: flex;
flex-direction: column;
gap: 120px;
`;

export const BenefitCard = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const CardInfo = styled.div`
  width: 406px;
`;

export const CardInfoTitle = styled.h3`
  font-size: 32px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.18;
  margin-bottom: 20px;
  color: var(--white);
`;

export const CardInfoText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 60px;
  color: var(--white);
`;

export const CardImgContainer = styled.div`
  border: 1px solid white;
  display: flex;
  width: 515px;
  height: 324px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
