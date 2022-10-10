<template>
  <i
    class="tool fa-3x mx-1"
    :class="tool.iconClasses"
    data-bs-toggle="tooltip"
    :title="tool.description"
  />
</template>

<script setup lang="ts">
import type { Tool } from "~/models/Tool";

defineProps<{
  tool: Tool;
}>();
</script>

<style lang="scss" scoped>
  .tool {
    color: v-bind("tool.color");
    cursor: pointer;
  }
</style>