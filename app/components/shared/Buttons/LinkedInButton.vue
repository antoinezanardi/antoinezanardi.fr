<template>
  <a
    class="btn btn-icon btn-info btn-lg btn-round"
    data-bs-toggle="tooltip"
    :href="ANTOINE_ZANARDI_LINKEDIN_URL"
    rel="noopener noreferrer"
    target="_blank"
    :title="$t('LinkedInButton.joinMyNetwork')"
  >
    <WrappedFontAwesomeIcon
      icon="fa-brands fa-linkedin-in"
      icon-color="white"
      size="2x"
    />
  </a>
</template>

<script setup lang="ts">
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
import { ANTOINE_ZANARDI_LINKEDIN_URL } from "~/shared/constants/antoine-zanardi.constants";
</script>