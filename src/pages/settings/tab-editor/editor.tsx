import React from "preact/compat";
import TabForm from "./tab-form";
import Button from "../../../ui/button";
import styles from "./editor.module.scss";
import { Tab } from "../../../types";
import config from "../../../config";
import Group from "../../../ui/group";
import { useTranslation } from "react-i18next";

const TabEditor = () => {
  const { t } = useTranslation();
  const [tabs, onUpdateTabs] = React.useState<Tab[]>(config.tabs);

  React.useEffect(() => {
    config.tabs = tabs;
  }, [tabs]);

  const handleAddTab = () => {
    const newTab: Tab = {
      name: "",
      color: "var(--foreground-color)",
      content: [],
    };
    onUpdateTabs([...tabs, newTab]);
  };

  const handleTabChange = (index: number, updatedTab: Tab) => {
    const updatedTabs = [...tabs];
    updatedTabs[index] = updatedTab;
    onUpdateTabs(updatedTabs);
  };

  const handleDeleteTab = (index: number) => {
    const updatedTabs = tabs.filter((_, i) => i !== index);
    onUpdateTabs(updatedTabs);
  };

  return (
    <Group
      className={styles.container}
      variant="ghost"
      title={t("tabs editor")}
    >
      <div className={styles.content}>
        {tabs.map((tab, index) => (
          <TabForm
            key={index}
            tab={tab}
            onTabChange={(updatedTab) => handleTabChange(index, updatedTab)}
            deleteTab={() => handleDeleteTab(index)}
          />
        ))}
        <Button onClick={handleAddTab}>{t("add tab")}</Button>
      </div>
    </Group>
  );
};

export default TabEditor;
