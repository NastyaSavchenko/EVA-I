import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LoginLink = styled(NavLink)`
  padding: 4px 8px;
  margin-right: 32px;

  font-size: 24px;
  font-weight: 600;
  line-height: 1.16;

  border: none;
  background-color: inherit;

  transition: color var(--anim);

  &:hover, &:focus {
    color: var(--primary-pink);
  }
`;