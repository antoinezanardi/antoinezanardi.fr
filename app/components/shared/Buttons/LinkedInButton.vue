<template>
  <a
    class="btn btn-icon btn-info btn-lg btn-round"
    data-bs-toggle="tooltip"
    href="https://www.linkedin.com/in/antoinezanardi/"
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
</script>

<style lang="scss" scoped>
.btn-icon {
  padding-top: 0.8rem;
}
</style>