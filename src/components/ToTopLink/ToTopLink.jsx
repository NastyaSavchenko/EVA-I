import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export const ToTopLink = ({ to, children }) => {
  const handleClick = () => {
    scrollToTop();
  };

  useEffect(() => {
    const linkElement = document.querySelector(`[to="${to}"]`);
    if (linkElement) {
      linkElement.addEventListener("click", handleClick);
    }

    return () => {
      if (linkElement) {
        linkElement.removeEventListener("click", handleClick);
      }
    };
  }, [to]);

  return (
    <NavLink to={to} onClick={handleClick}>
      {children}
    </NavLink>
  );
};
