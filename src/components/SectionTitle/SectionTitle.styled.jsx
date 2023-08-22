import styled from "styled-components";

export const TitleSlyles = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 2;

  background-image: ${(props) =>
    props.$type === "Pricing & Plans" && "var(--primary-gradient, linear-gradient(90deg, #ED3984 0%, #ED3984 1.56%, #7452C8 100%))"};
  -webkit-background-clip: ${(props) =>
    props.$type === "Pricing & Plans" && "text"};
  background-clip: ${(props) => props.$type === "Pricing & Plans" && "text"};
  color: ${(props) => props.$type === "Pricing & Plans" && "transparent"};
`;
