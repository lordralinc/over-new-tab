import localforage from "localforage";
import { useVisualConfig } from "../../hooks";
import Button from "../../ui/button";
import ColorPicker from "../../ui/color-picker";
import Group from "../../ui/group";
import ImagePicker from "../../ui/image-picker";
import SelectField from "../../ui/select-field";
import { transformVarColor } from "../../utils";
import { useTranslation } from "react-i18next";

export default function BackgroundEditor() {
  const { t } = useTranslation();
  const { value: visualConfig, setValue: setVisualConfig } = useVisualConfig();

  return (
    <Group variant="ghost" title={t("background settings")} className="mb5">
      <SelectField
        id="bg-type-selector"
        label={t("type")}
        value={visualConfig.backgroundType}
        onChange={(e) =>
          setVisualConfig({
            ...visualConfig,
            backgroundType: e as "theme" | "color" | "image",
          })
        }
        options={[
          { value: "theme", name: t("theme") },
          { value: "color", name: t("color") },
          { value: "image", name: t("image") },
        ]}
      />
      {visualConfig.backgroundType === "color" && (
        <div className="mb3">
          Цвет фона:
          <ColorPicker
            color={
              visualConfig.backgroundColor ??
              transformVarColor("--background-color")
            }
            onChange={(color) =>
              setVisualConfig({ ...visualConfig, backgroundColor: color.hex })
            }
          />
        </div>
      )}
      {visualConfig.backgroundType === "image" && (
        <>
          <SelectField
            id="bg-scale-selector"
            label={t("scale")}
            value={visualConfig.backgroundImageScale ?? "cover"}
            onChange={(e) =>
              setVisualConfig({
                ...visualConfig,
                backgroundImageScale: e as "cover" | "contain" | "strech",
              })
            }
            options={[
              { value: "cover", name: t("cover") },
              { value: "contain", name: t("contain") },
              { value: "strech", name: t("strech") },
            ]}
          />
          <div className="mb3">
            <label>
              {t("background image")}
              <ImagePicker
                value={visualConfig.backgroundImageId}
                onChange={(id) =>
                  setVisualConfig({ ...visualConfig, backgroundImageId: id })
                }
              />
            </label>
          </div>
          <div className="mb3 w100">
            <Button className="w100" onClick={() => localforage.clear()}>
              {t("delete images")}
            </Button>
          </div>
        </>
      )}
    </Group>
  );
}
