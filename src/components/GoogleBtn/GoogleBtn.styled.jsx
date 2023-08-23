import styled from "styled-components";

export const GoogleBtnStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px 32px;
  border-radius: 32px;
  text-align: center;
  font-size: 24px;
  line-height: 1;
  border: 1px solid var(--primary-pink) ;
  background-color: transparent;
  color: var(--primary-pink);
  transition: all var(--anim);

  &:hover {
    border-color: var(--primary-purple);
    color: var(--primary-purple);
  }

  &:focus {
    border: 2px solid var(--white);
    color: var(--primary-purple);
  }

  &:active {
    border-color: var(--primary-purple);
    color: var(--primary-purple);
  }

  border-color: ${(props) =>
    props.$btntype === "disabled" ? "rgba(237, 57, 132, 0.20)" : "var(--primary-pink)"};

  color: ${(props) =>
    props.$btntype === "disabled" ? "rgba(237, 57, 132, 0.20)" : "var(--primary-pink)"};
`;

export const GoogleImg = styled.img`
  width: 22px;
  height: 22px;
`

