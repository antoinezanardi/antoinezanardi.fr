<template>
  <span>
    <FontAwesomeIcon
      class="font-awesome-icon"
      :class="classes"
      :icon="icon"
      role="button"
      :size="size"
    />
  </span>
</template>

<script lang="ts" setup>
// TODO: exists because when building the app with Nuxt as static, FontAwesomeIcon duplicates its neighbor element in the generated HTML.
// it should be removed when fixed https://github.com/FortAwesome/vue-fontawesome/issues/384
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import type { WrappedFontAwesomeIconProps } from "~/components/shared/Icons/WrappedFontAwesomeIcon/wrapped-font-awesome-icon.types";

withDefaults(defineProps<WrappedFontAwesomeIconProps>(), {
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