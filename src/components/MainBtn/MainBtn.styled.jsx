import styled from "styled-components";

export const MainBrtStyles = styled.button`
  border-radius: 8px;
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;

  color: ${(props) =>
    props.$btntype === "outline" ? "var(--main-black)" : "var(--main-white)"};
  background: ${(props) =>
    props.$btntype === "outline" ? "var(--main-white)" : "var(--main-black)"};

  padding: ${(props) => (props.$btntype === "pay" ? "16px 64px" : "16px 32px")};
  border: ${(props) =>
    props.$btntype === "outline" ? "1px solid var(--main-black)" : "none"};
`;
