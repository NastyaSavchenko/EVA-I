import { GoogleBtnStyles, GoogleImg } from "./GoogleBtn.styled";
import Google from "../../assets/images/devicon_google.svg";
// import GoogleDisabled from "../../assets/images/google_dis.svg";

export const GoogleBtn = ({title, styles}) => {

  return (
    <GoogleBtnStyles href="https://aibot-back-end.onrender.com/api/auth/google" $btntype={styles}>
      <GoogleImg src={Google} alt="Google logo letter" />
      {title}
    </GoogleBtnStyles>
  );
};
