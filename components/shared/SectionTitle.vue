<template>
  <div class="h2 text-center mb-5 title">
    <i class="section-icon me-2" :class="icon"/>
    <span v-html="title"/>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string;
  icon: string;
  iconColor?: string;
}>(), { iconColor: "#000000" });
</script>

<style lang="scss" scoped>
  .section-icon {
    color: v-bind(iconColor);
  }
</style>