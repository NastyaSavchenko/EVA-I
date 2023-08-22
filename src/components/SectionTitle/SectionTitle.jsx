import { TitleSlyles } from "./SectionTitle.styled.jsx";

export const SectionTitle = ({ title }) => {
  return <TitleSlyles $type={title}>{title}</TitleSlyles>;
};
