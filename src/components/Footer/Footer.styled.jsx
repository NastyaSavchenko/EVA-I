import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: space-between;
  padding: 72px 0 100px;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    flex-direction: row;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
  }
`;

//INFO_CONTAINER
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  color: var(--white);

  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
`;

export const LegalList = styled.ul`
  display: flex;

  > li {
    transition: all var(--anim);

    &:not(:last-child) {
      margin-right: 24px;
    }

    &:hover {
      color: var(--primary-pink);
      border-color: var(--linear-gradient);
    }
  }
`;

// export const Link = styled(NavLink)`
//   display: inline-block;
// `;

//APP_STORES
export const AppStores = styled.div`
  display: flex;
  width: 176px;
  flex-direction: column;
  gap: 16px;
`;

export const StoreTitle = styled.p`
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
`;

export const StoreButtons = styled.li`
  transition: all var(--anim);

  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:hover {
      transform: scale(1.08);
    }
`;

export const StoreImg = styled.img`
  width: 135px;
  height: 40px;
`;

//RIGHTS
export const Rights = styled.div`
  position: relative;
  padding: 40px 0 0;
`;

export const RightsSpan = styled.span`
  font-size: 14px;
  line-height: 1.71;
  color: var(--neutral);
`;
