<template>
  <NuxtImg
    :alt="`${country} flag`"
    class="country-flag"
    data-bs-toggle="tooltip"
    height="25"
    loading="lazy"
    :src="`/images/flags/${countryFlagSrc}`"
    :title="$t(`Countries.${country}`)"
    width="25"
  />
</template>

<script setup lang="ts">
import type { CountryFlagProps } from "~/components/shared/Images/CountryFlag/country-flag.types";
import type { Country } from "~/models/country/country.types";

const props = defineProps<CountryFlagProps>();

const countryFlagSrc = computed<string>(() => {
  const countryFlagsSrc: Record<Country, string> = {
    france: "france-flag.webp",
    usa: "usa-flag.webp",
    canada: "canada-flag.webp",
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