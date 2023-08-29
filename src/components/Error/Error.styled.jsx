import styled from "styled-components";

export const Box = styled.div`
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 128px;
  font-weight: 800;
  line-height: 1;

  background: linear-gradient(90deg, #ed3984 0%, #ed3984 1.56%, #7452c8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 80px;
`;

export const ErrorTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;

  margin-bottom: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  margin-bottom: 32px;
`;

export const LinkWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const Link = styled.a`
  padding: 16px 32px;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;

  border: none;
  border-radius: 32px;
  background-color: var(--primary-pink);

  transition: all var(--anim);

  &:hover,
  &:focus {
    transform: translateY(2px);
    box-shadow: 0px 0px 15px 2px var(--primary-purple);
    background-color: var(--primary-purple);
  }
`;

export const ProblemBtn = styled.button`
  padding: 16px 32px;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--primary-pink);

  background-color: transparent;
  border: 1px solid var(--primary-pink);
  border-radius: 32px;

  transition: all var(--anim);

  &:hover,
  &:focus {
    transform: translateY(2px);
    box-shadow: 0px 0px 15px 2px var(--primary-purple);
    border-color: var(--primary-purple);
    color: var(--primary-purple);
  }
`;
