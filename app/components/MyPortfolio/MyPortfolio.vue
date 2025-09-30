<template>
  <section
    id="portfolio"
    aria-labelledby="portfolio-title"
    class="section"
  >
    <div class="container">
      <SectionTitle
        id="portfolio-title"
        icon="fa fa-star"
        icon-color="#EEC624"
        :title="$t('MyPortfolio.portfolio')"
      />

      <div class="gallery tab-content">
        <div
          id="web-development"
          class="active tab-pane"
        >
          <div class="me-auto ms-auto">
            <div class="align-items-center row">
              <div
                v-for="project in projects"
                :key="project.name"
                class="col-md-6"
              >
                <MyProject
                  class="project"
                  :project="project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSiteConfig } from "#imports";
import MyProject from "~/components/MyPortfolio/MyProject/MyProject.vue";
import SectionTitle from "~/components/shared/Layouts/SectionTitle/SectionTitle.vue";
import type { Project } from "~/models/project/project.types";
import { ANTOINE_ZANARDI_GITHUB_URL } from "~/shared/constants/antoine-zanardi.constants";

const { t } = useI18n();
const { url: siteUrl } = useSiteConfig();

const i18nProjectPath = "MyPortfolio.projects";
const projects: Project[] = [
  {
    name: t(`${i18nProjectPath}.portfolio.name`),
    description: t(`${i18nProjectPath}.portfolio.description`),
    image: "portfolio-thumbnail.webp",
    url: siteUrl,
  },
  {
    name: t(`${i18nProjectPath}.werewolvesAssistant.name`),
    description: t(`${i18nProjectPath}.werewolvesAssistant.description`),
    image: "werewolves-assistant-thumbnail.webp",
    url: "https://werewolves-assistant.com",
  },
  {
    name: t(`${i18nProjectPath}.distribution.name`),
    description: t(`${i18nProjectPath}.distribution.description`),
    image: "distribution-thumbnail.webp",
    url: "https://www.airvey-editions.fr",
  },
  {
    name: t(`${i18nProjectPath}.gitHub.name`),
    description: t(`${i18nProjectPath}.gitHub.description`),
    image: "github.webp",
    url: ANTOINE_ZANARDI_GITHUB_URL,
  },
];
</script>