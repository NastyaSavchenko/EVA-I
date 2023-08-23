import {
  AppStores,
  InfoContainer,
  LegalList,
  Rights,
  StoreImg,
  StoreTitle,
  StoreButtons,
  InfoBlock,
  RightsSpan,
} from "./Footer.styled";
import { Logo } from "../Logo/Logo.jsx";
import { ScrollButton } from "../ScrollButton/ScrollButton";

import Google_Play from "../../assets/images/Google_Play_light.svg";
import App_Store from "../../assets/images/App_Store_light.svg";

export const Footer = () => {
  return (
    <>
      <footer>
        <InfoBlock>
          <div>
            <Logo />
            <InfoContainer>
              <LegalList>
                <li>
                  <a href="#download">Download Now</a>
                </li>
                <li>
                  <a href="#license">License</a>
                </li>
              </LegalList>

              <LegalList>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="/examples">Features</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
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
              </LegalList>
            </InfoContainer>
          </div>
          <AppStores>
            <StoreTitle>Get the App</StoreTitle>

            <ul>
              <StoreButtons>
                <a href="/google" target="_blank">
                  <StoreImg src={Google_Play} alt="Google Play button" />
                </a>
              </StoreButtons>
              <StoreButtons>
                <a href="/apple" target="_blank">
                  <StoreImg src={App_Store} alt="Apple store button" />
                </a>
              </StoreButtons>
            </ul>
          </AppStores>
        </InfoBlock>

        <Rights>
          <RightsSpan>© 2023 All rights reserved.</RightsSpan>
          <ScrollButton />
        </Rights>
      </footer>
    </>
  );
};
