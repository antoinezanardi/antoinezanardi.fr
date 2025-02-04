import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type { WrappedFontAwesomeIconProps } from "~/components/shared/Icons/WrappedFontAwesomeIcon/wrapped-font-awesome-icon.types";
import WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";

describe("Wrapped Font Awesome Icon Component", () => {
  const defaultProps: WrappedFontAwesomeIconProps = {
    icon: "icon",
  };
  let wrapper: ReturnType<typeof mount<typeof WrappedFontAwesomeIcon>>;

  async function mountWrappedFontAwesomeIconComponent(options: ComponentMountingOptions<typeof WrappedFontAwesomeIcon> = {}):
  Promise<ReturnType<typeof mount<typeof WrappedFontAwesomeIcon>>> {
    return mountSuspendedComponent(WrappedFontAwesomeIcon, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountWrappedFontAwesomeIconComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Icon", () => {
    it("should pass icon when rendered.", () => {
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".font-awesome-icon");

      expect(icon.props("icon")).toBe("icon");
    });

    it("should pass undefined size when it is not provided in props.", () => {
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".font-awesome-icon");

      expect(icon.attributes("size")).toBeUndefined();
    });

    it("should pass provided size when it is provided in props.", async() => {
      wrapper = await mountWrappedFontAwesomeIconComponent({
        props: {
          ...defaultProps,
          size: "2x",
        },
      });
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".font-awesome-icon");

      expect(icon.props("size")).toBe("2x");
    });

    it("should pass empty class when it is not provided in props.", () => {
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".font-awesome-icon");

      expect(icon.attributes("class")).toBe("font-awesome-icon");
    });

    it("should pass provided class when it is provided in props.", async() => {
      wrapper = await mountWrappedFontAwesomeIconComponent({
        props: {
          ...defaultProps,
          classes: "test-class",
        },
      });
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".font-awesome-icon");

      expect(icon.attributes("class")).toBe("font-awesome-icon test-class");
    });

    it("should set icon color to default when it is not provided in props.", () => {
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".font-awesome-icon");

      expect(icon.attributes("style")).toBe("color: #000000;");
    });

    it("should set icon color to provided color when it is provided in props.", async() => {
      wrapper = await mountWrappedFontAwesomeIconComponent({
        props: {
          ...defaultProps,
          iconColor: "#FFFFFF",
        },
      });
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".font-awesome-icon");

      expect(icon.attributes("style")).toBe("color: #FFFFFF;");
    });
  });
});