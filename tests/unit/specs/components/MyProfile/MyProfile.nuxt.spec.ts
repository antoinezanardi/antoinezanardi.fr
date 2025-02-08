import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { MyProfile } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

describe("My Profile Component", () => {
  let wrapper: ReturnType<typeof mount<typeof MyProfile>>;

  async function mountMyProfileComponent(options: ComponentMountingOptions<typeof MyProfile> = {}): Promise<ReturnType<typeof mount<typeof MyProfile>>> {
    return mountSuspendedComponent(MyProfile, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountMyProfileComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});