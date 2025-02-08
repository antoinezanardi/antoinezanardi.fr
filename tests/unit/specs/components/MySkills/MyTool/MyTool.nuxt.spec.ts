import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

import { mountSuspendedComponent } from "@tests/unit/utils/helpers/mount.helpers";
import type { MyToolProps } from "~/components/MySkills/MyTool/my-tool.types";
import MyTool from "~/components/MySkills/MyTool/MyTool.vue";
import type WrappedFontAwesomeIcon from "~/components/shared/Icons/WrappedFontAwesomeIcon/WrappedFontAwesomeIcon.vue";

describe("My Tool Component", () => {
  const defaultProps: MyToolProps = {
    tool: {
      color: "#3498db",
      description: "MySkills.tools.vuejs",
      iconClasses: "fab fa-vuejs",
    },
  };
  let wrapper: ReturnType<typeof mount<typeof MyTool>>;

  async function mountMyToolComponent(options: ComponentMountingOptions<typeof MyTool> = {}): Promise<ReturnType<typeof mount<typeof MyTool>>> {
    return mountSuspendedComponent(MyTool, {
      props: defaultProps,
      ...options,
    });
  }

  beforeEach(async() => {
    wrapper = await mountMyToolComponent();
  });

  it("should match snapshot when rendered.", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Tool Icon", () => {
    it("should pass icon classes when rendered.", () => {
      const toolIcon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".tool");

      expect(toolIcon.attributes("icon")).toBe(defaultProps.tool.iconClasses);
    });

    it("should pass tool color when rendered.", () => {
      const toolIcon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".tool");

      expect(toolIcon.attributes("iconcolor")).toBe(defaultProps.tool.color);
    });

    it("should pass tool description when rendered.", () => {
      const toolIcon = wrapper.findComponent<typeof WrappedFontAwesomeIcon>(".tool");

      expect(toolIcon.attributes("title")).toBe(defaultProps.tool.description);
    });
  });
});