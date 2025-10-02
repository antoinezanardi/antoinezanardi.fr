import { definePerson, defineWebSite } from "nuxt-schema-org/schema";

import { useI18n, useRuntimeConfig, useSchemaOrg, useSiteConfig } from "#imports";
import { ANTOINE_ZANARDI_BIRTH_DATE, ANTOINE_ZANARDI_FULL_NAME, ANTOINE_ZANARDI_GITHUB_URL, ANTOINE_ZANARDI_LINKEDIN_URL, ANTOINE_ZANARDI_GITHUB_AVATAR_URL } from "~/shared/constants/antoine-zanardi.constants";

type AppSchemaOrgComposable = {
  getAppSchemaOrgWebSite: () => ReturnType<typeof defineWebSite>;
  getAppSchemaOrgPerson: () => ReturnType<typeof definePerson>;
  setupAppSchemaOrg: () => void;
};

function useAppSchemaOrg(): AppSchemaOrgComposable {
  const config = useRuntimeConfig();
  const { t, locale } = useI18n();
  const siteConfig = useSiteConfig();

  const getAppSchemaOrgWebSite = (): ReturnType<typeof defineWebSite> => defineWebSite({
    "@type": "WebSite",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    "name": siteConfig.name as string,
    "description": t("App.meta.description"),
    "inLanguage": locale.value,
  });

  const getAppSchemaOrgPerson = (): ReturnType<typeof definePerson> => definePerson({
    "@type": "Person",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": config.public.address,
      "addressCountry": t("Countries.france"),
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
    "birthDate": ANTOINE_ZANARDI_BIRTH_DATE,
    "description": t("App.meta.smallDescription"),
    "email": config.public.email,
    "gender": "Male",
    "hasOccupation": {
      "@type": "Occupation",
      "name": t("MyProfile.itConsultant"),
      "description": t("MyProfile.fullStackWebExpert"),
    },
    "image": ANTOINE_ZANARDI_GITHUB_AVATAR_URL,
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
    "name": ANTOINE_ZANARDI_FULL_NAME,
    "nationality": {
      "@type": "Country",
      "name": t("Countries.france"),
    },
    "sameAs": [
      ANTOINE_ZANARDI_LINKEDIN_URL,
      ANTOINE_ZANARDI_GITHUB_URL,
    ],
    "subjectOf": {
      "@type": "CreativeWork",
      "name": t("MyPortfolio.projects.werewolvesAssistant.name"),
      "description": t("MyPortfolio.projects.werewolvesAssistant.description"),
      "url": "https://werewolves-assistant.com/",
    },
    "telephone": config.public.phoneNumber,
    "url": siteConfig.url,
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