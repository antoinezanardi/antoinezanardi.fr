import type { TupleToUnion } from "type-fest";

import type { COUNTRIES } from "~/models/country/country.constants";

type Country = TupleToUnion<typeof COUNTRIES>;

export type { Country };