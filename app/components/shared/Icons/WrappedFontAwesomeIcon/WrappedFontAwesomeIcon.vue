<template>
  <span>
    <ClientOnly>
      <FontAwesomeIcon
        class="font-awesome-icon"
        :class="classes"
        :icon="icon"
        role="button"
        :size="size"
        :style="{ 'color': iconColor }"
      />
    </ClientOnly>
  </span>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import type { WrappedFontAwesomeIconProps } from "~/components/shared/Icons/WrappedFontAwesomeIcon/wrapped-font-awesome-icon.types";

withDefaults(defineProps<WrappedFontAwesomeIconProps>(), {
  iconColor: "#000000",
  size: undefined,
  classes: "",
});
</script>