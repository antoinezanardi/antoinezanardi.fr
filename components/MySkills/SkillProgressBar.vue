<template>
  <div class="progress-container">
    <span id="badge-html" class="progress-badge">
      <WrappedFontAwesomeIcon :icon="skill.iconClasses" :icon-color="skill.color" classes="me-2"/>
      <b>
        <a
          class="text-muted"
          :href="skill.url"
          target="_blank"
          rel="noopener noreferrer"
          v-html="skill.name"
        />
      </b>
    </span>
    <div class="progress">
      <div
        class="progress-bar progress-bar-primary"
        data-aos="progress-full"
        data-aos-offset="10"
        data-aos-duration="2000"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-label="skill.name"
      />
      <span class="progress-value font-weight-bold" v-html="skill.percent"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/WrappedFontAwesomeIcon.vue";
import type { Skill } from "~/models/Skill";

defineProps<{
  skill: Skill;
}>();
</script>

<style lang="scss" scoped>
.progress {
  .progress-bar {
    width: v-bind("skill.percent");
    background-color: v-bind("skill.color");
  }
}
</style>