<template>
  <NuxtImg
    :alt="`${country} flag`"
    class="country-flag"
    data-bs-toggle="tooltip"
    format="webp"
    :src="`/images/flags/${countryFlagSrc}`"
    :title="$t(`Countries.${country}`)"
  />
</template>

<script setup lang="ts">
import type { CountryFlagProps } from "~/components/shared/Images/CountryFlag/country-flag.types";
import type { Country } from "~/models/country/country.types";

const props = defineProps<CountryFlagProps>();

const countryFlagSrc = computed<string>(() => {
  const countryFlagsSrc: Record<Country, string> = {
    france: "france-flag.jpg",
    usa: "usa-flag.jpg",
    canada: "canada-flag.jpg",
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