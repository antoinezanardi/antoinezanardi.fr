<template>
  <div
    id="period-timeline"
    class="d-flex flex-column h-100"
  >
    <a
      id="timeline-logo"
      :href="url"
      rel="noopener noreferrer"
      target="_blank"
    >
      <NuxtImg
        :alt="imageAlt"
        class="logo timeline-logo-image white-logo"
        format="webp"
        :src="`/images/logos/${image}`"
      />
    </a>

    <hr class="my-3">

    <div class="d-flex flex-column flex-grow-1">
      <div
        id="period-dates"
        :aria-label="periodDatesAriaLabel"
        class="align-items-center d-flex flex-column flex-grow-1 justify-content-center"
        role="region"
      >
        <div
          id="finished-at-date"
          class="period-date"
        >
          {{ formattedFinishedAt }}
        </div>

        <WrappedFontAwesomeIcon
          v-if="doesPeriodHaveTwoDates"
          id="arrow-up-icon"
          classes="my-3"
          icon="fa-arrow-up"
          icon-color="#00000"
          size="2x"
        />

        <div
          v-if="formattedStartedAt"
          id="started-at-date"
          class="period-date"
        >
          {{ formattedStartedAt }}
        </div>
      </div>

      <div
        v-if="formattedPeriod"
        id="period-label"
        class="align-items-center d-flex flex-column"
      >
        <hr class="w-100">

        <div
          class="font-italic font-weight-bold small"
        >
          {{ formattedPeriod }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PeriodTimelineProps } from "~/components/shared/Period/period-timeline.types";
import { useDates } from "~/composables/useDates";
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
import { Period } from "~/models/period/period.class";

const props = withDefaults(defineProps<PeriodTimelineProps>(), {
  doesShowYearOnly: false,
  startedAt: undefined,
  finishedAt: undefined,
});

const { t } = useI18n();
const { getMonthFullName } = useDates();

const formattedPeriod = computed<string>(() => {
  if (!props.startedAt) {
    return "";
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

const formattedStartedAt = computed<string>(() => {
  const { startedAt, doesShowYearOnly } = props;
  if (!startedAt) {
    return "";
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

const doesPeriodHaveTwoDates = computed<boolean>(() => !!formattedStartedAt.value);

const periodDatesAriaLabel = computed<string>(() => {
  const { startedAt } = props;
  if (startedAt) {
    return t("PeriodTimeline.periodDatesAriaLabel", {
      startedAt: formattedStartedAt.value,
      finishedAt: formattedFinishedAt.value,
    });
  }
  return t("PeriodTimeline.obtainedAtAriaLabel", {
    obtainedAt: formattedFinishedAt.value,
  });
});
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