import {
  AppStores,
  FooterStyles,
  InfoContainer,
  InfolList,
  LeftSide,
  LegalList,
  LogoContainer,
  Rights,
  RightsSpan,
  StoreButtons,
  StoreImg,
  StoreTitle,
} from "./Footer.styled";
import {Logo} from '../Logo/Logo.jsx'

import Google_Play from "../../assets/images/Google_Play.svg";
import App_Store from "../../assets/images/App_Store.svg";

export const Footer = () => {
  return (
    <>
      <FooterStyles>
        <LeftSide>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <InfoContainer>
            <LegalList>
              <li>
                <a href="#download">Download Now</a>
              </li>
              <li>
                <a href="#license">License</a>
              </li>
            </LegalList>

            <InfolList>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </InfolList>
          </InfoContainer>
        </LeftSide>

        <AppStores>
          <StoreTitle>Get the App</StoreTitle>

          <StoreButtons>
            <a href="/google" target="_blank">
              <StoreImg src={Google_Play} alt="Google Play button" />
            </a>
            <a href="/apple" target="_blank">
              <StoreImg src={App_Store} alt="Apple store button" />
            </a>
          </StoreButtons>
        </AppStores>
      </FooterStyles>

      <Rights>
        <RightsSpan>© 2023 All rights reserved.</RightsSpan>
      </Rights>
    </>
  );
};
