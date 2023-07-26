import { MainBrtStyles } from "./MainBtn.styled";

export const MainBtn = ({ title, styles }) => {
  return (
    <MainBrtStyles type="button" $btntype={styles}>
      {title}
    </MainBrtStyles>
  );
};
