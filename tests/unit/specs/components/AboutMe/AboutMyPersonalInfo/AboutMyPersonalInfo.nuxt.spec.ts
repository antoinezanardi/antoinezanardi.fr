import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { TEST_NUXT_RUNTIME_CONFIG } from "@tests/unit/utils/constants/nuxt-test.constants";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

import AboutMyPersonalInfo from "@/components/AboutMe/AboutMyPersonalInfo/AboutMyPersonalInfo.vue";

describe("AboutMyPersonalInfo Component", () => {
  let wrapper: ReturnType<typeof mount<typeof AboutMyPersonalInfo>>;

  mockNuxtImport("useRuntimeConfig", () => () => TEST_NUXT_RUNTIME_CONFIG);

  async function mountAboutMyPersonalInfoComponent(options: ComponentMountingOptions<typeof AboutMyPersonalInfo> = {}):
  Promise<ReturnType<typeof mount<typeof AboutMyPersonalInfo>>> {
    return mountSuspendedComponent(AboutMyPersonalInfo, { ...options });
  }

  beforeEach(async() => {
    wrapper = await mountAboutMyPersonalInfoComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Age", () => {
    it("should render age when rendered.", () => {
      const age = wrapper.find<HTMLDivElement>("#age");

      expect(age.text()).toBe("25 ans");
    });
  });

  describe("Phone Number", () => {
    it("should render formatted phone number when rendered.", () => {
      const phoneNumber = wrapper.find<HTMLDivElement>("#phone-number");

      expect(phoneNumber.text()).toBe("12 34 56 78 90");
    });

    it.skip("should render ? when phone number in runtime config doesn't have a correct format.", async() => {
      wrapper = await mountAboutMyPersonalInfoComponent();
      const phoneNumber = wrapper.find<HTMLDivElement>("#phone-number");
      // mockNuxtImport("useRuntimeConfig", () => () => ({
      //   public: {
      //     phoneNumber: "mdr",
      //   },
      // }));

      expect(phoneNumber.text()).toBe("?");
    });
  });

  describe("Address", () => {
    it("should render address when rendered.", () => {
      const address = wrapper.find<HTMLDivElement>("#address");

      expect(address.text()).toBe("1234 Elm Street");
    });
  });
});