import type { School } from "~/models/School";

type Degree = {
  name: string;
  description: string[];
  startedAt?: Date;
  obtainedAt: Date;
};

type EducationDegree = {
  degree: Degree;
  school: School;
};

export type { EducationDegree, Degree };