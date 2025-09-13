<template>
  <div
    class="cc-portfolio-image img-raised"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
  >
    <a
      class="project-link"
      :href="project.url"
      rel="noopener noreferrer"
      target="_blank"
    >
      <figure class="cc-effect">
        <NuxtImg
          :alt="project.name"
          class="project-image"
          loading="lazy"
          :src="`/images/projects/${project.image}`"
        />

        <figcaption class="project-metadata">
          <div
            class="h4 project-name"
          >
            {{ project.name }}
          </div>

          <p
            class="project-desc"
          >
            {{ project.description }}
          </p>
        </figcaption>
      </figure>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { MyProjectProps } from "~/components/MyPortfolio/MyProject/my-project.types";

defineProps<MyProjectProps>();
</script>

<style lang="scss" scoped>
.project-metadata {
  text-shadow: 2px 2px 15px black;
}
</style>