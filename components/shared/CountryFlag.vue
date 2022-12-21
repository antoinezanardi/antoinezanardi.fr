<template>
  <img
    class="country-flag"
    :src="`assets/images/${countryFlagSrc}`"
    :alt="`${country} flag`"
    data-bs-toggle="tooltip"
    :title="$t(`Countries.${country}`)"
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
    FRANCE: "france-flag.png",
    USA: "usa-flag.png",
    CANADA: "canada-flag.png",
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