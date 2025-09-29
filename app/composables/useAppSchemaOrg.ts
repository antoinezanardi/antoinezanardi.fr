import { definePerson, defineWebSite } from "nuxt-schema-org/schema";

import { useI18n, useRuntimeConfig, useDates, useSchemaOrg } from "#imports";

type AppSchemaOrgComposable = {
  getAppSchemaOrgWebSite: () => ReturnType<typeof defineWebSite>;
  getAppSchemaOrgPerson: () => ReturnType<typeof definePerson>;
  setupAppSchemaOrg: () => void;
};

function useAppSchemaOrg(): AppSchemaOrgComposable {
  const config = useRuntimeConfig();
  const { t, locale } = useI18n();
  const { birthDate } = useDates();

  const getAppSchemaOrgWebSite = (): ReturnType<typeof defineWebSite> => defineWebSite({
    "@type": "WebSite",
    "name": "Antoine ZANARDI",
    "description": t("App.meta.description"),
    "inLanguage": locale.value,
  });

  const getAppSchemaOrgPerson = (): ReturnType<typeof defineWebSite> => definePerson({
    "@type": "Person",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": config.public.address,
      "addressCountry": "France",
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "EPITECH",
      "url": "https://www.epitech.eu/",
    },
    "award": [
      t("Degrees.highSchoolDiploma"),
      t("Degrees.ITCertification"),
      t("Degrees.ITMasterDegree"),
      t("Degrees.CKAD"),
      t("Degrees.gcpACE"),
    ],
    birthDate,
    "description": t("App.meta.smallDescription"),
    "email": config.public.email,
    "gender": "Male",
    "hasOccupation": {
      "@type": "Occupation",
      "name": t("MyProfile.itConsultant"),
      "description": t("MyProfile.fullStackWebExpert"),
    },
    "image": "https://avatars.githubusercontent.com/u/11405981",
    "jobTitle": t("MyProfile.itConsultant"),
    "knowsAbout": [
      t("MySkills.html"),
      t("MySkills.css"),
      t("MySkills.javascript"),
      t("MySkills.typescript"),
      t("MySkills.vue"),
      t("MySkills.nuxt"),
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
      "url": "https://www.daveo.fr/",
    },
  });

  const setupAppSchemaOrg = (): void => {
    useSchemaOrg([
      getAppSchemaOrgWebSite(),
      getAppSchemaOrgPerson(),
    ]);
  };
  return {
    getAppSchemaOrgWebSite,
    getAppSchemaOrgPerson,
    setupAppSchemaOrg,
  };
}

export { useAppSchemaOrg };