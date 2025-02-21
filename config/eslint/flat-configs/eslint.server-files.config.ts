import type { Linter } from "eslint";

const ESLINT_SERVER_FILES_CONFIG = {
  name: "server-files",
  files: ["server/**/*.ts"],
  rules: { "import/no-default-export": "off" },
} satisfies Linter.Config;

export { ESLINT_SERVER_FILES_CONFIG };