import React from "preact/compat";
import VisualBlock from "../../ui/visual-block";
import styles from "./settings.module.scss";
import TabEditor from "./tab-editor/editor";
import { getThemes } from "../../utils";
import config from "../../config";
import BackgroundEditor from "./background-editor";
import Button from "../../ui/button";
import InputField from "../../ui/input-field";
import SelectField from "../../ui/select-field";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();
  const [currentTheme, setCurrentTheme] = React.useState(config.theme);
  const [city, setCity] = React.useState(config.city ?? "");

  React.useEffect(() => {
    config.city = city;
  }, [city]);

  React.useEffect(() => {
    if (currentTheme !== "system") {
      document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    config.theme = currentTheme;
  }, [currentTheme]);

  const themes = getThemes();

  return (
    <VisualBlock className={styles.container}>
      <SelectField
        id="theme-select"
        label={t("theme")}
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e)}
        options={Object.keys(themes).map((key) => {
          return { value: key, name: themes[key] };
        })}
      />
      <InputField
        id="city-selector"
        label={t("city")}
        value={city}
        onChange={(e) => setCity(e)}
      />
      <BackgroundEditor />
      <TabEditor />
      <div className="mb5 w100 center">
        <Button
          onClick={() => {
            localStorage.clear();
            document.location.reload();
          }}
          className="w100"
        >
          {t("reset to defaults")}
        </Button>
      </div>
    </VisualBlock>
  );
}
