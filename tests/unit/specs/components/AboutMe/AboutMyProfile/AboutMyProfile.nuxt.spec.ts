import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

import AboutMyProfile from "@/components/AboutMe/AboutMyProfile/AboutMyProfile.vue";

describe("AboutMyProfile Component", () => {
  let wrapper: ReturnType<typeof mount<typeof AboutMyProfile>>;

  async function mountAboutMyProfileComponent(options: ComponentMountingOptions<typeof AboutMyProfile> = {}): Promise<ReturnType<typeof mount<typeof AboutMyProfile>>> {
    return mountSuspendedComponent(AboutMyProfile, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountAboutMyProfileComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});