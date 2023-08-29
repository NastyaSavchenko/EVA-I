import styled from "styled-components";

export const UsageCards = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 100px;

  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
  }
`;

export const UsageCard = styled.li`
  max-width: 515px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 1200px) {
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
  width: 80px;
  height: 80px;
  padding: 10px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const CardTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.66;
`;

export const CardText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
