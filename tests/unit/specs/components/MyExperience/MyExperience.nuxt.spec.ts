import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type ProfessionalExperienceCard from "~/components/MyExperience/ProfessionalExperienceCard/ProfessionalExperienceCard.vue";
import { MyExperience } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import { COMPANIES } from "~/models/company/company.constants";
import type { ProfessionalExperience } from "~/models/professional-experience/professional-experience.types";

describe("My Experience Component", () => {
  let wrapper: ReturnType<typeof mount<typeof MyExperience>>;

  async function mountMyExperienceComponent(options: ComponentMountingOptions<typeof MyExperience> = {}):
  Promise<ReturnType<typeof mount<typeof MyExperience>>> {
    return mountSuspendedComponent(MyExperience, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountMyExperienceComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Experiences", () => {
    it("should render 6 experiences when rendered.", () => {
      const experiences = wrapper.findAllComponents<typeof ProfessionalExperienceCard>(".professional-experience-card");

      expect(experiences).toHaveLength(6);
    });

    it("should render fullstack developer experience card at Daveo when rendered.", () => {
      const experiences = wrapper.findAllComponents<typeof ProfessionalExperienceCard>(".professional-experience-card");
      const expectedExperience: ProfessionalExperience = {
        company: COMPANIES.Daveo,
        job: {
          name: "MyExperience.fullStackDeveloperConsultant",
          startedAt: new Date("2022-04-01"),
          description: [
            "MyExperience.iJoinedDaveo",
            "MyExperience.whatIsConsulting",
            "MyExperience.myMissionsAsConsultant",
            "MyExperience.cloudProductCertifications",
            "MyExperience.conferenceAndWorkshops",
          ],
        },
      };

      expect(experiences[0].props("professionalExperience")).toStrictEqual<ProfessionalExperience>(expectedExperience);
    });

    it("should render it engineer at OhMyCode when rendered.", () => {
      const experiences = wrapper.findAllComponents<typeof ProfessionalExperienceCard>(".professional-experience-card");
      const expectedExperience: ProfessionalExperience = {
        company: COMPANIES.OhMyCode,
        job: {
          name: "MyExperience.itR&DEngineer",
          startedAt: new Date("2019-09-01"),
          finishedAt: new Date("2022-03-31"),
          description: [
            "MyExperience.firstPermanentContract",
            "MyExperience.asProjectManager",
            "MyExperience.softSkills",
            "MyExperience.expertiseAndTechnicalSkills",
          ],
        },
      };

      expect(experiences[1].props("professionalExperience")).toStrictEqual<ProfessionalExperience>(expectedExperience);
    });

    it("should render second intern at OhMyCode when rendered.", () => {
      const experiences = wrapper.findAllComponents<typeof ProfessionalExperienceCard>(".professional-experience-card");
      const expectedExperience: ProfessionalExperience = {
        company: COMPANIES.OhMyCode,
        job: {
          name: "MyExperience.internFullStackDeveloper",
          startedAt: new Date("2018-09-01"),
          finishedAt: new Date("2019-08-30"),
          description: [
            "MyExperience.distributionProject",
            "MyExperience.thisFinalInternship",
          ],
        },
      };

      expect(experiences[2].props("professionalExperience")).toStrictEqual<ProfessionalExperience>(expectedExperience);
    });

    it("should render first intern at OhMyCode when rendered.", () => {
      const experiences = wrapper.findAllComponents<typeof ProfessionalExperienceCard>(".professional-experience-card");
      const expectedExperience: ProfessionalExperience = {
        company: COMPANIES.OhMyCode,
        job: {
          name: "MyExperience.internFullStackDeveloper",
          startedAt: new Date("2016-09-01"),
          finishedAt: new Date("2017-04-30"),
          description: [
            "MyExperience.firstStepsInOhMyCode",
            "MyExperience.allFunctionalitiesInOnApp",
          ],
        },
      };

      expect(experiences[3].props("professionalExperience")).toStrictEqual<ProfessionalExperience>(expectedExperience);
    });

    it("should render freelance developer at SoBook when rendered.", () => {
      const experiences = wrapper.findAllComponents<typeof ProfessionalExperienceCard>(".professional-experience-card");
      const expectedExperience: ProfessionalExperience = {
        company: COMPANIES.SoBook,
        job: {
          name: "MyExperience.freelanceFullStackDeveloper",
          startedAt: new Date("2016-02-01"),
          finishedAt: new Date("2016-08-30"),
          description: [
            "MyExperience.reiterateAsFreelance",
            "MyExperience.moreResponsibilities",
          ],
        },
      };

      expect(experiences[4].props("professionalExperience")).toStrictEqual<ProfessionalExperience>(expectedExperience);
    });

    it("should render first intern at SoBook when rendered.", () => {
      const experiences = wrapper.findAllComponents<typeof ProfessionalExperienceCard>(".professional-experience-card");
      const expectedExperience: ProfessionalExperience = {
        company: COMPANIES.SoBook,
        job: {
          name: "MyExperience.internFullStackDeveloper",
          startedAt: new Date("2015-07-01"),
          finishedAt: new Date("2015-12-31"),
          description: ["MyExperience.firstInternship"],
        },
      };

      expect(experiences[5].props("professionalExperience")).toStrictEqual<ProfessionalExperience>(expectedExperience);
    });
  });
});