import { GoogleBtnStyles, GoogleImg } from "./GoogleBtn.styled";
import Google from "../../assets/images/devicon_google.svg";
// import GoogleDisabled from "../../assets/images/google_dis.svg";
import { googleAuth } from "../../services/googleAuth";
import { useDispatch } from "react-redux";

export const GoogleBtn = ({title, styles}) => {
  const dispatch = useDispatch()

  const onGoogleBtnClick = () => {
   dispatch(googleAuth())
  };

  return (
    <GoogleBtnStyles type="button" onClick={onGoogleBtnClick} $btntype={styles}>
      <GoogleImg src={Google} alt="Google logo letter" />
      {title}
    </GoogleBtnStyles>
  );
};
