import React from "preact/compat";
import { useVisualConfig } from "./hooks";

import styles from "./background.module.scss";
import { transformVarColor } from "./utils";
import localforage from "localforage";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const { value: visualConfig } = useVisualConfig();

  const [images, setImages] = React.useState<{ [key: string]: string }>({});

  React.useEffect(() => {
    (async () => {
      const keys = await localforage.keys();
      const items: { [key: string]: string } = {};

      for (const key of keys) {
        const src = await localforage.getItem<string>(key);
        if (typeof src === "string") {
          items[key] = src;
        }
      }
      setImages(items);
    })();
  }, [visualConfig]);

  let style = React.useMemo(() => {
    if (visualConfig.backgroundType === "theme")
      return { backgroundColor: "var(--background-color)" };
    if (visualConfig.backgroundType === "color") {
      const currentThemeColor = transformVarColor("--background-color");
      return {
        backgroundColor: visualConfig.backgroundColor ?? currentThemeColor,
      };
    }
    if (visualConfig.backgroundType === "image") {
      const src = images[visualConfig.backgroundImageId ?? ""];
      const result = {
        backgroundImage: src ? `url('${src}')` : undefined,
        backgroundSize:
          visualConfig.backgroundImageScale === "strech"
            ? "100% 100%"
            : visualConfig.backgroundImageScale,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
      return result;
    }
    return { backgroundColor: "var(--background-color)" };
  }, [visualConfig, images]);

  return (
    <div className={styles.background} style={style}>
      {children}
    </div>
  );
}
