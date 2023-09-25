import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const slideIn = keyframes`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
  }
  to {
    right: -100%;
  }
`;

export const MenuStyles = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: var(--dark);
  box-sizing: border-box;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} var(--anim);
  z-index: 2;
  padding: 32px 20px 16px;

  @media (min-width: 768px) {
    padding: 32px 80px 16px;
  }
`;

export const MenuTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  filter: invert(1);
`;

export const CloseIcon = styled.img`
  width: 32px;
  height: 32px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 56px;
    height: 56px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 56px;
    height: 56px;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 32px 40px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-bottom: 24px;

  &:nth-of-type(3) {
    margin-bottom: 40px;
  }
`;

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
