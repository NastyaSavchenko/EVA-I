import { FormattedMessage } from "react-intl";
import { MainBtn } from "../MainBtn/MainBtn";
import {
  BenefitCard,
  BenefitsStyles,
  CardImg1,
  CardImg2,
  CardImg3,
  CardImgContainer,
  CardInfo,
  CardInfoText,
  CardInfoTitle,
} from "./Benefits.styled";

export const Benefits = () => {
  return (
    <section>
      <div className="container">
        <h2 className="hidden-title">
          <FormattedMessage id="Benefits_title" />
        </h2>
        <BenefitsStyles>
          <BenefitCard>
            <CardImgContainer>
              <CardImg1 />
            </CardImgContainer>

            <CardInfo>
              <CardInfoTitle>
                <FormattedMessage id="Benefits_CardInfoTitle_1" />
              </CardInfoTitle>

              <CardInfoText>
                <FormattedMessage id="Benefits_CardInfoText_1" />
              </CardInfoText>

              <MainBtn
                title={<FormattedMessage id="Benefits_MainBtn" />}
                styles={"outline"}
              />
            </CardInfo>
          </BenefitCard>

          <BenefitCard>
            <CardImgContainer style={{ order: 1 }}>
              <CardImg2 />
            </CardImgContainer>

            <CardInfo style={{ order: 2 }}>
              <CardInfoTitle>
                <FormattedMessage id="Benefits_CardInfoTitle_2" />
              </CardInfoTitle>

              <CardInfoText>
                <FormattedMessage id="Benefits_CardInfoText_2" />
              </CardInfoText>

              <MainBtn
                title={<FormattedMessage id="Benefits_MainBtn" />}
                styles={"outline"}
              />
            </CardInfo>
          </BenefitCard>

          <BenefitCard>
            <CardImgContainer>
              <CardImg3 />
            </CardImgContainer>

            <CardInfo>
              <CardInfoTitle>
                <FormattedMessage id="Benefits_CardInfoTitle_3" />
              </CardInfoTitle>

              <CardInfoText>
                <FormattedMessage id="Benefits_CardInfoText_3" />
              </CardInfoText>

              <MainBtn
                title={<FormattedMessage id="Benefits_MainBtn" />}
                styles={"outline"}
              />
            </CardInfo>
          </BenefitCard>
        </BenefitsStyles>
      </div>
    </section>
  );
};
