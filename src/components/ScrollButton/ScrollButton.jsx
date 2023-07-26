import { Button } from "./ScrollButton.styled.jsx";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button type="button">
      <IoIosArrowUp
        onClick={scrollToTop}
      />
    </Button>
  );
};
