import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthNavStyle = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: none;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    display: flex;
  }

  @media (min-width: 1920px) {
    display: flex;
  }
`;

export const LoginLink = styled(NavLink)`
  padding: 4px 8px;
  /* margin-right: 32px; */

  font-size: 24px;
  font-weight: 600;
  line-height: 1.16;

  border: none;
  background-color: inherit;

  transition: color var(--anim);

  &:hover, &:focus {
    color: var(--primary-pink);
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-right: 32px;
  }

  @media (min-width: 1920px) {
    margin-right: 32px;
  }
`;