import styled from "styled-components";

export const AdvantagesStyles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
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
  border: 1px solid var(--light-grey);
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
  font-weight: 600;
  line-height: 1.16;
  margin-bottom: 16px;
`;

export const CardText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;
