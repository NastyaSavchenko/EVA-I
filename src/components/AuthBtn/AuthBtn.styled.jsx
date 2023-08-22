import styled from "styled-components";

export const AuthBtnStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px 32px;
  border-radius: 32px;
  text-align: center;
  font-size: 24px;
  font-weight: var(--semibold-font-weight);
  line-height: 1;

  color: ${(props) =>
    props.$btntype === "outline" ? "var(--primary-pink)" : "var(--white)"};

  background: ${(props) =>
    props.$btntype === "outline" ? "var(--dark)" : "var(--primary-pink)"};

  border: ${(props) =>
    props.$btntype === "outline" ? "1px solid var(--primary-pink)" : "none"};
`;