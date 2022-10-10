<template>
  <div id="skill" class="section">
    <div class="container">
      <div class="h4 text-center mb-4 title">
        <i class="fa fa-code me-2"/>
        <span v-html="$t('MySkills.itSkills')"/>
      </div>
      <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="card-body">
          <div class="row">
            <div v-for="skill of skills" :key="skill.name" class="col-md-6">
              <SkillProgressBar :skill="skill"/>
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-md-12 text-center">
              <h5 class="mb-0" v-html="$t('MySkills.myTools')"/>
            </div>
          </div>
          <div class="row mb-2">
            <div
              class="col-12 text-muted text-center font-italic small my-1"
              v-html="`(${$t('MySkills.hoverIconsForDetails')})`"
            />
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <MyTool v-for="tool of tools" :key="tool.iconClasses" :tool="tool"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import MyTool from "~/components/MySkills/MyTool.vue";
import SkillProgressBar from "~/components/MySkills/SkillProgressBar.vue";
import type { Skill } from "~/models/Skill";
import type { Tool } from "~/models/Tool";

const { t } = useI18n();

const htmlUrl = "https://fr.wikipedia.org/wiki/HTML5";
const cssUrl = "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade";
const jsUrl = "https://fr.wikipedia.org/wiki/JavaScript";
const tsUrl = "https://www.typescriptlang.org/";
const vueUrl = "https://vuejs.org/";
const nuxtUrl = "https://v3.nuxtjs.org/";
const mysqlUrl = "https://www.mysql.com/fr/";
const mongodbUrl = "https://www.mongodb.com/";
const skills: Skill[] = [
  { name: t("MySkills.html"), iconClasses: "fab fa-html5", color: "#E44D27", percent: "95%", url: htmlUrl },
  { name: t("MySkills.css"), iconClasses: "fab fa-css3-alt", color: "#0162B0", percent: "90%", url: cssUrl },
  { name: t("MySkills.javascript"), iconClasses: "fab fa-js", color: "#EFC624", percent: "95%", url: jsUrl },
  { name: t("MySkills.typescript"), iconClasses: "fas fa-rocket", color: "#3077C6", percent: "80%", url: tsUrl },
  { name: t("MySkills.vue"), iconClasses: "fab fa-vuejs", color: "#38956A", percent: "95%", url: vueUrl },
  { name: t("MySkills.nuxt"), iconClasses: "fas fa-mountain-sun", color: "#00DC81", percent: "80%", url: nuxtUrl },
  { name: t("MySkills.mysql"), iconClasses: "fas fa-database", color: "#017395", percent: "85%", url: mysqlUrl },
  { name: t("MySkills.mongodb"), iconClasses: "fas fa-leaf", color: "#4E9445", percent: "90%", url: mongodbUrl },
];

const tools: Tool[] = [
  { description: t("MySkills.linuxForServers"), iconClasses: "fab fa-linux", color: "#2C2C2C" },
  { description: t("MySkills.microServicesArchitecture"), iconClasses: "fas fa-sitemap", color: "#007EB8" },
  { description: t("MySkills.gitForVersionControl"), iconClasses: "fab fa-git", color: "#F05033" },
  { description: t("MySkills.multipleEnvs"), iconClasses: "fas fa-code-branch", color: "#6C757D" },
  { description: t("MySkills.gitHubAndActions"), iconClasses: "fab fa-github ", color: "#000000" },
  { description: t("MySkills.nodeJsForProjects"), iconClasses: "fab fa-node-js ", color: "#539E43" },
  { description: t("MySkills.cssFrameworks"), iconClasses: "fab fa-css3-alt ", color: "#0162B0" },
  { description: t("MySkills.vueJsWithNuxt"), iconClasses: "fab fa-vuejs", color: "#38956A" },
  { description: t("MySkills.openSourceNpm"), iconClasses: "fab fa-npm", color: "#C63635" },
  { description: t("MySkills.esLintForGoodPractises"), iconClasses: "fas fa-spell-check", color: "#00B819" },
  { description: t("MySkills.unitTests"), iconClasses: "fas fa-tasks", color: "#35485E" },
];
</script>