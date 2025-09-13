import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import MyProject from "~/components/MyPortfolio/MyProject/MyProject.vue";
import type { MyProjectProps } from "~/components/MyPortfolio/MyProject/my-project.types";
import type { NuxtImg } from "#components";

describe("My Project Component", () => {
  const defaultProps: MyProjectProps = {
    project: {
      name: "MyPortfolio.projects.portfolio.name",
      description: "MyPortfolio.projects.portfolio.description",
      image: "portfolio-thumbnail.webp",
      url: "https://www.antoinezanardi.fr",
    },
  };
  let wrapper: ReturnType<typeof mount<typeof MyProject>>;

  async function mountMyProjectComponent(options: ComponentMountingOptions<typeof MyProject> = {}): Promise<ReturnType<typeof mount<typeof MyProject>>> {
    return mountSuspendedComponent(MyProject, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountMyProjectComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Image", () => {
    it("should set alt to project name when rendered.", () => {
      const image = wrapper.findComponent<typeof NuxtImg>(".project-image");

      expect(image.attributes("alt")).toBe(defaultProps.project.name);
    });

    it("should set image source when rendered.", () => {
      const image = wrapper.findComponent<typeof NuxtImg>(".project-image");

      expect(image.props("src")).toBe("/images/projects/portfolio-thumbnail.webp");
    });
  });

  describe("Project", () => {
    it("should render project name when rendered.", () => {
      const projectName = wrapper.find<HTMLHeadingElement>(".project-name");

      expect(projectName.text()).toBe("MyPortfolio.projects.portfolio.name");
    });

    it("should render project description when rendered.", () => {
      const projectDescription = wrapper.find<HTMLParagraphElement>(".project-desc");

      expect(projectDescription.text()).toBe("MyPortfolio.projects.portfolio.description");
    });
  });
});