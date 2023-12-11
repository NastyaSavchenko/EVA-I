import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BotBtnStyles = styled(NavLink)`
  /* position: sticky; */
  position: fixed;
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

  transition: all 0.2s ease-in;

  @media (max-width: 768px) {
    left: calc(100% - 100px);
  }

  &:hover,
  :focus {
    width: 68px;
    height: 68px;
    /* padding-top: 1px; */
  }
`;

export const BotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 2px; */
  width: 64px;
  height: 64px;

  > img {
    display: flex;
    align-content: center;
    width: 52px;
    height: 52px;
    /* padding-bottom: 1px;
    padding-right: 1px; */
    transition: all 0.2s ease-in;
  }

  ${BotBtnStyles}:hover & > img, ${BotBtnStyles}:focus & > img {
    width: 56px;
    height: 56px;
  }
`;
