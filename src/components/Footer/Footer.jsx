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
import { ToTopLink } from "../ToTopLink/ToTopLink";
import { FormattedMessage } from "react-intl";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <InfoBlock>
            <div>
              <Logo />
              <InfoContainer>
                <LegalList>
                  <li>
                    <ToTopLink to="/registration">
                      <FormattedMessage id="footer_download" />
                    </ToTopLink>
                  </li>
                  {/* <li>
                  <a href="#license">License</a>
                </li> */}
                </LegalList>

                <LegalList>
                  <li>
                    <ToTopLink to="/">
                      <FormattedMessage id="footer_about" />
                    </ToTopLink>
                  </li>
                  <li>
                    <ToTopLink to="/examples">
                      <FormattedMessage id="footer_features" />
                    </ToTopLink>
                  </li>
                  <li>
                    <ToTopLink to="/pricing">
                      <FormattedMessage id="footer_pricing" />
                    </ToTopLink>
                  </li>
                  {/* <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#help">Help</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li> */}
                </LegalList>
              </InfoContainer>
            </div>

            <AppStores>
              <StoreTitle>
                <FormattedMessage id="footer_get_app" />
              </StoreTitle>
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
            <RightsSpan><FormattedMessage id="footer_rights" /></RightsSpan>
            <ScrollButton />
          </Rights>
        </div>
      </footer>
    </>
  );
};
