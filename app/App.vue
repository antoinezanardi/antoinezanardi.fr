<template>
  <div>
    <NavBar/>

    <main class="app-content">
      <MyProfile/>

      <AboutMe/>

      <MySkills/>

      <MyPortfolio/>

      <MyExperience/>

      <MyEducation/>

      <PageFooter/>
    </main>
  </div>
</template>

<script lang="ts" setup>
import aos from "aos";

import { AboutMe, MyProfile, MySkills, MyPortfolio, MyExperience, MyEducation, PageFooter, NavBar } from "#components";
import { onMounted, useNuxtApp, useHead } from "#imports";

const { t, locale } = useI18n();
const { $bootstrap } = useNuxtApp();

useHead({
  title: "Antoine ZANARDI",
  meta: [{ name: "description", content: t("App.meta.description") }],
  htmlAttrs: { lang: locale.value },
});

onMounted((): void => {
  aos.init();
  const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
  tooltipTriggerList.forEach((tooltip: Element) => new $bootstrap.Tooltip(tooltip));
});
</script>