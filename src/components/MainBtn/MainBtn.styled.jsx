import styled from "styled-components";

export const MainBrtStyles = styled.button`
  width: 194px;
  height: 56px;
  padding: 16px 32px;
  border-radius: 32px;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  /* transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 -0.1em 1.1em 0.4em var(--primary-purple);
    transform: scale(1.08);
  } */

  color: ${(props) =>
    props.$btntype === "outline" ? "var(--primary-pink)" : "var(--white)"};
  background: ${(props) =>
    props.$btntype === "outline" ? "var(--dark)" : "var(--primary-pink)"};

  padding: ${(props) => (props.$btntype === "pay" ? "16px 64px" : "16px 32px")};
  border: ${(props) =>
    props.$btntype === "outline" ? "1px solid var(--primary-pink)" : "none"};
`;
