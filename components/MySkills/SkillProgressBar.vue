<template>
  <div class="progress-container">
    <span id="badge-html" class="progress-badge">
      <i class="me-2" :class="skill.iconClasses"/>
      <b>
        <a
          class="text-muted"
          href="https://fr.wikipedia.org/wiki/HTML5"
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
      />
      <span class="progress-value" v-html="skill.percent"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "~/models/Skill";

defineProps<{
  skill: Skill;
}>();
</script>

<style lang="scss" scoped>
.progress-badge {
  i {
    color: v-bind("skill.color");
  }
}
.progress {
  .progress-bar {
    width: v-bind("skill.percent");
    background-color: v-bind("skill.color");
  }
}
</style>