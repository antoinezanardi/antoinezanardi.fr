import { mountSuspended } from "@nuxt/test-utils/runtime";
import type { mount } from "@vue/test-utils";
import type { ComponentMountingOptions } from "@vue/test-utils/dist/mount";
import { clone } from "radash";

function getDefaultMountingOptions<T>(): ComponentMountingOptions<T> {
  return {
    shallow: true,
  };
}

function computeComponentMountingOptions<T>(options: ComponentMountingOptions<T>): ComponentMountingOptions<T> {
  const clonedOptions = clone(options);
  const plugins = clonedOptions.global?.plugins ?? [];
  if (clonedOptions.global?.plugins) {
    clonedOptions.global.plugins = undefined;
  }
  const defaultMountingOptions = getDefaultMountingOptions<T>();
  const mergedOptions = {
    ...defaultMountingOptions,
    ...options,
  } as ComponentMountingOptions<T>;
  mergedOptions.props = options.props;
  if (mergedOptions.global) {
    mergedOptions.global.plugins = plugins;
  }
  return mergedOptions;
}

async function mountSuspendedComponent<T>(component: T, options: ComponentMountingOptions<T> = {}): Promise<ReturnType<typeof mount<T>>> {
  const mergedOptions = computeComponentMountingOptions(options);

  return mountSuspended(component, mergedOptions);
}

export {
  mountSuspendedComponent,
};