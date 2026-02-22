const nextPlugin = require("@next/eslint-plugin-next");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...jsxA11y.configs.recommended.rules,
      "jsx-a11y/alt-text": [
        "error",
        {
          elements: ["img", "object", "area", "input[type=\"image\"]"],
          img: ["Image"],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      }
    }
  },
];
