import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.node } },
  {
    rules: {
      semi: 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-undef': 'error'
    }
  },
  pluginJs.configs.recommended,
];