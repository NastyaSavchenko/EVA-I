import styled from "styled-components";

export const QuestionsList = styled.ul`
  margin-top: 80px;
`;

export const QuestionsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;
