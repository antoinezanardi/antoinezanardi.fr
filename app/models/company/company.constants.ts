import type { CompanyName, Company } from "~/models/company/company.types";

const COMPANY_NAMES = [
  "SoBook",
  "OhMyCode",
  "Daveo",
] as const;

const COMPANIES: Record<CompanyName, Company> = Object.freeze({
  OhMyCode: {
    name: "OhMyCode",
    url: "https://www.sobook.fr/oh-my-code/",
    image: "omc-logo.png",
  },
  SoBook: {
    name: "SoBook",
    url: "https://www.sobook.fr/oh-my-code/",
    image: "sobook-logo.png",
  },
  Daveo: {
    name: "Daveo",
    url: "https://www.daveo.fr/",
    image: "daveo-logo.png",
  },
});

export {
  COMPANY_NAMES,
  COMPANIES,
};