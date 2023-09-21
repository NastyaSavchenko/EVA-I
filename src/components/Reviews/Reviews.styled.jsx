import styled from 'styled-components';

export const ReviewsStyles = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-top: 80px;
  }

  @media (min-width: 1920px) {
    margin-top: 80px;
  }
`;

export const ReviewQuotes = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  background: var(--primary-gradient, linear-gradient(90deg, #ED3984 0%, #ED3984 1.56%, #7452C8 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 0.93;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 0.93;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 0.93;
  }

  @media (min-width: 1920px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 0.93;
  }
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
`;

export const ReviewsText = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 60px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 28px;
    line-height: 60px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 28px;
    line-height: 60px;
    margin-bottom: 40px;
  }

  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 60px;
    margin-bottom: 40px;
  }
`;

export const ReviewsPersonContainer = styled.div`
  display: flex;
  align-items:center;
  gap: 16px;
`
export const PersonImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: white;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1920px) {
    width: 80px;
    height: 80px;
  }
`;

export const PersonName = styled.h4`
  font-size: 20px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.4;
  margin-bottom: 4px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 8px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 8px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 8px;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 8px;
  }
`;

export const PersonPosition = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--white);
`
