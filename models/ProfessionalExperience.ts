interface Company {
  name: string;
  image: string;
  url: string;
}

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

export type { ProfessionalExperience, Company, Job };