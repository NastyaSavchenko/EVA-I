import { AuthBtnStyles } from "./AuthBtn.styled";

export const AuthBtn = ({ title, styles }) => {
  return (
    <AuthBtnStyles type="button" $btntype={styles}>
      {title}
    </AuthBtnStyles>
  );
};
