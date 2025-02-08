<template>
  <div
    id="portfolio"
    class="section"
  >
    <div class="container">
      <SectionTitle
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
  </div>
</template>

<script setup lang="ts">
import MyProject from "~/components/MyPortfolio/MyProject/MyProject.vue";
import SectionTitle from "~/components/shared/Layouts/SectionTitle/SectionTitle.vue";
import type { Project } from "~/models/Project";

const { t } = useI18n();

const i18nProjectPath = "MyPortfolio.projects";
const projects: Project[] = [
  {
    name: t(`${i18nProjectPath}.portfolio.name`),
    description: t(`${i18nProjectPath}.portfolio.description`),
    image: "portfolio-thumbnail.jpg",
    url: "https://www.antoinezanardi.fr",
  },
  {
    name: t(`${i18nProjectPath}.werewolvesAssistant.name`),
    description: t(`${i18nProjectPath}.werewolvesAssistant.description`),
    image: "werewolves-assistant-thumbnail.png",
    url: "https://werewolves-assistant.com",
  },
  {
    name: t(`${i18nProjectPath}.distribution.name`),
    description: t(`${i18nProjectPath}.distribution.description`),
    image: "distribution-thumbnail.jpeg",
    url: "https://www.airvey-editions.fr",
  },
  {
    name: t(`${i18nProjectPath}.gitHub.name`),
    description: t(`${i18nProjectPath}.gitHub.description`),
    image: "github.jpeg",
    url: "https://github.com/antoinezanardi",
  },
];
</script>