import { useTranslation } from "react-i18next";
import CloseIcon from "../../../icons/close-icon";
import { SiteItem } from "../../../types";
import Button from "../../../ui/button";
import ColorPicker from "../../../ui/color-picker";
import Input from "../../../ui/input";
import { transformVarColor } from "../../../utils";
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
  const { t } = useTranslation();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    onSiteChange({ ...site, [name]: value });
  };

  const handleColorChange = (color: string) => {
    onSiteChange({ ...site, color });
  };

  return (
    <div className={styles.container}>
      <ColorPicker
        color={transformVarColor(site.color)}
        onChange={(color) => handleColorChange(color.hex)}
      />
      <Input
        type="text"
        name="name"
        value={site.name}
        onChange={handleInputChange}
        placeholder={t("site name")}
      />

      <Input
        type="url"
        name="url"
        value={site.url}
        onChange={handleInputChange}
        placeholder={t("site url")}
      />
      <Button onClick={onSiteDelete}>
        <CloseIcon width="15px" height="15px" fill="var(--foreground-color)" />
      </Button>
    </div>
  );
};
export default SiteEditor;
