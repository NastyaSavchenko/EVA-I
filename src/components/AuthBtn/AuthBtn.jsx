import { AuthBtnStyles } from "./AuthBtn.styled";

export const AuthBtn = ({ title, styles }) => {
  return (

    <AuthBtnStyles type="submit" $btntype={styles}>

      {title}
    </AuthBtnStyles>
  );
};
