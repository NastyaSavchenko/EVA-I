import styled from "styled-components";

export const BenefitsText = styled.h4`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.17;

`;

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;

  color: var(--neutral-grey);

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Box = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`