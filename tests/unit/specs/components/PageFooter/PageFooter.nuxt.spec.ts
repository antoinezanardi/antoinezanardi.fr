import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { PageFooter } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

describe("Page Footer Component", () => {
  let wrapper: ReturnType<typeof mount<typeof PageFooter>>;

  async function mountPageFooterComponent(options: ComponentMountingOptions<typeof PageFooter> = {}): Promise<ReturnType<typeof mount<typeof PageFooter>>> {
    return mountSuspendedComponent(PageFooter, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountPageFooterComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Text", () => {
    it("should display Antoine ZANARDI and full year when rendered.", () => {
      const title = wrapper.find<HTMLDivElement>(".title");

      expect(title.text()).toBe("Antoine ZANARDI - 2022");
    });
  });
});