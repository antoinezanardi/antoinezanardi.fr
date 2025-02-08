import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { AboutMe } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

describe("About Me Component", () => {
  let wrapper: ReturnType<typeof mount<typeof AboutMe>>;

  async function mountAboutMeComponent(options: ComponentMountingOptions<typeof AboutMe> = {}): Promise<ReturnType<typeof mount<typeof AboutMe>>> {
    return mountSuspendedComponent(AboutMe, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountAboutMeComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});