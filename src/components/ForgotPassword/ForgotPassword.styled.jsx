import styled from "styled-components";
import { Form, Field } from "formik";
import { NavLink } from "react-router-dom";

export const LogoContainer = styled.div`
  margin-top: 40px;
  margin-left: 80px;
`;

export const ForgotStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 148px;
`;

export const SubTitle = styled.p`
  margin-bottom: 32px;
  color: var(--neutral-white, #FFF);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const SubTitleResent = styled.p`
  margin: 32px 0;
  color: var(--neutral-white, #FFF);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
`;

export const FormStyles = styled(Form)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  color: var(--white);
`;

export const FieldEmail = styled(Field)`
  cursor: pointer;
  background-color: transparent;
  line-height: 1.5;
  padding: 16px 24px;
  border: ${(props) =>
    props.error ? "1px solid var(--neutral-red)" : "1px solid var(--white)"};
  border-radius: 32px;
  color: var(--white);
  transition: border-color 0.3s;

  &::placeholder {
    color: var(--light-grey);
  }

  &:focus,
  &:hover {
    border-color: var(--primary-pink);
  }
`;

export const Notification = styled.div`
  display: flex;
  gap: 4px;
  padding-top: 8px;
  color: ${(props) =>
    props.type === "error" ? "var(--neutral-red)" : "var(--primary-pink)"};
  font-size: 14px;
  line-height: 1.7;
`;

export const LinkText = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  color: var(--white);
`;

export const LinkTextResent = styled.p`
  margin-bottom: 32px;
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