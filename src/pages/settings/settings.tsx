import React from "preact/compat";
import VisualBlock from "../../ui/visual-block";
import styles from "./settings.module.scss";
import TabEditor from "./tab-editor/editor";
import { getThemes } from "../../utils";
import Select from "../../ui/select";
import Input from "../../ui/input";

export default function Settings() {
  const [currentTheme, setCurrentTheme] = React.useState(
    localStorage.getItem("theme") ?? "system"
  );
  const [city, setCity] = React.useState(localStorage.getItem("city") ?? "");

  React.useEffect(() => localStorage.setItem("city", city), [city]);

  React.useEffect(() => {
    if (currentTheme !== "system") {
      document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const themes = getThemes();

  return (
    <VisualBlock>
      <div className={styles.mb5}>
        <label htmlFor="theme-select">Тема: </label>
        <Select
          id="theme-select"
          value={currentTheme}
          onChange={(e) =>
            setCurrentTheme((e.target as HTMLSelectElement)?.value ?? "system")
          }
        >
          {Object.keys(themes).map((key) => {
            return (
              <option value={key} key={key}>
                {themes[key]}
              </option>
            );
          })}
        </Select>
      </div>
      <div className={styles.mb5}>
        <label htmlFor="city-selector">
          Город:
          <Input
            id="city-selector"
            type="text"
            value={city}
            onChange={(e) => setCity((e.target as HTMLInputElement).value)}
          />
        </label>
      </div>
      <TabEditor />
    </VisualBlock>
  );
}
