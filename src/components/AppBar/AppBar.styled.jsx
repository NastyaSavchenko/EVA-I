import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 20px 16px;

  @media (min-width: 768px) {
    padding: 32px 80px 16px;
  }
`;
