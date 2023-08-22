import styled from "styled-components";

export const HeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px 140px;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  font-size: 64px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.25;
  color: var(--white);
`;

export const HeroSubTitle = styled.p`
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
