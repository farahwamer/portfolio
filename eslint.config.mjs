import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  { ignores: ["build/**", "coverage/**"] },
  js.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  { settings: { react: { version: "detect" } } },
];
