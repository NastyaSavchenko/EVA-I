import {
  Box,
  Title,
  ErrorTitle,
  Text,
  LinkWrapp,
  Link,
  ProblemBtn,
} from "./Error.styled";
import { FormattedMessage } from "react-intl";

export const Error = () => {
  return (
    <Box>
      <Title><FormattedMessage id="error404" /></Title>
      <ErrorTitle><FormattedMessage id="error404_notFound" /></ErrorTitle>

      <Text>
        <FormattedMessage id="error404_page_del" />
        <br />
        <FormattedMessage id="error404_page_unavailable" />
      </Text>

      <LinkWrapp>
        <Link to="/">
          <FormattedMessage id="error404_go_home" />
        </Link>

        <ProblemBtn type="button">
          <FormattedMessage id="error404_report_problem" />
        </ProblemBtn>
      </LinkWrapp>
    </Box>
  );
};
