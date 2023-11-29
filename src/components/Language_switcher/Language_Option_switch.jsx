import { LOCALES } from "../../i18n/locales";
// import lang from "../../assets/icons/Icons_language.svg";
// import { SlArrowDown } from "react-icons/sl";
import {
  LangOPTSwitcher,
  LangOptIcon,
  Option,
  Select,
} from "./Language_Option_switch.styled";

export const Language_Option_switch = ({ currentLocale, onSelect }) => {
  return (
    <LangOPTSwitcher className="switcher_option">
      {/* <LangOptIcon src={lang} alt="" /> */}
      {/* <SlArrowDown /> */}
      <Select onChange={onSelect} value={currentLocale}>
        <Option value={LOCALES.ENGLISH}>EN</Option>

        <Option value={LOCALES.UKRANIAN}>UA</Option>
      </Select>
    </LangOPTSwitcher>
  );
};
