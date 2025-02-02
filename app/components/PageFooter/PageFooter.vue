<template>
  <footer class="footer py-1">
    <div class="container text-center">
      <LinkedInButton class="me-2"/>

      <GitHubButton/>
    </div>

    <div class="font-italic h4 my-2 text-center text-muted title">
      <span>
        {{ $t('shared.antoineZanardi') }}
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

const fullYear = computed<number>(() => new Date().getFullYear());
</script>