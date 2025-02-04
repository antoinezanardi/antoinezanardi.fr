import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

import GitHubButton from "@/components/shared/Buttons/GitHubButton.vue";

describe("GitHub Button Component", () => {
  let wrapper: ReturnType<typeof mount<typeof GitHubButton>>;

  async function mountGitHubButtonComponent(options: ComponentMountingOptions<typeof GitHubButton> = {}): Promise<ReturnType<typeof mount<typeof GitHubButton>>> {
    return mountSuspendedComponent(GitHubButton, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountGitHubButtonComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});