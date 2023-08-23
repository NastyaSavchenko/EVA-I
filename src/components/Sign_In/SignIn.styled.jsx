import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';
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
  transition: all var(--anim);

  &:hover {
    color: var(--primary-purple);
  }
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

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`;

export const FieldEmail = styled(Field)`
  line-height: 1.5;
  padding: 16px 24px;
  background-color: var(--dark);
  border: 1px solid var(--white);
  border-radius: 32px;
  color: var(--white);
  transition: border-color 0.3s;
  
  &::placeholder {
    color: var(--light-grey);
  }

  &:focus {
    border-color: var(--primary-pink);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);
`;

export const PasswordWrapper = styled.div`
  display: flex;
  border: 1px solid var(--light-grey);
  border-radius: 32px;
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

  &:focus {
    border-color: var(--primary-pink);
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

export const ForgotLink = styled.a`
  display: flex;
  font-weight: var(--regular-font-weight);
  justify-content: flex-start;
  line-height: 1.25;
  margin-bottom: 40px;
  color: var(--primary-pink);
  transition: all var(--anim);

  &:hover {
    color: var(--primary-purple);
  }
`;
