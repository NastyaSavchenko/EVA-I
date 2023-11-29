import { LOCALES } from "../../i18n/locales";
import lang from "../../assets/icons/Icons_language.svg"
import { LangDivider, LangIcon, LangSwitcher } from "./Language_switcher.styled";

export const Language_switcher = (props) => {
  return (
    <LangSwitcher className="switcher_button">
      <LangIcon src={lang} alt="" />{" "}

      <button
        onClick={() => props.handleChange(LOCALES.ENGLISH)}
        className={`language-button ${props.currentLocale === LOCALES.ENGLISH ? 'language-button-active' : ''
          }`}
      >
        EN
      </button>
      <LangDivider>|</LangDivider>
      <button
        onClick={() => props.handleChange(LOCALES.UKRANIAN)}
        className={`language-button ${props.currentLocale === LOCALES.UKRANIAN ? 'language-button-active' : ''
          }`}
      >
        UA
      </button>
    </LangSwitcher>
  )
};
