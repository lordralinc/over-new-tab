module.exports = {
  locales: ["en", "ru"],
  defaultNamespace: "translation",
  output: "src/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  keySeparator: false,
  namespaceSeparator: false,
};
