<template>
  <footer class="footer py-1">
    <div
      class="container text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <LinkedInButton class="me-2"/>

      <GitHubButton/>
    </div>

    <div class="font-italic h4 my-2 text-center text-muted title">
      <span>
        {{ ANTOINE_ZANARDI_FULL_NAME }}
      </span>

      <span>
        {{ ` - ${fullYear}` }}
      </span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import GitHubButton from "~/components/shared/Buttons/GitHubButton.vue";
import LinkedInButton from "~/components/shared/Buttons/LinkedInButton.vue";
import { ANTOINE_ZANARDI_FULL_NAME } from "~/shared/constants/antoine-zanardi.constants";

const fullYear = computed<number>(() => new Date().getFullYear());
</script>