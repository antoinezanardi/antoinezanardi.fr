<template>
  <div id="period-timeline">
    <a :href="company.url" target="_blank" rel="noopener noreferrer">
      <img
        class="white-logo company-logo"
        :alt="company.image"
        :src="`assets/images/${company.image}`"
      />
    </a>
    <hr class="my-3"/>
    <div class="period-date" v-html="formattedFinishedAt"/>
    <i class="fa fa-arrow-up fa-2x my-3"/>
    <div class="period-date" v-html="formattedStartedAt"/>
    <div class="font-weight-bold font-italic small mt-4" v-html="formattedPeriod"/>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed } from "#imports";
import { useDates } from "~/composables/useDates";
import type { Company } from "~/models/Company";
import { Period } from "~/models/Period";

const props = defineProps<{
  company: Company;
  startedAt: Date;
  finishedAt?: Date;
}>();

const { t } = useI18n();
const { getMonthFullName } = useDates();

const formattedPeriod = computed<string>(() => {
  const finishedAt = props.finishedAt ?? new Date();
  const period = new Period(props.startedAt, finishedAt);
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
const formattedStartedAt = computed<string>(() => {
  const { startedAt } = props;
  const monthFullName = getMonthFullName(startedAt);
  return `${monthFullName} ${startedAt.getFullYear()}`;
});
const formattedFinishedAt = computed<string>(() => {
  const { finishedAt } = props;
  return finishedAt ? `${getMonthFullName(finishedAt)} ${finishedAt.getFullYear()}` : t("shared.today");
});
</script>

<style lang="scss" scoped>
.period-date {
  font-size: 1.25rem;
}
.company-logo {
  max-width: 180px;
  max-height: 75px;
  filter: brightness(0) invert(1);
}
</style>