import {
  PersonImg,
  PersonName,
  PersonPosition,
  ReviewsImgContainer,
  ReviewsInfo,
  ReviewsInfoContainer,
  ReviewsPersonContainer,
  ReviewsStyles,
  ReviewsText,
} from "./Reviews.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Reviews = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={"Real stories from real customers"} />
        <ReviewsStyles>
          <ReviewsInfoContainer>
            <ReviewsInfo>
              <ReviewsText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet velit et magni, quasi fuga amet corporis itaque quia
              </ReviewsText>

              <ReviewsPersonContainer>
                <PersonImg>
                  <img src="" alt="img" />
                </PersonImg>
                <div>
                  <PersonName>Name</PersonName>
                  <PersonPosition>Position, Company</PersonPosition>
                </div>
              </ReviewsPersonContainer>
            </ReviewsInfo>

            <ReviewsImgContainer>
              <img src="/" alt="image" />
            </ReviewsImgContainer>
          </ReviewsInfoContainer>
        </ReviewsStyles>
      </div>
    </section>
  );
};
