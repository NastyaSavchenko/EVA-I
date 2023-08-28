import styled from 'styled-components';

export const ReviewsStyles = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const ReviewQuotes = styled.span`
  font-size: 64px;
  font-weight: 400;
  line-height: 0.93;
  background: var(--primary-gradient, linear-gradient(90deg, #ED3984 0%, #ED3984 1.56%, #7452C8 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const ReviewsInfoContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1062px;
`;

export const ReviewsText = styled.p`
  font-size: 28px;
  line-height: 60px; 
  margin-bottom: 40px;
  color: var(--white);
`;

export const ReviewsPersonContainer = styled.div`
  display: flex;
  align-items:center;
  gap: 16px;
`
export const PersonImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
`;

export const PersonName = styled.h4`
  font-size: 24px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.16;
  margin-bottom: 8px;
  color: var(--white);
`;

export const PersonPosition = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--white);
`
export const ReviewsImgContainer = styled.div`
  width: 404px;
  height: 324px;
  padding: 10px;
  border: 1px solid var(--light-grey);
`;
