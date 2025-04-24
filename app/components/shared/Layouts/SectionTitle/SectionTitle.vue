<template>
  <h2 class="h2 mb-4 text-center title">
    <WrappedFontAwesomeIcon
      id="section-title-icon"
      classes="section-icon me-2"
      :icon="icon"
      :icon-color="iconColor"
    />

    <span class="section-title-text">
      {{ title }}
    </span>
  </h2>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
import type { SectionTitleProps } from "~/components/shared/Layouts/SectionTitle/section-title.types";

withDefaults(defineProps<SectionTitleProps>(), { iconColor: "#000000" });
</script>