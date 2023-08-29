import styled from "styled-components";

export const AdvantagesStyles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const AdvantagesTop = styled.div`
  display: flex;
  justify-content: center;
`;

export const AdvantagesSpan = styled.span`
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 40px;
  font-weight: 600;
  line-height: 2;
  margin-right: 8px;
`;

export const AdvantagesContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 80px;
`;

export const AdvantagesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  border-radius: 50%;
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
  font-size: 24px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.16;
  margin-bottom: 16px;
  color: var(--white);
`;

export const CardText = styled.p`
  font-size: 16px;
  font-weight: var(--regular-font-weight);
  line-height: 1.5;
  color: var(--white);
`;
