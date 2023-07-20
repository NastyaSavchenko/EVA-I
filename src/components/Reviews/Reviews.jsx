import {
  PersonImg,
  PersonInfo,
  PersonName,
  PersonPosition,
  ReviewsImgContainer,
  ReviewsInfo,
  ReviewsInfoContainer,
  ReviewsPersonContainer,
  ReviewsStyles,
  ReviewsText,
  ReviewsTitle
} from "./Reviews.styled";

export const Reviews = () => {
  return (
    <ReviewsStyles>
      <ReviewsTitle>
        Real stories from real customers
      </ReviewsTitle>

      <ReviewsInfoContainer>
        <ReviewsInfo>
          <ReviewsText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet velit et magni, quasi fuga amet corporis itaque quia
          </ReviewsText>

          <ReviewsPersonContainer>
            <PersonImg>

            </PersonImg>

            <PersonInfo>
              <PersonName>
                Name
              </PersonName>

              <PersonPosition>
                Position, Company
              </PersonPosition>
            </PersonInfo>
          </ReviewsPersonContainer>
        </ReviewsInfo>

        <ReviewsImgContainer>
          <img src="/" alt="image" />
        </ReviewsImgContainer>
      </ReviewsInfoContainer>
    </ReviewsStyles>
  );
};
