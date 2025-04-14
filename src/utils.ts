export function mergeClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter((it) => !!it).join(" ");
}

export const getNavigatorLanguage = (defaultLanguage: string = "en") => {
  if (localStorage.getItem("language")) return localStorage.getItem("language");
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return (
      // @ts-expect-error
      navigator.userLanguage ||
      navigator.language ||
      // @ts-expect-error
      navigator.browserLanguage ||
      defaultLanguage
    );
  }
};

export const transformVarColor = (color: string): string => {
  if (color.startsWith("var(")) {
    color = color.slice(4, -1).trim();
  }
  if (color.startsWith("--")) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(color)
      .trim();
  }
  return color;
};

export const getThemes = (): { [key: string]: string } => {
  return {
    system: "default",
    light: "light",
    dark: "dark",
    "high-contrast": "high contrast",
    retro: "retro",
    "night-city": "night city",
  };
};
