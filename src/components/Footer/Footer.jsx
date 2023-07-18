import { FooterStyles, InfoContainer } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyles>
      {/* <Logo /> */}
      <InfoContainer>
        <ul>
          <li>Download Now</li>
          <li>License</li>
        </ul>

        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>News</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
      </InfoContainer>

      <div>
      <p>Get the App</p>
      <a href="/apple">App Store</a>
      <a href="/google">Google Play</a>
      </div>

      <div>
        <span>© 2023 All rights reserved.</span>
      </div>
    </FooterStyles>
  )
}