import {
  PersonImg,
  PersonName,
  PersonPosition,
  ReviewQuotes,
  // ReviewsImgContainer,
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
        <SectionTitle title={"What they say about EVA-I?"} />
        <ReviewsStyles>
          <ReviewsInfoContainer>
            <ReviewsInfo>
              <ReviewsText>
                <ReviewQuotes>“</ReviewQuotes>
                Using EVA-I has been an absolute game-changer for my business. Its 'Free Your Team from FAQs' feature lightened support load, letting us focus on key tasks. 'Helps Customers Track Their Precious Orders' impressed me—automated alerts saved time and improved customer experience.<ReviewQuotes>”</ReviewQuotes>
              </ReviewsText>

              <ReviewsPersonContainer>
                <PersonImg>
                  <img src="" alt="img" />
                </PersonImg>
                <div>
                  <PersonName>Andrii</PersonName>
                  <PersonPosition>Online store owner</PersonPosition>
                </div>
              </ReviewsPersonContainer>
            </ReviewsInfo>

            {/* <ReviewsImgContainer>
              <img src="/" alt="image" />
            </ReviewsImgContainer> */}
          </ReviewsInfoContainer>
        </ReviewsStyles>
      </div>
    </section>
  );
};
