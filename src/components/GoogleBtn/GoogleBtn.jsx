import { GoogleBtnStyles, GoogleImg } from "./GoogleBtn.styled";
import Google from "../../assets/images/devicon_google.svg";
// import GoogleDisabled from "../../assets/images/google_dis.svg";
import { googleAuth } from "../../services/googleAuth";

export const GoogleBtn = ({title, styles}) => {
  const onGoogleBtnClick = async () => {
   
    try {
      const response = await googleAuth();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleBtnStyles type="button" onClick={onGoogleBtnClick} $btntype={styles}>
      <GoogleImg src={Google} alt="Google logo letter" />
      {title}
    </GoogleBtnStyles>
  );
};
