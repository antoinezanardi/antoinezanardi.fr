<template>
  <div
    id="education"
    class="section"
  >
    <div class="cc-education container">
      <SectionTitle
        icon="fa fa-graduation-cap"
        icon-color="#F05033"
        :title="$t('MyEducation.education')"
      />

      <EducationDegreeCard
        v-for="(educationDegree, index) in educationDegrees"
        :key="index"
        class="education-degree-card"
        :education-degree="educationDegree"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EducationDegree } from "~/models/education-degree/education-degree.types";
import { SCHOOLS } from "~/models/school/school.constants";
import EducationDegreeCard from "~/components/MyEducation/EducationDegreeCard/EducationDegreeCard.vue";
import SectionTitle from "~/components/shared/Layouts/SectionTitle/SectionTitle.vue";

const { t } = useI18n();

const educationDegrees: EducationDegree[] = [
  {
    degree: {
      name: t(`Degrees.gcpACE`),
      description: [t("MyEducation.gcpACECertification")],
      obtainedAt: new Date("2022-12-01"),
    },
    school: {
      ...SCHOOLS.google,
      translatedName: t(`Schools.${SCHOOLS.google.name}`),
    },
  }, {
    degree: {
      name: t(`Degrees.CKAD`),
      description: [t("MyEducation.kubernetesCertification")],
      obtainedAt: new Date("2022-08-01"),
    },
    school: {
      ...SCHOOLS.cloudNativeComputingFoundation,
      translatedName: t(`Schools.${SCHOOLS.cloudNativeComputingFoundation.name}`),
    },
  }, {
    degree: {
      name: t(`Degrees.ITMasterDegree`),
      description: [
        t("MyEducation.firstThreeYearsInEpitech"),
        t("MyEducation.lastYearsInEpitech"),
      ],
      startedAt: new Date("2014-01-01"),
      obtainedAt: new Date("2019-01-01"),
    },
    school: {
      ...SCHOOLS.epitech,
      translatedName: t(`Schools.${SCHOOLS.epitech.name}`),
    },
  }, {
    degree: {
      name: t(`Degrees.ITCertification`),
      description: [
        t("MyEducation.internationalExperienceForManagement"),
        t("MyEducation.softManagementSkills"),
      ],
      startedAt: new Date("2017-01-01"),
      obtainedAt: new Date("2018-01-01"),
    },
    school: {
      ...SCHOOLS.laval,
      translatedName: t(`Schools.${SCHOOLS.laval.name}`),
    },
  }, {
    degree: {
      name: t(`Degrees.highSchoolDiploma`),
      description: [t("MyEducation.scientistHighSchoolDiploma")],
      startedAt: new Date("2011-01-01"),
      obtainedAt: new Date("2014-01-01"),
    },
    school: {
      ...SCHOOLS.vimeu,
      translatedName: t(`Schools.${SCHOOLS.vimeu.name}`),
    },
  },
];
</script>