<template>
  <div class="app-content">
    <MyProfile/>
    <AboutMe/>
    <MySkills/>
  </div>
</template>

<script lang="ts" setup>
import aos from "aos";
import { onMounted, useNuxtApp } from "#imports";
import AboutMe from "~/components/AboutMe.vue";
import MyProfile from "~/components/MyProfile.vue";
import MySkills from "~/components/MySkills/MySkills.vue";

const { $bootstrap } = useNuxtApp();

onMounted((): void => {
  aos.init();
  const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
  tooltipTriggerList.forEach((tooltip: Element) => new $bootstrap.Tooltip(tooltip));
});
</script>