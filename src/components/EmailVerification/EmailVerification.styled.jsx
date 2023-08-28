import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const Title = styled.h2`
  text-align: center;

  font-size: 40px;
  font-weight: 600;
  line-height: 2;
`;

export const EmailBox = styled.div`
  font-size: 20px;
  line-height: 1.2;

  > span {
    font-weight: 700;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 4px;

  > p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Link = styled(NavLink)`
  color: var(--primary-pink);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  transition: color var(--anim);

  &:hover,
  &:focus {
    color: var(--primary-purple);
  }
`;
