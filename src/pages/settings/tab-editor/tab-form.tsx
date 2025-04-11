import CloseIcon from "../../../icons/close-icon";
import Button from "../../../ui/button";
import Input from "../../../ui/input";
import { SiteItem, Tab } from "../../main/tabs";
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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    onTabChange({ ...tab, [name]: value });
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
    <div className={styles.container}>
      <div className={styles.header}>
        <Input
          type="color"
          name="color"
          value={tab.color}
          onChange={handleInputChange}
          style={{ width: "26px" }}
        />
        <Input
          type="text"
          name="name"
          value={tab.name}
          onChange={handleInputChange}
          placeholder="Название вкладки"
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
        <h4>Сайты:</h4>
        {tab.content.map((site, index) => (
          <SiteEditor
            key={index}
            site={site}
            onSiteChange={(updatedSite) => handleSiteChange(index, updatedSite)}
            onSiteDelete={() => onSiteDelete(index)}
          />
        ))}
        <Button onClick={handleAddSite}>Добавить сайт</Button>
      </div>
    </div>
  );
};

export default TabForm;
