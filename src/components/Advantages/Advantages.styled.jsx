import styled, { css } from "styled-components";

export const AdvantagesStyles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const AdvantagesTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AdvantagesSpan = styled.span`
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  margin-right: 8px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 36px;
    line-height: 1.55;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 36px;
    line-height: 1.55;
  }
  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }
`;

export const AdvantagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: row;
    margin-top: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    flex-direction: row;
    margin-top: 80px;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
    margin-top: 80px;
  }
`;

export const AdvantagesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const CardImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.4;
  margin-bottom: 16px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.16;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 24px;
    line-height: 1.16;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 24px;
    line-height: 1.16;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.16;
  }
`;

export const CardText = styled.p`
  font-size: 16px;
  font-weight: var(--regular-font-weight);
  line-height: 1.5;
  color: var(--white);
`;
