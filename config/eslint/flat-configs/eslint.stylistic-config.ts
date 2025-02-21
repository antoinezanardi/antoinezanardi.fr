import StylisticPlugin from "@stylistic/eslint-plugin";
import type { Linter } from "eslint";

import { INDENT_SPACE_COUNT, MAX_LENGTH_DEFAULT_CONFIG } from "../eslint.constants.mjs";

const ESLINT_STYLISTIC_CONFIG = {
  name: "stylistic",
  plugins: { "@stylistic": StylisticPlugin },
  rules: {
    "@stylistic/array-bracket-newline": ["error", { multiline: true }],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "@stylistic/array-element-newline": ["error", "consistent"],
    "@stylistic/arrow-parens": ["error", "as-needed"],
    "@stylistic/arrow-spacing": "error",
    "@stylistic/block-spacing": "error",
    "@stylistic/brace-style": "error",
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/comma-spacing": [
      "error", {
        before: false,
        after: true,
      },
    ],
    "@stylistic/comma-style": "error",
    "@stylistic/computed-property-spacing": "error",
    "@stylistic/dot-location": ["error", "property"],
    "@stylistic/eol-last": ["error", "never"],
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/func-call-spacing": "error",
    "@stylistic/function-call-spacing": "error",
    "@stylistic/function-paren-newline": ["error", "multiline"],
    "@stylistic/generator-star-spacing": [
      "error", {
        before: false,
        after: true,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": "error",
    "@stylistic/indent": [
      "error",
      INDENT_SPACE_COUNT,
      { FunctionExpression: { parameters: "first" } },
    ],
    "@stylistic/indent-binary-ops": [
      "error",
      INDENT_SPACE_COUNT,
    ],
    "@stylistic/jsx-child-element-spacing": "error",
    "@stylistic/jsx-closing-bracket-location": "error",
    "@stylistic/jsx-closing-tag-location": "error",
    "@stylistic/jsx-curly-brace-presence": "error",
    "@stylistic/jsx-curly-newline": "error",
    "@stylistic/jsx-curly-spacing": "error",
    "@stylistic/jsx-equals-spacing": "error",
    "@stylistic/jsx-first-prop-new-line": "error",
    "@stylistic/jsx-function-call-newline": "error",
    "@stylistic/jsx-indent-props": "error",
    "@stylistic/jsx-max-props-per-line": "error",
    "@stylistic/jsx-newline": "error",
    "@stylistic/jsx-one-expression-per-line": "error",
    "@stylistic/jsx-pascal-case": "error",
    "@stylistic/jsx-props-no-multi-spaces": "error",
    "@stylistic/jsx-quotes": "error",
    "@stylistic/jsx-self-closing-comp": "error",
    "@stylistic/jsx-sort-props": "error",
    "@stylistic/jsx-tag-spacing": "error",
    "@stylistic/jsx-wrap-multilines": "error",
    "@stylistic/key-spacing": ["error", { mode: "strict" }],
    "@stylistic/keyword-spacing": "error",
    "@stylistic/line-comment-position": "error",
    "@stylistic/linebreak-style": "error",
    "@stylistic/lines-around-comment": "off",
    "@stylistic/lines-between-class-members": ["error", "always"],
    "@stylistic/max-len": [
      "error", {
        ...MAX_LENGTH_DEFAULT_CONFIG,
        ignoreComments: true,
      },
    ],
    "@stylistic/member-delimiter-style": "error",
    "@stylistic/max-statements-per-line": ["error", { max: 1 }],
    "@stylistic/multiline-comment-style": ["error", "separate-lines"],
    "@stylistic/multiline-ternary": ["error", "never"],
    "@stylistic/new-parens": "error",
    "@stylistic/newline-per-chained-call": "off",
    "@stylistic/no-confusing-arrow": "error",
    "@stylistic/no-extra-parens": [
      "error",
      "all",
      {
        returnAssign: false,
        enforceForArrowConditionals: false,
      },
    ],
    "@stylistic/no-extra-semi": "error",
    "@stylistic/no-floating-decimal": "error",
    "@stylistic/no-mixed-operators": "off",
    "@stylistic/no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "@stylistic/no-tabs": "off",
    "@stylistic/no-trailing-spaces": ["error", { skipBlankLines: true }],
    "@stylistic/no-whitespace-before-property": "error",
    "@stylistic/nonblock-statement-body-position": ["error", "below"],
    "@stylistic/object-curly-newline": [
      "error", {
        multiline: true,
        consistent: true,
      },
    ],
    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "@stylistic/one-var-declaration-per-line": ["error", "always"],
    "@stylistic/operator-linebreak": ["error", "after"],
    "@stylistic/padded-blocks": ["error", "never"],
    "@stylistic/padding-line-between-statements": [
      "error", {
        blankLine: "always",
        prev: ["interface", "type", "class", "export"],
        next: "*",
      }, {
        blankLine: "always",
        prev: "*",
        next: ["interface", "type", "class", "export", "function"],
      }, {
        blankLine: "always",
        prev: "*",
        next: ["return"],
      }, {
        blankLine: "never",
        prev: ["block-like"],
        next: ["return"],
      },
    ],
    "@stylistic/quote-props": ["error", "consistent-as-needed"],
    "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: true }],
    "@stylistic/rest-spread-spacing": "error",
    "@stylistic/semi": ["error", "always"],
    "@stylistic/semi-spacing": "error",
    "@stylistic/semi-style": ["error", "last"],
    "@stylistic/space-before-blocks": [
      "error", {
        functions: "always",
        keywords: "always",
        classes: "always",
      },
    ],
    "@stylistic/space-before-function-paren": ["error", "never"],
    "@stylistic/space-in-parens": ["error", "never"],
    "@stylistic/space-infix-ops": "error",
    "@stylistic/space-unary-ops": [
      "error", {
        words: true,
        nonwords: false,
      },
    ],
    "@stylistic/spaced-comment": "error",
    "@stylistic/switch-colon-spacing": "error",
    "@stylistic/template-curly-spacing": "error",
    "@stylistic/template-tag-spacing": "error",
    "@stylistic/curly-newline": [
      "error", {
        multiline: true,
        consistent: true,
      },
    ],
    "@stylistic/type-annotation-spacing": "error",
    "@stylistic/type-generic-spacing": "error",
    "@stylistic/type-named-tuple-spacing": "error",
    "@stylistic/wrap-iife": "error",
    "@stylistic/wrap-regex": "error",
    "@stylistic/yield-star-spacing": "error",
  },
} satisfies Linter.Config;

export { ESLINT_STYLISTIC_CONFIG };