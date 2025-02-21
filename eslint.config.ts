import type { Linter } from "eslint";

import { ESLINT_IGNORES } from "./config/eslint/eslint.constants.mjs";
import { ESLINT_GLOBAL_CONFIG } from "./config/eslint/flat-configs/eslint.global-config";
import { ESLINT_IMPORT_CONFIG } from "./config/eslint/flat-configs/eslint.import-config";
import { ESLINT_TYPESCRIPT_CONFIG } from "./config/eslint/flat-configs/eslint.typescript-config.js";
import { ESLINT_DECLARATIONS_CONFIG } from "./config/eslint/flat-configs/eslint.declarations-config";
import { ESLINT_TYPESCRIPT_DECLARATION_CONFIG } from "./config/eslint/flat-configs/eslint.typescript-declaration-config.js";
import { ESLINT_VUE_CONFIG } from "./config/eslint/flat-configs/eslint.vue-config.js";
import { ESLINT_COMPOSABLES_CONFIG } from "./config/eslint/flat-configs/eslint.composables-config";
import { ESLINT_PAGES_CONFIG } from "./config/eslint/flat-configs/eslint.pages-config.js";
import { ESLINT_STYLISTIC_CONFIG } from "./config/eslint/flat-configs/eslint.stylistic-config.js";
import { ESLINT_CONFIG_FILES_CONFIG } from "./config/eslint/flat-configs/eslint.config-files-config";
import { ESLINT_CLASSES_CONFIG } from "./config/eslint/flat-configs/eslint.classes-config";
import { ESLINT_MODULES_CONFIG } from "./config/eslint/flat-configs/eslint.modules-config.js";
import { ESLINT_PLUGINS_CONFIG } from "./config/eslint/flat-configs/eslint.plugins-config.js";
import { ESLINT_NUXT_CONFIG_FILE_CONFIG } from "./config/eslint/flat-configs/eslint.nuxt-config-file-config.js";
import { ESLINT_SERVER_FILES_CONFIG } from "./config/eslint/flat-configs/eslint.server-files.config.js";
import { ESLINT_TESTS_CONFIG } from "./config/eslint/flat-configs/eslint.tests-config.js";

export default [
  {
    name: "global-ignores",
    ignores: ESLINT_IGNORES,
  },
  ESLINT_GLOBAL_CONFIG,
  ESLINT_IMPORT_CONFIG,
  ESLINT_TYPESCRIPT_CONFIG,
  ESLINT_DECLARATIONS_CONFIG,
  ESLINT_TYPESCRIPT_DECLARATION_CONFIG,
  ESLINT_VUE_CONFIG,
  ESLINT_COMPOSABLES_CONFIG,
  ESLINT_PAGES_CONFIG,
  ESLINT_STYLISTIC_CONFIG,
  ESLINT_CONFIG_FILES_CONFIG,
  ESLINT_CLASSES_CONFIG,
  ESLINT_MODULES_CONFIG,
  ESLINT_PLUGINS_CONFIG,
  ESLINT_NUXT_CONFIG_FILE_CONFIG,
  ESLINT_SERVER_FILES_CONFIG,
  ESLINT_TESTS_CONFIG,
] satisfies Linter.Config[];