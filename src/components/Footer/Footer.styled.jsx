import styled from "styled-components";

export const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 80px;
`;

//INFO_CONTAINER
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;

  font-size: 16px;
  line-height: 1.5;
`;

export const LegalList = styled.ul`
  display: flex;

  > li {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

//APP_STORES
export const AppStores = styled.div`
  display: flex;
  width: 176px;
  flex-direction: column;
  gap: 16px;
`;

export const StoreTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.55;
`;

export const StoreButtons = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StoreImg = styled.img`
  width: 135px;
  height: 40px;
`;

//RIGHTS
export const Rights = styled.div`
  position: relative;
  padding: 40px 80px 80px;
  border-top: 1px solid var(--copyright);
`;
export const RightsSpan = styled.span`
  font-size: 14px;
  line-height: 1.4;
  color: var(--copyright);
`;
