import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { MyEducation } from "#components";
import type EducationDegreeCard from "~/components/MyEducation/EducationDegreeCard/EducationDegreeCard.vue";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type { EducationDegree } from "~/models/EducationDegree";
import { SchoolNames, SCHOOLS } from "~/models/School";

describe("MyEducation Component", () => {
  let wrapper: ReturnType<typeof mount<typeof MyEducation>>;

  async function mountMyEducationComponent(options: ComponentMountingOptions<typeof MyEducation> = {}): Promise<ReturnType<typeof mount<typeof MyEducation>>> {
    return mountSuspendedComponent(MyEducation, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountMyEducationComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Education Degrees", () => {
    it("should render 5 education degree cards when rendered.", () => {
      const educationDegreeCards = wrapper.findAllComponents<typeof EducationDegreeCard>(".education-degree-card");

      expect(educationDegreeCards).toHaveLength(5);
    });

    it("should render GCP ACE education degree card when rendered.", () => {
      const educationDegreeCards = wrapper.findAllComponents<typeof EducationDegreeCard>(".education-degree-card");
      const expectedEducationDegree: EducationDegree = {
        degree: {
          name: `Degrees.gcpACE`,
          description: ["MyEducation.gcpACECertification"],
          obtainedAt: new Date("2022-12-01"),
        },
        school: {
          ...SCHOOLS[SchoolNames.GOOGLE],
          translatedName: `Schools.${SchoolNames.GOOGLE}`,
        },
      };

      expect(educationDegreeCards[0].props("educationDegree")).toStrictEqual<EducationDegree>(expectedEducationDegree);
    });

    it("should render CKAD education degree card when rendered.", () => {
      const educationDegreeCards = wrapper.findAllComponents<typeof EducationDegreeCard>(".education-degree-card");
      const expectedEducationDegree: EducationDegree = {
        degree: {
          name: `Degrees.CKAD`,
          description: ["MyEducation.kubernetesCertification"],
          obtainedAt: new Date("2022-08-01"),
        },
        school: {
          ...SCHOOLS[SchoolNames.CLOUD_NATIVE_COMPUTING_FOUNDATION],
          translatedName: `Schools.${SchoolNames.CLOUD_NATIVE_COMPUTING_FOUNDATION}`,
        },
      };

      expect(educationDegreeCards[1].props("educationDegree")).toStrictEqual<EducationDegree>(expectedEducationDegree);
    });

    it("should render IT Master degree card when rendered.", () => {
      const educationDegreeCards = wrapper.findAllComponents<typeof EducationDegreeCard>(".education-degree-card");
      const expectedEducationDegree: EducationDegree = {
        degree: {
          name: `Degrees.ITMasterDegree`,
          description: ["MyEducation.firstThreeYearsInEpitech", "MyEducation.lastYearsInEpitech"],
          startedAt: new Date("2014-01-01"),
          obtainedAt: new Date("2019-01-01"),
        },
        school: {
          ...SCHOOLS[SchoolNames.EPITECH],
          translatedName: `Schools.${SchoolNames.EPITECH}`,
        },
      };

      expect(educationDegreeCards[2].props("educationDegree")).toStrictEqual<EducationDegree>(expectedEducationDegree);
    });

    it("should render IT certification degree card when rendered.", () => {
      const educationDegreeCards = wrapper.findAllComponents<typeof EducationDegreeCard>(".education-degree-card");
      const expectedEducationDegree: EducationDegree = {
        degree: {
          name: `Degrees.ITCertification`,
          description: ["MyEducation.internationalExperienceForManagement", "MyEducation.softManagementSkills"],
          startedAt: new Date("2017-01-01"),
          obtainedAt: new Date("2018-01-01"),
        },
        school: {
          ...SCHOOLS[SchoolNames.LAVAL],
          translatedName: `Schools.${SchoolNames.LAVAL}`,
        },
      };

      expect(educationDegreeCards[3].props("educationDegree")).toStrictEqual<EducationDegree>(expectedEducationDegree);
    });

    it("should render high school degree card when rendered.", () => {
      const educationDegreeCards = wrapper.findAllComponents<typeof EducationDegreeCard>(".education-degree-card");
      const expectedEducationDegree: EducationDegree = {
        degree: {
          name: `Degrees.highSchoolDiploma`,
          description: ["MyEducation.scientistHighSchoolDiploma"],
          startedAt: new Date("2011-01-01"),
          obtainedAt: new Date("2014-01-01"),
        },
        school: {
          ...SCHOOLS[SchoolNames.VIMEU],
          translatedName: `Schools.${SchoolNames.VIMEU}`,
        },
      };

      expect(educationDegreeCards[4].props("educationDegree")).toStrictEqual<EducationDegree>(expectedEducationDegree);
    });
  });
});