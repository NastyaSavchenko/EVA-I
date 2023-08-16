import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, Field } from "formik";

export const LinkText = styled.p`
  margin-top: 8px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
`;

export const Link = styled(NavLink)`
  font-weight: var(--semibold-font-weight);
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

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
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

export const ForgotLink = styled.a`
  display: flex;
  font-weight: var(--regular-font-weight);
  justify-content: flex-start;
  line-height: 1.25;
  margin-bottom: 40px;
`;
