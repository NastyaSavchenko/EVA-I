import { MainBtn } from "../MainBtn/MainBtn";
import {
  BenefitCard,
  BenefitsStyles,
  CardImgContainer,
  CardInfo,
  CardInfoText,
  CardInfoTitle,
} from "./Benefits.styled";

export const Benefits = () => {
  return (
    <BenefitsStyles>
      <BenefitCard>
        <CardInfo>
          <CardInfoTitle>
            [H3] Core benefit positioned as a value prop
          </CardInfoTitle>

          <CardInfoText>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed qu
          </CardInfoText>

          <MainBtn title={"button cta"} styles={"outline"} />
        </CardInfo>

        <CardImgContainer>img card 1</CardImgContainer>
      </BenefitCard>

      <BenefitCard>
        <CardImgContainer>img card 2</CardImgContainer>

        <CardInfo>
          <CardInfoTitle>
            [H3] Core benefit positioned as a value prop
          </CardInfoTitle>

          <CardInfoText>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed qu
          </CardInfoText>

          <MainBtn title={"button cta"} styles={"outline"} />
        </CardInfo>
      </BenefitCard>

      <BenefitCard>
        <CardInfo>
          <CardInfoTitle>
            [H3] Core benefit positioned as a value prop
          </CardInfoTitle>

          <CardInfoText>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed qu
          </CardInfoText>

          <MainBtn title={"button cta"} styles={"outline"} />
        </CardInfo>

        <CardImgContainer>img card 3</CardImgContainer>
      </BenefitCard>
    </BenefitsStyles>
  );
};
