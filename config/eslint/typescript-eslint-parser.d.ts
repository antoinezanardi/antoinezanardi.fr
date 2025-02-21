declare module "@typescript-eslint/parser" {
  import type { Linter } from "eslint";

  export const Parser: Linter.Parser;
}