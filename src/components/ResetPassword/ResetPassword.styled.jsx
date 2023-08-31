import styled from "styled-components";
import { Form, Field } from "formik";

export const LogoContainer = styled.div`
  margin-top: 40px;
  margin-left: 80px;
`;

export const ResetStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 148px;
  height: 100vh;
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 1.71;
  color: var(--white);
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  color: var(--white);
  margin-bottom: 32px;
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

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);

  &:last-of-type {
    margin-bottom: 32px;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
`;

export const FieldPass = styled(Field)`
  cursor: pointer;
  width: 100%;

  border-left: ${(props) =>
    props.error ? "1px solid var(--neutral-red)" : "1px solid var(--white)"};
  border-right: none;
  border-top: ${(props) =>
    props.error ? "1px solid var(--neutral-red)" : "1px solid var(--white)"};
  border-bottom: ${(props) =>
    props.error ? "1px solid var(--neutral-red)" : "1px solid var(--white)"};
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

  line-height: 1.5;
  padding: 16px 24px;
  background-color: var(--dark);

  color: var(--white);
  transition: border-color 0.3s;

  &:focus,
  &:hover {
    border-color: var(--primary-pink);
  }

  &::placeholder {
    color: var(--light-grey);
  }
`;

export const VisibilityBtn = styled.button`
  cursor: pointer;
  padding: 0 24px;
  background-color: inherit;
  border: none;
  color: ${(props) =>
    props.hasError === "true" ? "var(--neutral-red)" : "var(--light-grey)"};

  border-right: ${(props) =>
    props.hasError === "true"
      ? "1px solid var(--neutral-red)"
      : "1px solid var(--white)"};
  border-left: none;
  border-top: ${(props) =>
    props.hasError === "true"
      ? "1px solid var(--neutral-red)"
      : "1px solid var(--white)"};
  border-bottom: ${(props) =>
    props.hasError === "true"
      ? "1px solid var(--neutral-red)"
      : "1px solid var(--white)"};
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;

  transition: all 0.3s;

  ${FieldPass}:focus + &,
  ${FieldPass}:hover + & {
    border-color: var(--primary-pink);
    color: var(--primary-pink);
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
