import {
  AdvantagesStyles,
  AdvantagesContainer,
  AdvantagesTitle,
  AdvantagesCard,
  CardImg,
  ImgContainer,
  CardTitle,
  CardText
} from "./Advantages.styled";

export const Advantages = () => {
  return (
    <AdvantagesStyles>
      <AdvantagesTitle>Advantages</AdvantagesTitle>

      <AdvantagesContainer>
        <AdvantagesCard>
          <ImgContainer>
            <CardImg src="/" alt="icon-1" />
          </ImgContainer>

          <CardTitle>Short core benefit 1</CardTitle>

          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus facilis blanditiis distinctio porro obcaecati magnam, et omnis fugit?.
          </CardText>
        </AdvantagesCard>

        <AdvantagesCard>
          <ImgContainer>
            <CardImg src="/" alt="icon-2" />
          </ImgContainer>

          <CardTitle>Short core benefit 2</CardTitle>

          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus facilis blanditiis distinctio porro obcaecati magnam, et omnis fugit?.
          </CardText>
        </AdvantagesCard>

        <AdvantagesCard>
          <ImgContainer>
            <CardImg src="/" alt="icon-3" />
          </ImgContainer>

          <CardTitle>Short core benefit 3</CardTitle>

          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus facilis blanditiis distinctio porro obcaecati magnam, et omnis fugit?.
          </CardText>
        </AdvantagesCard>
      </AdvantagesContainer>
    </AdvantagesStyles>
  );
};
