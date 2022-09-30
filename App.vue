<template>
  <div class="app-content">
    <MyProfile/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, useNuxtApp } from "#imports";
import MyProfile from "~/components/MyProfile.vue";

const { $bootstrap } = useNuxtApp();

onMounted((): void => {
  const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
  tooltipTriggerList.forEach((tooltip: Element) => new $bootstrap.Tooltip(tooltip));
});
</script>