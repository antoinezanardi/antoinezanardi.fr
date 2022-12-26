<template>
  <span>
    <FontAwesomeIcon class="font-awesome-icon" :icon="icon" :size="size" :class="classes" role="button"/>
  </span>
</template>

<script lang="ts" setup>
// TODO: exists because when building the app with Nuxt as static, FontAwesomeIcon duplicates its neighbor element in the generated HTML.
// it should be removed when fixed https://github.com/FortAwesome/vue-fontawesome/issues/384
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

withDefaults(defineProps<{
  icon: string;
  iconColor?: string;
  size?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | "lg" | "sm" | "xs";
  classes?: string;
}>(), {
  iconColor: "#000000",
  size: undefined,
  classes: "",
});
</script>

<style lang="scss" scoped>
  .font-awesome-icon {
    color: v-bind(iconColor);
  }
</style>