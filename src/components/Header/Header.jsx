import { MainBtn } from "../MainBtn/MainBtn";
import { HeaderStyles, HeaderTitle } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyles>
      <HeaderTitle>
        Headline Clearly Positioning The Primary USP
      </HeaderTitle>

      <MainBtn title={'button cta'}/>
    </HeaderStyles>
  )
};
