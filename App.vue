<template>
  <div class="app-content">
    <MyProfile/>
    <AboutMe/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, useNuxtApp } from "#imports";
import AboutMe from "~/components/AboutMe.vue.vue";
import MyProfile from "~/components/MyProfile.vue";

const { $bootstrap } = useNuxtApp();

onMounted((): void => {
  const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
  tooltipTriggerList.forEach((tooltip: Element) => new $bootstrap.Tooltip(tooltip));
});
</script>