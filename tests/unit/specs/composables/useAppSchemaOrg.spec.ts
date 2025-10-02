import type { definePerson, defineWebSite } from "nuxt-schema-org/schema";

import { TEST_NUXT_RUNTIME_CONFIG, TEST_NUXT_SITE_CONFIG } from "@tests/unit/utils/constants/nuxt-test.constants";
import { useAppSchemaOrg } from "~/composables/useAppSchemaOrg";
import { ANTOINE_ZANARDI_BIRTH_DATE, ANTOINE_ZANARDI_FULL_NAME, ANTOINE_ZANARDI_GITHUB_AVATAR_URL, ANTOINE_ZANARDI_GITHUB_URL, ANTOINE_ZANARDI_LINKEDIN_URL } from "~/shared/constants/antoine-zanardi.constants";

const EXPECTED_WEBSITE_SCHEMA = Object.freeze({
  "@type": "WebSite",
  "_resolver": "webSite",
  "name": TEST_NUXT_SITE_CONFIG.name,
  "description": "App.meta.description",
  "inLanguage": "fr",
});

const EXPECTED_PERSON_SCHEMA = Object.freeze({
  "@type": "Person",
  "_resolver": "person",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Countries.france",
    "addressLocality": "1234 Elm Street",
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "EPITECH",
    "url": "https://www.epitech.eu/",
  },
  "award": [
    "Degrees.highSchoolDiploma",
    "Degrees.ITCertification",
    "Degrees.ITMasterDegree",
    "Degrees.CKAD",
    "Degrees.gcpACE",
  ],
  "birthDate": ANTOINE_ZANARDI_BIRTH_DATE,
  "description": "App.meta.smallDescription",
  "email": TEST_NUXT_RUNTIME_CONFIG.public.email,
  "gender": "Male",
  "hasOccupation": {
    "@type": "Occupation",
    "name": "MyProfile.itConsultant",
    "description": "MyProfile.fullStackWebExpert",
  },
  "image": ANTOINE_ZANARDI_GITHUB_AVATAR_URL,
  "jobTitle": "MyProfile.itConsultant",
  "knowsAbout": [
    "MySkills.html",
    "MySkills.css",
    "MySkills.javascript",
    "MySkills.typescript",
    "MySkills.vue",
    "MySkills.nuxt",
    "MySkills.mysql",
    "MySkills.mongodb",
    "MySkills.rust",
  ],
  "knowsLanguage": [
    {
      "@type": "Language",
      "name": "Languages.french",
      "alternateName": "fr",
    },
    {
      "@type": "Language",
      "name": "Languages.english",
      "alternateName": "en",
    },
  ],
  "name": ANTOINE_ZANARDI_FULL_NAME,
  "nationality": {
    "@type": "Country",
    "name": "Countries.france",
  },
  "sameAs": [
    ANTOINE_ZANARDI_LINKEDIN_URL,
    ANTOINE_ZANARDI_GITHUB_URL,
  ],
  "subjectOf": {
    "@type": "CreativeWork",
    "name": "MyPortfolio.projects.werewolvesAssistant.name",
    "description": "MyPortfolio.projects.werewolvesAssistant.description",
    "url": "https://werewolves-assistant.com/",
  },
  "telephone": TEST_NUXT_RUNTIME_CONFIG.public.phoneNumber,
  "url": TEST_NUXT_SITE_CONFIG.url,
  "worksFor": {
    "@type": "Organization",
    "name": "Daveo",
    "url": "https://www.daveo.fr/",
  },
});

describe("Use App Schema Org Composable", () => {
  describe("getAppSchemaOrgWebSite", () => {
    it("should get app schema org website when called.", () => {
      const { getAppSchemaOrgWebSite } = useAppSchemaOrg();
      const result = getAppSchemaOrgWebSite();

      expect(result).toStrictEqual<ReturnType<typeof defineWebSite>>(EXPECTED_WEBSITE_SCHEMA);
    });
  });

  describe("getAppSchemaOrgPerson", () => {
    it("should get app schema org person when called.", () => {
      const { getAppSchemaOrgPerson } = useAppSchemaOrg();
      const result = getAppSchemaOrgPerson();

      expect(result).toStrictEqual<ReturnType<typeof definePerson>>(EXPECTED_PERSON_SCHEMA);
    });
  });

  describe("setupAppSchemaOrg", () => {
    it("should setup app schema org when called.", () => {
      const { setupAppSchemaOrg } = useAppSchemaOrg();
      const expectedSchemaOrgParameters = [
        EXPECTED_WEBSITE_SCHEMA,
        EXPECTED_PERSON_SCHEMA,
      ];
      setupAppSchemaOrg();

      expect(useSchemaOrg).toHaveBeenCalledExactlyOnceWith(expectedSchemaOrgParameters);
    });
  });
});