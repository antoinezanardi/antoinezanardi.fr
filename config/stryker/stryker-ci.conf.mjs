import defaultConfig from "./stryker.conf.mjs";

const reporters = [
  "progress-append-only",
  "html",
  "json",
];

const ciConfig = {
  ...defaultConfig,
  reporters,
  concurrency: 2,
};

if (process.env.STRYKER_DASHBOARD_API_KEY !== undefined) {
  ciConfig.reporters.push("dashboard");

  const dashboard = {
    project: "github.com/antoinezanardi/antoinezanardi.fr",
    baseUrl: "https://dashboard.stryker-mutator.io/api/reports",
    reportType: "full",
  };

  if (process.env.STRYKER_DASHBOARD_VERSION !== undefined) {
    dashboard.version = process.env.STRYKER_DASHBOARD_VERSION;
  }

  ciConfig.dashboard = dashboard;
}

export default ciConfig;