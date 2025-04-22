import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type { NuxtImg } from "#components";
import PeriodTimeline from "~/components/shared/Period/PeriodTimeline.vue";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type { PeriodTimelineProps } from "~/components/shared/Period/period-timeline.types";
import type WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";

describe("Period Timeline Component", () => {
  const defaultProps: PeriodTimelineProps = {
    url: "url",
    image: "image",
    imageAlt: "imageAlt",
  };
  let wrapper: ReturnType<typeof mount<typeof PeriodTimeline>>;

  async function mountPeriodTimelineComponent(options: ComponentMountingOptions<typeof PeriodTimeline> = {}): Promise<ReturnType<typeof mount<typeof PeriodTimeline>>> {
    return mountSuspendedComponent(PeriodTimeline, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountPeriodTimelineComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Logo", () => {
    it("should set logo url to anchor when rendered.", () => {
      const logo = wrapper.find<HTMLAnchorElement>("#timeline-logo");

      expect(logo.attributes("href")).toBe("url");
    });

    it("should set logo image source when rendered.", () => {
      const logoImg = wrapper.findComponent<typeof NuxtImg>(".timeline-logo-image");

      expect(logoImg.props("src")).toBe("/images/logos/image");
    });
  });

  describe("Periods", () => {
    describe("Finished at date", () => {
      it("should display finished at today formatted label when finished at is not provided in props.", () => {
        const finishedAt = wrapper.find<HTMLDivElement>("#finished-at-date");

        expect(finishedAt.text()).toBe("shared.today");
      });

      it("should display finished at formatted label when finished at is provided in props.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            finishedAt: new Date("2022-01-01"),
          },
        });
        const finishedAt = wrapper.find<HTMLDivElement>("#finished-at-date");

        expect(finishedAt.text()).toBe("janvier 2022");
      });

      it("should only display finished at year when showOnlyYear is true in props.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            finishedAt: new Date("2022-01-01"),
            doesShowYearOnly: true,
          },
        });
        const finishedAt = wrapper.find<HTMLDivElement>("#finished-at-date");

        expect(finishedAt.text()).toBe("2022");
      });
    });

    describe("Arrow up icon", () => {
      it("should not display arrow up icon when period doesn't have two dates.", () => {
        const arrowUp = wrapper.findComponent<typeof WrappedFontAwesomeIcon>("#arrow-up-icon");

        expect(arrowUp.exists()).toBeFalsy();
      });

      it("should display arrow up icon when period has two dates.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
            finishedAt: new Date("2022-02-01"),
          },
        });
        const arrowUp = wrapper.findComponent<typeof WrappedFontAwesomeIcon>("#arrow-up-icon");

        expect(arrowUp.exists()).toBeTruthy();
      });
    });

    describe("Started at date", () => {
      it("should not display started at date when it is not provided in props.", () => {
        const startedAt = wrapper.find<HTMLDivElement>("#started-at-date");
        const periodDates = wrapper.find<HTMLDivElement>("#period-dates");

        expect(startedAt.exists()).toBeFalsy();
        expect((wrapper.vm as unknown as { formattedStartedAt: string }).formattedStartedAt).toBe("");
        expect(periodDates.text()).toBe("shared.today");
      });

      it("should match snapshot when started at date is provided in props.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
          },
        });

        expect(wrapper.html()).toMatchSnapshot();
      });

      it("should display started at formatted label when started at is provided in props.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
          },
        });
        const startedAt = wrapper.find<HTMLDivElement>("#started-at-date");

        expect(startedAt.text()).toBe("janvier 2022");
      });

      it("should only display started at year when showOnlyYear is true in props.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
            doesShowYearOnly: true,
          },
        });
        const startedAt = wrapper.find<HTMLDivElement>("#started-at-date");

        expect(startedAt.text()).toBe("2022");
      });
    });

    describe("Period", () => {
      it("should display period formatted label when started at and finished at are provided in props.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
            finishedAt: new Date("2024-03-01"),
          },
        });
        const period = wrapper.find<HTMLDivElement>("#period-label");

        expect(period.text()).toBe("( shared.years, {\"yearCount\":2}, 2 shared.and shared.months, {\"monthCount\":3} )");
      });

      it("should match snapshot when started at and finished at are provided in props.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
            finishedAt: new Date("2024-03-01"),
          },
        });

        expect(wrapper.html()).toMatchSnapshot();
      });

      it("should not display period formatted label when started at and finished at are not provided in props.", () => {
        const period = wrapper.find<HTMLDivElement>("#period-label");

        expect(period.exists()).toBeFalsy();
      });

      it("should not display period formatted label when started at is not provided in props.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            finishedAt: new Date("2024-03-01"),
          },
        });
        const period = wrapper.find<HTMLDivElement>("#period-label");

        expect(period.exists()).toBeFalsy();
        expect((wrapper.vm as unknown as { formattedPeriod: string }).formattedPeriod).toBe("");
      });

      it("should display only years when started at and finished at are exactly one year apart.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
            finishedAt: new Date("2022-12-31"),
          },
        });
        const period = wrapper.find<HTMLDivElement>("#period-label");

        expect(period.text()).toBe("( shared.years, {\"yearCount\":1}, 1 )");
      });

      it("should display only months when started at and finished at are exactly one month apart.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
            finishedAt: new Date("2022-01-31"),
          },
        });
        const period = wrapper.find<HTMLDivElement>("#period-label");

        expect(period.text()).toBe("( shared.months, {\"monthCount\":1} )");
      });

      it("should display years only when does show year only is true.", async() => {
        wrapper = await mountPeriodTimelineComponent({
          props: {
            ...defaultProps,
            startedAt: new Date("2022-01-01"),
            finishedAt: new Date("2024-03-01"),
            doesShowYearOnly: true,
          },
        });
        const period = wrapper.find<HTMLDivElement>("#period-label");

        expect(period.text()).toBe("( shared.years, {\"yearCount\":2}, 2 )");
      });
    });
  });
});