<template>
  <div id="education" class="section">
    <div class="container cc-education">
      <SectionTitle icon="fa fa-graduation-cap" icon-color="#F05033" :title="$t('MyEducation.education')"/>
      <EducationDegreeCard
        v-for="(educationDegree, index) of educationDegrees"
        :key="index"
        :education-degree="educationDegree"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import EducationDegreeCard from "~/components/MyEducation/EducationDegreeCard.vue";
import SectionTitle from "~/components/shared/SectionTitle.vue";
import type { EducationDegree } from "~/models/EducationDegree";
import { SCHOOL_NAMES, schools } from "~/models/School";

const { t } = useI18n();

const educationDegrees: EducationDegree[] = [
  {
    degree: {
      name: t(`Degrees.CKAD`),
      description: [t("MyEducation.kubernetesCertification")],
      obtainedAt: new Date("2022-08-01"),
    },
    school: {
      ...schools[SCHOOL_NAMES.CLOUD_NATIVE_COMPUTED_FOUNDATION],
      translatedName: t(`Schools.${SCHOOL_NAMES.CLOUD_NATIVE_COMPUTED_FOUNDATION}`),
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
      ...schools[SCHOOL_NAMES.EPITECH],
      translatedName: t(`Schools.${SCHOOL_NAMES.EPITECH}`),
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
      ...schools[SCHOOL_NAMES.LAVAL],
      translatedName: t(`Schools.${SCHOOL_NAMES.LAVAL}`),
    },
  }, {
    degree: {
      name: t(`Degrees.highSchoolDiploma`),
      description: [t("MyEducation.scientistHighSchoolDiploma")],
      startedAt: new Date("2011-01-01"),
      obtainedAt: new Date("2014-01-01"),
    },
    school: {
      ...schools[SCHOOL_NAMES.VIMEU],
      translatedName: t(`Schools.${SCHOOL_NAMES.VIMEU}`),
    },
  },
];
</script>