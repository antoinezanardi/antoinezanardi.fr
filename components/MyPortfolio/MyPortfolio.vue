<template>
  <div id="portfolio" class="section">
    <div class="container">
      <SectionTitle icon="fa fa-star" icon-color="#EEC624" :title="$t('MyPortfolio.portfolio')"/>
      <div class="tab-content gallery">
        <div id="web-development" class="tab-pane active">
          <div class="ms-auto me-auto">
            <div class="row align-items-center">
              <div v-for="project of projects" :key="project.name" class="col-md-6">
                <MyProject :project="project"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { MyProject } from "#components";
import SectionTitle from "~/components/shared/SectionTitle.vue";
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
    image: "werewolves-assistant-thumbnail.jpg",
    url: "https://werewolves-assistant.antoinezanardi.fr",
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