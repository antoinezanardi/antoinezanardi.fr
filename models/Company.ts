enum COMPANY_NAMES {
  SOBOOK = "SoBook",
  OH_MY_CODE = "OhMyCode",
  DAVEO = "Daveo",
}

interface Company {
  name: COMPANY_NAMES;
  image: string;
  url: string;
}

const companies: Record<COMPANY_NAMES, Company> = {
  [COMPANY_NAMES.OH_MY_CODE]: {
    name: COMPANY_NAMES.OH_MY_CODE,
    url: "https://www.sobook.fr/oh-my-code/",
    image: "omc-logo.png",
  },
  [COMPANY_NAMES.SOBOOK]: {
    name: COMPANY_NAMES.SOBOOK,
    url: "https://www.sobook.fr/oh-my-code/",
    image: "sobook-logo.png",
  },
  [COMPANY_NAMES.DAVEO]: {
    name: COMPANY_NAMES.DAVEO,
    url: "https://www.daveo.fr/",
    image: "daveo-logo.png",
  },
};

export type { Company };

export { COMPANY_NAMES, companies };