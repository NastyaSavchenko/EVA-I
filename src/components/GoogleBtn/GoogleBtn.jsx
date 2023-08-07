import { GoogleBtnStyles } from "./GoogleBtn.styled";
import Google from "../../assets/images/devicon_google.svg";

export const GoogleBtn = ({ title, styles }) => {
  return (
    <GoogleBtnStyles type="button" $btntype={styles}>
      <img src={Google} alt="Google logo letter" />
      {title}
    </GoogleBtnStyles>
  );
};
