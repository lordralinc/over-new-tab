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

export const getThemes = (): { [key: string]: string } => {
  return {
    system: "стандартная",
    light: "светлая",
    dark: "тёмная",
    "high-contrast": "высокий контраст",
    retro: "ретро",
    "night-city": "ночной город",
  };
};
