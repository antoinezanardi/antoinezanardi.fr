import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import type WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";
import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type { SectionTitleProps } from "~/components/shared/Layouts/SectionTitle/section-title.types";

import SectionTitle from "@/components/shared/Layouts/SectionTitle/SectionTitle.vue";

describe("Section Title Component", () => {
  const defaultProps: SectionTitleProps = {
    icon: "icon",
    title: "title",
  };
  let wrapper: ReturnType<typeof mount<typeof SectionTitle>>;

  async function mountSectionTitleComponent(options: ComponentMountingOptions<typeof SectionTitle> = {}):
  Promise<ReturnType<typeof mount<typeof SectionTitle>>> {
    return mountSuspendedComponent(SectionTitle, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountSectionTitleComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Icon", () => {
    it("should set icon source when rendered.", () => {
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>("#section-title-icon");

      expect(icon.props("icon")).toBe("icon");
    });

    it("should set icon color to default when it is not provided in props.", () => {
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>("#section-title-icon");

      expect(icon.attributes("iconcolor")).toBe("#000000");
    });

    it("should set icon color to provided color when it is provided in props.", async() => {
      wrapper = await mountSectionTitleComponent({
        props: {
          ...defaultProps,
          iconColor: "#FFFFFF",
        },
      });
      const icon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>("#section-title-icon");

      expect(icon.attributes("iconcolor")).toBe("#FFFFFF");
    });
  });

  describe("Title", () => {
    it("should set title when rendered.", () => {
      const title = wrapper.find<HTMLSpanElement>(".section-title-text");

      expect(title.text()).toBe("title");
    });
  });
});