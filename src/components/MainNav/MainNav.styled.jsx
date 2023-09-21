import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyles = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.16;

  transition: color var(--anim);

  &.active {
    color: var(--primary-pink);
  }

  &:hover,
  &:focus {
    color: var(--primary-pink);
  }
`;

export const NavList = styled.ul`
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

export const NavItem = styled.li`
  padding: 4px 8px;

  &:not(:last-child) {
    margin-right: 32px;
  }

`;
