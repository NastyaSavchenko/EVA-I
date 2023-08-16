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
    props.$btntype === "outline" ? "var(--main-black)" : "var(--main-white)"};

  background: ${(props) =>
    props.$btntype === "outline" ? "var(--main-white)" : "var(--main-black)"};

  border: ${(props) =>
    props.$btntype === "outline" ? "1px solid #A6A6A6" : "none"};
`;