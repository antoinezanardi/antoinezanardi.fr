<template>
  <footer class="footer">
    <div class="container mb-2 text-center">
      <LinkedInButton class="me-2"/>

      <GitHubButton/>
    </div>

    <div class="font-italic h4 text-center text-muted title">
      <span>
        {{ $t('shared.antoineZanardi') }}
      </span>

      <span>
        {{ ` - ${new Date().getFullYear()}` }}
      </span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import GitHubButton from "~/components/shared/Buttons/GitHubButton.vue";
import LinkedInButton from "~/components/shared/Buttons/LinkedInButton.vue";
</script>