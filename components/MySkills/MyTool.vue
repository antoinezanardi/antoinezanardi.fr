<template>
  <WrappedFontAwesomeIcon
    data-bs-toggle="tooltip"
    :title="tool.description"
    class="tool mx-1"
    :icon="tool.iconClasses"
    :icon-color="tool.color"
    size="3x"
  />
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/WrappedFontAwesomeIcon.vue";
import type { Tool } from "~/models/Tool";

defineProps<{
  tool: Tool;
}>();
</script>

<style lang="scss" scoped>
  .tool {
    cursor: pointer;
  }
</style>