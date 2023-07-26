import styled from "styled-components";

export const UsageCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 34px;
  row-gap: 64px;
  justify-items: center;
  margin-top: 80px;
`;
export const UsageCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* width: auto; */
  width: 515px;
  height: 352px;
  padding: 10px;
  border: 1px solid grey;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const CardTop = styled.div`
  display: flex;
  gap: 24px;
`;
export const CardIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
  padding: 10px;

  gap: 10px;
  border: 1px solid grey;
  border-radius: 50%;
`;
export const CardTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.66;
`;
export const CardText = styled.p`
  width: 515px;
  font-size: 16px;
  line-height: 1.25;
`;
