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
import { stampInHtml } from "dev-stamp";

import { AboutMe, MyProfile, MySkills, MyPortfolio, MyExperience, MyEducation, PageFooter, NavBar } from "#components";
import { onMounted, useNuxtApp, useHead, defineOgImageComponent } from "#imports";

const { t, locale } = useI18n();
const { $bootstrap } = useNuxtApp();

useHead({
  title: "Antoine ZANARDI",
  meta: [{ name: "description", content: t("App.meta.description") }],
  htmlAttrs: { lang: locale.value },
});

defineOgImageComponent("DefaultOgImage");

onMounted(() => {
  aos.init();
  const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
  // Stryker disable next-line all
  tooltipTriggerList.forEach((tooltip: Element) => new $bootstrap.Tooltip(tooltip));
  stampInHtml("👋 Hey ! J'ai aussi créé 💮 `dev-stamp` qui a généré ce message ! Retrouvez le sur GitHub ou npm !");
});
</script>