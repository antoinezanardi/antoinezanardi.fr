<template>
  <div class="progress-container">
    <span
      id="badge-html"
      class="progress-badge"
    >
      <WrappedFontAwesomeIcon
        classes="me-2"
        :icon="skill.iconClasses"
        :icon-color="skill.color"
      />

      <b>
        <a
          class="text-muted"
          :href="skill.url"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ skill.name }}
        </a>
      </b>
    </span>

    <div class="progress">
      <div
        :aria-label="skill.name"
        aria-valuemax="100"
        aria-valuemin="0"
        class="progress-bar progress-bar-primary"
        data-aos="progress-full"
        data-aos-duration="2000"
        data-aos-offset="10"
        role="progressbar"
      />

      <span
        class="font-weight-bold progress-value"
      >
        {{ skill.percent }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillProgressBarProps } from "~/components/MySkills/SkillProgressBar/skill-progress-bar.types";
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";

defineProps<SkillProgressBarProps>();
</script>

<style lang="scss" scoped>
.progress {
  .progress-bar {
    width: v-bind("skill.percent");
    background-color: v-bind("skill.color");
  }
}
</style>