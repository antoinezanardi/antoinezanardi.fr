import type { TupleToUnion } from "type-fest";

import type { COMPANY_NAMES } from "~/models/company/company.constants";

type CompanyName = TupleToUnion<typeof COMPANY_NAMES>;

type Company = {
  name: CompanyName;
  image: string;
  url: string;
};

export type { Company, CompanyName };