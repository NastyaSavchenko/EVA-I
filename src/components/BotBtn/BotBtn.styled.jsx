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
`;

export const BotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BotImg = styled.img`
  display: flex;
  align-content: center;
  width: 52px;
  height: 52px;
  padding: 3px 2px;
`;
