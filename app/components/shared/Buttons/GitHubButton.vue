<template>
  <a
    :aria-label="$t('GitHubButton.discoverMyProjects')"
    class="btn btn-icon btn-lg btn-primary btn-round"
    data-bs-toggle="tooltip"
    href="https://github.com/antoinezanardi"
    rel="noopener noreferrer"
    target="_blank"
    :title="$t('GitHubButton.discoverMyProjects')"
  >
    <WrappedFontAwesomeIcon
      icon="fa-brands fa-github"
      icon-color="#000000"
      size="2x"
    />
  </a>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
</script>