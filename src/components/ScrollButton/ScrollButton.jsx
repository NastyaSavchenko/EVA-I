import { Button } from "./ScrollButton.styled.jsx";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollButton = () => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button type="button" onClick={scrollToTop}>
      <IoIosArrowUp style={iconStyles} />
    </Button>
  );
};
