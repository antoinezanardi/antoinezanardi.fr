// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  css: ["~/assets/styles/scss/main.scss"],
  plugins: [{ src: "~/plugins/bootstrap.ts", mode: "client" }],
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: { strictNullChecks: true },
      include: ["../.eslintrc.js"],
    },
  },
});