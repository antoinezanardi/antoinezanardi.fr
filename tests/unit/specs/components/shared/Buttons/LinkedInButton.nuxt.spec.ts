import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

import LinkedInButton from "@/components/shared/Buttons/LinkedInButton.vue";

describe("LinkedIn Button Component", () => {
  let wrapper: ReturnType<typeof mount<typeof LinkedInButton>>;

  async function mountLinkedInButtonComponent(options: ComponentMountingOptions<typeof LinkedInButton> = {}):
  Promise<ReturnType<typeof mount<typeof LinkedInButton>>> {
    return mountSuspendedComponent(LinkedInButton, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountLinkedInButtonComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});