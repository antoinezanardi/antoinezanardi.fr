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
import type { Person } from "schema-dts";

import { AboutMe, MyProfile, MySkills, MyPortfolio, MyExperience, MyEducation, PageFooter, NavBar } from "#components";
import { onMounted, useNuxtApp, useHead, defineOgImageComponent, useSchemaOrg } from "#imports";

const config = useRuntimeConfig();
const { t, locale } = useI18n();
const { $bootstrap } = useNuxtApp();

useHead({
  title: "Antoine ZANARDI",
  meta: [{ name: "description", content: t("App.meta.description") }],
  htmlAttrs: { lang: locale.value },
});

const schemaOrgPerson: Person = {
  "@type": "Person",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lille",
    "addressCountry": "France",
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": t("Schools.epitech"),
    "url": "https://www.epitech.eu/",
  },
  "award": [
    t("Degrees.highSchoolDiploma"),
    t("Degrees.ITCertification"),
    t("Degrees.ITMasterDegree"),
    t("Degrees.CKAD"),
    t("Degrees.gcpACE"),
  ],
  "birthDate": "1996-04-14",
  "description": t("App.meta.smallDescription"),
  "email": config.public.email,
  "gender": "Male",
  "hasOccupation": {
    "@type": "Occupation",
    "name": t("MyProfile.itConsultant"),
    "description": t("MyProfile.fullStackWebExpert"),
  },
  "image": "https://antoinezanardi.fr/_ipx/s_180x180/images/antoine.webp",
  "jobTitle": t("MyProfile.itConsultant"),
  "knowsAbout": [
    t("MySkills.html"),
    t("MySkills.css"),
    t("MySkills.javascript"),
    t("MySkills.typescript"),
    t("MySkills.vue"),
    t("MySkills.nuxt"),
    t("MySkills.nodeJs"),
    t("MySkills.mysql"),
    t("MySkills.mongodb"),
    t("MySkills.rust"),
  ],
  "knowsLanguage": [
    {
      "@type": "Language",
      "name": t("Languages.french"),
      "alternateName": "fr",
    },
    {
      "@type": "Language",
      "name": t("Languages.english"),
      "alternateName": "en",
    },
  ],
  "name": "Antoine ZANARDI",
  "nationality": {
    "@type": "Country",
    "name": "France",
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://antoinezanardi.fr",
  },
  "sameAs": [
    "https://www.linkedin.com/in/antoinezanardi/",
    "https://github.com/antoinezanardi",
  ],
  "subjectOf": {
    "@type": "CreativeWork",
    "name": t("MyPortfolio.projects.werewolvesAssistant.name"),
    "description": t("MyPortfolio.projects.werewolvesAssistant.description"),
    "url": "https://werewolves-assistant.com/",
  },
  "telephone": config.public.phoneNumber,
  "url": "https://antoinezanardi.fr",
  "worksFor": {
    "@type": "Organization",
    "name": "Daveo",
    "sameAs": "https://www.daveo.fr/",
  },
};

useSchemaOrg(schemaOrgPerson);

defineOgImageComponent("DefaultOgImage");

onMounted(() => {
  aos.init();
  const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
  // Stryker disable next-line all
  tooltipTriggerList.forEach((tooltip: Element) => new $bootstrap.Tooltip(tooltip));
  stampInHtml("👋 Hey ! J'ai aussi créé 💮 `dev-stamp` qui a généré ce message ! Retrouvez le sur GitHub ou npm !");
});
</script>