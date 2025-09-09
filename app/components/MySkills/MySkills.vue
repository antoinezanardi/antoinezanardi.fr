<template>
  <div
    id="skills"
    aria-labelledby="skills-title"
    class="section"
    role="region"
  >
    <div class="container">
      <SectionTitle
        id="skills-title"
        icon="fa fa-code"
        icon-color="#007EB8"
        :title="$t('MySkills.itSkills')"
      />

      <div
        class="card"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="card-body">
          <div class="row">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="col-md-6"
            >
              <SkillProgressBar
                class="skill"
                :skill="skill"
              />
            </div>
          </div>

          <hr>

          <div class="row">
            <div class="col-md-12 text-center">
              <h3
                class="mb-0"
              >
                {{ $t('MySkills.myTools') }}
              </h3>
            </div>
          </div>

          <div class="mb-2 row">
            <div
              class="col-12 font-italic my-1 small text-center text-muted"
            >
              {{ `(${$t('MySkills.hoverIconsForDetails')})` }}
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 d-flex flex-wrap gap-1 justify-content-center text-center">
              <MyTool
                v-for="tool in tools"
                :key="tool.iconClasses"
                class="tool"
                :tool="tool"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyTool from "~/components/MySkills/MyTool/MyTool.vue";
import SkillProgressBar from "~/components/MySkills/SkillProgressBar/SkillProgressBar.vue";
import SectionTitle from "~/components/shared/Layouts/SectionTitle/SectionTitle.vue";
import type { Skill } from "~/models/skill/skill.types";
import type { Tool } from "~/models/tool/tool.types";

const { t } = useI18n();

const htmlUrl = "https://fr.wikipedia.org/wiki/HTML5";
const cssUrl = "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade";
const jsUrl = "https://fr.wikipedia.org/wiki/JavaScript";
const tsUrl = "https://www.typescriptlang.org/";
const vueUrl = "https://vuejs.org/";
const nuxtUrl = "https://v3.nuxtjs.org/";
const mysqlUrl = "https://www.mysql.com/fr/";
const mongodbUrl = "https://www.mongodb.com/";
const rustUrl = "https://www.rust-lang.org/";
const skills: Skill[] = [
  {
    name: t("MySkills.html"),
    iconClasses: "fab fa-html5",
    color: "#E44D27",
    percent: "95%",
    url: htmlUrl,
  },
  {
    name: t("MySkills.css"),
    iconClasses: "fab fa-css3-alt",
    color: "#0162B0",
    percent: "90%",
    url: cssUrl,
  },
  {
    name: t("MySkills.javascript"),
    iconClasses: "fab fa-js",
    color: "#EFC624",
    percent: "95%",
    url: jsUrl,
  },
  {
    name: t("MySkills.typescript"),
    iconClasses: "fas fa-rocket",
    color: "#3077C6",
    percent: "85%",
    url: tsUrl,
  },
  {
    name: t("MySkills.vue"),
    iconClasses: "fab fa-vuejs",
    color: "#38956A",
    percent: "95%",
    url: vueUrl,
  },
  {
    name: t("MySkills.nuxt"),
    iconClasses: "fas fa-mountain-sun",
    color: "#00DC81",
    percent: "90%",
    url: nuxtUrl,
  },
  {
    name: t("MySkills.mysql"),
    iconClasses: "fas fa-database",
    color: "#017395",
    percent: "85%",
    url: mysqlUrl,
  },
  {
    name: t("MySkills.mongodb"),
    iconClasses: "fas fa-leaf",
    color: "#4E9445",
    percent: "90%",
    url: mongodbUrl,
  },
  {
    name: t("MySkills.rust"),
    iconClasses: "fab fa-rust",
    color: "#E3884F",
    percent: "60%",
    url: rustUrl,
  },
];

const tools: Tool[] = [
  {
    description: t("MySkills.linuxForServers"),
    iconClasses: "fab fa-linux",
    color: "#2C2C2C",
  },
  {
    description: t("MySkills.microServicesArchitecture"),
    iconClasses: "fas fa-sitemap",
    color: "#007EB8",
  },
  {
    description: t("MySkills.gitForVersionControl"),
    iconClasses: "fab fa-git",
    color: "#F05033",
  },
  {
    description: t("MySkills.multipleEnvs"),
    iconClasses: "fas fa-code-branch",
    color: "#6C757D",
  },
  {
    description: t("MySkills.gitHubAndActions"),
    iconClasses: "fab fa-github ",
    color: "#000000",
  },
  {
    description: t("MySkills.nodeJsForProjects"),
    iconClasses: "fab fa-node-js ",
    color: "#539E43",
  },
  {
    description: t("MySkills.cssFrameworks"),
    iconClasses: "fab fa-css3-alt ",
    color: "#0162B0",
  },
  {
    description: t("MySkills.vueJsWithNuxt"),
    iconClasses: "fab fa-vuejs",
    color: "#38956A",
  },
  {
    description: t("MySkills.openSourceNpm"),
    iconClasses: "fab fa-npm",
    color: "#C63635",
  },
  {
    description: t("MySkills.esLintForGoodPractises"),
    iconClasses: "fas fa-spell-check",
    color: "#00B819",
  },
  {
    description: t("MySkills.unitTests"),
    iconClasses: "fas fa-tasks",
    color: "#35485E",
  },
  {
    description: t("MySkills.openSource"),
    iconClasses: "fas fa-hand-holding-heart",
    color: "#C41B1B",
  },
  {
    description: t("MySkills.docker"),
    iconClasses: "fab fa-docker",
    color: "#2F87E3",
  },
];
</script>