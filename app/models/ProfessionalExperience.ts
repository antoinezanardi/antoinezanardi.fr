import type { Company } from "~/models/company/company.types";

type Job = {
  name: string;
  description: string[];
  startedAt: Date;
  finishedAt?: Date;
};

type ProfessionalExperience = {
  job: Job;
  company: Company;
};

export type { ProfessionalExperience, Job };