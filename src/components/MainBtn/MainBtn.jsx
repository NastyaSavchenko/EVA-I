import { MainBrtStyles, MainBrtlink } from "./MainBtn.styled";

export const MainBtn = ({ title, styles }) => {
  if (title === "Get plan" || "Купити") {
    return (
      <MainBrtlink to="/wait-list" $btntype={styles}>
        {title}
      </MainBrtlink>
    );
  }
  return title === "Try for free" || "Спробувати" ? (
    <MainBrtlink to="/registration" $btntype={styles}>
      {title}
    </MainBrtlink>
  ) : (
    <MainBrtStyles type="button" $btntype={styles}>
      {title}
    </MainBrtStyles>
  );
};
