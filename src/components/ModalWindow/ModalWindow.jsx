import { useEffect, useRef, useState } from "react";
import { Modal, ModalContainer, ModalImg } from "./ModalWindow.styled";
import logoPath from "../../assets/icons/logo_infinity.svg";

export const ModalWindow = ({showModal, isOpacity}) => {
  // useEffect(() => {
  //   const handleTransitionEnd = () => {
  //     // Set display to 'none' after the fade-out animation is complete
  //     if (!showModal) {
  //       setShowModal(false);
  //     }
  //   };

  //   // Add event listener for the 'transitionend' event
  //   document.addEventListener('transitionend', handleTransitionEnd);

  //   // Clean up the event listener
  //   return () => {
  //     document.removeEventListener('transitionend', handleTransitionEnd);
  //   };
  // }, [showModal]);

  
  // if(localStorage.getItem('modal')) {
  //   console.log('You were already here');
  // } else {
  //   console.log('new');
  //   localStorage.setItem('modal', "true");
  // }

  console.log('hhhh', localStorage.setItem('modal', "true"));
  return (
    <ModalContainer showModal={showModal} isOpacity={isOpacity} id="modal">
    <Modal>
      <ModalImg src={logoPath} alt="EVA-I logo" />
    </Modal>
    </ModalContainer>
  )
};
