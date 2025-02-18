import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type MyProject from "~/components/MyPortfolio/MyProject/MyProject.vue";
import { MyPortfolio } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type { Project } from "~/models/project/project.types";

describe("My Portfolio Component", () => {
  let wrapper: ReturnType<typeof mount<typeof MyPortfolio>>;

  async function mountMyPortfolioComponent(options: ComponentMountingOptions<typeof MyPortfolio> = {}): Promise<ReturnType<typeof mount<typeof MyPortfolio>>> {
    return mountSuspendedComponent(MyPortfolio, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountMyPortfolioComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Projects", () => {
    it("should render 4 projects when rendered.", () => {
      const projects = wrapper.findAllComponents<typeof MyProject>(".project");

      expect(projects).toHaveLength(4);
    });

    it("should render my portfolio project when rendered.", () => {
      const projects = wrapper.findAllComponents<typeof MyProject>(".project");
      const expectedProject: Project = {
        name: "MyPortfolio.projects.portfolio.name",
        description: "MyPortfolio.projects.portfolio.description",
        image: "portfolio-thumbnail.jpg",
        url: "https://www.antoinezanardi.fr",
      };

      expect(projects[0].props("project")).toStrictEqual<Project>(expectedProject);
    });

    it("should render my Werewolves Assistant project when rendered.", () => {
      const projects = wrapper.findAllComponents<typeof MyProject>(".project");
      const expectedProject: Project = {
        name: "MyPortfolio.projects.werewolvesAssistant.name",
        description: "MyPortfolio.projects.werewolvesAssistant.description",
        image: "werewolves-assistant-thumbnail.png",
        url: "https://werewolves-assistant.com",
      };

      expect(projects[1].props("project")).toStrictEqual<Project>(expectedProject);
    });

    it("should render book distribution project when rendered.", () => {
      const projects = wrapper.findAllComponents<typeof MyProject>(".project");
      const expectedProject: Project = {
        name: "MyPortfolio.projects.distribution.name",
        description: "MyPortfolio.projects.distribution.description",
        image: "distribution-thumbnail.jpeg",
        url: "https://www.airvey-editions.fr",
      };

      expect(projects[2].props("project")).toStrictEqual<Project>(expectedProject);
    });

    it("should render my GitHub profile project when rendered.", () => {
      const projects = wrapper.findAllComponents<typeof MyProject>(".project");
      const expectedProject: Project = {
        name: "MyPortfolio.projects.gitHub.name",
        description: "MyPortfolio.projects.gitHub.description",
        image: "github.jpeg",
        url: "https://github.com/antoinezanardi",
      };

      expect(projects[3].props("project")).toStrictEqual<Project>(expectedProject);
    });
  });
});