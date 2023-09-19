import styled, { keyframes } from "styled-components";

export const MainBtnBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 40px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-top: 40px;
  }

  @media (min-width: 1920px) {
    margin-top: 40px;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GradientBackground = styled.div`
  background: var(--special-background);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
`;
