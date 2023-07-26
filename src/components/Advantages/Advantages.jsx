import {
  AdvantagesStyles,
  AdvantagesContainer,
  AdvantagesCard,
  CardImg,
  ImgContainer,
  CardTitle,
  CardText,
} from "./Advantages.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Advantages = () => {
  return (
    <section>
      <div className="container">
        <AdvantagesStyles>
          <SectionTitle title={'Advantages'}/>
          <AdvantagesContainer>
            <AdvantagesCard>
              <ImgContainer>
                <CardImg src="/" alt="icon-1" />
              </ImgContainer>

              <CardTitle>Short core benefit 1</CardTitle>

              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                possimus facilis blanditiis distinctio porro obcaecati magnam,
                et omnis fugit?.
              </CardText>
            </AdvantagesCard>

            <AdvantagesCard>
              <ImgContainer>
                <CardImg src="/" alt="icon-2" />
              </ImgContainer>

              <CardTitle>Short core benefit 2</CardTitle>

              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                possimus facilis blanditiis distinctio porro obcaecati magnam,
                et omnis fugit?.
              </CardText>
            </AdvantagesCard>

            <AdvantagesCard>
              <ImgContainer>
                <CardImg src="/" alt="icon-3" />
              </ImgContainer>

              <CardTitle>Short core benefit 3</CardTitle>

              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                possimus facilis blanditiis distinctio porro obcaecati magnam,
                et omnis fugit?.
              </CardText>
            </AdvantagesCard>
          </AdvantagesContainer>
        </AdvantagesStyles>
      </div>
    </section>
  );
};
