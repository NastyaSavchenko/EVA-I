import {
  CardIcon,
  CardImg,
  CardInfo,
  CardText,
  CardTitle,
  CardTop,
  UsageCard,
  UsageCards,
  UsageStyles,
  UsageTitle,
} from "./Usage.styled";

export const Usage = () => {
  return (
    <UsageStyles>
      <UsageTitle>[H2] Check out how it works</UsageTitle>
      <UsageCards>
        <UsageCard>
          <CardImg>
            <img src="/" alt="PHOTO/VIDEO 1" />
          </CardImg>

          <CardInfo>
            <CardTop>
              <CardIcon>Icon</CardIcon>

              <CardTitle>Step 1</CardTitle>
            </CardTop>
            <CardText>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed qu
            </CardText>
          </CardInfo>
        </UsageCard>

        <UsageCard>
          <CardImg>
            <img src="/" alt="PHOTO/VIDEO 2" />
          </CardImg>

          <CardInfo>
            <CardTop>
              <CardIcon>Icon</CardIcon>

              <CardTitle>Step 2</CardTitle>
            </CardTop>
            <CardText>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed qu
            </CardText>
          </CardInfo>
        </UsageCard>

        <UsageCard>
          <CardImg>
            <img src="/" alt="PHOTO/VIDEO 3" />
          </CardImg>

          <CardInfo>
            <CardTop>
              <CardIcon>Icon</CardIcon>

              <CardTitle>Step 3</CardTitle>
            </CardTop>
            <CardText>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed qu
            </CardText>
          </CardInfo>
        </UsageCard>

        <UsageCard>
          <CardImg>
            <img src="/" alt="PHOTO/VIDEO 4" />
          </CardImg>

          <CardInfo>
            <CardTop>
              <CardIcon>Icon</CardIcon>

              <CardTitle>Step 4</CardTitle>
            </CardTop>
            <CardText>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed qu
            </CardText>
          </CardInfo>
        </UsageCard>
      </UsageCards>
    </UsageStyles>
  );
};
