import styled from 'styled-components';

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
  background-image: url('src/assets/images/mobile/Group 581.svg');

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url('src/assets/images/tabletPortrait/Group 581.svg');
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url('src/assets/images/tablet/Group 581.svg');
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url('src/assets/images/desktopL/Group 581.svg');
  }

  @media (min-width: 1920px) {
    background-image: url('src/assets/images/desktopXL/Group 581.svg');
  }
`;

export const CardImg2 = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('src/assets/images/mobile/Group 583.svg');

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url('src/assets/images/tabletPortrait/Group 583.svg');
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url('src/assets/images/tablet/Group 583.svg');
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url('src/assets/images/desktopL/Group 583.svg');
  }

  @media (min-width: 1920px) {
    background-image: url('src/assets/images/desktopXL/Group 583.svg');
  }
`;

export const CardImg3 = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('src/assets/images/mobile/Group 585.svg');

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url('src/assets/images/tabletPortrait/Group 585.svg');
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url('src/assets/images/tablet/Group 585.svg');
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url('src/assets/images/desktopL/Group 585.svg');
  }

  @media (min-width: 1920px) {
    background-image: url('src/assets/images/desktopXL/Group 585.svg');
  }
`;
