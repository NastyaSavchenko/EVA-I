import styled, { keyframes } from "styled-components";

const rockingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
`;

export const MainBrtStyles = styled.button`
  
  width: 194px;
  height: 56px;
  border-radius: 32px;
  font-family: inherit;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;

  color: ${(props) =>
    props.$btntype === "outline" ? "var(--primary-pink)" : "var(--white)"};
  background: ${(props) =>
    props.$btntype === "outline" ? "var(--dark)" : "var(--primary-pink)"};
  padding: ${(props) => (props.$btntype === "pay" ? "16px 64px" : "16px 32px")};
  border: ${(props) =>
    props.$btntype === "outline" ? "1px solid var(--primary-pink)" : "none"};

transition: all var(--anim);

  &:hover,
  :focus {
    color: ${(props) =>
      props.$btntype === "outline" ? "var(--primary-purple)" : "var(--white)"};
     
    border: ${(props) =>
      props.$btntype === "outline"
        ? "1px solid var(--primary-purple)"
        : "none"};

    animation: ${rockingAnimation} 1s infinite ease-in-out;
    transform-origin: center center;
    transform-style: preserve-3d;
    box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.2);
  }
`;
