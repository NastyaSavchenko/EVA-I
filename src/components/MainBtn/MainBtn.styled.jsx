import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainBrtStyles = styled.button`
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
    transform: translateY(2px);
    box-shadow: 0px 0px 15px 2px var(--primary-purple);
    color: ${(props) =>
      props.$btntype === "outline" ? "var(--primary-purple)" : "var(--white)"};

    border: ${(props) =>
      props.$btntype === "outline"
        ? "1px solid var(--primary-purple)"
        : "none"};

    background: ${(props) =>
      props.$btntype === "outline" ? "var(--dark)" : "var(--primary-purple)"};
  }
`;

export const MainBrtlink = styled(NavLink)`
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
    transform: translateY(2px);
    box-shadow: 0px 0px 15px 2px var(--primary-purple);
    color: ${(props) =>
      props.$btntype === "outline" ? "var(--primary-purple)" : "var(--white)"};

    border: ${(props) =>
      props.$btntype === "outline"
        ? "1px solid var(--primary-purple)"
        : "none"};

    background: ${(props) =>
      props.$btntype === "outline" ? "var(--dark)" : "var(--primary-purple)"};
  }
`;
