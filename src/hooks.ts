import React from "preact/compat";
import config, { ConfigUpdateEvent } from "./config";
import { VisualConfig } from "./types";

export const useVisualConfig = () => {
  const [visualConfig, setVisualConfig] = React.useState(config.visualConfig);

  React.useEffect(() => {
    const listener = (e: ConfigUpdateEvent) => {
      if (e.key === "visualConfig") setVisualConfig(e.value);
    };
    config.on("update", listener);
    return () => config.off("update", listener);
  }, []);

  const _setVisualConfig = (value: VisualConfig) => {
    config.visualConfig = value;
  };

  return {
    value: visualConfig,
    setValue: _setVisualConfig,
  };
};
