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
});