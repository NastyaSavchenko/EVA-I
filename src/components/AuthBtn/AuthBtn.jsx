import { AuthBtnStyles } from "./AuthBtn.styled";

export const AuthBtn = ({ title, styles, handleSubmit }) => {
  return (
    <AuthBtnStyles type="submit" $btntype={styles} onClick={handleSubmit}>
      {title}
    </AuthBtnStyles>
  );
};
