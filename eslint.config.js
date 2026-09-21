const js = require("@eslint/js");
const babelParser = require("@babel/eslint-parser");
const prettier = require("eslint-config-prettier");
const globals = require("globals");

module.exports = [
  {
    ignores: ["lib/**", "node_modules/**"]
  },
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-typescript"]
        }
      },
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off"
    }
  },
  prettier
];
