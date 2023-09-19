import styled from "styled-components";

export const BurgerMenuStyle = styled.div`
  display: flex;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: flex;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    display: none;
  }

  @media (min-width: 1920px) {
    display: none;
  }
`;

export const BurgerMenuButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: flex;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    display: none;
  }

  @media (min-width: 1920px) {
    display: none;
  }
`;

export const BurgerIcon = styled.img`
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