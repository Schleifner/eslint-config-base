module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest",
    "ecmaFeatures": {
      "jsx": true
    },
    "project": ["./tsconfig.json"]
  },
  "settings": {
    "node": {
      "tryExtensions": [".js", ".ts", ".mts", ".mjs"]
    },
    // make import/no-unresolved rule work for 'import xx from "./index.js"'
    "import/resolver": "typescript"
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "jsdoc",
    "node",
    "promise",
    "sonarjs",
    "prettier",
    "unicorn",
    "unused-imports"
  ],
  "extends": [
    "prettier",
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "plugin:node/recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  "rules": {
    "eqeqeq": "error",
    "prefer-spread": "error",
    // Note: you must disable the base rule as it can report incorrect errors
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "prettier/prettier": "error",
    "import/no-unresolved": "error",
    "node/no-missing-import": "off",
    "unicorn/no-new-array": "off",
    "unicorn/filename-case": [
      "error",
      {
        "case": "camelCase"
      }
    ],
    "unicorn/no-null": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/import-style": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-string-replace-all": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/no-array-callback-reference": "off"
  },
};
