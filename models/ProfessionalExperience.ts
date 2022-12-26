import type { Company } from "~/models/Company";

interface Job {
  name: string;
  description: string[];
  startedAt: Date;
  finishedAt?: Date;
}

interface ProfessionalExperience {
  job: Job;
  company: Company;
}

export type { ProfessionalExperience, Job };