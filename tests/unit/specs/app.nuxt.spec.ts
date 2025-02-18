import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import App from "@/App.vue";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

describe("App Component", () => {
  let wrapper: ReturnType<typeof mount<typeof App>>;

  async function mountAppComponent(options: ComponentMountingOptions<typeof App> = {}): Promise<ReturnType<typeof mount<typeof App>>> {
    return mountSuspendedComponent(App, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountAppComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should use head for sso purposes when rendered.", () => {
    const expectedUseHeadAttribute = {
      title: "Antoine ZANARDI",
      meta: [{ name: "description", content: "App.meta.description" }],
      htmlAttrs: { lang: "fr" },
    };

    expect(useHead).toHaveBeenCalledExactlyOnceWith(expectedUseHeadAttribute);
  });
});