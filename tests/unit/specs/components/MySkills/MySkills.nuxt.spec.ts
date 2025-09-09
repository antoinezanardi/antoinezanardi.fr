import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { MySkills } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type MyTool from "~/components/MySkills/MyTool/MyTool.vue";
import type SkillProgressBar from "~/components/MySkills/SkillProgressBar/SkillProgressBar.vue";
import type { Skill } from "~/models/skill/skill.types";
import type { Tool } from "~/models/tool/tool.types";

describe("My Skills Component", () => {
  let wrapper: ReturnType<typeof mount<typeof MySkills>>;

  async function mountMySkillsComponent(options: ComponentMountingOptions<typeof MySkills> = {}): Promise<ReturnType<typeof mount<typeof MySkills>>> {
    return mountSuspendedComponent(MySkills, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountMySkillsComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Skills", () => {
    it("should render 9 skills when rendered.", () => {
      const skills = wrapper.findAllComponents<typeof SkillProgressBar>(".skill");

      expect(skills).toHaveLength(9);
    });

    it.each<{
      index: number;
      name: string;
      iconClasses: string;
      color: string;
      percent: string;
      url: string;
      test: string;
    }>([
      {
        index: 0,
        name: "MySkills.html",
        iconClasses: "fab fa-html5",
        color: "#E44D27",
        percent: "95%",
        url: "https://fr.wikipedia.org/wiki/HTML5",
        test: "should render HTML skill when rendered.",
      },
      {
        index: 1,
        name: "MySkills.css",
        iconClasses: "fab fa-css3-alt",
        color: "#0162B0",
        percent: "90%",
        url: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade",
        test: "should render CSS skill when rendered.",
      },
      {
        index: 2,
        name: "MySkills.javascript",
        iconClasses: "fab fa-js",
        color: "#EFC624",
        percent: "95%",
        url: "https://fr.wikipedia.org/wiki/JavaScript",
        test: "should render JavaScript skill when rendered.",
      },
      {
        index: 3,
        name: "MySkills.typescript",
        iconClasses: "fas fa-rocket",
        color: "#3077C6",
        percent: "85%",
        url: "https://www.typescriptlang.org/",
        test: "should render TypeScript skill when rendered.",
      },
      {
        index: 4,
        name: "MySkills.vue",
        iconClasses: "fab fa-vuejs",
        color: "#38956A",
        percent: "95%",
        url: "https://vuejs.org/",
        test: "should render Vue.js skill when rendered.",
      },
      {
        index: 5,
        name: "MySkills.nuxt",
        iconClasses: "fas fa-mountain-sun",
        color: "#00DC81",
        percent: "90%",
        url: "https://v3.nuxtjs.org/",
        test: "should render Nuxt.js skill when rendered.",
      },
      {
        index: 6,
        name: "MySkills.mysql",
        iconClasses: "fas fa-database",
        color: "#017395",
        percent: "85%",
        url: "https://www.mysql.com/fr/",
        test: "should render MySQL skill when rendered.",
      },
      {
        index: 7,
        name: "MySkills.mongodb",
        iconClasses: "fas fa-leaf",
        color: "#4E9445",
        percent: "90%",
        url: "https://www.mongodb.com/",
        test: "should render MongoDB skill when rendered.",
      },
      {
        index: 8,
        name: "MySkills.rust",
        iconClasses: "fab fa-rust",
        color: "#E3884F",
        percent: "60%",
        url: "https://www.rust-lang.org/",
        test: "should render Rust skill when rendered.",
      },
    ])("$test", ({ index, name, iconClasses, color, percent, url }) => {
      const skills = wrapper.findAllComponents<typeof SkillProgressBar>(".skill");
      const expectedSkill: Skill = {
        name,
        iconClasses,
        color,
        percent,
        url,
      };

      expect(skills[index].props("skill")).toStrictEqual<Skill>(expectedSkill);
    });
  });

  describe("Tools", () => {
    it("should render 13 tools when rendered.", () => {
      const tools = wrapper.findAllComponents<typeof MyTool>(".tool");

      expect(tools).toHaveLength(13);
    });

    it.each<{
      index: number;
      description: string;
      iconClasses: string;
      color: string;
      test: string;
    }>([
      {
        index: 0,
        description: "MySkills.linuxForServers",
        iconClasses: "fab fa-linux",
        color: "#2C2C2C",
        test: "should render Linux skill when rendered.",
      },
      {
        index: 1,
        description: "MySkills.microServicesArchitecture",
        iconClasses: "fas fa-sitemap",
        color: "#007EB8",
        test: "should render Microservices skill when rendered.",
      },
      {
        index: 2,
        description: "MySkills.gitForVersionControl",
        iconClasses: "fab fa-git",
        color: "#F05033",
        test: "should render Git skill when rendered.",
      },
      {
        index: 3,
        description: "MySkills.multipleEnvs",
        iconClasses: "fas fa-code-branch",
        color: "#6C757D",
        test: "should render code branch skills when rendered.",
      },
      {
        index: 4,
        description: "MySkills.gitHubAndActions",
        iconClasses: "fab fa-github ",
        color: "#000000",
        test: "should render GitHub Actions skills when rendered.",
      },
      {
        index: 5,
        description: "MySkills.nodeJsForProjects",
        iconClasses: "fab fa-node-js ",
        color: "#539E43",
        test: "should render NodeJs skills when rendered.",
      },
      {
        index: 6,
        description: "MySkills.cssFrameworks",
        iconClasses: "fab fa-css3-alt ",
        color: "#0162B0",
        test: "should render CSS skills when rendered.",
      },
      {
        index: 7,
        description: "MySkills.vueJsWithNuxt",
        iconClasses: "fab fa-vuejs",
        color: "#38956A",
        test: "should render VueJS skills when rendered.",
      },
      {
        index: 8,
        description: "MySkills.openSourceNpm",
        iconClasses: "fab fa-npm",
        color: "#C63635",
        test: "should render NPM skills when rendered.",
      },
      {
        index: 9,
        description: "MySkills.esLintForGoodPractises",
        iconClasses: "fas fa-spell-check",
        color: "#00B819",
        test: "should render ESLint skills when rendered.",
      },
      {
        index: 10,
        description: "MySkills.unitTests",
        iconClasses: "fas fa-tasks",
        color: "#35485E",
        test: "should render Unit Tests skills when rendered.",
      },
      {
        index: 11,
        description: "MySkills.openSource",
        iconClasses: "fas fa-hand-holding-heart",
        color: "#C41B1B",
        test: "should render Open Source skills when rendered.",
      },
      {
        index: 12,
        description: "MySkills.docker",
        iconClasses: "fab fa-docker",
        color: "#2F87E3",
        test: "should render Docker skills when rendered.",
      },
    ])(`$test`, ({ index, description, iconClasses, color }) => {
      const tools = wrapper.findAllComponents<typeof MyTool>(".tool");
      const expectedTool: Tool = {
        description,
        iconClasses,
        color,
      };

      expect(tools[index].props("tool")).toStrictEqual<Tool>(expectedTool);
    });
  });
});