import styled from "styled-components";

export const QuestionsList = styled.ul`
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

export const QuestionsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;
