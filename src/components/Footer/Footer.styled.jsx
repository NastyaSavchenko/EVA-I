import styled from 'styled-components';

export const FooterStyles = styled.footer`
display: flex;
box-sizing: border-box;
margin: 120px 80px 160px 80px;
align-items: start;
justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 423px; */
  height: 180px;
  gap: 24px;
`
//LOGO
export const LogoContainer = styled.div`
  width: 186px;
  height: 96px;
  border: 1px solid #cdcdcd;
`
//INFO_CONTAINER
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;

  font-family: Inter;
  font-style: normal;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-decoration: none;
  a {
    color: #000000;
    margin-right: 24px;

    /* &:last-child {
      margin-right: 0;
    } */
  }
`

export const LegalList = styled.div`
  display: flex;
  flex-direction: row;
`
export const InfolList = styled.div`
  display: flex;
  align-items: center;
`
//APP_STORES
export const AppStores = styled.div`
  display: flex;
  width: 176px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`
export const StoreTitle = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 28px; 
`
export const StoreButtons = styled.div`
  display: flex;
  width: 176px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const StoreImg = styled.img`
  width: 135px;
  height: 40px;
`
//RIGHTS
export const Rights = styled.div`
  margin: 0 auto 80px 80px;
`
export const RightsSpan = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
  color: #D1D5DB;
`
