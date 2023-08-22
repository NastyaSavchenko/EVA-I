import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Form, Field } from "formik";

export const LinkText = styled.p`
  margin-top: 8px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  color: var(--white);
`;

export const Link = styled(NavLink)`
  font-weight: var(--semibold-font-weight);
  color: var(--primary-pink);
`;

export const FormStyles = styled(Form)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);
`;
export const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  border: 1px solid var(--light-grey);
  border-radius: 32px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`;

export const FieldEmail = styled(Field)`
  background-color: transparent;
  line-height: 1.5;
  padding: 16px 24px;
  border: 1px solid var(--light-grey);
  border-radius: 32px;
  color: var(--light-grey);
  color: var(--light-grey);
  
  &::placeholder {
    color: var(--light-grey);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const FieldPass = styled(Field)`
  cursor: pointer;
  width: 100%;
  padding: 16px 24px;
  line-height: 1.5;
  background-color: transparent;
  border: none;
  color: var(--light-grey);

  &::placeholder {
    color: var(--light-grey);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const VisibilityBtn = styled.button`
  cursor: pointer;
  padding: 0 24px ;
  background-color: inherit;
  border: none;
  color: var(--light-grey);
`;

export const Error = styled.div`
  padding-top: 8px;
  color: red;
  font-size: 12px;
`;

export const PolicyText = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
  margin-bottom: 40px;
  color: var(--white);

  > a {
    cursor: pointer;
    text-decoration-line: underline;
    color: var(--primary-pink);
  }
`;
