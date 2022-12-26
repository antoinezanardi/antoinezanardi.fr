<template>
  <a
    class="btn btn-info btn-round btn-lg btn-icon"
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.linkedin.com/in/antoinezanardi/"
    data-bs-toggle="tooltip"
    :title="$t('LinkedInButton.joinMyNetwork')"
  >
    <WrappedFontAwesomeIcon icon="fa-brands fa-linkedin-in" size="2x" icon-color="#00000"/>
  </a>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/WrappedFontAwesomeIcon.vue";
</script>