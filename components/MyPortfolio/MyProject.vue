<template>
  <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <a target="_blank" rel="noopener noreferrer" :href="project.url">
      <figure class="cc-effect">
        <NuxtImg :src="`/images/projects/${project.image}`" format="webp" :alt="project.name"/>
        <figcaption class="project-metadata">
          <div class="h4" v-html="project.name"/>
          <p class="project-desc" v-html="project.description"/>
        </figcaption>
      </figure>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/models/Project";

defineProps<{
  project: Project;
}>();
</script>

<style lang="scss" scoped>
.project-metadata {
  text-shadow: 2px 2px 15px black;
}
</style>