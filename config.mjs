import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import node_check from "eslint-plugin-n";
import { flatConfigs as eslint_import } from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import promise_check from "eslint-plugin-promise";
import sonarjs from "eslint-plugin-sonarjs"
import unicorn from "eslint-plugin-unicorn";
import unused_imports from "eslint-plugin-unused-imports";

export const baseConfig = tseslint.config(
  
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  eslint_import.recommended,
  {
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  promise_check.configs["flat/recommended"],
  sonarjs.configs.recommended,
  {
    rules: {
      "sonarjs/redundant-type-aliases": "off",
    },
  },
  //jsdoc.configs['flat/recommended'],
  unicorn.configs.recommended,

  {
    plugins: {
      "unused-imports": unused_imports,
      "prettier": prettier,
    },
  },

  {
    rules:{
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
    "unicorn/no-array-callback-reference": "off",
    "unicorn/consistent-assert": "off",
    "eqeqeq": "error",
    "prefer-spread": "error",
    // Note: you must disable the base rule as it can report incorrect errors
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "prettier/prettier": "error",
    "import/no-unresolved": "error"
    }
  },
  

 

  node_check.configs["flat/recommended"],
  {
    "rules":{
      "n/no-missing-import": "off"
    }
  },
  
  
);
