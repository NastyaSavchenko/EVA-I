import styled from "styled-components";

export const BotBtnStyles = styled.button`
  position: sticky;
  bottom: 40px;
  left: calc(100% - 160px);

  display: flex;
  justify-content: center;
  width: 64px;
  height: 64px;
  gap: 8px;

  border-radius: 50%;
  border: none;
  z-index: 1;

  background: var(--light-gradient);

  &:hover,
  :focus {
    width: 68px;
    height: 68px;
  }
`;

export const BotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    display: flex;
    align-content: center;
    width: 52px;
    height: 52px;
    padding: 3px 2px;
  }

  ${BotBtnStyles}:hover & > img, ${BotBtnStyles}:focus & > img {
    width: 56px;
    height: 56px;
  }
`;
