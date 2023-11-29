import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #0e0d20;
  display: flex;
  margin: auto;
  z-index: 2;
  overflow: none;
`;

export const ModalImg = styled.img`
  display: flex;
  margin: auto;
  width: 500px;
  height: 500px;
`;

export const ModalContainer = styled.div`
position: fixed;
/* position: absolute; */
top: 0;
left: 0;
width: 100%;
height: 100%;
/* display: flex; */
z-index: 3;
justify-content: center;
align-items: center;
transition: transform 0.3s ease-in-out;
opacity: ${({ isOpacity }) => (isOpacity ? '0' : '1')};
/* display: ${({ showModal }) => (showModal ? 'flex' : 'none')}; */
visibility: ${({ showModal }) => (showModal ? 'visible' : 'hidden')};
  transition: opacity 2s ease-in-out 3s, visibility 0s linear 5s;


  /* ${({ showModal }) => showModal && `
    transform: translateX(0);
  `}

  ${({ showModal }) => !showModal && `
    transform: translateX(100%);
  `} */
`;