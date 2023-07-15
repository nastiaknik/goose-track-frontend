import { useTranslation } from "react-i18next";
import { ReactComponent as EnIcon } from "../../assets/images/flags/en.svg";
import { ReactComponent as PlIcon } from "../../assets/images/flags/pl.svg";
import { ReactComponent as EsIcon } from "../../assets/images/flags/es.svg";
import { ReactComponent as UaIcon } from "../../assets/images/flags/ua.svg";
import Popup from "reactjs-popup";
import {
  List,
  Option,
  LangBtn,
  CurrentLangBtn,
  LangName,
} from "./LangSwitcher.styled";

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { t } = useTranslation();

  const LANGUAGES = [
    {
      code: "en",
      name: t("English"),
    },
    {
      code: "ua",
      name: t("Ukrainian"),
    },
    {
      code: "pl",
      name: t("Polish"),
    },
    {
      code: "es",
      name: t("Spanish"),
    },
  ];

  const handleLangIcon = (lang) => {
    switch (lang) {
      case "ua":
        return <UaIcon width="30" height="22.5" />;
      case "es":
        return <EsIcon width="30" height="22.5" />;
      case "en":
        return <EnIcon width="30" height="22.5" />;
      case "pl":
        return <PlIcon width="30" height="22.5" />;
      default:
        <EnIcon width="30" height="22.5" />;
    }
  };

  let otherLanguages = LANGUAGES.filter(
    (lang) => lang.code !== currentLanguage
  );

  return (
    <Popup
      trigger={
        <CurrentLangBtn type="button" tabIndex="-1">
          {handleLangIcon(currentLanguage)}
        </CurrentLangBtn>
      }
      position="bottom right"
      on={["click", "hover"]}
      mouseLeaveDelay={200}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none" }}
      arrow={false}
      closeOnDocumentClick
      closeOnEscape
      initialFocus={false}
    >
      <List>
        {otherLanguages.map((lang) => (
          <Option key={lang.code}>
            <LangBtn
              type="button"
              onClick={() => {
                i18n.changeLanguage(lang.code);
              }}
            >
              {handleLangIcon(lang.code)}
              <LangName>{lang.name}</LangName>
            </LangBtn>
          </Option>
        ))}
      </List>
    </Popup>
  );
};

export default LangSwitcher;
