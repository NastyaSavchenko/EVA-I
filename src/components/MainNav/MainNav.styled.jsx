import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyles = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.16;
  color: var(--text-grey);

  &.active {
    color: var(--main-black);
  }

  &:hover,
  &:focus {
    color: var(--main-black);
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  padding: 4px 8px;

  &:not(:last-child) {
    margin-right: 32px;
  }

`;
