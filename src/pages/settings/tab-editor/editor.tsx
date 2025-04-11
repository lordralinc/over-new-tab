import React from "preact/compat";
import { defaultTabs, Tab } from "../../main/tabs";
import TabForm from "./tab-form";
import Button from "../../../ui/button";
import styles from "./editor.module.scss";

const TabEditor = () => {
  const [tabs, onUpdateTabs] = React.useState<Tab[]>(
    JSON.parse(localStorage.getItem("tabs") ?? JSON.stringify(defaultTabs))
  );

  React.useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
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
    localStorage.setItem("tabs", JSON.stringify(updatedTabs));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Редактор вкладок</div>
      <div className={styles.content}>
        {tabs.map((tab, index) => (
          <TabForm
            key={index}
            tab={tab}
            onTabChange={(updatedTab) => handleTabChange(index, updatedTab)}
            deleteTab={() => handleDeleteTab(index)}
          />
        ))}
        <Button onClick={handleAddTab}>Добавить вкладку</Button>
      </div>
    </div>
  );
};

export default TabEditor;
