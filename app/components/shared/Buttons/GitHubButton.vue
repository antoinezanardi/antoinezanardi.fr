<template>
  <a
    :aria-label="$t('GitHubButton.discoverMyProjects')"
    class="btn btn-icon btn-lg btn-primary btn-round"
    data-bs-toggle="tooltip"
    :href="ANTOINE_ZANARDI_GITHUB_URL"
    rel="noopener noreferrer"
    target="_blank"
    :title="$t('GitHubButton.discoverMyProjects')"
  >
    <WrappedFontAwesomeIcon
      icon="fa-brands fa-github"
      icon-color="white"
      size="2x"
    />
  </a>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
import { ANTOINE_ZANARDI_GITHUB_URL } from "~/shared/constants/antoine-zanardi.constants";
</script>