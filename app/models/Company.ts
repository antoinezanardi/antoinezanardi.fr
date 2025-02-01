enum CompanyNames {
  SOBOOK = "SoBook",
  OH_MY_CODE = "OhMyCode",
  DAVEO = "Daveo",
}

type Company = {
  name: CompanyNames;
  image: string;
  url: string;
};

const COMPANIES: Record<CompanyNames, Company> = {
  [CompanyNames.OH_MY_CODE]: {
    name: CompanyNames.OH_MY_CODE,
    url: "https://www.sobook.fr/oh-my-code/",
    image: "omc-logo.png",
  },
  [CompanyNames.SOBOOK]: {
    name: CompanyNames.SOBOOK,
    url: "https://www.sobook.fr/oh-my-code/",
    image: "sobook-logo.png",
  },
  [CompanyNames.DAVEO]: {
    name: CompanyNames.DAVEO,
    url: "https://www.daveo.fr/",
    image: "daveo-logo.png",
  },
};

export type { Company };

export { CompanyNames, COMPANIES };