import styled, { keyframes } from "styled-components";

const rotateAroundSvg = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const circleBaseStyles = `
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(90deg, #ed3984 0%, #ed3984 1.56%, #7452c8 100%);
`;

export const Box = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

export const Сircle1 = styled.div`
  ${circleBaseStyles}
  top: calc(50% - 100px); /* Adjust the position */
  left: calc(50% - 100px); /* Adjust the position */
  animation: ${rotateAroundSvg} 5s linear infinite;
`;

export const Сircle2 = styled.div`
  ${circleBaseStyles}
  top: calc(50% + 100px); /* Adjust the position */
  left: calc(50% - 160px); /* Adjust the position */
  animation: ${rotateAroundSvg} 5s linear infinite;
`;

export const Сircle3 = styled.div`
  ${circleBaseStyles}
  top: calc(50% + 100px); /* Adjust the position */
  left: calc(50% + 160px); /* Adjust the position */
  animation: ${rotateAroundSvg} 5s linear infinite;
`;

export const SvgWrapp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 1s ease-in-out;
`;
