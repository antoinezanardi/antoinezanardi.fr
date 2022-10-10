<template>
  <div id="portfolio" class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ms-auto me-auto">
          <div class="h4 text-center mb-4 title">
            <i class="fa fa-star me-2"/>
            <span v-html="$t('MyPortfolio.portfolio')"/>
          </div>
        </div>
      </div>
      <div class="tab-content gallery">
        <div id="web-development" class="tab-pane active">
          <div class="ml-auto mr-auto">
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
import { MyProject } from "#components";
import type { Project } from "~/models/Project";

const projects: Project[] = [
  {
    name: "Mon portfolio",
    description: "Présentation de mon travail",
    image: "portfolio-thumbnail.png",
    url: "https://www.antoinezanardi.fr",
  },
  {
    name: "Assistant Loups-Garous",
    description: "L'outil idéal pour le maître du jeu des Loups-Garous de Thiercelieux™",
    image: "werewolves-assistant-thumbnail.png",
    url: "https://werewolves-assistant.antoinezanardi.fr",
  },
  {
    name: "Boutique de livres",
    description: "Boutique en ligne de distribution de livres",
    image: "distribution-thumbnail.png",
    url: "https://www.airvey-editions.fr",
  },
  {
    name: "Découvrez mes autres projets",
    description: "Et n'hésitez pas à me suivre sur GitHub !",
    image: "github.jpeg",
    url: "https://github.com/antoinezanardi",
  },
];
</script>