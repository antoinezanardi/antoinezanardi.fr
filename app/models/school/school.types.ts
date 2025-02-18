import type { TupleToUnion } from "type-fest";

import type { Country } from "~/models/country/country.types";
import type { SCHOOL_NAMES } from "~/models/school/school.constants";

type SchoolName = TupleToUnion<typeof SCHOOL_NAMES>;

type School = {
  name: SchoolName;
  translatedName?: string;
  city?: string;
  country: Country;
  image?: string;
  url: string;
};

export type { School, SchoolName };