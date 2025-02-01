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
        :education-degree="educationDegree"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import EducationDegreeCard from "~/components/MyEducation/EducationDegreeCard/EducationDegreeCard.vue";
import SectionTitle from "~/components/shared/Layouts/SectionTitle/SectionTitle.vue";
import type { EducationDegree } from "~/models/EducationDegree";
import { SchoolNames, SCHOOLS } from "~/models/School";

const { t } = useI18n();

const educationDegrees: EducationDegree[] = [
  {
    degree: {
      name: t(`Degrees.gcpACE`),
      description: [t("MyEducation.gcpACECertification")],
      obtainedAt: new Date("2022-12-01"),
    },
    school: {
      ...SCHOOLS[SchoolNames.GOOGLE],
      translatedName: t(`Schools.${SchoolNames.GOOGLE}`),
    },
  }, {
    degree: {
      name: t(`Degrees.CKAD`),
      description: [t("MyEducation.kubernetesCertification")],
      obtainedAt: new Date("2022-08-01"),
    },
    school: {
      ...SCHOOLS[SchoolNames.CLOUD_NATIVE_COMPUTED_FOUNDATION],
      translatedName: t(`Schools.${SchoolNames.CLOUD_NATIVE_COMPUTED_FOUNDATION}`),
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
      ...SCHOOLS[SchoolNames.EPITECH],
      translatedName: t(`Schools.${SchoolNames.EPITECH}`),
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
      ...SCHOOLS[SchoolNames.LAVAL],
      translatedName: t(`Schools.${SchoolNames.LAVAL}`),
    },
  }, {
    degree: {
      name: t(`Degrees.highSchoolDiploma`),
      description: [t("MyEducation.scientistHighSchoolDiploma")],
      startedAt: new Date("2011-01-01"),
      obtainedAt: new Date("2014-01-01"),
    },
    school: {
      ...SCHOOLS[SchoolNames.VIMEU],
      translatedName: t(`Schools.${SchoolNames.VIMEU}`),
    },
  },
];
</script>