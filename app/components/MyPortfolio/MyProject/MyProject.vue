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

        <figcaption class="d-flex flex-column h-100 justify-content-center project-metadata">
          <div
            class="h2 project-name py-3"
          >
            {{ project.name }}
          </div>

          <p
            class="align-items-center d-flex flex-column justify-content-center project-desc"
          >
            {{ project.description }}

            <WrappedFontAwesomeIcon
              classes="my-3"
              icon="fa-arrow-up-right-from-square"
              :icon-color="WHITE_COLOR"
              size="2x"
            />
          </p>
        </figcaption>
      </figure>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { MyProjectProps } from "~/components/MyPortfolio/MyProject/my-project.types";
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
import { WHITE_COLOR } from "~/shared/constants/style.constants";

defineProps<MyProjectProps>();
</script>

<style lang="scss" scoped>
.project-metadata {
  text-shadow: 2px 2px 15px black;
}
</style>