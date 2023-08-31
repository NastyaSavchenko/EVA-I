import {
  Box,
  Title,
  ErrorTitle,
  Text,
  LinkWrapp,
  Link,
  ProblemBtn,
} from "./Error.styled";

export const Error = () => {
  return (
    <Box>
      <Title>Oops!</Title>
      <ErrorTitle>404 - Page not found</ErrorTitle>
      <Text>
        The page you are looking for might have been removed, had its name
        changed or is <br /> temporary unavailable.
      </Text>
      <LinkWrapp>
        <Link to="/">Go to homepage</Link>
        <ProblemBtn type="button">Report problem</ProblemBtn>
      </LinkWrapp>
    </Box>
  );
};
