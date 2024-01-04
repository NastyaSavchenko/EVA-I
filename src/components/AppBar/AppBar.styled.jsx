import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 6px;
  z-index: 2;
  background-color: var(--dark);

  @media (min-width: 768px) {
    padding: 32px 80px 16px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
  }
  
  @media (min-width: 1024px) and (max-width: 1440px) {
    display: flex;
    align-items: center;
  }
  
  @media (min-width: 1440px) and (max-width: 1920px) {
    display: none;
  }
  
  @media (min-width: 1920px) {
    display: none;
  }
`;
