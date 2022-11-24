<template>
  <footer class="footer">
    <div class="container text-center mb-2">
      <LinkedInButton class="me-2"/>
      <GitHubButton/>
    </div>
    <div class="h4 title text-center text-muted font-italic">
      <span v-html="$t('shared.antoineZanardi')"/>
      <span v-html="` - ${new Date().getFullYear()}`"/>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import GitHubButton from "~/components/shared/Buttons/GitHubButton.vue";
import LinkedInButton from "~/components/shared/Buttons/LinkedInButton.vue";
</script>