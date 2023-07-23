import styled from "styled-components";

export const BenefitsText = styled.p`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.7;
`;

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px, 0px;
  font-size: 24px;
  line-height: 1.67;

  &:not(:last-child){
    margin-bottom: 8px;
  }
`;
