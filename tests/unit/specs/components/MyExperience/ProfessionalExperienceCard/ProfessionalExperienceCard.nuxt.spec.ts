import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type { ProfessionalExperienceCardProps } from "~/components/MyExperience/ProfessionalExperienceCard/professional-experience-card.types";
import ProfessionalExperienceCard from "~/components/MyExperience/ProfessionalExperienceCard/ProfessionalExperienceCard.vue";
import type PeriodTimeline from "~/components/shared/Period/PeriodTimeline.vue";
import { COMPANIES } from "~/models/company/company.constants";

describe("Professional Experience Card Component", () => {
  const defaultProps: ProfessionalExperienceCardProps = {
    professionalExperience: {
      job: {
        name: "MyExperience.internFullStackDeveloper",
        description: ["MyExperience.distributionProject", "MyExperience.thisFinalInternship"],
        startedAt: new Date("2018-09-01T00:00:00.000Z"),
        finishedAt: new Date("2019-08-30T00:00:00.000Z"),
      },
      company: COMPANIES.OhMyCode,
    },
  };
  let wrapper: ReturnType<typeof mount<typeof ProfessionalExperienceCard>>;

  async function mountProfessionalExperienceCardComponent(options: ComponentMountingOptions<typeof ProfessionalExperienceCard> = {}):
  Promise<ReturnType<typeof mount<typeof ProfessionalExperienceCard>>> {
    return mountSuspendedComponent(ProfessionalExperienceCard, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountProfessionalExperienceCardComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Period Timeline", () => {
    it("should pass job started date when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".experience-timeline");

      expect(periodTimeline.props("startedAt")).toBe(defaultProps.professionalExperience.job.startedAt);
    });

    it("should pass job finished date when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".experience-timeline");

      expect(periodTimeline.props("finishedAt")).toBe(defaultProps.professionalExperience.job.finishedAt);
    });

    it("should pass company image when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".experience-timeline");

      expect(periodTimeline.props("image")).toBe(defaultProps.professionalExperience.company.image);
    });

    it("should pass company url when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".experience-timeline");

      expect(periodTimeline.props("url")).toBe(defaultProps.professionalExperience.company.url);
    });
  });

  describe("Job", () => {
    it("should render job name when rendered.", () => {
      const jobName = wrapper.find<HTMLDivElement>(".job-name");

      expect(jobName.text()).toBe("MyExperience.internFullStackDeveloper");
    });

    it("should render job description when rendered.", () => {
      const jobDescriptions = wrapper.findAll<HTMLParagraphElement>(".job-description");

      expect(jobDescriptions).toHaveLength(2);
      expect(jobDescriptions[0].text()).toBe("MyExperience.distributionProject");
      expect(jobDescriptions[1].text()).toBe("MyExperience.thisFinalInternship");
    });
  });
});