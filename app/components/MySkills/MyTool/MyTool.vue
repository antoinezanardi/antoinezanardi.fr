<template>
  <WrappedFontAwesomeIcon
    class="mx-1 tool"
    data-bs-toggle="tooltip"
    :icon="tool.iconClasses"
    :icon-color="tool.color"
    role="alertdialog"
    size="3x"
    :title="tool.description"
  />
</template>

<script setup lang="ts">
import type { MyToolProps } from "~/components/MySkills/MyTool/my-tool.types";
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";

defineProps<MyToolProps>();
</script>

<style lang="scss" scoped>
  .tool {
    cursor: pointer;
  }
</style>