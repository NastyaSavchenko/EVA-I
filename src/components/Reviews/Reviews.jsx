import { FormattedMessage } from "react-intl";
import {
  PersonImg,
  PersonName,
  PersonPosition,
  ReviewQuotes,
  ReviewsInfo,
  ReviewsInfoContainer,
  ReviewsPersonContainer,
  ReviewsStyles,
  ReviewsText,
} from "./Reviews.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import user from "../../assets/images/user.svg";

export const Reviews = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={<FormattedMessage id="reviews_title" />} />
        <ReviewsStyles>
          <ReviewsInfoContainer>
            <ReviewsInfo>
              <ReviewsText>
                <ReviewQuotes>“ </ReviewQuotes>
                <FormattedMessage id="reviews_text" />
                <ReviewQuotes> ”</ReviewQuotes>
              </ReviewsText>

              <ReviewsPersonContainer>
                <PersonImg>
                  <img src={user} alt="img" />
                </PersonImg>
                <div>
                  <PersonName>
                    <FormattedMessage id="reviews_name" />
                  </PersonName>
                  <PersonPosition>
                    <FormattedMessage id="reviews_position" />
                  </PersonPosition>
                </div>
              </ReviewsPersonContainer>
            </ReviewsInfo>
          </ReviewsInfoContainer>
        </ReviewsStyles>
      </div>
    </section>
  );
};
