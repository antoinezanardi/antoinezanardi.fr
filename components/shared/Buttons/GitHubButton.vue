<template>
  <a
    class="btn btn-primary btn-round btn-lg btn-icon"
    href="https://github.com/antoinezanardi"
    target="_blank"
    rel="noopener noreferrer"
    data-bs-toggle="tooltip"
    :title="$t('GitHubButton.discoverMyProjects')"
  >
    <WrappedFontAwesomeIcon icon="fa-brands fa-github" size="2x" icon-color="#00000"/>
  </a>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/WrappedFontAwesomeIcon.vue";
</script>