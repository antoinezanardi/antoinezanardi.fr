import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { NavBar } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

describe("NavBar Component", () => {
  let wrapper: ReturnType<typeof mount<typeof NavBar>>;

  async function mountNavBarComponent(options: ComponentMountingOptions<typeof NavBar> = {}): Promise<ReturnType<typeof mount<typeof NavBar>>> {
    return mountSuspendedComponent(NavBar, options);
  }

  beforeEach(async() => {
    wrapper = await mountNavBarComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Navigation", () => {
    it("should not have show class when rendered.", () => {
      const nav = wrapper.find<HTMLDivElement>("#navigation");

      expect(nav.classes()).not.toContain("show");
    });

    it("should toggle show class when clicked on a navbar toggler.", async() => {
      const nav = wrapper.find<HTMLDivElement>("#navigation");
      const toggler = wrapper.find<HTMLButtonElement>(".navbar-toggler");
      await toggler.trigger("click");

      expect(nav.classes()).toContain("show");
    });

    it("should remove show class when clicked on a navbar toggler after toggling.", async() => {
      const nav = wrapper.find<HTMLDivElement>("#navigation");
      const toggler = wrapper.find<HTMLButtonElement>(".navbar-toggler");
      await toggler.trigger("click");
      await toggler.trigger("click");

      expect(nav.classes()).not.toContain("show");
    });

    it("should remove show class when clicked on a nav link after toggling.", async() => {
      const nav = wrapper.find<HTMLDivElement>("#navigation");
      const toggler = wrapper.find<HTMLButtonElement>(".navbar-toggler");
      await toggler.trigger("click");
      const navLink = wrapper.find<HTMLAnchorElement>(".nav-link");
      await navLink.trigger("click");

      expect(nav.classes()).not.toContain("show");
    });
  });
});