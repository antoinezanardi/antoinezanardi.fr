import type { School } from "~/models/School";

interface Degree {
  name: string;
  description: string[];
  startedAt?: Date;
  obtainedAt: Date;
}

interface EducationDegree {
  degree: Degree;
  school: School;
}

export type { EducationDegree, Degree };