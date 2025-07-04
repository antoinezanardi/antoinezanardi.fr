import Vitest from "@vitest/eslint-plugin";
import type { Linter } from "eslint";

import { MAX_NESTED_CALLBACK, MAX_PARAMS, MAX_LINES_PER_FUNCTION_DEFAULT_CONFIG } from "../eslint.constants.js";

const ESLINT_GLOBAL_CONFIG = {
  name: "global",
  languageOptions: {
    globals: {
      ...Vitest.environments.env.globals,
      global: "readonly",
      window: "readonly",
      process: "readonly",
      navigator: "readonly",
      Buffer: "readonly",
      defineNuxtConfig: "readonly",
      defineNuxtPlugin: "readonly",
      defineI18nConfig: "readonly",
      defineEventHandler: "readonly",
      useRuntimeConfig: "readonly",
      useRoute: "readonly",
      useRouter: "readonly",
      onBeforeRouteLeave: "readonly",
      definePageMeta: "readonly",
      setPageLayout: "readonly",
      createError: "readonly",
      useFetch: "readonly",
      useImage: "readonly",
      $fetch: "readonly",
      proxyRequest: "readonly",
      readBody: "readonly",
      useI18n: "readonly",
      useHead: "readonly",
      useError: "readonly",
      navigateTo: "readonly",
      storeToRefs: "readonly",
      computed: "readonly",
      defineProps: "readonly",
      defineEmits: "readonly",
      defineOgImageComponent: "readonly",
      ref: "readonly",
      Ref: "readonly",
      MaybeRef: "readonly",
      ComputedRef: "readonly",
      Component: "readonly",
      ComponentPublicInstance: "readonly",
      toRefs: "readonly",
      reactive: "readonly",
      onMounted: "readonly",
      watch: "readonly",
      onUnmounted: "readonly",
      nextTick: "readonly",
      isRef: "readonly",
      unref: "readonly",
      useScroll: "readonly",
      console: "readonly",
      document: "readonly",
      setTimeout: "readonly",
      setInterval: "readonly",
      useElementHover: "readonly",
      useMagicKeys: "readonly",
      useEventBus: "readonly",
    },
  },
  rules: {
    // ---- ESLint Rules -----
    // - Possible Problems (https://eslint.org/docs/rules/#possible-problems)
    "array-callback-return": "error",
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": "error",
    "no-constructor-return": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "off",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-native-nonconstructor": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-unassigned-vars": "error",
    "no-undef": ["error"],
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-private-class-members": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-useless-assignment": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "off",
    "use-isnan": "error",
    "valid-typeof": "error",
    // ---- ESLint Rules -----
    // - Suggestions (https://eslint.org/docs/rules/#suggestions)
    "accessor-pairs": "error",
    "arrow-body-style": ["error", "as-needed"],
    "block-scoped-var": "error",
    "camelcase": ["error", { allow: ["npm_package_version"] }],
    "capitalized-comments": ["error", "never", { ignorePattern: "TODO|Stryker" }],
    "class-methods-use-this": "error",
    "complexity": "error",
    "consistent-return": "off",
    "consistent-this": "error",
    "curly": "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "func-name-matching": "off",
    "func-names": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "id-denylist": "off",
    "id-length": ["error", { exceptions: ["t", "i", "x", "y"] }],
    "id-match": "off",
    "init-declarations": "off",
    "logical-assignment-operators": "error",
    "max-classes-per-file": "error",
    "max-depth": "off",
    "max-lines": "off",
    "max-lines-per-function": ["error", MAX_LINES_PER_FUNCTION_DEFAULT_CONFIG],
    "max-nested-callbacks": ["error", MAX_NESTED_CALLBACK],
    "max-params": ["error", MAX_PARAMS],
    "max-statements": "off",
    "new-cap": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-console": "error",
    "no-continue": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-empty-static-block": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error", {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignore: [0, -1, 1],
      },
    ],
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-object-constructor": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["error", { props: true }],
    "no-plusplus": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-exports": "off",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": ["error", "SwitchStatement", "SwitchCase", "DoWhileStatement"],
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": ["error", { allowAsStatement: true }],
    "no-warning-comments": "off",
    "no-with": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "radix": ["error", "as-needed"],
    "require-await": "error",
    "require-unicode-regexp": "error",
    "require-yield": "error",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "strict": "off",
    "symbol-description": "error",
    "vars-on-top": "error",
    "yoda": "error",
    // ---- ESLint Rules -----
    // - Layout & Formatting (https://eslint.org/docs/rules/#layout-formatting)
    "unicode-bom": "error",
  },
} satisfies Linter.Config;

export { ESLINT_GLOBAL_CONFIG };