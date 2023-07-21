import React, { useState } from 'react';
import { Button } from './ScrollButton.styled.jsx'
import { IoIosArrowUp } from "react-icons/io"

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button style={{ display: visible ? 'inline' : 'none' }}>
      <IoIosArrowUp onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }} />
    </Button>
  );
}
