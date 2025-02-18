import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
import type { SkillProgressBarProps } from "~/components/MySkills/SkillProgressBar/skill-progress-bar.types";
import SkillProgressBar from "~/components/MySkills/SkillProgressBar/SkillProgressBar.vue";

describe("Skill Progress Bar Component", () => {
  const defaultProps: SkillProgressBarProps = {
    skill: {
      name: "MySkills.html",
      iconClasses: "fab fa-html5",
      color: "#E44D27",
      percent: "95%",
      url: "https://fr.wikipedia.org/wiki/HTML5",
    },
  };
  let wrapper: ReturnType<typeof mount<typeof SkillProgressBar>>;

  async function mountSkillProgressBarComponent(options: ComponentMountingOptions<typeof SkillProgressBar> = {}):
  Promise<ReturnType<typeof mount<typeof SkillProgressBar>>> {
    return mountSuspendedComponent(SkillProgressBar, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountSkillProgressBarComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Icon", () => {
    it("should pass skill icon when rendered.", () => {
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".skill-icon");

      expect(icon.props("icon")).toBe(defaultProps.skill.iconClasses);
    });

    it("should pass skill color when rendered.", () => {
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".skill-icon");

      expect(icon.props("iconColor")).toBe(defaultProps.skill.color);
    });
  });

  describe("Skill", () => {
    it("should render skill name when rendered.", () => {
      const skillName = wrapper.find<HTMLAnchorElement>(".skill-name");

      expect(skillName.text()).toBe(defaultProps.skill.name);
    });

    it("should set skill url to anchor when rendered.", () => {
      const skillUrl = wrapper.find<HTMLAnchorElement>(".skill-name");

      expect(skillUrl.attributes("href")).toBe(defaultProps.skill.url);
    });
  });

  describe("Progress Bar", () => {
    it("should set aria label to skill name when rendered.", () => {
      const progressBar = wrapper.find<HTMLDivElement>(".progress-bar");

      expect(progressBar.attributes("aria-label")).toBe(defaultProps.skill.name);
    });

    it("should set progress bar style when rendered.", () => {
      const progressBar = wrapper.find<HTMLDivElement>(".progress-bar");
      const expectedStyle = `width: ${defaultProps.skill.percent}; background-color: ${defaultProps.skill.color};`;

      expect(progressBar.attributes("style")).toBe(expectedStyle);
    });

    it("should set progress bar percent in progress bar label when rendered.", () => {
      const progressBarLabel = wrapper.find<HTMLDivElement>(".progress-value");

      expect(progressBarLabel.text()).toBe(defaultProps.skill.percent);
    });
  });
});