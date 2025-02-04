import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type { NuxtImg } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type { CountryFlagProps } from "~/components/shared/Images/CountryFlag/country-flag.types";
import { Countries } from "~/models/Country";

import CountryFlag from "@/components/shared/Images/CountryFlag/CountryFlag.vue";

describe("Country Flag Component", () => {
  let wrapper: ReturnType<typeof mount<typeof CountryFlag>>;
  const defaultProps: CountryFlagProps = {
    country: Countries.FRANCE,
  };

  async function mountCountryFlagComponent(options: ComponentMountingOptions<typeof CountryFlag> = {}): Promise<ReturnType<typeof mount<typeof CountryFlag>>> {
    return mountSuspendedComponent(CountryFlag, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountCountryFlagComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Flag", () => {
    it("should render France flag when country is France.", () => {
      const flag = wrapper.findComponent<typeof NuxtImg>(".country-flag");

      expect(flag.attributes("src")).toBe("/images/flags/france-flag.jpg");
    });

    it.each<{
      country: Countries;
      expectedFlag: string;
      test: string;
    }>([
      {
        country: Countries.FRANCE,
        expectedFlag: "/images/flags/france-flag.jpg",
        test: "should render France flag when country is France.",
      },
      {
        country: Countries.USA,
        expectedFlag: "/images/flags/usa-flag.jpg",
        test: "should render Germany flag when country is USA.",
      },
      {
        country: Countries.CANADA,
        expectedFlag: "/images/flags/canada-flag.jpg",
        test: "should render Canada flag when country is Canada.",
      },
    ])("$test", async({ country, expectedFlag }) => {
      wrapper = await mountCountryFlagComponent({ props: { country } });
      const flag = wrapper.findComponent<typeof NuxtImg>(".country-flag");

      expect(flag.attributes("src")).toBe(expectedFlag);
    });
  });
});