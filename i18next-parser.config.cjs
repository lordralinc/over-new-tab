module.exports = {
  locales: ["en", "ru"],
  defaultNamespace: "translation",
  output: "src/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  keySeparator: false, // если ключи без вложенности
  namespaceSeparator: false,
};
