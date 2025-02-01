import { OFF } from "../eslint.constants.mjs";

const ESLINT_SERVER_FILES_CONFIG = {
  name: "server-files",
  files: ["server/**/*.ts"],
  rules: { "import/no-default-export": OFF },
};

export { ESLINT_SERVER_FILES_CONFIG };