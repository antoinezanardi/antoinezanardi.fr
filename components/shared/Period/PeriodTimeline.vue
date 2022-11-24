<template>
  <div id="period-timeline" class="d-flex flex-column h-100">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <img
        class="white-logo logo"
        :alt="image"
        :src="`assets/images/${image}`"
      />
    </a>
    <hr class="my-3"/>
    <div class="d-flex flex-column flex-grow-1">
      <div id="period-dates" class="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        <div class="period-date" v-html="formattedFinishedAt"/>
        <i v-if="doesPeriodHaveTwoDates" class="fa fa-arrow-up fa-2x my-3"/>
        <div v-if="formattedStartedAt" class="period-date" v-html="formattedStartedAt"/>
      </div>
      <div v-if="formattedPeriod" id="period-label" class="d-flex flex-column align-items-center">
        <hr class="w-100"/>
        <div class="font-weight-bold font-italic small" v-html="formattedPeriod"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed } from "#imports";
import { useDates } from "~/composables/useDates";
import { Period } from "~/models/Period";

const props = withDefaults(defineProps<{
  url: string;
  image: string;
  doesShowYearOnly?: boolean;
  startedAt?: Date;
  finishedAt?: Date;
}>(), {
  doesShowYearOnly: false,
  startedAt: undefined,
  finishedAt: undefined,
});

const { t } = useI18n();
const { getMonthFullName } = useDates();

const formattedPeriod = computed<string | undefined>(() => {
  if (!props.startedAt) {
    return undefined;
  }
  const finishedAt = props.finishedAt ?? new Date();
  const period = new Period(props.startedAt, finishedAt);
  let periodText = "";
  if (period.year) {
    periodText += t("shared.years", { yearCount: period.year }, period.year);
  }
  if (!props.doesShowYearOnly) {
    if (period.month && period.year) {
      periodText += ` ${t("shared.and")} `;
    }
    if (period.month) {
      periodText += t("shared.months", { monthCount: period.month });
    }
  }
  return `( ${periodText} )`;
});
const formattedStartedAt = computed<string | undefined>(() => {
  const { startedAt, doesShowYearOnly } = props;
  if (!startedAt) {
    return undefined;
  }
  const startedAtMonth = getMonthFullName(startedAt);
  const startedAtYear = startedAt.getFullYear().toString();
  return doesShowYearOnly ? startedAtYear : `${startedAtMonth} ${startedAtYear}`;
});
const formattedFinishedAt = computed<string>(() => {
  const { finishedAt, doesShowYearOnly } = props;
  if (finishedAt) {
    const finishedAtYear = finishedAt.getFullYear().toString();
    return doesShowYearOnly ? finishedAtYear : `${getMonthFullName(finishedAt)} ${finishedAtYear}`;
  }
  return t("shared.today");
});
const doesPeriodHaveTwoDates = computed<boolean>(() => formattedStartedAt.value !== undefined);
</script>

<style lang="scss" scoped>
.period-date {
  font-size: 1.25rem;
}
.logo {
  max-width: 180px;
  max-height: 75px;
  filter: brightness(0) invert(1);
}
</style>