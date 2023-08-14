import styled from 'styled-components';

import { NavLink } from 'react-router-dom';


export const SignInStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: var(--semibold-font-weight);
  line-height: 2;
  color: var(--main-black);
`;

export const SubtitleSpan = styled.span`
  text-align: center;
  font-weight: var(--regular-font-weight);
  line-height: 1.25;
`;


export const SubtitleLink = styled(NavLink)`
  text-align: center;
  font-weight: var(--semibold-font-weight);
  line-height: 2;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const InpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 624px;
  gap: 0;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  line-height: 1.1;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  border: transparent;
  border-bottom: 1px solid var(--light-grey);
  padding: 12px 8px;
  margin-bottom: 16px;
`;

export const ForgotLink = styled(SubtitleLink)`
  display: flex;
  font-weight: var(--regular-font-weight);
  justify-content: flex-start;
  line-height: 1.25;
  margin-bottom: 40px;
`;

export const SpanDiv = styled.div`
  display: flex;
`;

export const StyledSpan = styled.span`
  display: inline-block;
  width: 296px;
  height: 1px;
  border-top: 1px solid var(--light-grey);
  margin: 40px 0;
`;

export const StyledParagraph = styled.p`
  display: flex;
  position: relative;
  top: 30px;
  justify-content: center;
  margin: 0 8px;
`;
