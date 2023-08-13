import { GoogleBtnStyles, GoogleImg } from "./GoogleBtn.styled";
import Google from "../../assets/images/devicon_google.svg";

export const GoogleBtn = () => {
  return (
    <GoogleBtnStyles type="button">
      <GoogleImg src={Google} alt="Google logo letter" />
      Continue with Google
    </GoogleBtnStyles>
  );
};
