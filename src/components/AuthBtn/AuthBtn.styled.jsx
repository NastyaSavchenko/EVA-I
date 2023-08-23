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
  transition: all var(--anim);
  background-color: var(--primary-pink);
  border: 1px solid var(--primary-pink);

  &:hover {
    background-color: var(--primary-purple);
    border-color: var(--primary-purple);
  }

  &:focus {
    background-color: var(--primary-purple);
    border-color: var(--white);
  }

  &:active {
    background-color: var(--primary-purple);
    border: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }

  color: ${(props) =>
    props.$btntype === "disabled" ? "rgba(255, 255, 255, 0.20);" : "var(--white)"};

  background: ${(props) =>
    props.$btntype === "disabled" ? "rgba(237, 57, 132, 0.20)" : "var(--primary-pink)"};

  border: ${(props) =>
    props.$btntype === "disabled" ? "none" : "1px solid var(--primary-pink)"};
`;