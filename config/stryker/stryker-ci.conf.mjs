import defaultConfig from "./stryker.conf.mjs";

const reporters = [
  "progress-append-only",
  "html",
  "json",
];

let dashboard;

if (process.env.STRYKER_DASHBOARD_API_KEY !== undefined) {
  reporters.push("dashboard");

  dashboard = {
    project: "github.com/antoinezanardi/antoinezanardi.fr",
    baseUrl: "https://dashboard.stryker-mutator.io/api/reports",
    reportType: "full",
    version: process.env.STRYKER_VERSION,
  };
}

export default {
  ...defaultConfig,
  concurrency: 2,
  reporters,
  dashboard,
};