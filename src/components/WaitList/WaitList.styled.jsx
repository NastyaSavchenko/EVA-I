import styled from "styled-components";
import { Form, Field } from "formik";

export const LogoContainer = styled.div`
  margin-top: 40px;
  margin-left: 80px;
`;

export const WaitListStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
`;

export const Topper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const TitleSpan = styled.span`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const FormStyles = styled(Form)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Box = styled.div`
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

export const FieldForm = styled(Field)`
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
    props.type === "error"
      ? "var(--neutral-red)"
      : "var(--primary-pink)"};
  font-size: 14px;
  line-height: 1.7;
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
    transition: all var(--anim);

    &:hover {
      color: var(--primary-purple);
    }
  }
`;

export const CongratsStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 148px;
  height: 100vh;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  color: var(--white);
  margin-bottom: 32px;
`;