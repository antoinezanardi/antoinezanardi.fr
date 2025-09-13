import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type { NuxtImg } from "#components";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type { CountryFlagProps } from "~/components/shared/Images/CountryFlag/country-flag.types";
import type { Country } from "~/models/country/country.types";

import CountryFlag from "@/components/shared/Images/CountryFlag/CountryFlag.vue";

describe("Country Flag Component", () => {
  let wrapper: ReturnType<typeof mount<typeof CountryFlag>>;
  const defaultProps: CountryFlagProps = {
    country: "france",
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

      expect(flag.attributes("src")).toBe("/images/flags/france-flag.webp");
    });

    it.each<{
      country: Country;
      expectedFlag: string;
      test: string;
    }>([
      {
        country: "france",
        expectedFlag: "/images/flags/france-flag.webp",
        test: "should render France flag when country is France.",
      },
      {
        country: "usa",
        expectedFlag: "/images/flags/usa-flag.webp",
        test: "should render USA flag when country is USA.",
      },
      {
        country: "canada",
        expectedFlag: "/images/flags/canada-flag.webp",
        test: "should render Canada flag when country is Canada.",
      },
    ])("$test", async({ country, expectedFlag }) => {
      wrapper = await mountCountryFlagComponent({ props: { country } });
      const flag = wrapper.findComponent<typeof NuxtImg>(".country-flag");

      expect(flag.attributes("src")).toBe(expectedFlag);
    });
  });
});