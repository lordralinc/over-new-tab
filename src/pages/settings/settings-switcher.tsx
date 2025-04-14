import React from "preact/compat";
import Button from "../../ui/button";
import SettingsIcon from "../../icons/settings-icon";
import Select from "../../ui/select";
import styles from "./settings-switcher.module.scss";
import { getThemes } from "../../utils";
import config from "../../config";

export default function SettingsSwitcher({
  setCurrentPage,
  currentPage,
}: {
  currentPage: "new_tab" | "settings";
  setCurrentPage: (page: "new_tab" | "settings") => void;
}) {
  const [currentTheme, setCurrentTheme] = React.useState(config.theme);

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
    <div className={styles.switcher}>
      <Select
        value={currentTheme}
        onChange={(e) =>
          setCurrentTheme((e.target as HTMLSelectElement)?.value ?? "system")
        }
        ghost={false}
      >
        {Object.keys(themes).map((key) => {
          return (
            <option value={key} key={key}>
              {themes[key]}
            </option>
          );
        })}
      </Select>
      <Button
        onClick={() => {
          if (currentPage === "new_tab") setCurrentPage("settings");
          if (currentPage === "settings") setCurrentPage("new_tab");
        }}
        ghost={false}
      >
        <SettingsIcon
          width="15px"
          height="15px"
          fill="var(--foreground-color)"
        />
      </Button>
    </div>
  );
}
