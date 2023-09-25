import styled from "styled-components";
import mobile1 from "../../assets/images/mobile/Group581.svg";
import mobile2 from "../../assets/images/mobile/Group583.svg";
import mobile3 from "../../assets/images/mobile/Group585.svg";
import tabletPortrait1 from "../../assets/images/tabletPortrait/Group581.svg";
import tabletPortrait2 from "../../assets/images/tabletPortrait/Group583.svg";
import tabletPortrait3 from "../../assets/images/tabletPortrait/Group585.svg";
import tablet1 from "../../assets/images/tablet/Group581.svg";
import tablet2 from "../../assets/images/tablet/Group583.svg";
import tablet3 from "../../assets/images/tablet/Group585.svg";
import desktopL1 from "../../assets/images/desktopL/Group581.svg";
import desktopL2 from "../../assets/images/desktopL/Group583.svg";
import desktopL3 from "../../assets/images/desktopL/Group585.svg";
import desktopXL1 from "../../assets/images/desktopXL/Group581.svg";
import desktopXL2 from "../../assets/images/desktopXL/Group583.svg";
import desktopXL3 from "../../assets/images/desktopXL/Group585.svg";

export const BenefitsStyles = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    gap: 120px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    gap: 120px;
  }

  @media (min-width: 1920px) {
    gap: 120px;
  }
`;

export const BenefitCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

export const CardInfo = styled.div`
  /* width: 406px; */
  width: auto;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 515px;
    order: 1;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 600px;
    order: 1;
  }

  @media (min-width: 1920px) {
    width: 700px;
    order: 1;
  }
`;

export const CardInfoTitle = styled.h3`
  font-size: 24px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.33;
  margin-bottom: 20px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    line-height: 1.25;
  }
`;

export const CardInfoText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 32px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 60px;
  }
`;

export const CardImgContainer = styled.div`
  display: flex;
  /* width: 515px; */
  width: auto;
  height: 142px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 312px;
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 515px;
    height: 320px;
    margin-bottom: 0;
    order: 2;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 600px;
    height: 320px;
    margin-bottom: 0;
    order: 2;
  }

  @media (min-width: 1920px) {
    width: 700px;
    height: 320px;
    margin-bottom: 0;
    order: 2;
  }
`;

export const CardImg1 = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${mobile1});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${tabletPortrait1});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${tablet1});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${desktopL1});
  }

  @media (min-width: 1920px) {
    background-image: url(${desktopXL1});
  }
`;

export const CardImg2 = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${mobile2});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${tabletPortrait2});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${tablet2});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${desktopL2});
  }

  @media (min-width: 1920px) {
    background-image: url(${desktopXL2});
  }
`;

export const CardImg3 = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${mobile3});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${tabletPortrait3});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${tablet3});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${desktopL3});
  }

  @media (min-width: 1920px) {
    background-image: url(${desktopXL3});
  }
`;
