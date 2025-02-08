import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";
import { mockNuxtImport } from "@nuxt/test-utils/runtime";

import { TEST_NUXT_RUNTIME_CONFIG } from "@tests/unit/utils/constants/nuxt-test.constants";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

import AboutMyPersonalInfo from "@/components/AboutMe/AboutMyPersonalInfo/AboutMyPersonalInfo.vue";

const { useRuntimeConfig: mockedUseRuntimeConfig } = vi.hoisted(() => ({
  useRuntimeConfig: vi.fn(() => TEST_NUXT_RUNTIME_CONFIG),
}));

describe("AboutMyPersonalInfo Component", () => {
  let wrapper: ReturnType<typeof mount<typeof AboutMyPersonalInfo>>;

  async function mountAboutMyPersonalInfoComponent(options: ComponentMountingOptions<typeof AboutMyPersonalInfo> = {}):
  Promise<ReturnType<typeof mount<typeof AboutMyPersonalInfo>>> {
    return mountSuspendedComponent(AboutMyPersonalInfo, { ...options });
  }

  beforeAll(() => {
    mockNuxtImport("useRuntimeConfig", () => mockedUseRuntimeConfig);
  });

  beforeEach(async() => {
    mockedUseRuntimeConfig.mockImplementation(() => TEST_NUXT_RUNTIME_CONFIG);
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

    it("should render ? when phone number in runtime config doesn't have a correct format.", async() => {
      mockedUseRuntimeConfig.mockImplementation(() => ({
        public: {
          ...TEST_NUXT_RUNTIME_CONFIG.public,
          phoneNumber: "o",
        },
      }));
      wrapper = await mountAboutMyPersonalInfoComponent();
      const phoneNumber = wrapper.find<HTMLDivElement>("#phone-number");

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