import styled from "styled-components";

export const LangOPTSwitcher = styled.div`
  display: flex;
  align-items: center;

@media (min-width: 768px) and (max-width: 1024px) {
  display: none;
}

@media (min-width: 1024px) and (max-width: 1440px) {
  display: none;
}

@media (min-width: 1440px) and (max-width: 1920px) {
  display: none;
}

@media (min-width: 1920px) {
  display: none;
}
`;

export const LangOptIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

export const LangDivider = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 32px;
  font-size: 24px;
`;

export const Select = styled.select`
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-color: var(--dark);
  border: none;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
  color: var(--white);
  border-radius: 8px;


  &:focus {
    outline: none;
    /* box-shadow: 0 0 5px rgba(255, 0, 183, 0.5); */
  }
`;

export const Option = styled.option`
  background-color:var(--dark);
  color: var(--white);
  border: none;
  padding: 8px;
  outline: none;

  &:hover {
  border-color: #51ff00; 
}
`;