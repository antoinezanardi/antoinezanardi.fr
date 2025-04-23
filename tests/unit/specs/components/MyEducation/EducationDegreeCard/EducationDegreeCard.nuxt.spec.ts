import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type PeriodTimeline from "~/components/shared/Period/PeriodTimeline.vue";
import type { EducationDegreeCardProps } from "~/components/MyEducation/EducationDegreeCard/education-degree-card.types";
import EducationDegreeCard from "~/components/MyEducation/EducationDegreeCard/EducationDegreeCard.vue";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type CountryFlag from "~/components/shared/Images/CountryFlag/CountryFlag.vue";
import { SCHOOLS } from "~/models/school/school.constants";
import type { EducationDegree } from "~/models/education-degree/education-degree.types";

describe("Education Degree Card Component", () => {
  const defaultProps: EducationDegreeCardProps = {
    educationDegree: {
      degree: {
        name: `Degrees.ITMasterDegree`,
        description: ["MyEducation.firstThreeYearsInEpitech", "MyEducation.lastYearsInEpitech"],
        startedAt: new Date("2014-01-01T00:00:00.000Z"),
        obtainedAt: new Date("2019-01-01T00:00:00.000Z"),
      },
      school: {
        ...SCHOOLS.epitech,
        translatedName: `Schools.${SCHOOLS.epitech.name}`,
      },
    },
  };
  let wrapper: ReturnType<typeof mount<typeof EducationDegreeCard>>;

  async function mountEducationDegreeCardComponent(options: ComponentMountingOptions<typeof EducationDegreeCard> = {}):
  Promise<ReturnType<typeof mount<typeof EducationDegreeCard>>> {
    return mountSuspendedComponent(EducationDegreeCard, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountEducationDegreeCardComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Period Timeline", () => {
    it("should pass education degree started date when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".education-timeline");

      expect(periodTimeline.props("startedAt")).toBe(defaultProps.educationDegree.degree.startedAt);
    });

    it("should pass education degree obtained date when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".education-timeline");

      expect(periodTimeline.props("finishedAt")).toBe(defaultProps.educationDegree.degree.obtainedAt);
    });

    it("should pass school image when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".education-timeline");

      expect(periodTimeline.props("image")).toBe(defaultProps.educationDegree.school.image);
    });

    it("should pass school image alt as translated name when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".education-timeline");

      expect(periodTimeline.props("imageAlt")).toBe(defaultProps.educationDegree.school.translatedName);
    });

    it("should pass interrogative image alt when school translated name is not found.", async() => {
      const educationDegreeWithoutTranslatedName: EducationDegree = {
        ...defaultProps.educationDegree,
        school: {
          ...defaultProps.educationDegree.school,
          translatedName: undefined,
        },
      };
      wrapper = await mountEducationDegreeCardComponent({ props: { educationDegree: educationDegreeWithoutTranslatedName } });
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".education-timeline");

      expect(periodTimeline.props("imageAlt")).toBe("?");
    });

    it("should pass default school image when school image is not set in education degree.", async() => {
      const educationDegreeWithoutImage: EducationDegree = {
        ...defaultProps.educationDegree,
        school: {
          ...SCHOOLS.epitech,
          image: undefined,
        },
      };
      wrapper = await mountEducationDegreeCardComponent({ props: { educationDegree: educationDegreeWithoutImage } });
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".education-timeline");

      expect(periodTimeline.props("image")).toBe("college-icon.png");
    });

    it("should pass school url when rendered.", () => {
      const periodTimeline = wrapper.findComponent<typeof PeriodTimeline>(".education-timeline");

      expect(periodTimeline.props("url")).toBe(defaultProps.educationDegree.school.url);
    });
  });

  describe("Degree", () => {
    it("should render degree name when rendered.", () => {
      const degreeName = wrapper.find<HTMLDivElement>(".degree-name");

      expect(degreeName.text()).toBe("Degrees.ITMasterDegree");
    });
  });

  describe("School", () => {
    it("should render school name with city when city is set in school props.", () => {
      const schoolLabel = wrapper.find<HTMLDivElement>(".school-name");

      expect(schoolLabel.text()).toBe("Schools.epitech, Lille");
    });

    it("should render school name without city when city is not set in school props.", async() => {
      const educationDegreeWithoutCity: EducationDegree = {
        ...defaultProps.educationDegree,
        school: {
          ...defaultProps.educationDegree.school,
          city: undefined,
        },
      };
      wrapper = await mountEducationDegreeCardComponent({ props: { educationDegree: educationDegreeWithoutCity } });
      const schoolLabel = wrapper.find<HTMLDivElement>(".school-name");

      expect(schoolLabel.text()).toBe("Schools.epitech");
    });

    it("should render interrogative when school translated name is not found.", async() => {
      const educationDegreeWithoutTranslatedName: EducationDegree = {
        ...defaultProps.educationDegree,
        school: {
          ...defaultProps.educationDegree.school,
          translatedName: undefined,
          city: undefined,
        },
      };
      wrapper = await mountEducationDegreeCardComponent({ props: { educationDegree: educationDegreeWithoutTranslatedName } });
      const schoolLabel = wrapper.find<HTMLDivElement>(".school-name");

      expect(schoolLabel.text()).toBe("?");
    });

    it("should pass school country to country flag when rendered.", () => {
      const countryFlag = wrapper.findComponent<typeof CountryFlag>(".school-flag");

      expect(countryFlag.props("country")).toBe(defaultProps.educationDegree.school.country);
    });
  });

  describe("Paragraphs", () => {
    it("should render degree paragraphs when rendered.", () => {
      const degreeParagraphs = wrapper.findAll<HTMLParagraphElement>(".degree-description");

      expect(degreeParagraphs).toHaveLength(2);
      expect(degreeParagraphs[0].text()).toBe("MyEducation.firstThreeYearsInEpitech");
      expect(degreeParagraphs[1].text()).toBe("MyEducation.lastYearsInEpitech");
    });
  });
});