import styled, {css} from "styled-components";

const tabletPortrait = css`
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 36px;
    line-height: 1.55;
  }
`;

const tablet = css`
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 36px;
    line-height: 1.55;
  }
`;

const DesctopL = css`
  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }
`;

const DesctopXL = css`
  @media (min-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }
`;

export const TitleSlyles = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  ${tabletPortrait}
  ${tablet}
  ${DesctopL}
  ${DesctopXL}

  background-image: ${(props) =>
    props.$type === "Pricing & Plans" && "var(--primary-gradient, linear-gradient(90deg, #ED3984 0%, #ED3984 1.56%, #7452C8 100%))"};
  -webkit-background-clip: ${(props) =>
    props.$type === "Pricing & Plans" && "text"};
  background-clip: ${(props) => props.$type === "Pricing & Plans" && "text"};
  color: ${(props) => props.$type === "Pricing & Plans" && "transparent"};
`;
