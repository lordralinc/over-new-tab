import CloseIcon from "../../../icons/close-icon";
import Button from "../../../ui/button";
import Input from "../../../ui/input";
import { SiteItem } from "../../main/tabs";
import styles from "./site-editor.module.scss";

const SiteEditor = ({
  site,
  onSiteChange,
  onSiteDelete,
}: {
  site: SiteItem;
  onSiteChange: (site: SiteItem) => void;
  onSiteDelete: () => void;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    onSiteChange({ ...site, [name]: value });
  };

  return (
    <div className={styles.container}>
      <Input
        type="color"
        name="color"
        value={site.color}
        onChange={handleInputChange}
        style={{ width: "26px" }}
      />
      <Input
        type="text"
        name="name"
        value={site.name}
        onChange={handleInputChange}
        placeholder="Название сайта"
      />

      <Input
        type="url"
        name="url"
        value={site.url}
        onChange={handleInputChange}
        placeholder="URL сайта"
      />
      <Button onClick={onSiteDelete}>
        <CloseIcon width="15px" height="15px" fill="var(--foreground-color)" />
      </Button>
    </div>
  );
};
export default SiteEditor;
