<template>
  <div class="card">
    <div class="row">
      <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
        <div class="card-body cc-experience-header">
          <a :href="professionalExperience.company.url" target="_blank" rel="noopener noreferrer">
            <img
              class="white-logo company-logo"
              :alt="professionalExperience.company.image"
              :src="`/assets/images/${professionalExperience.company.image}`"
            />
          </a>
          <hr class="my-3"/>
          <div class="experience-date" v-html="formattedJobFinishedAt"/>
          <i class="fa fa-arrow-up fa-2x my-3"/>
          <div class="experience-date" v-html="formattedJobStartedAt"/>
          <div class="font-weight-bold font-italic small mt-4" v-html="formattedJobPeriod"/>
        </div>
      </div>
      <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
        <div class="card-body">
          <div class="h5" v-html="professionalExperience.job.name"/>
          <p v-for="(paragraph, index) of professionalExperience.job.description" :key="index" v-html="paragraph"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed } from "#imports";
import { useDates } from "~/composables/useDates";
import type { ProfessionalExperience } from "~/models/ProfessionalExperience";

const props = defineProps<{
  professionalExperience: ProfessionalExperience;
}>();

const { t } = useI18n();
const { getMonthFullName, getPeriod } = useDates();

const formattedJobPeriod = computed<string>(() => {
  const finishedAt = props.professionalExperience.job.finishedAt ?? new Date();
  const period = getPeriod(props.professionalExperience.job.startedAt, finishedAt);
  let periodText = "";
  if (period.year) {
    periodText += t("shared.years", { yearCount: period.year }, period.year);
  }
  if (period.month && period.year) {
    periodText += ` ${t("shared.and")} `;
  }
  if (period.month) {
    periodText += t("shared.months", { monthCount: period.month });
  }
  return `( ${periodText} )`;
});
const formattedJobStartedAt = computed<string>(() => {
  const { startedAt } = props.professionalExperience.job;
  const monthFullName = getMonthFullName(props.professionalExperience.job.startedAt);
  return `${monthFullName} ${startedAt.getFullYear()}`;
});
const formattedJobFinishedAt = computed<string>(() => {
  const { finishedAt } = props.professionalExperience.job;
  return finishedAt ? `${getMonthFullName(finishedAt)} ${finishedAt.getFullYear()}` : t("shared.today");
});
</script>

<style lang="scss" scoped>
.cc-experience-header {
  padding-top: 25px !important;
}
@media (max-width: 768px) {
  .cc-experience-header {
    padding-right: 1.25rem !important;
  }
}
.company-logo {
  max-width: 180px;
  max-height: 75px;
  filter: brightness(0) invert(1);
}
.experience-date {
  font-size: 1.25rem;
}
</style>