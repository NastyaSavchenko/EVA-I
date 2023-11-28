import { LOCALES } from "../../i18n/locales";
import lang from "../../assets/icons/Icons_language.svg";
import {
  LangOPTSwitcher,
  LangOptIcon,
  Option,
  Select,
} from "./Language_Option_switch.styled";

export const Language_Option_switch = ({ currentLocale, onSelect }) => {
  return (
    <LangOPTSwitcher className="switcher">
      <LangOptIcon src={lang} alt="" />
      <Select onChange={onSelect} value={currentLocale}>
        <Option value={LOCALES.ENGLISH}>EN</Option>

        <Option value={LOCALES.UKRANIAN}>UA</Option>
      </Select>
    </LangOPTSwitcher>
  );
};
