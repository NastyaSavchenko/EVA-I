import styled, { css } from "styled-components";

const tabletPortrait = css`
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0;
    font-size: 48px;
    line-height: 1.16;
  }
`;

const tablet = css`
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 48px;
    line-height: 1.16;
  }
`;

const DesctopL = css`
  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 64px;
    line-height: 1.25;
  }
`;

const DesctopXL = css`
  @media (min-width: 1920px) {
    font-size: 64px;
    line-height: 1.25;
  }
`;

export const HeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px 140px;

  ${tabletPortrait}
`;

export const HeroTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.33;
  color: var(--white);

  ${tabletPortrait}
  ${tablet}
  ${DesctopL}
  ${DesctopXL}
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const HeroSubTitle = styled.span`
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Span = styled.span`
   display: block;
`
