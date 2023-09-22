import { MainBrtStyles, MainBrtlink } from "./MainBtn.styled";

export const MainBtn = ({ title, styles }) => {
  return title === "Try for free" ? (
    <MainBrtlink  to='/registration' $btntype={styles}>
      {title}
    </MainBrtlink>
  ) : (
    <MainBrtStyles type="button" $btntype={styles}>
      {title}
    </MainBrtStyles>
  );
};
