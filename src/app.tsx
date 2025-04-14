import "./index.scss";

import React from "preact/compat";

import SettingsSwitcher from "./pages/settings/settings-switcher";
import Index from "./pages/main";
import Settings from "./pages/settings/settings";
import Background from "./background";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<"new_tab" | "settings">(
    "new_tab"
  );

  return (
    <Background>
      <SettingsSwitcher
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPage === "new_tab" && <Index />}
      {currentPage === "settings" && <Settings />}
    </Background>
  );
}
