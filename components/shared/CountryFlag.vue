<template>
  <NuxtImg
    class="country-flag"
    :src="`/images/flags/${countryFlagSrc}`"
    :alt="`${country} flag`"
    data-bs-toggle="tooltip"
    :title="$t(`Countries.${country}`)"
    format="webp"
  />
</template>

<script setup lang="ts">
import { computed } from "#imports";
import type { COUNTRIES } from "~/models/Country";

const props = defineProps<{
    country: COUNTRIES;
}>();

const countryFlagSrc = computed<string>(() => {
  const countryFlagsSrc: Record<COUNTRIES, string> = {
    FRANCE: "france-flag.jpg",
    USA: "usa-flag.jpg",
    CANADA: "canada-flag.jpg",
  };
  return countryFlagsSrc[props.country];
});
</script>

<style scoped lang="scss">
.country-flag {
  width: 25px;
  height: 25px;
}
</style>