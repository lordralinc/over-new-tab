import { useTranslation } from "react-i18next";
import CloseIcon from "../../../icons/close-icon";
import { SiteItem, Tab } from "../../../types";
import Button from "../../../ui/button";
import ColorPicker from "../../../ui/color-picker";
import Group from "../../../ui/group";
import Input from "../../../ui/input";
import { transformVarColor } from "../../../utils";
import SiteEditor from "./site-editor";

import styles from "./tab-form.module.scss";

const TabForm = ({
  tab,
  onTabChange,
  deleteTab,
}: {
  tab: Tab;
  deleteTab: () => void;
  onTabChange: (tab: Tab) => void;
}) => {
  const { t } = useTranslation();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    onTabChange({ ...tab, [name]: value });
  };

  const handleColorChange = (color: string) => {
    onTabChange({ ...tab, color });
  };

  const handleSiteChange = (index: number, updatedSite: SiteItem) => {
    const updatedContent = [...tab.content];
    updatedContent[index] = updatedSite;
    onTabChange({ ...tab, content: updatedContent });
  };

  const handleAddSite = () => {
    const newSite: SiteItem = {
      name: "",
      color: "var(--foreground-color)",
      url: "",
    };
    onTabChange({ ...tab, content: [...tab.content, newSite] });
  };

  const onSiteDelete = (index: number) => {
    onTabChange({ ...tab, content: tab.content.filter((_, i) => i !== index) });
  };

  return (
    <Group className={styles.container} variant="default">
      <div className={styles.header}>
        <ColorPicker
          color={transformVarColor(tab.color)}
          onChange={(color) => handleColorChange(color.hex)}
        />
        <Input
          type="text"
          name="name"
          value={tab.name}
          onChange={handleInputChange}
          placeholder={t("tab name")}
          style={{ width: "100%" }}
        />
        <Button onClick={deleteTab}>
          <CloseIcon
            width="15px"
            height="15px"
            fill="var(--foreground-color)"
          />
        </Button>
      </div>
      <div className={styles.content}>
        <h4>{t("sites")}</h4>
        {tab.content.map((site, index) => (
          <SiteEditor
            key={index}
            site={site}
            onSiteChange={(updatedSite) => handleSiteChange(index, updatedSite)}
            onSiteDelete={() => onSiteDelete(index)}
          />
        ))}
        <Button onClick={handleAddSite}>{t("add site")}</Button>
      </div>
    </Group>
  );
};

export default TabForm;
