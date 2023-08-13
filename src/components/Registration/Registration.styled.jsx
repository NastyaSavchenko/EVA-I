import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Form, Field } from "formik";

export const LinkText = styled.p`
  margin-top: 8px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
`;

export const Link = styled(NavLink)`
  font-weight: 600;
`;

export const FormStyles = styled(Form)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 1.1;
`;

export const FieldEmail = styled(Field)`
  padding: 12px 8px;
  font-size: 24px;
  line-height: 1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--light-grey);
`;

export const FieldPass = styled(Field)`
  cursor: pointer;
  width: 100%;
  padding: 12px 8px;
  font-size: 24px;
  line-height: 1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--light-grey);
`;

export const VisibilityBtn = styled.button`
  cursor: pointer;
  padding: 0 12px 8px;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid var(--light-grey);
`;

export const Error = styled.div`
  padding-top: 8px;
  color: red;
  font-size: 12px;
`;

export const PolicyText = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  margin-top: 16px;
  margin-bottom: 40px;

  > a {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;
