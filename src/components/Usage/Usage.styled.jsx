import styled from "styled-components";

export const UsageCards = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 80px;
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 80px;
    margin-bottom: 60px;
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-top: 80px;
    margin-bottom: 60px;
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1920px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 80px;
    margin-bottom: 60px;
    align-items: flex-start;
  }
`;

export const UsageCard = styled.li`
  max-width: 515px;
  width: 100%;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    flex-basis: calc((100% - 2 * 32px) / 2);
  }
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 352px;
  padding: 10px;
  margin-bottom: 24px;

  border-radius: 12px;
  background-color: var(--light-grey);
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTop = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

export const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  padding: 10px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

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

export const CardTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.66;
  }
`;

export const CardText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
