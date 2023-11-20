import styled from "styled-components";

export const LangSwitcher = styled.div`
 display: none;

@media (min-width: 768px) and (max-width: 1024px) {
  display: none;
}

@media (min-width: 1024px) and (max-width: 1440px) {
  display: flex;
  align-items: center;
}

@media (min-width: 1440px) and (max-width: 1920px) {
  display: flex;
  align-items: center;
}

@media (min-width: 1920px) {
  display: flex;
  align-items: center;
}
`;

export const LangIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const LangDivider = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 32px;
  font-size: 24px;
`;
