<template>
  <div class="app-content">
    <MyProfile/>
    <AboutMe/>
    <MySkills/>
    <MyPortfolio/>
    <MyExperience/>
    <MyEducation/>
  </div>
</template>

<script lang="ts" setup>
import aos from "aos";
import { AboutMe, MyProfile, MySkills, MyPortfolio, MyExperience, MyEducation } from "#components";
import { onMounted, useNuxtApp } from "#imports";

const { $bootstrap } = useNuxtApp();

onMounted((): void => {
  aos.init();
  const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
  tooltipTriggerList.forEach((tooltip: Element) => new $bootstrap.Tooltip(tooltip));
});
</script>