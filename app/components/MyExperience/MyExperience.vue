<template>
  <div
    id="experience"
    class="section"
  >
    <div class="cc-experience container">
      <SectionTitle
        icon="fa fa-briefcase"
        icon-color="#4D9344"
        :title="$t('MyExperience.professionalExperience')"
      />

      <ProfessionalExperienceCard
        v-for="(professionalExperience, index) in professionalExperiences"
        :key="index"
        class="professional-experience-card"
        :professional-experience="professionalExperience"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfessionalExperienceCard from "~/components/MyExperience/ProfessionalExperienceCard/ProfessionalExperienceCard.vue";
import SectionTitle from "~/components/shared/Layouts/SectionTitle/SectionTitle.vue";
import { COMPANIES } from "~/models/company/company.constants";
import type { ProfessionalExperience } from "~/models/professional-experience/professional-experience.types";

const { t } = useI18n();

const professionalExperiences: ProfessionalExperience[] = [
  {
    job: {
      name: t("MyExperience.fullStackDeveloperConsultant"),
      description: [
        t("MyExperience.iJoinedDaveo"),
        t("MyExperience.whatIsConsulting"),
        t("MyExperience.myMissionsAsConsultant"),
        t("MyExperience.cloudProductCertifications"),
        t("MyExperience.conferenceAndWorkshops"),
      ],
      startedAt: new Date("2022-04-01"),
    },
    company: COMPANIES.Daveo,
  }, {
    job: {
      name: t("MyExperience.itR&DEngineer"),
      description: [
        t("MyExperience.firstPermanentContract"),
        t("MyExperience.asProjectManager"),
        t("MyExperience.softSkills"),
        t("MyExperience.expertiseAndTechnicalSkills"),
      ],
      startedAt: new Date("2019-09-01"),
      finishedAt: new Date("2022-03-31"),
    },
    company: COMPANIES.OhMyCode,
  }, {
    job: {
      name: t("MyExperience.internFullStackDeveloper"),
      description: [t("MyExperience.distributionProject"), t("MyExperience.thisFinalInternship")],
      startedAt: new Date("2018-09-01"),
      finishedAt: new Date("2019-08-30"),
    },
    company: COMPANIES.OhMyCode,
  }, {
    job: {
      name: t("MyExperience.internFullStackDeveloper"),
      description: [t("MyExperience.firstStepsInOhMyCode"), t("MyExperience.allFunctionalitiesInOnApp")],
      startedAt: new Date("2016-09-01"),
      finishedAt: new Date("2017-04-30"),
    },
    company: COMPANIES.OhMyCode,
  }, {
    job: {
      name: t("MyExperience.freelanceFullStackDeveloper"),
      description: [t("MyExperience.reiterateAsFreelance"), t("MyExperience.moreResponsibilities")],
      startedAt: new Date("2016-02-01"),
      finishedAt: new Date("2016-08-30"),
    },
    company: COMPANIES.SoBook,
  }, {
    job: {
      name: t("MyExperience.internFullStackDeveloper"),
      description: [t("MyExperience.firstInternship")],
      startedAt: new Date("2015-07-01"),
      finishedAt: new Date("2015-12-31"),
    },
    company: COMPANIES.SoBook,
  },
];
</script>