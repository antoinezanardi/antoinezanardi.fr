<template>
  <div id="experience" class="section">
    <div class="container cc-experience">
      <SectionTitle icon="fa fa-briefcase" icon-color="#4D9344" :title="$t('MyExperience.professionalExperience')"/>
      <ProfessionalExperienceCard
        v-for="(professionalExperience, index) of professionalExperiences"
        :key="index"
        :professional-experience="professionalExperience"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ProfessionalExperienceCard from "~/components/MyExperience/ProfessionalExperienceCard.vue";
import SectionTitle from "~/components/shared/SectionTitle.vue";
import { companies, COMPANY_NAMES } from "~/models/Company";
import type { ProfessionalExperience } from "~/models/ProfessionalExperience";

const { t } = useI18n();

const professionalExperiences: ProfessionalExperience[] = [
  {
    job: {
      name: t("MyExperience.itR&DEngineer"),
      description: [
        t("MyExperience.firstPermanentContract"),
        t("MyExperience.asProjectManager"),
        t("MyExperience.softSkills"),
        t("MyExperience.expertiseAndTechnicalSkills"),
      ],
      startedAt: new Date("2019-09-01"),
    },
    company: companies[COMPANY_NAMES.OH_MY_CODE],
  }, {
    job: {
      name: t("MyExperience.internFullStackDeveloper"),
      description: [t("MyExperience.distributionProject"), t("MyExperience.thisFinalInternship")],
      startedAt: new Date("2018-09-01"),
      finishedAt: new Date("2019-08-30"),
    },
    company: companies[COMPANY_NAMES.OH_MY_CODE],
  }, {
    job: {
      name: t("MyExperience.internFullStackDeveloper"),
      description: [t("MyExperience.firstStepsInOhMyCode"), t("MyExperience.allFunctionalitiesInOnApp")],
      startedAt: new Date("2016-09-01"),
      finishedAt: new Date("2017-04-30"),
    },
    company: companies[COMPANY_NAMES.OH_MY_CODE],
  }, {
    job: {
      name: t("MyExperience.freelanceFullStackDeveloper"),
      description: [t("MyExperience.reiterateAsFreelance"), t("MyExperience.moreResponsibilities")],
      startedAt: new Date("2016-02-01"),
      finishedAt: new Date("2016-08-30"),
    },
    company: companies[COMPANY_NAMES.SOBOOK],
  }, {
    job: {
      name: t("MyExperience.internFullStackDeveloper"),
      description: [t("MyExperience.firstInternship")],
      startedAt: new Date("2019-07-01"),
      finishedAt: new Date("2019-12-31"),
    },
    company: companies[COMPANY_NAMES.SOBOOK],
  },
];
</script>