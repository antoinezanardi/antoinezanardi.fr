<template>
  <div class="h2 text-center mb-5 title">
    <WrappedFontAwesomeIcon :icon="icon" :icon-color="iconColor" classes="section-icon me-2"/>
    <span v-html="title"/>
  </div>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/WrappedFontAwesomeIcon.vue";

withDefaults(defineProps<{
  title: string;
  icon: string;
  iconColor?: string;
}>(), { iconColor: "#000000" });
</script>